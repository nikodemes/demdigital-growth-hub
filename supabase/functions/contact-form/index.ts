import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.53.0";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  type: 'contact' | 'seo-audit';
  fullName: string;
  businessName?: string;
  email: string;
  phone?: string;
  websiteUrl?: string;
  message?: string;
  service?: string;
  budget?: string;
  location?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
    
    const formData: ContactFormRequest = await req.json();

    console.log("Processing contact form submission:", { 
      type: formData.type, 
      email: formData.email,
      name: formData.fullName
    });

    // Save to database
    const { data, error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        type: formData.type,
        full_name: formData.fullName,
        business_name: formData.businessName || null,
        email: formData.email,
        phone: formData.phone || null,
        website_url: formData.websiteUrl || null,
        message: formData.message || null
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    console.log("Saved to database successfully:", data.id);

    // Send confirmation email to customer
    const emailSubject = formData.type === 'contact' 
      ? "Thank you for contacting DEM Digital!"
      : "Your Free SEO Audit Request - DEM Digital";

    const emailContent = formData.type === 'contact' 
      ? generateContactConfirmationEmail(formData)
      : generateAuditConfirmationEmail(formData);

    const emailResponse = await resend.emails.send({
      from: "DEM Digital <hello@demdigital.co.uk>",
      to: [formData.email],
      subject: emailSubject,
      html: emailContent,
    });

    if (emailResponse.error) {
      console.error("Email error:", emailResponse.error);
      // Don't fail the request if email fails, as form is already saved
    } else {
      console.log("Confirmation email sent successfully:", emailResponse.data?.id);
    }

    // Send notification email to business
    const notificationEmail = await resend.emails.send({
      from: "DEM Digital Forms <hello@demdigital.co.uk>",
      to: ["hello@demdigital.co.uk"],
      subject: `New ${formData.type === 'contact' ? 'Contact Form' : 'SEO Audit Request'} - ${formData.fullName}`,
      html: generateNotificationEmail(formData),
    });

    if (notificationEmail.error) {
      console.error("Notification email error:", notificationEmail.error);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        id: data.id,
        message: "Form submitted successfully! Check your email for confirmation."
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("Error in contact-form function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "An error occurred while processing your request"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

function generateContactConfirmationEmail(formData: ContactFormRequest): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .highlight { background: #e8f4f8; padding: 15px; border-radius: 5px; margin: 15px 0; }
        .button { display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You, ${formData.fullName}!</h1>
          <p>We've received your contact form submission</p>
        </div>
        <div class="content">
          <p>Hi ${formData.fullName},</p>
          
          <p>Thank you for reaching out to DEM Digital! We're excited to help your ${formData.businessName || 'business'} succeed online in Central Scotland.</p>
          
          <div class="highlight">
            <h3>What happens next?</h3>
            <ul>
              <li>✅ We'll review your information within 2 hours</li>
              <li>📞 One of our digital marketing experts will contact you</li>
              <li>🎯 We'll discuss your goals and create a custom strategy</li>
              <li>📊 You'll receive a free marketing audit worth £500</li>
            </ul>
          </div>
          
          <p><strong>Your submission details:</strong></p>
          <ul>
            <li><strong>Name:</strong> ${formData.fullName}</li>
            ${formData.businessName ? `<li><strong>Business:</strong> ${formData.businessName}</li>` : ''}
            <li><strong>Email:</strong> ${formData.email}</li>
            ${formData.phone ? `<li><strong>Phone:</strong> ${formData.phone}</li>` : ''}
            ${formData.websiteUrl ? `<li><strong>Website:</strong> ${formData.websiteUrl}</li>` : ''}
          </ul>
          
          <p><strong>Need immediate help?</strong></p>
          <p>Call us directly: <a href="tel:+447365343449">+44 7365 343449</a></p>
          
          <p>Best regards,<br>
          The DEM Digital Team<br>
          Central Scotland's Digital Marketing Experts</p>
          
          <hr style="margin: 30px 0;">
          <p style="font-size: 12px; color: #666;">
            DEM Digital | 6 Panmuir Crescent, ML15UR | hello@demdigital.co.uk<br>
            Serving Motherwell, Glasgow, and all of Central Scotland
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateAuditConfirmationEmail(formData: ContactFormRequest): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .highlight { background: #e8f4f8; padding: 15px; border-radius: 5px; margin: 15px 0; }
        .audit-box { background: white; border: 2px solid #667eea; padding: 20px; border-radius: 10px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Your Free SEO Audit is Coming!</h1>
          <p>Hello ${formData.fullName}, we're preparing your custom audit</p>
        </div>
        <div class="content">
          <p>Thank you for requesting a free SEO audit from DEM Digital!</p>
          
          <div class="audit-box">
            <h3>🎯 Your Free SEO Audit Includes:</h3>
            <ul>
              <li>✅ Complete website SEO analysis</li>
              <li>✅ Local SEO review for Central Scotland</li>
              <li>✅ Competitor analysis</li>
              <li>✅ Custom improvement recommendations</li>
              <li>✅ Digital marketing strategy (worth £500)</li>
            </ul>
          </div>
          
          <div class="highlight">
            <h3>What happens next?</h3>
            <ol>
              <li>Our SEO experts will analyze your website</li>
              <li>We'll research your Central Scotland competitors</li>
              <li>You'll receive a detailed audit report within 24-48 hours</li>
              <li>We'll schedule a free consultation to discuss results</li>
            </ol>
          </div>
          
          <p><strong>Your audit request details:</strong></p>
          <ul>
            <li><strong>Name:</strong> ${formData.fullName}</li>
            ${formData.businessName ? `<li><strong>Business:</strong> ${formData.businessName}</li>` : ''}
            <li><strong>Email:</strong> ${formData.email}</li>
            ${formData.phone ? `<li><strong>Phone:</strong> ${formData.phone}</li>` : ''}
            ${formData.websiteUrl ? `<li><strong>Website:</strong> ${formData.websiteUrl}</li>` : ''}
          </ul>
          
          <p><strong>Questions? Call us:</strong> <a href="tel:+447365343449">+44 7365 343449</a></p>
          
          <p>Best regards,<br>
          The DEM Digital SEO Team<br>
          Central Scotland's SEO Specialists</p>
          
          <hr style="margin: 30px 0;">
          <p style="font-size: 12px; color: #666;">
            DEM Digital | 6 Panmuir Crescent, ML15UR | hello@demdigital.co.uk<br>
            Serving Motherwell, Glasgow, and all of Central Scotland
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateNotificationEmail(formData: ContactFormRequest): string {
  return `
    <h2>New ${formData.type === 'contact' ? 'Contact Form' : 'SEO Audit Request'}</h2>
    
    <p><strong>Name:</strong> ${formData.fullName}</p>
    ${formData.businessName ? `<p><strong>Business:</strong> ${formData.businessName}</p>` : ''}
    <p><strong>Email:</strong> ${formData.email}</p>
    ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
    ${formData.websiteUrl ? `<p><strong>Website:</strong> ${formData.websiteUrl}</p>` : ''}
    ${formData.message ? `<p><strong>Message:</strong><br>${formData.message}</p>` : ''}
    
    <p><strong>Submitted:</strong> ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</p>
  `;
}

serve(handler);
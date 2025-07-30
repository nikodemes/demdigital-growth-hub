import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  type: 'contact' | 'seo-audit';
  title: string;
  description: string;
  buttonText: string;
}

interface FormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  websiteUrl: string;
  message: string;
  service: string;
  budget: string;
  location: string;
}

export const ContactForm = ({ type, title, description, buttonText }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    websiteUrl: '',
    message: '',
    service: '',
    budget: '',
    location: ''
  });
  const { toast } = useToast();

  const services = [
    "SEO Optimization",
    "Google Ads Management", 
    "Meta Ads (Facebook/Instagram)",
    "Website Design & Development",
    "Complete Digital Marketing",
    "Free Marketing Audit",
    "Other"
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email) {
      toast({
        title: "Missing required fields",
        description: "Please fill in your name and email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('contact-form', {
        body: {
          type,
          fullName: formData.fullName,
          businessName: formData.businessName || undefined,
          email: formData.email,
          phone: formData.phone || undefined,
          websiteUrl: formData.websiteUrl || undefined,
          message: formData.message || undefined,
          service: formData.service || undefined,
          budget: formData.budget || undefined,
          location: formData.location || undefined
        }
      });

      if (error) {
        throw new Error(error.message || 'Failed to submit form');
      }

      toast({
        title: "Form submitted successfully!",
        description: data.message || "We'll be in touch soon. Check your email for confirmation.",
      });

      // Reset form
      setFormData({
        fullName: '',
        businessName: '',
        email: '',
        phone: '',
        websiteUrl: '',
        message: '',
        service: '',
        budget: '',
        location: ''
      });

    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission failed",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-card">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-foreground mb-4">
          {title}
        </h3>
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Full Name *
            </label>
            <Input 
              placeholder="John Smith" 
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Business Name
            </label>
            <Input 
              placeholder="Your Company Ltd" 
              value={formData.businessName}
              onChange={(e) => handleInputChange('businessName', e.target.value)}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email Address *
            </label>
            <Input 
              type="email" 
              placeholder="john@company.co.uk" 
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Phone Number {type === 'contact' ? '*' : ''}
            </label>
            <Input 
              type="tel" 
              placeholder="+44 7xxx xxx xxx" 
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required={type === 'contact'}
            />
          </div>
        </div>

        {type === 'contact' && (
          <>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Location
                </label>
                <Input 
                  placeholder="Motherwell, Glasgow, etc." 
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Service Interested In
                </label>
                <Select onValueChange={(value) => handleInputChange('service', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service, index) => (
                      <SelectItem key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        )}

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            {type === 'contact' ? 'Current Website (if applicable)' : 'Website URL'}
          </label>
          <Input 
            placeholder="https://yourwebsite.co.uk" 
            value={formData.websiteUrl}
            onChange={(e) => handleInputChange('websiteUrl', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            {type === 'contact' 
              ? 'Tell us about your business goals' 
              : 'Tell us about your business and goals...'
            }
          </label>
          <Textarea 
            placeholder={
              type === 'contact' 
                ? "What are your main business goals? What challenges are you facing with digital marketing? Any specific questions?"
                : "Tell us about your business and goals..."
            }
            rows={4}
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
          />
        </div>

        {type === 'contact' && (
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Monthly Marketing Budget (optional)
            </label>
            <Select onValueChange={(value) => handleInputChange('budget', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-500">Under £500/month</SelectItem>
                <SelectItem value="500-1000">£500 - £1,000/month</SelectItem>
                <SelectItem value="1000-2500">£1,000 - £2,500/month</SelectItem>
                <SelectItem value="2500-5000">£2,500 - £5,000/month</SelectItem>
                <SelectItem value="5000-plus">£5,000+/month</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        <Button 
          type="submit"
          variant="cta" 
          className="w-full" 
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : buttonText}
        </Button>

        <p className="text-sm text-muted-foreground text-center">
          We'll respond within 2 hours during business hours. 
          All consultations are completely free with no obligation.
        </p>
      </form>
    </div>
  );
};
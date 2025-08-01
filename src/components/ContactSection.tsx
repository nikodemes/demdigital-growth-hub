import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
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
          type: 'contact',
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          message: formData.message || undefined,
          service: formData.service || undefined
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
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
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
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ready to Start Growing 
                <span className="text-primary"> Your Business?</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get in touch today for a free consultation. We'll discuss your goals 
                and show you exactly how we can help your business succeed online.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-muted-foreground">+44 7365 343449</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">hello@demdigital.co.uk</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Service Areas</p>
                  <p className="text-muted-foreground">Motherwell, Glasgow & Central Scotland</p>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Get Your Free Marketing Consultation
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <select 
                  className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="">Select Service</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="google-ads">Google Ads Management</option>
                  <option value="meta-ads">Meta Ads (Facebook/Instagram)</option>
                  <option value="web-design">Website Design & Development</option>
                  <option value="full-package">Complete Digital Marketing</option>
                </select>
              </div>
              
              <Textarea
                placeholder="Tell us about your business and marketing goals..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
              />
              
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get My Free Consultation"}
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground text-center mt-4">
              We'll get back to you within 24 hours with a custom strategy proposal.
            </p>
          </div>
        </div>
        
        {/* Internal Links Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Learn More About Our Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/services" className="group">
              <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-elegant transition-smooth">
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                  Digital Marketing Services
                </h4>
                <p className="text-sm text-muted-foreground">
                  SEO, Google Ads, Web Design & More
                </p>
                <ArrowRight className="w-4 h-4 mx-auto mt-2 group-hover:translate-x-1 transition-smooth" />
              </div>
            </Link>
            <Link to="/seo-scanner" className="group">
              <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-elegant transition-smooth">
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                  Free SEO Scanner
                </h4>
                <p className="text-sm text-muted-foreground">
                  Instant website analysis tool
                </p>
                <ArrowRight className="w-4 h-4 mx-auto mt-2 group-hover:translate-x-1 transition-smooth" />
              </div>
            </Link>
            <Link to="/case-studies" className="group">
              <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-elegant transition-smooth">
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                  Case Studies
                </h4>
                <p className="text-sm text-muted-foreground">
                  Real results for local businesses
                </p>
                <ArrowRight className="w-4 h-4 mx-auto mt-2 group-hover:translate-x-1 transition-smooth" />
              </div>
            </Link>
            <Link to="/blog" className="group">
              <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-elegant transition-smooth">
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                  Marketing Blog
                </h4>
                <p className="text-sm text-muted-foreground">
                  Tips, guides & industry insights
                </p>
                <ArrowRight className="w-4 h-4 mx-auto mt-2 group-hover:translate-x-1 transition-smooth" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
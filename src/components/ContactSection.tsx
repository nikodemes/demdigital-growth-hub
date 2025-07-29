import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // TODO: Integrate with actual form handler
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
              >
                Get My Free Consultation
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground text-center mt-4">
              We'll get back to you within 24 hours with a custom strategy proposal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
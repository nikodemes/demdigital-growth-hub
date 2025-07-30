import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import heroImage from "@/assets/hero-scottish-highlands.jpg";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.company) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all fields.",
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
          businessName: formData.company,
          email: formData.email,
          message: "Free marketing strategy request from hero form"
        }
      });

      if (error) {
        throw new Error(error.message || 'Failed to submit form');
      }

      toast({
        title: "Strategy request submitted!",
        description: data.message || "We'll be in touch soon. Check your email for confirmation.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: ""
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img 
          src={heroImage} 
          alt="Digital Marketing Agency Hero" 
          className="w-full h-full object-cover mix-blend-overlay opacity-20"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Ready to Grow Your Business 
                <span className="text-accent"> Online?</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Get a <strong>FREE custom marketing strategy</strong> for your business in 
                Motherwell, Glasgow, or anywhere in Central Scotland.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>SEO Optimization</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Google Ads Management</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Meta Ads Campaigns</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Website Development</span>
              </div>
            </div>
          </div>

          {/* Right Content - Lead Form */}
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-elegant">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Get Your Free Marketing Strategy
              </h2>
              <p className="text-muted-foreground">
                No obligation. Tailored specifically for your business.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="h-12"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Business Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="h-12"
                  required
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="h-12"
                  required
                />
              </div>
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full h-14 text-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Send Me My Free Strategy"}
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground text-center mt-4">
              We respect your privacy. No spam, just valuable insights.
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual appeal */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-primary-light/30 rounded-full blur-2xl animate-pulse"></div>
    </section>
  );
};

export default HeroSection;
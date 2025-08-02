import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: ""
  });
  const [currentWord, setCurrentWord] = useState(0);
  const { toast } = useToast();

  const words = ["businesses", "startups", "companies", "agencies"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Marketing Growth Animation */}
      <div className="marketing-animation">
        <div className="marketing-icons"></div>
        <div className="marketing-icons"></div>
        <div className="marketing-icons"></div>
        <div className="marketing-icons"></div>
        <div className="marketing-icons"></div>
        <div className="marketing-icons"></div>
        <div className="marketing-icons"></div>
        <div className="marketing-icons"></div>
        <div className="marketing-icons"></div>
        <div className="growth-stats">+250% Social Media</div>
        <div className="growth-stats">+180% Website Traffic</div>
        <div className="growth-stats">+320% More Calls</div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-animate">
                Digital marketing agency for{" "}
                <span className="relative inline-block">
                  <span 
                    key={currentWord}
                    className="text-accent word-cycle"
                  >
                    {words[currentWord]}.
                  </span>
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-animate text-animate-delay-1 max-w-2xl">
                Get a FREE custom marketing strategy for your business in Motherwell, Glasgow, or anywhere in Central Scotland.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 text-animate text-animate-delay-2">
              {[
                "SEO Optimization",
                "Google Ads",
                "Social Media",
                "Web Development"
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-2 bg-secondary rounded-full px-5 py-2 border border-border/50">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span className="text-sm font-medium">{service}</span>
                </div>
              ))}
            </div>

            <div className="text-animate text-animate-delay-3">
              <p className="text-sm text-muted-foreground mb-4">Trusted by 500+ companies</p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-accent rounded-sm"></div>
                  ))}
                  <span className="ml-2 text-sm font-medium">5.0 Reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Lead Form */}
          <div className="bg-card/80 backdrop-blur-xl rounded-3xl p-8 shadow-elegant border border-border/20 text-animate text-animate-delay-2">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Get Your Free Marketing Strategy
              </h2>
              <p className="text-muted-foreground">
                No obligation. Tailored specifically for your business.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  type="text"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="h-14 text-base bg-background/50 border-border/30 focus:border-accent rounded-2xl"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Business Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="h-14 text-base bg-background/50 border-border/30 focus:border-accent rounded-2xl"
                  required
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="h-14 text-base bg-background/50 border-border/30 focus:border-accent rounded-2xl"
                  required
                />
              </div>
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full h-14 text-base rounded-2xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Book a strategy call →"}
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground text-center mt-6">
              We respect your privacy. No spam, just valuable insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
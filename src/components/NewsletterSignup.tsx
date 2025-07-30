import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface NewsletterSignupProps {
  source: string;
  placeholder?: string;
  buttonText?: string;
  size?: "sm" | "default" | "lg";
  className?: string;
}

export const NewsletterSignup = ({ 
  source, 
  placeholder = "Your email", 
  buttonText = "Subscribe",
  size = "default",
  className = ""
}: NewsletterSignupProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('newsletter_signups')
        .insert({ 
          email: email.toLowerCase().trim(),
          source: source
        });

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already subscribed!",
            description: "You're already on our newsletter list.",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Successfully subscribed!",
          description: "Thanks for subscribing to our newsletter.",
        });
        setEmail("");
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
      <Input 
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`flex-1 ${source === 'footer' ? 'bg-white/10 border-white/20 text-white placeholder:text-white/60' : ''}`}
        required
      />
      <Button 
        type="submit"
        variant="cta" 
        size={size}
        disabled={!email || isSubmitting}
      >
        {isSubmitting ? "..." : buttonText}
      </Button>
    </form>
  );
};
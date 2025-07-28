import { CheckCircle, Search, TrendingUp, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FreeSEOAudit = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Free SEO Audit
            <span className="block text-accent">Central Scotland</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto">
            Get a comprehensive SEO audit and custom digital marketing strategy worth £500 - completely free.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-subtle rounded-2xl p-8 shadow-card">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Request Your Free SEO Audit
            </h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Full Name" />
                <Input placeholder="Business Name" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input type="email" placeholder="Email Address" />
                <Input placeholder="Phone Number" />
              </div>
              <Input placeholder="Website URL" />
              <Textarea placeholder="Tell us about your business and goals..." rows={4} />
              
              <Button variant="cta" className="w-full" size="lg">
                Get My Free SEO Audit
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeSEOAudit;
import { CheckCircle, Search, TrendingUp, Target } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
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
          <ContactForm 
            type="seo-audit"
            title="Request Your Free SEO Audit"
            description="Get a comprehensive SEO audit and custom digital marketing strategy worth £500 - completely free."
            buttonText="Get My Free SEO Audit"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeSEOAudit;
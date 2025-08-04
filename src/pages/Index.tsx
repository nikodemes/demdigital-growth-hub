import { useEffect } from "react";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContentSection from "@/components/ContentSection";
import ReviewsSection from "@/components/ReviewsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // SEO and Performance optimizations
    document.title = "Digital Marketing Agency Motherwell | DEM Digital - SEO, PPC & Web Design";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Leading digital marketing agency in Motherwell, Glasgow & Central Scotland. Expert SEO optimization, Google Ads management, Meta advertising & professional web design. Free consultation available. ☎️ +44 7365 343449');
    }

    // Add page view tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Homepage',
        page_location: window.location.href,
        custom_parameter: 'homepage_visit'
      });
    }

    // Preload critical images
    const criticalImages = [
      '/lovable-uploads/017285b9-f47a-47f7-93c2-39c15431e4e3.png'
    ];
    
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <main id="main-content" role="main">
        <HeroSection />
        <ServicesSection />
        <ContentSection />
        <ReviewsSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

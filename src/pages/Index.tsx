import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

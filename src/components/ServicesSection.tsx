import { Search, MousePointer, Share2, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Dominate local search results in Motherwell, Glasgow, and Central Scotland with our proven SEO strategies.",
      features: ["Local SEO", "On-Page Optimization", "Technical SEO", "Keyword Research"],
      anchor: "seo"
    },
    {
      icon: MousePointer,
      title: "Google Ads Management",
      description: "Maximize your ROI with expertly managed Google Ads campaigns that convert browsers into buyers.",
      features: ["Search Campaigns", "Display Advertising", "Remarketing", "Shopping Ads"],
      anchor: "ads"
    },
    {
      icon: Share2,
      title: "Meta (Facebook & Instagram) Ads",
      description: "Reach your ideal customers on social media with targeted campaigns that drive real business results.",
      features: ["Lead Generation", "Retargeting Campaigns", "Conversion Optimization", "Creative Testing"],
      anchor: "social"
    },
    {
      icon: Globe,
      title: "Website Design & Development",
      description: "Beautiful, fast, and conversion-optimized websites that represent your brand professionally online.",
      features: ["WordPress Development", "Shopify Stores", "Custom Web Apps", "Mobile Optimization"],
      anchor: "webdesign"
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Digital Marketing Services That 
            <span className="text-primary"> Deliver Results</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're Central Scotland's leading digital marketing experts, helping businesses in 
            Motherwell, Glasgow, and beyond achieve measurable online growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              id={service.anchor}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth group"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-bounce">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6 sm:mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="cta" 
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Enquire Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-lg sm:text-xl text-muted-foreground mb-4 sm:mb-6">
              Get a comprehensive digital marketing audit and custom strategy for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/free-seo-audit">
                <Button variant="hero" size="lg">
                  Get Free Marketing Audit
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button variant="outline" size="lg">
                  View Our Portfolio
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Additional Internal Links */}
          <div className="mt-8 sm:mt-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <Link to="/services" className="group">
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-card hover:shadow-elegant transition-smooth">
                  <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    All Services →
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Explore our complete range of digital marketing solutions
                  </p>
                </div>
              </Link>
              <Link to="/seo-scanner" className="group">
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-card hover:shadow-elegant transition-smooth">
                  <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    Free SEO Scanner →
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Get instant SEO analysis of your website
                  </p>
                </div>
              </Link>
              <Link to="/about" className="group">
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-card hover:shadow-elegant transition-smooth">
                  <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    About Our Team →
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Meet Central Scotland's digital marketing experts
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
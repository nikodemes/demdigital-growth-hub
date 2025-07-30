import { Search, MousePointer, Share2, Globe, Target, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization Motherwell",
      description: "Dominate local search results in Motherwell, Glasgow, and Central Scotland with our proven SEO strategies that deliver measurable results.",
      features: [
        "Local SEO Motherwell & Glasgow",
        "On-Page SEO Optimization", 
        "Technical SEO Audits",
        "Keyword Research Central Scotland",
        "Google My Business Optimization",
        "Local Citation Building"
      ],
      benefits: [
        "Rank #1 for local searches",
        "Increase organic traffic by 300%+",
        "Generate more quality leads",
        "Beat your competition online"
      ]
    },
    {
      icon: MousePointer,
      title: "Google Ads Management Glasgow",
      description: "Maximize your ROI with expertly managed Google Ads campaigns designed specifically for Central Scotland businesses.",
      features: [
        "Search Campaign Management",
        "Display Advertising",
        "Google Shopping Ads",
        "Remarketing Campaigns",
        "Local Ads Motherwell",
        "Performance Max Campaigns"
      ],
      benefits: [
        "Immediate visibility on Google",
        "Target customers in your area",
        "Track every penny spent",
        "Generate leads 24/7"
      ]
    },
    {
      icon: Share2,
      title: "Meta Ads (Facebook & Instagram)",
      description: "Reach your ideal customers on social media with targeted campaigns that drive real business results across Central Scotland.",
      features: [
        "Facebook Lead Generation",
        "Instagram Story Ads",
        "Retargeting Campaigns",
        "Conversion Optimization",
        "Creative Testing & Design",
        "Audience Research"
      ],
      benefits: [
        "Reach customers where they spend time",
        "Highly targeted local advertising",
        "Build brand awareness",
        "Generate quality leads daily"
      ]
    },
    {
      icon: Globe,
      title: "Website Design Motherwell",
      description: "Beautiful, fast, and conversion-optimized websites that represent your Central Scotland business professionally online.",
      features: [
        "WordPress Development",
        "Shopify E-commerce Stores",
        "Custom Web Applications",
        "Mobile-First Design",
        "SEO-Optimized Structure",
        "Speed Optimization"
      ],
      benefits: [
        "Professional online presence",
        "Convert visitors into customers",
        "Mobile-friendly design",
        "Fast loading speeds"
      ]
    },
    {
      icon: Target,
      title: "PPC Management Central Scotland",
      description: "Comprehensive pay-per-click advertising management across Google, Bing, and social media platforms.",
      features: [
        "Google Ads Management",
        "Bing Ads Optimization",
        "Social Media Advertising",
        "Landing Page Creation",
        "Conversion Tracking",
        "A/B Testing"
      ],
      benefits: [
        "Maximum return on ad spend",
        "Expert campaign management",
        "Detailed performance reporting",
        "Local market expertise"
      ]
    },
    {
      icon: BarChart3,
      title: "Digital Marketing Analytics",
      description: "Comprehensive tracking and reporting to measure the success of your digital marketing campaigns.",
      features: [
        "Google Analytics Setup",
        "Conversion Tracking",
        "Performance Dashboards",
        "ROI Measurement",
        "Monthly Reporting",
        "Data-Driven Insights"
      ],
      benefits: [
        "Know exactly what's working",
        "Make informed decisions",
        "Track your investment",
        "Optimize for better results"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Digital Marketing Services
            <span className="block text-accent">Motherwell & Glasgow</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto">
            Comprehensive digital marketing solutions designed specifically for businesses in 
            Motherwell, Glasgow, and Central Scotland
          </p>
          <Link to="/free-seo-audit">
            <Button variant="hero" size="lg">
              Get Your Free Marketing Strategy
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Expert Digital Marketing Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From SEO to Google Ads, we provide all the digital marketing services your 
              Central Scotland business needs to thrive online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth group"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 group-hover:scale-110 transition-bounce">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-accent">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact">
                  <Button variant="cta" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Get a free digital marketing audit and custom strategy for your Central Scotland business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/free-seo-audit">
              <Button variant="hero" size="lg">
                Get Free Marketing Audit
              </Button>
            </Link>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.open('tel:+447365343449', '_self')}
            >
              Call +44 7365 343449
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
import { TrendingUp, Users, DollarSign, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Local Plumbing Business Dominates Motherwell Search",
      category: "SEO Optimization",
      location: "Motherwell",
      industry: "Plumbing Services",
      challenge: "A local plumbing business was struggling to be found online, losing customers to competitors ranking higher on Google.",
      solution: "Comprehensive local SEO strategy including Google My Business optimization, local citations, and targeted content creation.",
      results: [
        { metric: "Google Rankings", value: "#1 Position", icon: Search },
        { metric: "Organic Traffic", value: "+425%", icon: TrendingUp },
        { metric: "Lead Increase", value: "+300%", icon: Users },
        { metric: "Revenue Growth", value: "+250%", icon: DollarSign }
      ],
      timeline: "6 months",
      description: "Within 6 months, this Motherwell plumbing business went from invisible online to dominating local search results for key terms like 'plumber Motherwell' and 'emergency plumbing Central Scotland'."
    },
    {
      title: "Glasgow Restaurant Chain Doubles Online Orders",
      category: "Google Ads + Meta Ads",
      location: "Glasgow",
      industry: "Restaurant",
      challenge: "A popular Glasgow restaurant chain needed to increase online orders and compete with delivery apps.",
      solution: "Multi-platform advertising strategy combining Google Ads for immediate visibility and Meta Ads for brand awareness and retargeting.",
      results: [
        { metric: "Online Orders", value: "+200%", icon: TrendingUp },
        { metric: "Ad Spend ROI", value: "400%", icon: DollarSign },
        { metric: "Customer Base", value: "+150%", icon: Users },
        { metric: "Local Visibility", value: "+350%", icon: Search }
      ],
      timeline: "4 months",
      description: "This Glasgow restaurant chain saw dramatic growth in online orders and customer acquisition through strategic paid advertising across Google and Meta platforms."
    },
    {
      title: "Central Scotland Retailer's E-commerce Transformation",
      category: "Website Development + SEO",
      location: "Hamilton", 
      industry: "Retail",
      challenge: "An established retailer needed to move online to compete with e-commerce giants and serve customers during lockdowns.",
      solution: "Built a conversion-optimized Shopify store with integrated SEO strategy and local search optimization.",
      results: [
        { metric: "Online Sales", value: "+500%", icon: DollarSign },
        { metric: "Website Traffic", value: "+380%", icon: TrendingUp },
        { metric: "Conversion Rate", value: "8.5%", icon: Users },
        { metric: "Search Rankings", value: "Top 3", icon: Search }
      ],
      timeline: "8 months",
      description: "This Central Scotland retailer successfully transitioned to e-commerce, creating a thriving online business that now accounts for 70% of their total revenue."
    },
    {
      title: "Wishaw Service Business Triples Lead Generation",
      category: "Complete Digital Marketing",
      location: "Wishaw",
      industry: "Home Services",
      challenge: "A home services business was relying entirely on word-of-mouth and needed consistent lead generation to grow.",
      solution: "Full digital marketing strategy including SEO, Google Ads, website redesign, and lead nurturing system.",
      results: [
        { metric: "Monthly Leads", value: "+300%", icon: Users },
        { metric: "Cost Per Lead", value: "-60%", icon: DollarSign },
        { metric: "Online Visibility", value: "+450%", icon: Search },
        { metric: "Revenue Growth", value: "+280%", icon: TrendingUp }
      ],
      timeline: "10 months",
      description: "This Wishaw service business transformed from relying on referrals to having a consistent flow of high-quality leads through multiple digital channels."
    },
    {
      title: "East Kilbride Manufacturing Company's B2B Success",
      category: "B2B Digital Marketing",
      location: "East Kilbride",
      industry: "Manufacturing",
      challenge: "A B2B manufacturing company needed to reach new markets and generate qualified leads for their specialized services.",
      solution: "LinkedIn advertising, technical SEO, industry-specific content marketing, and lead nurturing campaigns.",
      results: [
        { metric: "B2B Leads", value: "+250%", icon: Users },
        { metric: "Sales Pipeline", value: "+400%", icon: DollarSign },
        { metric: "Market Reach", value: "+300%", icon: TrendingUp },
        { metric: "Industry Rankings", value: "Top 5", icon: Search }
      ],
      timeline: "12 months",
      description: "This East Kilbride manufacturer expanded their market reach significantly, establishing themselves as a digital leader in their specialized industry."
    },
    {
      title: "Coatbridge Fitness Center's Membership Boom",
      category: "Social Media Marketing",
      location: "Coatbridge",
      industry: "Fitness",
      challenge: "A local fitness center needed to attract younger members and compete with chain gyms moving into the area.",
      solution: "Instagram and Facebook marketing campaign with video content, member testimonials, and targeted local advertising.",
      results: [
        { metric: "New Members", value: "+180%", icon: Users },
        { metric: "Social Followers", value: "+500%", icon: TrendingUp },
        { metric: "Engagement Rate", value: "12.5%", icon: Search },
        { metric: "Revenue Increase", value: "+220%", icon: DollarSign }
      ],
      timeline: "6 months",
      description: "This Coatbridge fitness center successfully attracted a younger demographic and significantly increased membership through strategic social media marketing."
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
            Case Studies
            <span className="block text-accent">Real Results for Real Businesses</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto">
            See how we've helped businesses across Motherwell, Glasgow, and Central Scotland 
            achieve remarkable growth through strategic digital marketing.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.location.href = '/contact'}
          >
            Get Your Success Story
          </Button>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Success Stories from <span className="text-primary">Central Scotland</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every business is unique, but the results speak for themselves. 
              Here's how we've transformed digital presence for businesses like yours.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-card overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Content Side */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {study.category}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {study.location} • {study.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {study.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {study.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                        <p className="text-muted-foreground text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                        <p className="text-muted-foreground text-sm">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Timeline:</h4>
                        <p className="text-primary font-medium text-sm">{study.timeline}</p>
                      </div>
                    </div>

                    <Button 
                      variant="cta"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Get Similar Results
                    </Button>
                  </div>

                  {/* Results Side */}
                  <div className="bg-gradient-subtle p-8 flex flex-col justify-center">
                    <h4 className="text-xl font-bold text-foreground mb-6 text-center">
                      Results Achieved
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-6">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-3">
                            <result.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-2xl font-bold text-primary mb-1">
                            {result.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {result.metric}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">
            What Our Clients Say
          </h2>
          <blockquote className="text-2xl text-muted-foreground leading-relaxed mb-8">
            "DEM Digital transformed our business completely. We went from struggling to find customers 
            online to having more leads than we can handle. The ROI has been incredible."
          </blockquote>
          <div className="text-primary font-semibold">
            Local Business Owner, Central Scotland
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            These results are real, and they could be yours too. Get your free digital marketing 
            audit and see how we can transform your business.
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

export default CaseStudies;
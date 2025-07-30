import { CheckCircle, Search, TrendingUp, Target, ArrowRight, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <ContactForm 
                type="seo-audit"
                title="Request Your Free SEO Audit"
                description="Get a comprehensive SEO audit and custom digital marketing strategy worth £500 - completely free."
                buttonText="Get My Free SEO Audit"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  What's Included in Your <span className="text-primary">Free SEO Audit</span>?
                </h2>
                <div className="space-y-4">
                  {[
                    "Complete technical SEO analysis of your website",
                    "Local SEO assessment for Central Scotland markets",
                    "Competitor analysis and positioning review",
                    "Keyword research and gap analysis",
                    "Page speed and mobile optimization check",
                    "Google My Business optimization recommendations",
                    "Custom action plan with prioritized improvements",
                    "ROI projections and growth potential analysis"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Free SEO Audit */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Get Your Free SEO Audit from <span className="text-primary">DEM Digital</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Unlike generic SEO audits, our comprehensive analysis is specifically tailored for businesses operating in Central Scotland. We understand the local market dynamics, competition levels, and search behaviors unique to Motherwell, Glasgow, Hamilton, and surrounding areas.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-card text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Local Market Expertise
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our SEO audits factor in Central Scotland-specific search patterns, local competition analysis, and regional keyword opportunities that generic tools miss. We know what works for businesses in Motherwell, Glasgow, and surrounding areas because we've helped hundreds of local companies achieve top rankings.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-card text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Actionable Insights
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't just identify problems - we provide clear, prioritized action plans that you can implement immediately. Every recommendation comes with expected timelines, difficulty levels, and potential impact on your Central Scotland search rankings and local business growth.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-card text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Proven Track Record
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 100 successful SEO campaigns across Central Scotland, we know exactly what it takes to outrank competitors in local searches. Our clients typically see 200-400% increases in organic traffic within 6-12 months of implementing our recommendations.
              </p>
            </div>
          </div>

          {/* Additional Content */}
          <div className="bg-white rounded-3xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  The Reality of SEO in Central Scotland
                </h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    SEO for businesses in Central Scotland presents unique opportunities and challenges. With lower competition than major UK cities but high local search intent, businesses that get their SEO strategy right can quickly dominate their local markets and capture significant market share.
                  </p>
                  <p>
                    Our free SEO audit reveals exactly where your website stands compared to competitors in Motherwell, Glasgow, Hamilton, and surrounding areas. We analyze everything from your Google My Business optimization to technical site speed issues that could be preventing you from ranking higher in local search results.
                  </p>
                  <p>
                    The audit also includes a comprehensive keyword analysis showing you which search terms your potential customers are using to find businesses like yours, and more importantly, which valuable keywords your competitors are ranking for that you're missing out on.
                  </p>
                  <p>
                    Most businesses in Central Scotland are sitting on untapped SEO potential. Our audit uncovers these opportunities and provides a clear roadmap to capitalize on them, whether you choose to implement the recommendations yourself or work with our expert team.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-subtle rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Users className="w-8 h-8 text-primary" />
                    <div>
                      <div className="text-3xl font-bold text-primary">100+</div>
                      <div className="text-sm text-muted-foreground">Central Scotland Businesses Helped</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    From local tradespeople to established retailers, we've helped businesses across every industry achieve SEO success.
                  </p>
                </div>
                <div className="bg-gradient-subtle rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Award className="w-8 h-8 text-primary" />
                    <div>
                      <div className="text-3xl font-bold text-primary">4.8★</div>
                      <div className="text-sm text-muted-foreground">Average Google Review Rating</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Our clients consistently rate us 5 stars for our comprehensive SEO audits and ongoing support.
                  </p>
                </div>
                <div className="bg-gradient-subtle rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                    <div>
                      <div className="text-3xl font-bold text-primary">300%</div>
                      <div className="text-sm text-muted-foreground">Average Traffic Increase</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Businesses implementing our SEO recommendations see significant traffic and lead increases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Explore Our Digital Marketing Services
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beyond SEO audits, we offer comprehensive digital marketing solutions for Central Scotland businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="w-full h-auto py-6 group">
                <div className="text-center">
                  <div className="font-semibold mb-1">Our Services</div>
                  <div className="text-sm text-muted-foreground">SEO, Google Ads, Web Design</div>
                  <ArrowRight className="w-4 h-4 mx-auto mt-2 group-hover:translate-x-1 transition-smooth" />
                </div>
              </Button>
            </Link>
            <Link to="/seo-scanner">
              <Button variant="outline" size="lg" className="w-full h-auto py-6 group">
                <div className="text-center">
                  <div className="font-semibold mb-1">Free SEO Scanner</div>
                  <div className="text-sm text-muted-foreground">Instant Website Analysis</div>
                  <ArrowRight className="w-4 h-4 mx-auto mt-2 group-hover:translate-x-1 transition-smooth" />
                </div>
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button variant="outline" size="lg" className="w-full h-auto py-6 group">
                <div className="text-center">
                  <div className="font-semibold mb-1">Case Studies</div>
                  <div className="text-sm text-muted-foreground">Client Success Stories</div>
                  <ArrowRight className="w-4 h-4 mx-auto mt-2 group-hover:translate-x-1 transition-smooth" />
                </div>
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="w-full h-auto py-6 group">
                <div className="text-center">
                  <div className="font-semibold mb-1">About Us</div>
                  <div className="text-sm text-muted-foreground">Meet Our Expert Team</div>
                  <ArrowRight className="w-4 h-4 mx-auto mt-2 group-hover:translate-x-1 transition-smooth" />
                </div>
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <Link to="/blog">
              <Button variant="outline" size="lg" className="group">
                Read Our Digital Marketing Blog
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeSEOAudit;
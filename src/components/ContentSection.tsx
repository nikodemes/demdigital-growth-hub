import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, Users, Award } from "lucide-react";

const ContentSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why Choose DEM Digital for Your <span className="text-primary">Digital Marketing</span>?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Based in the heart of Central Scotland, DEM Digital has been helping local businesses in Motherwell, Glasgow, Hamilton, East Kilbride, and Wishaw achieve remarkable online growth since our founding. We understand the unique challenges facing Scottish businesses in today's competitive digital landscape.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our comprehensive digital marketing approach combines cutting-edge SEO strategies, data-driven Google Ads management, engaging Meta advertising campaigns, and responsive web development to deliver measurable results for your business. Whether you're a local tradesperson, retail business, professional service provider, or growing enterprise, we have the expertise and local knowledge to accelerate your online success.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What sets us apart is our commitment to transparency, ongoing communication, and delivering real ROI for every client. We don't just run campaigns – we build partnerships that drive sustainable business growth through intelligent digital marketing strategies tailored specifically for the Scottish market.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/services">
                <Button variant="default" size="lg" className="group">
                  View Our Services
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button variant="outline" size="lg">
                  See Case Studies
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 shadow-card border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Proven Results
                  </h3>
                  <p className="text-muted-foreground">
                    Our clients typically see 200-400% improvement in leads within 3-6 months of working with us.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Local Expertise
                  </h3>
                  <p className="text-muted-foreground">
                    Deep understanding of Central Scotland markets and consumer behavior patterns.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Dedicated Support
                  </h3>
                  <p className="text-muted-foreground">
                    Direct access to your account manager and regular strategy reviews to optimize performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Award-Winning Agency
                  </h3>
                  <p className="text-muted-foreground">
                    Recognized for excellence in digital marketing with 4.8-star Google Reviews rating.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="bg-gradient-subtle rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Serving Businesses Across Central Scotland
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            From Motherwell to Glasgow, Hamilton to East Kilbride, we're proud to support local businesses with world-class digital marketing services. Our team understands the unique opportunities and challenges in each area we serve.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="bg-white/50 px-6 py-3 rounded-full font-medium">Motherwell</span>
            <span className="bg-white/50 px-6 py-3 rounded-full font-medium">Glasgow</span>
            <span className="bg-white/50 px-6 py-3 rounded-full font-medium">Hamilton</span>
            <span className="bg-white/50 px-6 py-3 rounded-full font-medium">East Kilbride</span>
            <span className="bg-white/50 px-6 py-3 rounded-full font-medium">Wishaw</span>
            <span className="bg-white/50 px-6 py-3 rounded-full font-medium">Bellshill</span>
            <span className="bg-white/50 px-6 py-3 rounded-full font-medium">Coatbridge</span>
            <span className="bg-white/50 px-6 py-3 rounded-full font-medium">Airdrie</span>
          </div>
          <div className="mt-8">
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8">
                Get Your Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
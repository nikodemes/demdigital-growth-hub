import { Users, Award, Target, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const stats = [
    { number: "100+", label: "Happy Clients", icon: Users },
    { number: "5 Years", label: "Experience", icon: Clock },
    { number: "500%", label: "Average ROI", icon: Target },
    { number: "50+", label: "Awards Won", icon: Award }
  ];

  const team = [
    {
      name: "Nikodem Szlagor",
      role: "Founder & Digital Marketing Director",
      bio: "8+ years experience in digital marketing across Central Scotland. Specializes in local SEO and Google Ads management.",
      expertise: ["SEO Strategy", "Google Ads", "Local Marketing"]
    },
    {
      name: "Marek Lubinski", 
      role: "SEO Specialist",
      bio: "Expert in technical SEO and local search optimization for Motherwell, Glasgow, and Central Scotland businesses.",
      expertise: ["Technical SEO", "Local SEO", "Content Strategy"]
    },
    {
      name: "James Wilson",
      role: "PPC Manager",
      bio: "Certified Google Ads expert managing £2M+ in ad spend annually for Central Scotland businesses.",
      expertise: ["Google Ads", "Meta Ads", "PPC Strategy"]
    }
  ];

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                About <span className="text-accent">DEM Digital</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                We're Central Scotland's leading digital marketing agency, helping businesses in 
                Motherwell, Glasgow, and beyond achieve measurable online growth since 2019.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Get Free Consultation
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button variant="secondary" size="lg">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/90 leading-relaxed">
                  To help every business in Central Scotland succeed online by providing 
                  expert digital marketing services that deliver real, measurable results. 
                  We believe in transparency, data-driven strategies, and building long-term partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Proven Results for <span className="text-primary">Central Scotland</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our track record speaks for itself. Here's what we've achieved for businesses 
              across Motherwell, Glasgow, and Central Scotland.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 group-hover:scale-110 transition-bounce">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  DEM Digital was founded in 2019 with a simple mission: help local businesses 
                  in Central Scotland compete and win online. We started as a small team of 
                  digital marketing experts who understood the unique challenges facing 
                  businesses in Motherwell, Glasgow, and surrounding areas.
                </p>
                <p>
                  What began as a passion project has grown into Central Scotland's most 
                  trusted digital marketing agency. We've helped over 100 businesses 
                  transform their online presence, from local tradespeople to established 
                  retailers and service providers.
                </p>
                <p>
                  Our success comes from our deep understanding of the local market, 
                  commitment to transparency, and focus on delivering measurable results. 
                  We don't just manage campaigns – we build partnerships that last.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-3">Why Choose Local?</h3>
                <p className="text-muted-foreground">
                  As a Central Scotland-based agency, we understand your market, your customers, 
                  and your competition. We're not just your digital marketing agency – we're 
                  your local business partners.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-3">Our Approach</h3>
                <p className="text-muted-foreground">
                  Data-driven strategies, transparent reporting, and a focus on ROI. 
                  Every campaign is tailored to your business goals and local market conditions.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-3">Local Expertise</h3>
                <p className="text-muted-foreground">
                  From Motherwell to Glasgow, we know Central Scotland inside and out. 
                  This local knowledge gives our clients a significant competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Meet Our <span className="text-primary">Expert Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team of certified digital marketing professionals are dedicated to 
              helping your Central Scotland business succeed online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-subtle rounded-2xl p-8 text-center group hover:shadow-elegant transition-smooth">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{member.bio}</p>
                <div className="space-y-2">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mr-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Partner with Central Scotland's Best?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let's discuss how we can help your business grow online. 
            Get your free digital marketing consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get Free Consultation
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

export default About;
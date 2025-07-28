import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+44 7365 343449",
      description: "Speak directly with our Central Scotland digital marketing experts",
      action: "tel:+447365343449"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@demdigital.co.uk",
      description: "Get a response within 2 hours during business days",
      action: "mailto:hello@demdigital.co.uk"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "6 Panmuir Crescent, ML15UR",
      description: "Central Scotland - Serving Motherwell, Glasgow & Beyond",
      action: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon-Fri: 9AM-6PM",
      description: "Weekend support available for urgent matters",
      action: "#"
    }
  ];

  const services = [
    "SEO Optimization",
    "Google Ads Management", 
    "Meta Ads (Facebook/Instagram)",
    "Website Design & Development",
    "Complete Digital Marketing",
    "Free Marketing Audit",
    "Other"
  ];

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Get In Touch
            <span className="block text-accent">with Central Scotland's Best</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto">
            Ready to grow your business online? Contact DEM Digital today for expert digital marketing 
            services across Motherwell, Glasgow, and Central Scotland.
          </p>
          <Button variant="hero" size="lg">
            Get Free Consultation
          </Button>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Multiple Ways to <span className="text-primary">Reach Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the contact method that works best for you. We're here to help your 
              Central Scotland business succeed online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 transition-bounce">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
                <a 
                  href={method.action}
                  className="text-primary font-semibold mb-3 block hover:text-primary-light transition-smooth"
                >
                  {method.info}
                </a>
                <p className="text-muted-foreground text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Get Your Free Marketing Strategy
                </h3>
                <p className="text-muted-foreground">
                  Tell us about your business and goals. We'll create a custom digital marketing 
                  strategy for your Central Scotland business.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input placeholder="John Smith" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Business Name
                    </label>
                    <Input placeholder="Your Company Ltd" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="john@company.co.uk" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input type="tel" placeholder="+44 7xxx xxx xxx" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Location
                    </label>
                    <Input placeholder="Motherwell, Glasgow, etc." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Interested In
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Current Website (if applicable)
                  </label>
                  <Input placeholder="https://yourwebsite.co.uk" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your business goals
                  </label>
                  <Textarea 
                    placeholder="What are your main business goals? What challenges are you facing with digital marketing? Any specific questions?"
                    rows={4}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Monthly Marketing Budget (optional)
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-500">Under £500/month</SelectItem>
                      <SelectItem value="500-1000">£500 - £1,000/month</SelectItem>
                      <SelectItem value="1000-2500">£1,000 - £2,500/month</SelectItem>
                      <SelectItem value="2500-5000">£2,500 - £5,000/month</SelectItem>
                      <SelectItem value="5000-plus">£5,000+/month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button variant="cta" className="w-full" size="lg">
                  Send My Free Strategy Request
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll respond within 2 hours during business hours. 
                  All consultations are completely free with no obligation.
                </p>
              </form>
            </div>

            {/* Business Info & Quick Contact */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Prefer to Talk? Call Now
                </h3>
                <div className="space-y-4">
                  <a 
                    href="tel:+447365343449"
                    className="flex items-center gap-4 p-4 bg-gradient-primary rounded-lg text-white hover:shadow-glow transition-smooth group"
                  >
                    <Phone className="w-6 h-6 group-hover:scale-110 transition-bounce" />
                    <div>
                      <div className="font-semibold">Call for Immediate Help</div>
                      <div className="text-white/90">+44 7365 343449</div>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:hello@demdigital.co.uk"
                    className="flex items-center gap-4 p-4 border border-primary rounded-lg text-primary hover:bg-primary hover:text-white transition-smooth group"
                  >
                    <Mail className="w-6 h-6 group-hover:scale-110 transition-bounce" />
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div className="opacity-80">hello@demdigital.co.uk</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Central Scotland Location
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">Our Address</div>
                      <div className="text-muted-foreground">
                        6 Panmuir Crescent<br />
                        ML15UR<br />
                        Central Scotland
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">Business Hours</div>
                      <div className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Emergency support only
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Service Areas
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold mb-2">Primary Areas:</div>
                    <ul className="space-y-1 text-white/90">
                      <li>• Motherwell</li>
                      <li>• Glasgow</li>
                      <li>• Hamilton</li>
                      <li>• East Kilbride</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Extended Areas:</div>
                    <ul className="space-y-1 text-white/90">
                      <li>• Wishaw</li>
                      <li>• Coatbridge</li>
                      <li>• Airdrie</li>
                      <li>• All Central Scotland</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our digital marketing services in Central Scotland
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can I see results from SEO?",
                answer: "Most clients see initial improvements within 3-6 months, with significant results by 6-12 months. Local SEO often shows faster results than national campaigns."
              },
              {
                question: "Do you work with businesses outside Central Scotland?",
                answer: "While we specialize in Central Scotland (Motherwell, Glasgow, Hamilton, etc.), we do work with businesses throughout the UK who value our local expertise."
              },
              {
                question: "What's included in a free marketing audit?",
                answer: "Our free audit includes SEO analysis, competitor research, website review, and a custom digital marketing strategy tailored to your business goals."
              },
              {
                question: "Do you require long-term contracts?",
                answer: "No, we don't lock you into long-term contracts. We believe in earning your business through results, not contracts. Most clients stay because we deliver real ROI."
              },
              {
                question: "How much do your services cost?",
                answer: "Our pricing depends on your specific needs and goals. We offer packages starting from £500/month for local businesses. Contact us for a custom quote."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-subtle rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
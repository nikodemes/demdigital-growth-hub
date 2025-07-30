import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import { NewsletterSignup } from "./NewsletterSignup";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">DEM Digital</h3>
              <p className="text-white/80 leading-relaxed">
                Central Scotland's leading digital marketing agency. We help businesses 
                grow online with proven SEO, PPC, and web development strategies.
              </p>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-smooth cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-smooth cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-smooth cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#seo" className="text-white/80 hover:text-white transition-smooth">SEO Optimization</a></li>
              <li><a href="#ads" className="text-white/80 hover:text-white transition-smooth">Google Ads Management</a></li>
              <li><a href="#social" className="text-white/80 hover:text-white transition-smooth">Meta Ads (Facebook/Instagram)</a></li>
              <li><a href="#webdesign" className="text-white/80 hover:text-white transition-smooth">Website Design & Development</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-smooth">Free Marketing Audit</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Service Areas</h4>
            <ul className="space-y-3 text-white/80">
              <li>Digital Marketing Agency Motherwell</li>
              <li>Digital Marketing Services Glasgow</li>
              <li>Central Scotland SEO Experts</li>
              <li>Google Ads Manager Scotland</li>
              <li>Web Design Motherwell</li>
              <li>PPC Management Glasgow</li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+447365343449" className="text-white/80 hover:text-white transition-smooth">
                    +44 7365 343449
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:hello@demdigital.co.uk" className="text-white/80 hover:text-white transition-smooth">
                    hello@demdigital.co.uk
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-white/80">6 Panmuir Crescent, ML15UR</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Marketing Tips Newsletter</h4>
              <NewsletterSignup 
                source="footer"
                placeholder="Your email"
                buttonText="Subscribe"
                size="sm"
                className="max-w-sm"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} DEM Digital. All rights reserved. Helping businesses grow online across Motherwell, Glasgow & Central Scotland.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-smooth">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-smooth">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-smooth">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { NewsletterSignup } from "./NewsletterSignup";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">DEM Digital</h3>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                Central Scotland's leading digital marketing agency. We help businesses 
                grow online with proven SEO, PPC, and web development strategies.
              </p>
            </div>
            
            <div className="flex gap-3 sm:gap-4">
              <a 
                href="https://www.facebook.com/demdigitalglobal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-smooth"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://www.instagram.com/demdigitalglobal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-smooth"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li><a href="#seo" className="text-white/80 hover:text-white transition-smooth">SEO Optimization</a></li>
              <li><a href="#ads" className="text-white/80 hover:text-white transition-smooth">Google Ads Management</a></li>
              <li><a href="#social" className="text-white/80 hover:text-white transition-smooth">Meta Ads (Facebook/Instagram)</a></li>
              <li><a href="#webdesign" className="text-white/80 hover:text-white transition-smooth">Website Design & Development</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-smooth">Free Marketing Audit</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Service Areas</h4>
            <ul className="space-y-2 sm:space-y-3 text-white/80 text-sm sm:text-base">
              <li>Digital Marketing Agency Motherwell</li>
              <li>Digital Marketing Services Glasgow</li>
              <li>Central Scotland SEO Experts</li>
              <li>Google Ads Manager Scotland</li>
              <li>Web Design Motherwell</li>
              <li>PPC Management Glasgow</li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Get In Touch</h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                  <a href="tel:+447365343449" className="text-white/80 hover:text-white transition-smooth text-sm sm:text-base">
                    +44 7365 343449
                  </a>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                  <a href="mailto:hello@demdigital.co.uk" className="text-white/80 hover:text-white transition-smooth text-sm sm:text-base">
                    hello@demdigital.co.uk
                  </a>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                  <span className="text-white/80 text-sm sm:text-base">Motherwell, Central Scotland</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Marketing Tips Newsletter</h4>
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
        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-white/60 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} DEM Digital. All rights reserved. Helping businesses grow online across Motherwell, Glasgow & Central Scotland.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm justify-center">
              <Link to="/privacy-policy" className="text-white/60 hover:text-white transition-smooth">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-white/60 hover:text-white transition-smooth">Terms of Service</Link>
              <Link to="/cookie-policy" className="text-white/60 hover:text-white transition-smooth">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
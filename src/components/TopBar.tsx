import { Phone, Star } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-foreground text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+447365343449" className="hover:text-primary transition-smooth">
                +44 7365 343449
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white/80">5.0</span>
            <a 
              href="https://maps.app.goo.gl/h1gMqB2gRnB9WZaw5?g_st=ipc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light transition-smooth"
            >
              Google Reviews
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
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
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => {
                const currentRating = 4.8;
                if (star <= Math.floor(currentRating)) {
                  return <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />;
                } else if (star === Math.ceil(currentRating) && currentRating % 1 !== 0) {
                  return (
                    <div key={star} className="relative w-4 h-4">
                      <Star className="w-4 h-4 fill-gray-200 text-gray-200 absolute" />
                      <div className="overflow-hidden absolute inset-0" style={{ width: `${(currentRating % 1) * 100}%` }}>
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                  );
                } else {
                  return <Star key={star} className="w-4 h-4 fill-gray-200 text-gray-200" />;
                }
              })}
            </div>
            <span className="text-sm text-white font-medium">4.8</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
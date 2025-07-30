import { useState, useEffect } from "react";
import { Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const ReviewsSection = () => {
  const [rating, setRating] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  const [googleReviews, setGoogleReviews] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const reviews = [
    {
      name: "Sarah M.",
      location: "Motherwell",
      rating: 5,
      text: "DEM Digital transformed our local business! Our website now ranks #1 for 'plumber Motherwell' and we've tripled our leads.",
      service: "SEO Optimization"
    },
    {
      name: "James T.",
      location: "Glasgow", 
      rating: 5,
      text: "Outstanding Google Ads management. Our ROI improved by 400% in just 3 months. Highly recommend for any Glasgow business.",
      service: "Google Ads"
    },
    {
      name: "Michelle K.",
      location: "Hamilton",
      rating: 5,
      text: "Professional team, excellent communication, and real results. Our Facebook ads are now generating quality leads daily.",
      service: "Meta Ads"
    },
    {
      name: "David R.",
      location: "East Kilbride",
      rating: 5,
      text: "The new website they built is beautiful and converts amazingly well. Sales have increased by 250% since launch.",
      service: "Web Development"
    },
    {
      name: "Lisa P.",
      location: "Wishaw",
      rating: 5,
      text: "Best digital marketing agency in Central Scotland. They understand local business and deliver real results every time.",
      service: "Full Service"
    }
  ];

  // Fetch Google reviews
  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        console.log('Starting Google Reviews fetch...');
        const { data, error } = await supabase.functions.invoke('google-reviews', {
          body: { placeId: 'ChIJK8opDmCHh0gRbBCDcqMKHFg' }
        });
        console.log('Google Reviews response:', { data, error });
        if (data && !error) {
          console.log('Setting Google Reviews data:', data);
          setGoogleReviews(data);
        } else if (error) {
          console.error('Google Reviews error:', error);
        }
      } catch (error) {
        console.error('Google Reviews fetch error:', error);
      } finally {
        setLoading(false);
        console.log('Google Reviews fetch completed, loading set to false');
      }
    };
    fetchGoogleReviews();
  }, []);

  const handleStarClick = (starRating: number) => {
    setRating(starRating);
  };

  // Use Google reviews if available, fallback to static reviews
  const displayReviews = googleReviews?.reviews || reviews;
  const displayRating = googleReviews?.rating || 5.0;
  const displayReviewCount = googleReviews?.totalReviews || 47;
  const displayBusinessName = googleReviews?.businessName || "DEM Digital";

  // Auto-rotate reviews
  useEffect(() => {
    const reviewsToUse = displayReviews;
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviewsToUse.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [displayReviews]);

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See why businesses across Central Scotland choose DEM Digital
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Business Info & Write Review - Left Side */}
          <div className="space-y-6">
            {/* Google Reviews Widget */}
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <div className="flex items-start gap-6">
                {/* Business Logo/Image */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    DEM
                  </div>
                </div>
                
                {/* Business Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {loading ? "DEM Digital" : displayBusinessName}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`w-5 h-5 ${
                            star <= Math.floor(displayRating) 
                              ? "fill-yellow-400 text-yellow-400" 
                              : "fill-gray-200 text-gray-200"
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-lg font-semibold text-foreground">
                      {loading ? "5.0" : displayRating.toFixed(1)}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-base mb-6">
                    {loading ? "47 Google reviews" : `${displayReviewCount} Google reviews`}
                  </p>
                  
                  {/* Write Review Button */}
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium"
                    asChild
                  >
                    <a 
                      href="https://maps.app.goo.gl/h1gMqB2gRnB9WZaw5?g_st=ipc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Write a review
                    </a>
                  </Button>
                </div>
                
                {/* Google Logo */}
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                    <span className="text-xs font-bold" style={{ color: '#4285f4' }}>G</span>
                  </div>
                </div>
              </div>
            </div>

          </div>


          {/* Reviews Carousel - Right Side */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-card min-h-[400px] flex flex-col justify-center">
              {/* Navigation Arrows */}
              <button 
                onClick={() => setCurrentReview((prev) => prev === 0 ? reviews.length - 1 : prev - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-light transition-smooth z-10"
              >
                ←
              </button>
              <button 
                onClick={() => setCurrentReview((prev) => (prev + 1) % reviews.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-light transition-smooth z-10"
              >
                →
              </button>

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground">{reviews[currentReview].name}</h4>
                <p className="text-muted-foreground">{reviews[currentReview].location} • {reviews[currentReview].service}</p>
              </div>

              <div className="flex justify-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-lg text-center text-muted-foreground leading-relaxed mb-6">
                "{reviews[currentReview].text}"
              </blockquote>

              <div className="flex justify-center gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-smooth ${
                      index === currentReview ? 'bg-primary' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentReview(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
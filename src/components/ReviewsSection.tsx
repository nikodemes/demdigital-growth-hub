import { useState } from "react";
import { Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ReviewsSection = () => {
  const [rating, setRating] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);

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

  // Auto-rotate reviews
  useState(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  });

  const handleStarClick = (starRating: number) => {
    setRating(starRating);
  };

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
            {/* Business Overview */}
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-3">DEM Digital</h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-lg font-bold text-primary">5.0</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">Based on 47 reviews</p>
                <a 
                  href="https://maps.app.goo.gl/h1gMqB2gRnB9WZaw5?g_st=ipc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    Write a Review on Google
                  </Button>
                </a>
              </div>
            </div>

            {/* Write Review Form */}
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">Leave Us a Review</h3>
              <p className="text-muted-foreground mb-6 text-center text-sm">
                Help other businesses in Motherwell, Glasgow & Central Scotland
              </p>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Business Name" />
                </div>
                <Input placeholder="Email Address" />
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`w-6 h-6 cursor-pointer transition-smooth ${
                        star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                      }`}
                      onClick={() => handleStarClick(star)}
                    />
                  ))}
                </div>
                <Textarea 
                  placeholder="Tell us about your experience with DEM Digital..." 
                  rows={4}
                />
                <Button variant="cta" className="w-full">
                  Submit Review
                </Button>
              </form>

              <div className="mt-6 text-center">
                <a 
                  href="https://maps.app.goo.gl/h1gMqB2gRnB9WZaw5?g_st=ipc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light transition-smooth"
                >
                  Or leave a review on Google →
                </a>
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
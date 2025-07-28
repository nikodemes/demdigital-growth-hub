import { MapPin, TrendingUp, FileText, Clock } from "lucide-react";

const WhyChooseSection = () => {
  const benefits = [
    {
      icon: MapPin,
      title: "Local Experts in Motherwell & Glasgow",
      description: "We understand the Central Scotland market inside and out. Our team knows what works for local businesses and how to connect with your community."
    },
    {
      icon: TrendingUp,
      title: "ROI-Driven Campaigns",
      description: "Every pound you invest should return more. We focus on strategies that deliver measurable results and sustainable business growth."
    },
    {
      icon: FileText,
      title: "Transparent Reporting",
      description: "No black box marketing here. You'll receive detailed monthly reports showing exactly what we're doing and the results we're achieving."
    },
    {
      icon: Clock,
      title: "No Long-Term Contracts",
      description: "We earn your business every month. Our flexible approach means you can scale up or pause services based on your business needs."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose 
            <span className="text-primary"> DEM Digital?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another digital marketing agency. We're your local partners 
            committed to growing your business with proven strategies and honest communication.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6 group-hover:scale-110 transition-bounce shadow-card">
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-primary rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">150+</div>
              <p className="text-white/90">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">£2.5M+</div>
              <p className="text-white/90">Revenue Generated</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">300%</div>
              <p className="text-white/90">Average ROI</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">5+</div>
              <p className="text-white/90">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
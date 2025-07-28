import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      title: "How We Helped a Motherwell Business Rank #1 on Google in 90 Days",
      excerpt: "A local service business was invisible online until we implemented our proven local SEO strategy. Here's exactly what we did to get them ranking #1 for their main keywords.",
      category: "SEO Success",
      date: "2024-01-15",
      readTime: "8 min read",
      featured: true
    },
    {
      title: "Why Glasgow Businesses Are Switching to Our Google Ads Management",
      excerpt: "Traditional agencies charge high fees with poor results. We're different. This case study shows how we reduced one client's cost-per-click by 65% while tripling their leads.",
      category: "Google Ads",
      date: "2024-01-10",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "The Local SEO Mistakes That Cost Central Scotland Businesses £10,000s",
      excerpt: "We audited 50 local businesses and found the same critical errors repeatedly. Avoid these mistakes and you'll outrank 90% of your competition in Central Scotland.",
      category: "Local SEO",
      date: "2024-01-05",
      readTime: "10 min read",
      featured: true
    },
    {
      title: "From Zero to Hero: How We Built a £100k E-commerce Store for a Hamilton Retailer",
      excerpt: "When lockdowns hit, this retailer needed to go digital fast. We built them a Shopify store that generated £100k in sales within 6 months. Here's the complete blueprint.",
      category: "E-commerce",
      date: "2023-12-28",
      readTime: "12 min read",
      featured: false
    },
    {
      title: "Why Meta Ads Are Perfect for Wishaw and Central Scotland Businesses",
      excerpt: "Facebook and Instagram advertising can be incredibly effective for local businesses when done right. We show you how we generated 200+ qualified leads for a service business.",
      category: "Social Media",
      date: "2023-12-20",
      readTime: "7 min read",
      featured: false
    },
    {
      title: "The Ultimate Digital Marketing Checklist for Central Scotland Businesses",
      excerpt: "A comprehensive guide covering everything from Google My Business optimization to advanced PPC strategies. This checklist has helped 100+ local businesses grow online.",
      category: "Digital Strategy",
      date: "2023-12-15",
      readTime: "15 min read",
      featured: true
    },
    {
      title: "How We Increased a Coatbridge Restaurant's Online Orders by 300%",
      excerpt: "During the pandemic, restaurants needed to pivot quickly. This case study reveals the exact digital marketing strategy that tripled online orders for a popular local restaurant.",
      category: "Restaurant Marketing",
      date: "2023-12-10",
      readTime: "9 min read",
      featured: false
    },
    {
      title: "Local Link Building: How We Dominate Central Scotland Search Results",
      excerpt: "Link building is crucial for SEO success, but local link building is different. Learn our proven strategies for building high-quality local links that boost rankings.",
      category: "Link Building",
      date: "2023-12-05",
      readTime: "11 min read",
      featured: false
    },
    {
      title: "Google My Business Optimization: The Secret Weapon for Motherwell Businesses",
      excerpt: "Your Google My Business profile could be your biggest lead generator. We optimized one profile and saw a 400% increase in phone calls and directions requests.",
      category: "GMB Optimization",
      date: "2023-11-30",
      readTime: "8 min read",
      featured: false
    }
  ];

  const categories = [
    "All Posts",
    "SEO Success", 
    "Google Ads",
    "Local SEO",
    "E-commerce",
    "Social Media",
    "Digital Strategy"
  ];

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Digital Marketing
            <span className="block text-accent">Blog & Insights</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto">
            Real strategies, case studies, and insights from helping 100+ businesses 
            across Motherwell, Glasgow, and Central Scotland grow online.
          </p>
          <Button variant="hero" size="lg">
            Subscribe for Updates
          </Button>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-smooth text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Featured <span className="text-primary">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from real campaigns and strategies that delivered exceptional results 
              for businesses across Central Scotland.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {blogPosts.filter(post => post.featured).slice(0, 2).map((post, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-card overflow-hidden group hover:shadow-elegant transition-smooth">
                <div className="h-48 bg-gradient-primary"></div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-GB')}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <User className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-smooth">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Button variant="outline" className="group-hover:border-primary group-hover:text-primary">
                    Read Full Story <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Latest Insights & Strategies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay ahead of the competition with our latest digital marketing insights, 
              case studies, and proven strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-gradient-subtle rounded-2xl overflow-hidden group hover:shadow-card transition-smooth">
                <div className="h-32 bg-gradient-primary"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-primary" />
                    <span className="text-primary text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {post.excerpt.slice(0, 120)}...
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-GB')}
                    </div>
                    <span className="text-muted-foreground text-xs">{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-foreground text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Get Weekly Marketing Tips
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join 500+ Central Scotland business owners getting our weekly newsletter 
            with actionable marketing tips and strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60"
            />
            <Button variant="hero">
              Subscribe Free
            </Button>
          </div>
          <p className="text-white/60 text-sm mt-4">
            No spam. Unsubscribe anytime. Join successful businesses in Central Scotland.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
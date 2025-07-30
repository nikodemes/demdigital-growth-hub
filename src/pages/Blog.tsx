import { useState } from "react";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import blogSeoGuide from "@/assets/blog-seo-guide.jpg";
import blogGoogleAds from "@/assets/blog-google-ads.jpg";
import blogConversion from "@/assets/blog-conversion.jpg";
import blogSocialMedia from "@/assets/blog-social-media.jpg";
import blogMobileDesign from "@/assets/blog-mobile-design.jpg";
import blogLocalSeo from "@/assets/blog-local-seo.jpg";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "The Complete SEO Guide for Central Scotland Businesses",
      excerpt: "How a local manufacturing company increased their organic traffic by 300% in 6 months using our proven SEO strategy.",
      content: `
        <p>One of our recent success stories involved a manufacturing company based in Hamilton. When they first approached us, their website was barely visible on Google for their key services.</p>
        
        <h3>The Challenge</h3>
        <p>The client was struggling with:</p>
        <ul>
          <li>Zero organic traffic from Google</li>
          <li>Outdated website with poor mobile experience</li>
          <li>No local SEO optimization</li>
          <li>Strong competition from larger companies</li>
        </ul>

        <h3>Our SEO Strategy</h3>
        <p>We implemented a comprehensive SEO strategy focusing on:</p>
        
        <h4>1. Technical SEO Foundation</h4>
        <p>We started by fixing critical technical issues including page speed optimization, mobile responsiveness, and proper URL structure. The site loading time improved from 8 seconds to under 2 seconds.</p>

        <h4>2. Local SEO Optimization</h4>
        <p>For Central Scotland businesses, local SEO is crucial. We optimized their Google My Business profile, built local citations, and created location-specific landing pages for Motherwell, Glasgow, and Hamilton.</p>

        <h4>3. Content Strategy</h4>
        <p>We developed a content calendar targeting long-tail keywords specific to their industry and location. This included comprehensive service pages and regular blog posts addressing customer pain points.</p>

        <h4>4. On-Page Optimization</h4>
        <p>Every page was optimized with proper title tags, meta descriptions, header structure, and internal linking. We ensured all content was valuable and answered user intent.</p>

        <h3>The Results</h3>
        <p>Within 6 months, the client saw remarkable improvements:</p>
        <ul>
          <li>300% increase in organic traffic</li>
          <li>First page rankings for 15+ key terms</li>
          <li>50% increase in qualified leads</li>
          <li>40% improvement in conversion rate</li>
        </ul>

        <h3>Key Takeaways for Central Scotland Businesses</h3>
        <p>Success in local SEO requires patience and the right strategy. Focus on providing value to your local audience, optimize for mobile users, and ensure your Google My Business profile is complete and active.</p>
      `,
      category: "SEO",
      date: "2024-01-15",
      readTime: "8 min read",
      image: blogSeoGuide,
      author: "DEM Digital Team"
    },
    {
      id: 2,
      title: "Google Ads Success: How We Generated 400% ROI for a Glasgow Restaurant",
      excerpt: "Discover the exact Google Ads strategy that helped a local restaurant chain dominate their market and increase revenue by £80,000 in 4 months.",
      content: `
        <p>When a popular restaurant chain in Glasgow approached us, they were spending thousands on Google Ads with minimal returns. Their campaigns were bleeding money with poor targeting and irrelevant clicks.</p>

        <h3>The Initial Problems</h3>
        <p>Their Google Ads account had several critical issues:</p>
        <ul>
          <li>Broad, unfocused keyword targeting</li>
          <li>Generic ad copy that didn't stand out</li>
          <li>No conversion tracking setup</li>
          <li>Poor landing page experience</li>
          <li>Wasted budget on irrelevant searches</li>
        </ul>

        <h3>Our Google Ads Transformation Strategy</h3>
        
        <h4>1. Account Restructuring</h4>
        <p>We completely rebuilt their account structure with tightly themed ad groups focusing on specific menu items, locations, and customer intent (takeaway, dine-in, catering).</p>

        <h4>2. Advanced Keyword Strategy</h4>
        <p>Instead of broad terms like "restaurant Glasgow," we targeted specific phrases like "best pizza delivery Merchant City" and "family restaurant West End Glasgow" with higher commercial intent.</p>

        <h4>3. Compelling Ad Copy</h4>
        <p>We created location-specific ad copy highlighting unique selling points: "Free Delivery in 30 Minutes," "Authentic Italian Cuisine," and "Family-Owned Since 1985."</p>

        <h4>4. Landing Page Optimization</h4>
        <p>We designed dedicated landing pages for each campaign with clear calls-to-action, online ordering integration, and mobile-optimized design.</p>

        <h4>5. Advanced Targeting</h4>
        <p>We implemented audience targeting, dayparting for peak ordering times, and location targeting with radius optimization around each restaurant.</p>

        <h3>Remarkable Results</h3>
        <p>The transformation was dramatic:</p>
        <ul>
          <li>400% return on ad spend (ROAS)</li>
          <li>65% reduction in cost per acquisition</li>
          <li>£80,000 additional revenue in 4 months</li>
          <li>300% increase in online orders</li>
          <li>Average position improved from 4.2 to 1.8</li>
        </ul>

        <h3>Google Ads Best Practices for Glasgow Businesses</h3>
        <p>Success with Google Ads requires continuous optimization, proper tracking, and understanding your local market. Always test ad copy, refine targeting, and ensure your landing pages match user intent.</p>
      `,
      category: "Google Ads",
      date: "2024-01-10",
      readTime: "7 min read",
      image: blogGoogleAds,
      author: "DEM Digital Team"
    },
    {
      id: 3,
      title: "Website Conversion Optimization: From 2% to 12% Conversion Rate",
      excerpt: "The step-by-step process we used to increase a Motherwell e-commerce site's conversion rate by 500%, resulting in £200,000 additional annual revenue.",
      content: `
        <p>An e-commerce business in Motherwell was getting decent traffic but struggling with conversions. Despite investing heavily in marketing, their 2% conversion rate was far below industry standards.</p>

        <h3>The Conversion Challenge</h3>
        <p>Initial analysis revealed several conversion barriers:</p>
        <ul>
          <li>Confusing navigation and product categorization</li>
          <li>Slow checkout process with too many steps</li>
          <li>Lack of trust signals and social proof</li>
          <li>Poor mobile experience</li>
          <li>Unclear value propositions</li>
        </ul>

        <h3>Our Conversion Optimization Strategy</h3>

        <h4>1. User Experience Audit</h4>
        <p>We conducted heat map analysis, user session recordings, and customer surveys to understand exactly where users were dropping off and why.</p>

        <h4>2. Homepage Optimization</h4>
        <p>We redesigned the homepage with a clear value proposition, prominent search functionality, and featured products with compelling imagery and descriptions.</p>

        <h4>3. Product Page Enhancement</h4>
        <p>Each product page was optimized with high-quality images, detailed descriptions, customer reviews, and urgency elements like stock levels and delivery times.</p>

        <h4>4. Checkout Simplification</h4>
        <p>We reduced the checkout process from 5 steps to 2, implemented guest checkout, and added multiple payment options including PayPal and Apple Pay.</p>

        <h4>5. Trust Signal Implementation</h4>
        <p>We added security badges, customer testimonials, return policy prominently displayed, and live chat support for immediate assistance.</p>

        <h4>6. Mobile Optimization</h4>
        <p>The entire mobile experience was rebuilt with thumb-friendly navigation, simplified forms, and one-click purchasing options.</p>

        <h3>Impressive Results</h3>
        <p>The conversion optimization program delivered outstanding results:</p>
        <ul>
          <li>Conversion rate increased from 2% to 12%</li>
          <li>Average order value increased by 35%</li>
          <li>Cart abandonment reduced from 70% to 45%</li>
          <li>Mobile conversions improved by 400%</li>
          <li>£200,000 additional annual revenue</li>
        </ul>

        <h3>Conversion Optimization Tips for Central Scotland Businesses</h3>
        <p>Focus on removing friction from the user journey, build trust through social proof, and always test changes before full implementation. Small improvements compound to create significant results.</p>
      `,
      category: "Web Development",
      date: "2024-01-05",
      readTime: "9 min read",
      image: blogConversion,
      author: "DEM Digital Team"
    },
    {
      id: 4,
      title: "Social Media Advertising: £50,000 Revenue from £5,000 Ad Spend",
      excerpt: "How our targeted Facebook and Instagram campaigns helped a Central Scotland retailer achieve a 10:1 return on their social media advertising investment.",
      content: `
        <p>A fashion retailer with stores across Central Scotland wanted to expand their reach beyond foot traffic. They had tried social media advertising before but saw poor results and were skeptical about its effectiveness.</p>

        <h3>The Social Media Challenge</h3>
        <p>Their previous attempts at social media advertising failed because of:</p>
        <ul>
          <li>Generic audience targeting without proper research</li>
          <li>Low-quality creative that didn't stop the scroll</li>
          <li>No clear funnel strategy</li>
          <li>Poor tracking and attribution</li>
          <li>Inconsistent posting and engagement</li>
        </ul>

        <h3>Our Social Media Strategy</h3>

        <h4>1. Audience Research & Targeting</h4>
        <p>We conducted detailed audience research to create custom audiences based on interests, behaviors, and demographics specific to Central Scotland fashion shoppers.</p>

        <h4>2. Creative Development</h4>
        <p>We produced high-quality video content showcasing products in lifestyle settings, user-generated content campaigns, and seasonal fashion lookbooks.</p>

        <h4>3. Funnel Optimization</h4>
        <p>We created a complete funnel from awareness to purchase with retargeting campaigns for website visitors, abandoned cart recovery, and loyalty campaigns for existing customers.</p>

        <h4>4. Campaign Structure</h4>
        <p>Campaigns were organized by objective: brand awareness, traffic generation, lead generation, and conversions, each with tailored creative and targeting.</p>

        <h4>5. Performance Tracking</h4>
        <p>We implemented comprehensive tracking including Facebook Pixel, conversion API, and attribution modeling to accurately measure ROI across all touchpoints.</p>

        <h3>Outstanding Results</h3>
        <p>The social media transformation exceeded all expectations:</p>
        <ul>
          <li>£50,000 revenue from £5,000 ad spend (10:1 ROAS)</li>
          <li>300% increase in online store traffic</li>
          <li>2,500 new email subscribers in 3 months</li>
          <li>40% increase in in-store footfall</li>
          <li>15,000 new social media followers</li>
        </ul>

        <h3>Social Media Advertising Success Tips</h3>
        <p>Success on social media requires understanding your audience deeply, creating scroll-stopping content, and building comprehensive funnels. Always test different creative formats and optimize based on data, not assumptions.</p>
      `,
      category: "Social Media",
      date: "2023-12-28",
      readTime: "6 min read",
      image: blogSocialMedia,
      author: "DEM Digital Team"
    },
    {
      id: 5,
      title: "Mobile-First Design: How We Increased Mobile Sales by 250%",
      excerpt: "The mobile optimization strategy that transformed a struggling e-commerce site into a mobile sales powerhouse, generating an additional £150,000 in mobile revenue.",
      content: `
        <p>A Central Scotland outdoor equipment retailer noticed that while 70% of their traffic came from mobile devices, mobile sales only accounted for 20% of revenue. The disconnect was costing them thousands in lost sales.</p>

        <h3>The Mobile Problem</h3>
        <p>Analysis revealed critical mobile experience issues:</p>
        <ul>
          <li>Slow loading times on mobile networks</li>
          <li>Difficult navigation with small touch targets</li>
          <li>Complex checkout process unsuitable for mobile</li>
          <li>Poor product image quality on small screens</li>
          <li>Forms that were difficult to complete on mobile</li>
        </ul>

        <h3>Our Mobile-First Approach</h3>

        <h4>1. Performance Optimization</h4>
        <p>We implemented advanced caching, image optimization, and code minification to achieve sub-2-second loading times on 3G networks.</p>

        <h4>2. Touch-Friendly Interface</h4>
        <p>All buttons and links were redesigned to meet touch target guidelines, with improved spacing and visual feedback for user interactions.</p>

        <h4>3. Simplified Navigation</h4>
        <p>We created a mobile-specific navigation with hamburger menu, search prominence, and category filters optimized for thumb navigation.</p>

        <h4>4. Mobile Checkout Optimization</h4>
        <p>The checkout was redesigned as a single-page process with auto-fill capabilities, mobile payment options, and clear progress indicators.</p>

        <h4>5. Progressive Web App Features</h4>
        <p>We implemented PWA functionality including offline browsing, push notifications, and app-like experience without requiring an app download.</p>

        <h3>Remarkable Mobile Results</h3>
        <p>The mobile optimization delivered exceptional improvements:</p>
        <ul>
          <li>250% increase in mobile conversion rate</li>
          <li>£150,000 additional mobile revenue annually</li>
          <li>60% reduction in mobile bounce rate</li>
          <li>Mobile page speed improved from 8s to 1.8s</li>
          <li>40% increase in mobile average order value</li>
        </ul>

        <h3>Mobile Optimization Best Practices</h3>
        <p>Prioritize speed above all else, design for thumb navigation, simplify every interaction, and test on real devices with varying network conditions. Mobile users have different behaviors and expectations than desktop users.</p>
      `,
      category: "Web Development",
      date: "2023-12-20",
      readTime: "7 min read",
      image: blogMobileDesign,
      author: "DEM Digital Team"
    },
    {
      id: 6,
      title: "Local SEO Domination: Ranking #1 in All Target Cities",
      excerpt: "The local SEO strategy that helped a multi-location service business achieve first-page rankings in Motherwell, Glasgow, Hamilton, and East Kilbride simultaneously.",
      content: `
        <p>A heating and plumbing company with locations across Central Scotland was invisible in local searches despite being established for over 20 years. They were losing business to newer competitors who understood digital marketing.</p>

        <h3>The Local SEO Challenge</h3>
        <p>Their local search presence was practically non-existent due to:</p>
        <ul>
          <li>Inconsistent NAP (Name, Address, Phone) across directories</li>
          <li>Weak Google My Business optimization</li>
          <li>No location-specific content strategy</li>
          <li>Poor local citation profile</li>
          <li>Limited customer reviews and testimonials</li>
        </ul>

        <h3>Our Local SEO Strategy</h3>

        <h4>1. Multi-Location Optimization</h4>
        <p>We created separate Google My Business profiles for each location with unique content, images, and optimized descriptions targeting location-specific keywords.</p>

        <h4>2. Citation Building Campaign</h4>
        <p>We built consistent citations across 50+ local directories, ensuring NAP consistency and category accuracy for each location.</p>

        <h4>3. Location-Specific Content</h4>
        <p>We developed dedicated landing pages for each service area with locally relevant content, customer testimonials, and area-specific service information.</p>

        <h4>4. Review Management System</h4>
        <p>We implemented a systematic approach to request and manage customer reviews, responding to all feedback and showcasing positive testimonials.</p>

        <h4>5. Local Link Building</h4>
        <p>We secured high-quality local backlinks from Central Scotland business directories, local newspapers, and industry associations.</p>

        <h3>Exceptional Local Results</h3>
        <p>The local SEO campaign achieved remarkable visibility:</p>
        <ul>
          <li>#1 rankings for primary keywords in all target cities</li>
          <li>400% increase in Google My Business views</li>
          <li>300% more phone calls from local searches</li>
          <li>150% increase in service bookings</li>
          <li>Average review rating improved from 3.2 to 4.8 stars</li>
        </ul>

        <h3>Local SEO Success Factors</h3>
        <p>Consistency is key in local SEO. Ensure your business information is identical everywhere, actively collect reviews, create location-specific content, and engage with your local community both online and offline.</p>
      `,
      category: "SEO",
      date: "2023-12-15",
      readTime: "8 min read",
      image: blogLocalSeo,
      author: "DEM Digital Team"
    }
  ];

  const categories = ["All", "SEO", "Google Ads", "Social Media", "Web Development"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const [selectedPost, setSelectedPost] = useState(null);

  if (selectedPost) {
    return (
      <div className="min-h-screen">
        <TopBar />
        <Navigation />
        
        {/* Article Header */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button 
              variant="outline" 
              onClick={() => setSelectedPost(null)}
              className="mb-6 text-white border-white hover:bg-white hover:text-primary"
            >
              ← Back to Blog
            </Button>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{selectedPost.title}</h1>
            <div className="flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{selectedPost.readTime}</span>
              </div>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">{selectedPost.category}</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <img 
              src={selectedPost.image} 
              alt={selectedPost.title}
              className="w-full h-64 object-cover rounded-2xl mb-8"
            />
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />
            
            {/* CTA Section */}
            <div className="mt-12 p-8 bg-gradient-primary rounded-2xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Achieve Similar Results?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Get a free consultation and custom strategy for your Central Scotland business. 
                Let's discuss how we can help you achieve remarkable digital marketing results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Get Free Consultation
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                  Call +44 7365 343449
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Digital Marketing
            <span className="block text-accent">Success Stories</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto">
            Real results from real businesses across Motherwell, Glasgow, and Central Scotland. 
            Learn from our proven strategies and case studies.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-gradient-subtle rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                    {post.category}
                  </span>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary-light p-0"
                    onClick={() => setSelectedPost(post)}
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
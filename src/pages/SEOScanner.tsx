import { useState } from "react";
import { Search, CheckCircle, XCircle, AlertTriangle, Globe, ArrowRight, Target, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

const SEOScanner = () => {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  const handleScan = async () => {
    if (!url || !email) return;
    
    setIsScanning(true);
    setError("");
    setResults(null);
    
    try {
      // Save email to newsletter signups (silently, don't block the scan)
      try {
        await supabase
          .from('newsletter_signups')
          .insert({ 
            email: email.toLowerCase().trim(),
            source: 'seo-scanner'
          });
      } catch (emailError) {
        // Log but don't fail the scan if email is already in database
        console.log('Newsletter signup:', emailError);
      }

      const { data, error } = await supabase.functions.invoke('seo-scan', {
        body: { url }
      });
      
      if (error) {
        throw new Error(error.message || 'Failed to scan website');
      }
      
      // The data is now in enhanced format from the edge function
      const transformedResults = {
        score: data.score || 0,
        seoScore: data.seoScore || 0,
        issues: data.issues || [],
        performance: data.performance || {},
        technical: data.technical || {},
        content: data.content || {},
        metrics: {
          first_contentful_paint: data.performance?.fcp || 'N/A',
          speed_index: data.performance?.speed || 'N/A', 
          time_to_interactive: data.performance?.lcp || 'N/A',
          total_blocking_time: data.performance?.cls || 'N/A'
        }
      };
      
      setResults(transformedResults);
    } catch (err) {
      console.error('Scan error:', err);
      setError(err instanceof Error ? err.message : 'Failed to scan website');
    } finally {
      setIsScanning(false);
    }
  };

  const getIconByType = (type: string) => {
    switch (type) {
      case "error": return <XCircle className="w-5 h-5 text-red-500" />;
      case "warning": return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case "success": return <CheckCircle className="w-5 h-5 text-green-500" />;
      default: return <AlertTriangle className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Free SEO Scanner
            <span className="block text-accent">for Central Scotland</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto">
            Get an instant SEO health check for your website. See exactly what's holding you back 
            from ranking higher in Motherwell, Glasgow, and Central Scotland searches.
          </p>
        </div>
      </section>

      {/* Scanner Tool */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-subtle rounded-2xl p-8 shadow-card text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6">
              <Search className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Enter Your Website URL
            </h2>
            
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our advanced SEO scanner will analyze your website for 40+ ranking factors 
              and provide actionable recommendations to improve your Central Scotland search visibility.
            </p>

            <div className="max-w-lg mx-auto">
              <form onSubmit={(e) => { e.preventDefault(); handleScan(); }} className="space-y-4">
                <Input 
                  type="url"
                  placeholder="https://yourwebsite.co.uk"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="text-lg"
                  required
                />
                <Input 
                  type="email"
                  placeholder="Your email for the report"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-lg"
                  required
                />
                <p className="text-xs text-muted-foreground text-left">
                  By providing your email, you agree to receive our occasional newsletter with SEO tips and digital marketing insights. You can unsubscribe at any time.
                </p>
                <Button 
                  type="submit"
                  variant="cta" 
                  disabled={!url || !email || isScanning}
                  className="w-full"
                >
                  {isScanning ? "Scanning..." : "Scan Now"}
                </Button>
                
                {error && (
                  <p className="text-red-500 text-sm mt-2">{error}</p>
                )}
              </form>
              
              <p className="text-sm text-muted-foreground">
                ✓ Completely free • ✓ No signup required • ✓ Instant results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Loading/Results */}
      {isScanning && (
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-spin w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-6"></div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Analyzing Your Website...</h3>
            <p className="text-muted-foreground">
              Checking 40+ SEO factors including page speed, mobile optimization, meta tags, and more...
            </p>
          </div>
        </section>
      )}

      {results && (
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Overall Score: <span className="text-primary">{Math.round(results.score)}/100</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-2">
                Composite score based on Performance (40%), SEO (30%), Accessibility (20%), and Best Practices (10%)
              </p>
              <p className="text-sm text-muted-foreground">
                Individual SEO Score: <span className="font-semibold">{results.seoScore || 'N/A'}/100</span>
              </p>
            </div>
              
              {/* Core Scores */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-white rounded-lg p-4 shadow-card">
                  <h3 className="text-sm font-medium text-muted-foreground">Performance</h3>
                  <p className="text-lg font-bold text-foreground">{results.performance?.performanceScore || 'N/A'}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-card">
                  <h3 className="text-sm font-medium text-muted-foreground">Accessibility</h3>
                  <p className="text-lg font-bold text-foreground">{results.performance?.accessibility || 'N/A'}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-card">
                  <h3 className="text-sm font-medium text-muted-foreground">Best Practices</h3>
                  <p className="text-lg font-bold text-foreground">{results.performance?.bestPractices || 'N/A'}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-card">
                  <h3 className="text-sm font-medium text-muted-foreground">First Contentful Paint</h3>
                  <p className="text-lg font-bold text-foreground">{results.performance?.fcp || 'N/A'}</p>
                </div>
              </div>

              {/* Core Web Vitals */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 shadow-card">
                  <h3 className="text-sm font-medium text-blue-700">Largest Contentful Paint</h3>
                  <p className="text-lg font-bold text-blue-900">{results.performance?.lcp || 'N/A'}</p>
                  <p className="text-xs text-blue-600">Should be under 2.5s</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 shadow-card">
                  <h3 className="text-sm font-medium text-green-700">Cumulative Layout Shift</h3>
                  <p className="text-lg font-bold text-green-900">{results.performance?.cls || 'N/A'}</p>
                  <p className="text-xs text-green-600">Should be under 0.1</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4 shadow-card">
                  <h3 className="text-sm font-medium text-purple-700">Speed Index</h3>
                  <p className="text-lg font-bold text-purple-900">{results.performance?.speed || 'N/A'}</p>
                  <p className="text-xs text-purple-600">Lower is better</p>
                </div>
              </div>

              {/* Technical & Content Analysis */}
              {results.technical && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="bg-white rounded-lg p-4 shadow-card">
                    <h3 className="text-sm font-medium text-muted-foreground">Word Count</h3>
                    <p className="text-lg font-bold text-foreground">{results.content?.wordCount || 0}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-card">
                    <h3 className="text-sm font-medium text-muted-foreground">Internal Links</h3>
                    <p className="text-lg font-bold text-foreground">{results.technical.internalLinks}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-card">
                    <h3 className="text-sm font-medium text-muted-foreground">External Links</h3>
                    <p className="text-lg font-bold text-foreground">{results.technical.externalLinks}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-card">
                    <h3 className="text-sm font-medium text-muted-foreground">Total Images</h3>
                    <p className="text-lg font-bold text-foreground">{results.technical.imageCount}</p>
                  </div>
                </div>
              )}

              {/* Content Quality Details */}
              {results.content && (
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mt-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Content Analysis</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">{results.content.titleLength}</div>
                      <div className="text-sm text-muted-foreground">Title Length</div>
                      <div className="text-xs text-gray-500">Optimal: 30-60 chars</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{results.content.metaDescLength}</div>
                      <div className="text-sm text-muted-foreground">Meta Description</div>
                      <div className="text-xs text-gray-500">Optimal: 120-160 chars</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{results.content.h1Count}</div>
                      <div className="text-sm text-muted-foreground">H1 Tags</div>
                      <div className="text-xs text-gray-500">Optimal: 1 per page</div>
                    </div>
                  </div>
                </div>
              )}

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Issues List */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground mb-6">Performance Analysis</h3>
                {results.issues.map((issue, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-card">
                    <div className="flex items-start gap-4">
                      {getIconByType(issue.type)}
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{issue.title}</h4>
                        <p className="text-muted-foreground text-sm">{issue.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recommendations */}
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-bold text-foreground mb-6">Next Steps</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground mb-2">
                      Quick Wins (1-2 hours)
                    </h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Optimize images (compress, modern formats)</li>
                      <li>• Enable browser caching</li>
                      <li>• Minify CSS and JavaScript</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-foreground mb-2">
                      Medium Impact (1-2 weeks)
                    </h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Implement lazy loading</li>
                      <li>• Optimize server response times</li>
                      <li>• Use a Content Delivery Network (CDN)</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-foreground mb-2">
                      Long-term Strategy (1-6 months)
                    </h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Monitor Core Web Vitals</li>
                      <li>• Regular performance audits</li>
                      <li>• Advanced optimization techniques</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-primary rounded-lg text-white text-center">
                  <h4 className="font-bold mb-2">Want Expert Help?</h4>
                  <p className="text-white/90 text-sm mb-4">
                    Get a detailed SEO audit and custom strategy from Central Scotland's 
                    leading digital marketing experts.
                  </p>
                  <Button 
                    variant="hero" 
                    size="sm"
                    onClick={() => window.location.href = '/free-seo-audit'}
                  >
                    Get Professional SEO Audit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              What Our SEO Scanner Checks
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive SEO analysis covers all the factors that matter for 
              ranking well in Central Scotland searches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Technical SEO",
                items: ["Page Speed", "Mobile Optimization", "SSL Certificate", "URL Structure"]
              },
              {
                title: "On-Page SEO", 
                items: ["Title Tags", "Meta Descriptions", "Header Tags", "Keyword Optimization"]
              },
              {
                title: "Content Quality",
                items: ["Content Length", "Keyword Density", "Readability", "Duplicate Content"]
              },
              {
                title: "Local SEO",
                items: ["Google My Business", "Local Citations", "NAP Consistency", "Local Keywords"]
              },
              {
                title: "User Experience",
                items: ["Core Web Vitals", "Mobile Usability", "Navigation", "Internal Links"]
              },
              {
                title: "Competitive Analysis",
                items: ["Competitor Comparison", "Keyword Gaps", "Backlink Profile", "Market Position"]
              }
            ].map((category, index) => (
              <div key={index} className="bg-gradient-subtle rounded-2xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our SEO Scanner - Content Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Why Use Our <span className="text-primary">Free SEO Scanner</span>?
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  SEO is crucial for businesses in Central Scotland looking to compete online. With over 3.5 billion searches conducted daily on Google, your website's visibility can make or break your business growth. Our free SEO scanner provides comprehensive analysis specifically tailored for Scottish businesses operating in Motherwell, Glasgow, Hamilton, and surrounding areas.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Unlike generic SEO tools, our scanner understands the unique challenges facing Scottish businesses. We analyze local search factors, competitor landscapes specific to Central Scotland markets, and provide actionable recommendations that actually work for businesses in our region. Whether you're a local tradesperson, professional service provider, or retail business, our tool identifies the exact SEO improvements needed to outrank your competitors.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The best part? It's completely free and provides instant results. No hidden costs, no complicated setups - just honest, professional SEO analysis that helps you understand where your website stands and what needs to be improved to attract more local customers and grow your business online.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/services">
                  <Button variant="default" size="lg" className="group">
                    Explore Our SEO Services
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button variant="outline" size="lg">
                    View SEO Success Stories
                  </Button>
                </Link>
                <Link to="/blog">
                  <Button variant="outline" size="lg">
                    Read SEO Tips & Guides
                  </Button>
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-card border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Local Market Focus
                    </h3>
                    <p className="text-muted-foreground">
                      Specifically designed for Central Scotland businesses with local search optimization strategies that work in Motherwell, Glasgow, and surrounding areas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-card border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Advanced Analysis
                    </h3>
                    <p className="text-muted-foreground">
                      Goes beyond basic checks to analyze Core Web Vitals, mobile optimization, local SEO factors, and competitor positioning in your specific market.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-card border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Expert Insights
                    </h3>
                    <p className="text-muted-foreground">
                      Built by professional SEO consultants with years of experience helping Central Scotland businesses achieve top rankings and increased online visibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Section */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Instant SEO Analysis</h3>
              <p className="text-muted-foreground mb-6">
                Get immediate insights into your website's SEO performance with our lightning-fast scanner. No waiting, no delays - just comprehensive results in seconds that help you understand exactly where your site stands in search rankings.
              </p>
              <Link to="/free-seo-audit">
                <Button variant="outline">Get Professional Audit</Button>
              </Link>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Local SEO Expertise</h3>
              <p className="text-muted-foreground mb-6">
                Our team understands the Central Scotland market inside and out. We know what works for local businesses and how to help you compete effectively against other businesses in Motherwell, Glasgow, and the wider region.
              </p>
              <Link to="/about">
                <Button variant="outline">Learn About Our Team</Button>
              </Link>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Actionable Recommendations</h3>
              <p className="text-muted-foreground mb-6">
                Don't just get scores - get specific, actionable recommendations that you can implement immediately. Our scanner provides clear, prioritized steps to improve your SEO and start ranking higher in local searches.
              </p>
              <Link to="/contact">
                <Button variant="outline">Get SEO Help</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Professional SEO Help?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Our free scanner gives you a starting point, but professional SEO requires expertise. 
            Get a comprehensive audit and custom strategy from Central Scotland's SEO experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.location.href = '/free-seo-audit'}
            >
              Get Professional SEO Audit
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.open('tel:+447365343449', '_self')}
            >
              Call +44 7365 343449
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOScanner;
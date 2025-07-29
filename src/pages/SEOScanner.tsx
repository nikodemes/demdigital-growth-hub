import { useState } from "react";
import { Search, CheckCircle, XCircle, AlertTriangle, Globe } from "lucide-react";
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
      const { data, error } = await supabase.functions.invoke('seo-scan', {
        body: { url }
      });
      
      if (error) {
        throw new Error(error.message || 'Failed to scan website');
      }
      
      // The data is already in the expected format from the edge function
      const transformedResults = {
        score: data.score || 0,
        issues: data.issues || [],
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
                Performance Score: <span className="text-primary">{Math.round(results.score)}/100</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Here's your website's performance analysis and recommendations for improvement
              </p>
              
              {/* Performance Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-white rounded-lg p-4 shadow-card">
                  <h3 className="text-sm font-medium text-muted-foreground">First Contentful Paint</h3>
                  <p className="text-lg font-bold text-foreground">{results.metrics.first_contentful_paint || 'N/A'}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-card">
                  <h3 className="text-sm font-medium text-muted-foreground">Speed Index</h3>
                  <p className="text-lg font-bold text-foreground">{results.metrics.speed_index || 'N/A'}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-card">
                  <h3 className="text-sm font-medium text-muted-foreground">Time to Interactive</h3>
                  <p className="text-lg font-bold text-foreground">{results.metrics.time_to_interactive || 'N/A'}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-card">
                  <h3 className="text-sm font-medium text-muted-foreground">Total Blocking Time</h3>
                  <p className="text-lg font-bold text-foreground">{results.metrics.total_blocking_time || 'N/A'}</p>
                </div>
              </div>
            </div>

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
                  <Button variant="hero" size="sm">
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
            <Button variant="hero" size="lg">
              Get Professional SEO Audit
            </Button>
            <Button variant="secondary" size="lg">
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
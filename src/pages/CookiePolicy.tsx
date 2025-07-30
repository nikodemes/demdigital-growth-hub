import { useEffect } from "react";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().getFullYear()}</p>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better browsing experience by remembering your preferences 
              and analyzing how you use our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
            <p className="mb-4">We use cookies for several purposes:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
                <p className="mb-3">These cookies are necessary for the website to function properly:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Session management</li>
                  <li>Security features</li>
                  <li>Form submission</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Analytics Cookies</h3>
                <p className="mb-3">These help us understand website usage:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Google Analytics</li>
                  <li>Page views and user behavior</li>
                  <li>Traffic sources and patterns</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Marketing Cookies</h3>
                <p className="mb-3">Used for advertising and retargeting:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Google Ads tracking</li>
                  <li>Facebook Pixel</li>
                  <li>Conversion tracking</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
            <p className="mb-4">
              Our website may contain cookies from third-party services including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Google Analytics:</strong> Website traffic analysis</li>
              <li><strong>Google Ads:</strong> Advertising and conversion tracking</li>
              <li><strong>Facebook:</strong> Social media integration and advertising</li>
              <li><strong>YouTube:</strong> Video content embedding</li>
            </ul>
            <p>
              These third parties have their own privacy policies and cookie practices, 
              which we encourage you to review.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Managing Your Cookie Preferences</h2>
            <p className="mb-4">You can control cookies in several ways:</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Browser Settings</h3>
                <p>Most browsers allow you to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>View and delete cookies</li>
                  <li>Block cookies from specific sites</li>
                  <li>Block third-party cookies</li>
                  <li>Clear all cookies when you close the browser</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Opt-Out Links</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                  <li><a href="https://www.facebook.com/help/568137493302217" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Facebook Cookie Settings</a></li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookie Consent</h2>
            <p>
              By continuing to use our website, you consent to our use of cookies as described in this policy. 
              You can withdraw your consent at any time by adjusting your browser settings or contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or for legal and regulatory reasons. We will notify you of any significant changes by 
              posting the new policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p><strong>DEM Digital</strong></p>
              <p>Email: hello@demdigital.co.uk</p>
              <p>Phone: +44 7365 343449</p>
              <p>Address: 6 Panmuir Crescent, ML15UR</p>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;
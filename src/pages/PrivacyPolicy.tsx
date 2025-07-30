import { useEffect } from "react";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().getFullYear()}</p>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              At DEM Digital, we collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Fill out contact forms or request consultations</li>
              <li>Subscribe to our newsletter</li>
              <li>Use our SEO scanner tool</li>
              <li>Communicate with us via email or phone</li>
            </ul>
            <p>
              This information may include your name, email address, phone number, business name, 
              website URL, and any messages you send to us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide and improve our digital marketing services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Analyze website usage and improve user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy. We may share your information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>With service providers who assist us in operating our website and business</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, 
              no internet transmission is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="mb-4">Under applicable data protection laws, you have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. For detailed information 
              about our cookie usage, please see our Cookie Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us at:
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p><strong>DEM Digital</strong></p>
              <p>Email: hello@demdigital.co.uk</p>
              <p>Phone: +44 7365 343449</p>
              <p>Location: Motherwell, Central Scotland</p>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
import { useEffect } from "react";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().getFullYear()}</p>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services provided by DEM Digital ("we," "us," or "our"), 
              you agree to be bound by these Terms of Service. If you do not agree to these terms, 
              please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
            <p className="mb-4">DEM Digital provides digital marketing services including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Search Engine Optimization (SEO)</li>
              <li>Pay-Per-Click (PPC) advertising management</li>
              <li>Social media advertising</li>
              <li>Website design and development</li>
              <li>Digital marketing consultations and audits</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Client Responsibilities</h2>
            <p className="mb-4">As our client, you agree to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide accurate and complete information for service delivery</li>
              <li>Respond to requests for information in a timely manner</li>
              <li>Pay invoices according to agreed payment terms</li>
              <li>Comply with applicable laws and regulations</li>
              <li>Not engage in activities that could harm our reputation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
            <p className="mb-4">
              Payment terms will be specified in individual service agreements. Generally:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Invoices are due within 30 days of issue date</li>
              <li>Late payments may incur additional charges</li>
              <li>Services may be suspended for non-payment</li>
              <li>All prices are subject to applicable taxes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Service Performance</h2>
            <p>
              While we strive to deliver excellent results, digital marketing outcomes can vary based 
              on numerous factors including market conditions, competition, and industry specifics. 
              We cannot guarantee specific results such as rankings, traffic increases, or revenue growth.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p className="mb-4">
              We retain ownership of our methodologies, processes, and tools. Upon full payment:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Clients own content they provide</li>
              <li>Clients receive rights to deliverables created specifically for them</li>
              <li>We retain rights to general knowledge and experience gained</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p>
              Our total liability for any claims arising from our services shall not exceed the amount 
              paid by the client for services in the 12 months preceding the claim. We are not liable 
              for indirect, incidental, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
            <p className="mb-4">
              Either party may terminate services with written notice as specified in the service agreement. 
              Upon termination:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>All outstanding invoices become immediately due</li>
              <li>We will provide transition assistance for ongoing campaigns</li>
              <li>Confidentiality obligations continue</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us:
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

export default TermsOfService;
"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobOverlay from "@/components/BlobOverlay";

const PolicyPage = ({ title, children }) => (
  <div className="w-full overflow-hidden">
    <Navbar />
    <main className="pt-32 relative min-h-screen">
      <BlobOverlay />
      <div className="relative backdrop-blur-[100px] bg-c-black-1/35">
        <div className="container py-20">
          <h1 className="text-5xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-c-purple-2 via-white to-c-purple-3 mb-12">
            {title}
          </h1>
          <div className="max-w-4xl mx-auto bg-c-black-2/50 border border-c-purple-1/20 rounded-3xl p-8 md:p-12">
            <div className="prose prose-invert max-w-none text-white/85">
              {children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  </div>
);

export default function TermsPage() {
  return (
    <PolicyPage title="Terms & Conditions">
      <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
      <p className="mb-6">By accessing and using PixelKrafts services, you accept and agree to be bound by these Terms and Conditions.</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">2. Services</h2>
      <p className="mb-6">PixelKrafts provides web development, app development, SEO, digital marketing, and related software services as agreed upon with clients.</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">3. Payment Terms</h2>
      <p className="mb-6">Payment terms will be specified in individual project agreements. Clients agree to pay according to the agreed schedule.</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
      <p className="mb-6">Upon full payment, all intellectual property rights of the delivered work transfer to the client, unless otherwise specified.</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">5. Contact</h2>
      <p className="mb-6">For questions about these terms, contact us at official@pixelkrafts.in</p>
    </PolicyPage>
  );
}

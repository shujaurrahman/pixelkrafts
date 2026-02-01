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

export default function PrivacyPage() {
  return (
    <PolicyPage title="Privacy Policy">
      <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
      <p className="mb-6">We collect information you provide directly to us, such as name, email, phone number, and project details.</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
      <p className="mb-6">We use the information to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing</h2>
      <p className="mb-6">We do not sell or rent your personal information. We may share information with service providers who assist in our operations.</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">4. Security</h2>
      <p className="mb-6">We implement appropriate security measures to protect your personal information.</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Us</h2>
      <p className="mb-6">For privacy concerns, contact us at official@pixelkrafts.in</p>
    </PolicyPage>
  );
}

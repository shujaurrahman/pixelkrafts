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

export default function SecurityPage() {
  return (
    <PolicyPage title="Security Policy">
      <h2 className="text-2xl font-semibold text-white mb-4">1. Data Protection</h2>
      <p className="mb-6">We implement industry-standard security measures to protect client data and project information.</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">2. Secure Communication</h2>
      <p className="mb-6">All communications and data transfers are encrypted using SSL/TLS protocols.</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">3. Access Control</h2>
      <p className="mb-6">Access to client data is restricted to authorized personnel only on a need-to-know basis.</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">4. Incident Response</h2>
      <p className="mb-6">We have procedures in place to quickly respond to and mitigate security incidents.</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">5. Reporting</h2>
      <p className="mb-6">Report security concerns to official@pixelkrafts.in</p>
    </PolicyPage>
  );
}

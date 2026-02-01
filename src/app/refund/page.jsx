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

export default function RefundPage() {
  return (
    <PolicyPage title="Refund Policy">
      <h2 className="text-2xl font-semibold text-white mb-4">1. Refund Eligibility</h2>
      <p className="mb-6">Refunds are considered on a case-by-case basis. Generally, work completed according to specifications is non-refundable.</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">2. Request Process</h2>
      <p className="mb-6">Refund requests must be submitted in writing to official@pixelkrafts.in within 7 days of project delivery.</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">3. Partial Refunds</h2>
      <p className="mb-6">Partial refunds may be issued for incomplete work or work not meeting agreed specifications.</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">4. Processing Time</h2>
      <p className="mb-6">Approved refunds will be processed within 14 business days.</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">5. Contact</h2>
      <p className="mb-6">For refund inquiries, contact official@pixelkrafts.in</p>
    </PolicyPage>
  );
}

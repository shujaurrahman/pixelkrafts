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

export default function NDAPage() {
  return (
    <PolicyPage title="NDA Policy">
      <h2 className="text-2xl font-semibold text-white mb-4">1. Confidentiality Commitment</h2>
      <p className="mb-6">PixelKrafts commits to maintaining strict confidentiality of all client information, project details, and proprietary data.</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">2. Scope</h2>
      <p className="mb-6">All information shared during project discussions, development, and delivery is considered confidential.</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">3. Non-Disclosure</h2>
      <p className="mb-6">We will not disclose, share, or use confidential information except as necessary to complete the agreed-upon work.</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">4. Employee Obligations</h2>
      <p className="mb-6">All team members working on client projects are bound by confidentiality agreements.</p>
      
      <h2 className="text-2xl font-semibold text-white mb-4">5. Formal NDA</h2>
      <p className="mb-6">For additional protection, we&apos;re happy to sign formal NDA documents. Contact official@pixelkrafts.in</p>
    </PolicyPage>
  );
}

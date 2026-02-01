"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobOverlay from "@/components/BlobOverlay";
import { DownloadIcon } from "@/assets/Icons";

export default function CataloguePage() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      
      <main className="pt-32 relative min-h-screen">
        <BlobOverlay />
        
        <div className="relative backdrop-blur-[100px] bg-c-black-1/35">
          <div className="container py-16">
            {/* Header */}
            <div className="max-w-3xl mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Our <span className="bg-gradient-to-r from-c-purple-1 to-c-blue-1 bg-clip-text text-transparent">Catalogue</span>
              </h1>
              <p className="text-white/75 text-lg">
                Explore our comprehensive service catalogue showcasing all digital solutions we offer to help your business grow.
              </p>
            </div>

            {/* MSME Badge */}
            <div className="mb-8 inline-flex items-center gap-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-full px-5 py-2.5">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-green-400 text-sm font-semibold">MSME Certified</p>
                <p className="text-green-400/70 text-xs">UDYAM-UP-60-0038284</p>
              </div>
            </div>

            {/* Download Button */}
            <div className="mb-8">
              <a 
                href="/images/pixelkrafts.pdf" 
                download="PixelKrafts-Catalogue.pdf"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-c-purple-1 to-c-blue-1 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-c-purple-1/50 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Catalogue PDF
              </a>
            </div>

            {/* PDF Viewer */}
            <div className="bg-c-black-2/50 rounded-2xl border border-c-purple-1/20 overflow-hidden">
              <div className="bg-c-black-1/50 px-6 py-4 border-b border-c-purple-1/20 flex items-center justify-between">
                <h2 className="text-white font-medium">PixelKrafts Service Catalogue</h2>
                <a 
                  href="/images/pixelkrafts.pdf" 
                  target="_blank"
                  className="text-c-purple-1 hover:text-c-purple-2 text-sm flex items-center gap-2 transition-colors"
                >
                  Open in new tab
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <div className="w-full h-[80vh]">
                <iframe 
                  src="/images/pixelkrafts.pdf" 
                  className="w-full h-full"
                  title="PixelKrafts Catalogue"
                />
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-c-purple-1/10 to-c-blue-1/10 rounded-2xl p-8 md:p-12 text-center border border-c-purple-1/20">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-white/75 mb-8 max-w-2xl mx-auto">
                Found a service that fits your needs? Let&apos;s discuss how we can help transform your digital presence.
              </p>
              <a href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-c-purple-1 to-c-blue-1 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-c-purple-1/50 transition-all duration-300 hover:scale-105">
                  Contact Us Today
                </button>
              </a>
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
}

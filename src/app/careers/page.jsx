"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobOverlay from "@/components/BlobOverlay";

export default function CareersPage() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      
      <main className="pt-32 relative min-h-screen">
        <BlobOverlay />
        
        <div className="relative backdrop-blur-[100px] bg-c-black-1/35">
          <div className="container py-20">
            <h1 className="text-5xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-c-purple-2 via-white to-c-purple-3 mb-6">
              Join Our Team
            </h1>
            <p className="text-center text-white/75 text-lg max-w-3xl mx-auto mb-16">
              Be part of a team that&apos;s shaping the future of digital solutions
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-c-black-2/50 border border-c-purple-1/20 rounded-3xl p-8 mb-8">
                <h2 className="text-3xl font-semibold text-white mb-4">Why Work With Us?</h2>
                <ul className="space-y-4 text-white/75 text-lg">
                  <li className="flex items-start">
                    <span className="text-c-purple-1 mr-3">✓</span>
                    Work on cutting-edge technologies and innovative projects
                  </li>
                  <li className="flex items-start">
                    <span className="text-c-purple-1 mr-3">✓</span>
                    Flexible working hours and remote work options
                  </li>
                  <li className="flex items-start">
                    <span className="text-c-purple-1 mr-3">✓</span>
                    Continuous learning and skill development opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="text-c-purple-1 mr-3">✓</span>
                    Collaborative and supportive work environment
                  </li>
                  <li className="flex items-start">
                    <span className="text-c-purple-1 mr-3">✓</span>
                    Competitive compensation and benefits
                  </li>
                </ul>
              </div>
              
              <div className="bg-c-black-2/50 border border-c-purple-1/20 rounded-3xl p-8">
                <h2 className="text-3xl font-semibold text-white mb-4">Current Openings</h2>
                <p className="text-white/75 mb-6">
                  We&apos;re always looking for talented individuals. Send your resume to{" "}
                  <a href="mailto:careers@pixelkrafts.in" className="text-c-purple-1 underline">
                    careers@pixelkrafts.in
                  </a>
                </p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-c-purple-1 pl-6 py-4">
                    <h3 className="text-xl font-semibold text-white">Full Stack Developer</h3>
                    <p className="text-white/75 mt-2">Experience: 2+ years | Location: Remote</p>
                  </div>
                  <div className="border-l-4 border-c-purple-1 pl-6 py-4">
                    <h3 className="text-xl font-semibold text-white">UI/UX Designer</h3>
                    <p className="text-white/75 mt-2">Experience: 1+ years | Location: Remote</p>
                  </div>
                  <div className="border-l-4 border-c-purple-1 pl-6 py-4">
                    <h3 className="text-xl font-semibold text-white">Digital Marketing Specialist</h3>
                    <p className="text-white/75 mt-2">Experience: 2+ years | Location: Remote</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Footer />
        </div>
      </main>
    </div>
  );
}

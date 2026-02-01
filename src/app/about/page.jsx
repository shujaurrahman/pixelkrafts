"use client"
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobOverlay from "@/components/BlobOverlay";
import { LightBulbIcon, RocketIcon, StarsIcon, GlobalIcon, GridPlusIcon, ThunderLightningIcon } from "@/assets/Icons";
import { getAboutPage, getFounders, urlFor } from "../../../lib/sanity.client";
import Image from "next/image";
import Link from "next/link";

// Icon mapping for journey
const iconMap = {
  LightBulbIcon,
  RocketIcon,
  StarsIcon,
  GlobalIcon,
  GridPlusIcon,
  ThunderLightningIcon
};

export default function AboutPage() {
  const [aboutData, setAboutData] = useState(null);
  const [founders, setFounders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [about, foundersData] = await Promise.all([
          getAboutPage(),
          getFounders()
        ]);
        setAboutData(about);
        setFounders(foundersData || []);
      } catch (error) {
        console.error('Error fetching about page data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      
      <main className="pt-32 relative min-h-screen">
        <BlobOverlay />
        
        <div className="relative backdrop-blur-[100px] bg-c-black-1/35">
          <div className="container py-20">
            <h1 className="text-5xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-c-purple-2 via-white to-c-purple-3 mb-8">
              {aboutData?.title || "About PixelKrafts"}
            </h1>
            
            <div className="max-w-6xl mx-auto text-white/85 space-y-16">
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-xl leading-relaxed">
                  {aboutData?.subtitle || "PixelKrafts is a software solutions agency combining expertise in development, design, and digital marketing to deliver comprehensive solutions that drive business growth."}
                </p>
              </div>

              {/* Founders Section */}
              {founders.length > 0 && (
                <div className="mt-20">
                  <h2 className="text-4xl font-semibold text-white text-center mb-12">Meet the Founders</h2>
                  <div className={`grid ${founders.length === 1 ? 'md:grid-cols-1 max-w-lg mx-auto' : 'md:grid-cols-2'} gap-12`}>
                    {founders.map((founder) => (
                      <div key={founder._id} className="bg-gradient-to-br from-c-purple-1/10 to-c-blue-1/10 p-8 rounded-2xl border border-c-purple-1/20 text-center">
                        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-c-purple-1/30 to-c-blue-1/30 flex items-center justify-center overflow-hidden">
                          {founder.image ? (
                            <Image 
                              src={urlFor(founder.image).width(128).height(128).url()} 
                              width={128} 
                              height={128} 
                              alt={founder.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-5xl">👨‍💻</span>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{founder.name}</h3>
                        <p className="text-c-purple-1 font-medium mb-4">{founder.position}</p>
                        <p className="text-white/75 leading-relaxed">{founder.bio}</p>
                        {founder.socialLinks && (
                          <div className="flex justify-center gap-4 mt-4">
                            {founder.socialLinks.linkedin && (
                              <a href={founder.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-c-purple-1 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                              </a>
                            )}
                            {founder.socialLinks.twitter && (
                              <a href={founder.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-c-purple-1 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                              </a>
                            )}
                            {founder.socialLinks.github && (
                              <a href={founder.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-c-purple-1 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                              </a>
                            )}
                            {founder.socialLinks.instagram && (
                              <a href={founder.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-c-purple-1 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Journey Timeline */}
              {aboutData?.journey && aboutData.journey.length > 0 && (
                <div className="mt-20">
                  <h2 className="text-4xl font-semibold text-white text-center mb-12">Our Journey</h2>
                  <div className="max-w-4xl mx-auto space-y-8">
                    {aboutData.journey.map((item, index) => {
                      const IconComponent = iconMap[item.iconName] || LightBulbIcon;
                      return (
                        <div key={index} className="flex gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-c-purple-1 to-c-blue-1 flex items-center justify-center">
                              <IconComponent className="w-5 h-5" />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-white/75">{item.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              
              {aboutData?.mission && (
                <>
                  <h2 className="text-3xl font-semibold text-white mt-16 mb-6">Our Mission</h2>
                  <p className="text-lg leading-relaxed">{aboutData.mission}</p>
                </>
              )}

              {aboutData?.vision && (
                <>
                  <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Our Vision</h2>
                  <p className="text-lg leading-relaxed">{aboutData.vision}</p>
                </>
              )}
              
              {aboutData?.whatWeDo && aboutData.whatWeDo.length > 0 && (
                <>
                  <h2 className="text-3xl font-semibold text-white mt-12 mb-6">What We Do</h2>
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    {aboutData.whatWeDo.map((item, index) => (
                      <div key={index} className="bg-c-black-2/50 p-6 rounded-2xl border border-c-purple-1/20">
                        <h3 className="text-xl font-semibold text-c-purple-1 mb-3">{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
              
              <h2 className="text-3xl font-semibold text-white mt-12 mb-6">
                Over {aboutData?.clientCount || "10+"}  Businesses Trust Us
              </h2>
              <p className="text-lg leading-relaxed">
                We&apos;ve helped numerous businesses across different industries to modernize their digital presence and streamline their operations.
              </p>

              {/* CTA Section */}
              <div className="mt-16 bg-gradient-to-r from-c-purple-1/10 to-c-blue-1/10 rounded-2xl p-8 text-center border border-c-purple-1/20">
                <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Project?</h3>
                <p className="text-white/75 mb-6">Let&apos;s discuss how we can help bring your ideas to life.</p>
                <Link href="/contact">
                  <button className="px-8 py-3 bg-gradient-to-r from-c-purple-1 to-c-blue-1 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-c-purple-1/50 transition-all">
                    Get a Free Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
          
          <Footer />
        </div>
      </main>
    </div>
  );
}

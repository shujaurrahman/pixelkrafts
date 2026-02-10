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
                  <h2 className="text-4xl font-semibold text-white text-center mb-4">Meet the Founders</h2>
                  <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">The visionaries behind PixelKrafts, driving innovation and excellence in every project.</p>
                  <div className={`grid ${founders.length === 1 ? 'md:grid-cols-1 max-w-xl mx-auto' : 'md:grid-cols-2'} gap-8`}>
                    {founders.map((founder) => (
                      <div key={founder._id} className="group relative bg-c-black-2/60 rounded-3xl overflow-hidden border border-c-purple-1/10 hover:border-c-purple-1/30 transition-all duration-500">
                        {/* Image Section */}
                        <div className="relative overflow-hidden">
                          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-c-black-2 to-transparent z-10" />
                          {founder.image ? (
                            <Image 
                              src={urlFor(founder.image).width(600).height(500).url()} 
                              width={600} 
                              height={500} 
                              alt={founder.name}
                              className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                            />
                          ) : (
                            <div className="w-full aspect-[6/5] bg-gradient-to-br from-c-purple-1/20 to-c-blue-1/20 flex items-center justify-center">
                              <span className="text-8xl">👨‍💻</span>
                            </div>
                          )}
                          {/* Social Links Overlay */}
                          {founder.socialLinks && (
                            <div className="absolute bottom-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {founder.socialLinks.linkedin && (
                                <a href={founder.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-c-purple-1 transition-all">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                </a>
                              )}
                              {founder.socialLinks.twitter && (
                                <a href={founder.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-c-purple-1 transition-all">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                </a>
                              )}
                              {founder.socialLinks.github && (
                                <a href={founder.socialLinks.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-c-purple-1 transition-all">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                </a>
                              )}
                              {founder.socialLinks.instagram && (
                                <a href={founder.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-c-purple-1 transition-all">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                        {/* Content Section */}
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-2xl font-bold text-white">{founder.name}</h3>
                            <span className="px-3 py-1 text-xs font-medium bg-c-purple-1/20 text-c-purple-1 rounded-full">{founder.position}</span>
                          </div>
                          <p className="text-white/70 leading-relaxed text-sm">{founder.bio}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Journey Timeline */}
              {aboutData?.journey && aboutData.journey.length > 0 && (
                <div className="mt-20">
                  <h2 className="text-4xl font-semibold text-white text-center mb-4">Our Journey</h2>
                  <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">Milestones that shaped who we are today.</p>
                  <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-c-purple-1 via-c-blue-1 to-c-purple-1/20 hidden md:block" />
                    <div className="space-y-6">
                      {aboutData.journey.map((item, index) => {
                        const IconComponent = iconMap[item.iconName] || LightBulbIcon;
                        return (
                          <div key={index} className="flex gap-6 group">
                            <div className="flex-shrink-0 relative z-10">
                              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-c-purple-1 to-c-blue-1 flex items-center justify-center shadow-lg shadow-c-purple-1/30 group-hover:scale-110 transition-transform duration-300">
                                <IconComponent className="w-5 h-5" />
                              </div>
                            </div>
                            <div className="flex-1 bg-c-black-2/40 rounded-2xl p-5 border border-c-purple-1/10 group-hover:border-c-purple-1/30 transition-colors">
                              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                              <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Mission & Vision */}
              {(aboutData?.mission || aboutData?.vision) && (
                <div className="mt-20 grid md:grid-cols-2 gap-6">
                  {aboutData?.mission && (
                    <div className="bg-gradient-to-br from-c-purple-1/5 to-transparent p-8 rounded-3xl border border-c-purple-1/10">
                      <div className="w-12 h-12 rounded-2xl bg-c-purple-1/20 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 14.9998L9 11.9998M12 14.9998C13.3968 14.4685 14.7369 13.7985 16 12.9998M12 14.9998V19.9998C12 19.9998 15.03 19.4498 16 17.9998C17.08 16.3798 16 12.9998 16 12.9998M9 11.9998C9.53214 10.6192 10.2022 9.29582 11 8.04976C12.1652 6.18675 13.7876 4.65281 15.713 3.59385C17.6384 2.53489 19.8027 1.98613 22 1.99976C22 4.71976 21.22 9.49976 16 12.9998M9 11.9998H4C4 11.9998 4.55 8.96976 6 7.99976C7.62 6.91976 11 7.99976 11 7.99976M4.5 16.4998C3 17.7598 2.5 21.4998 2.5 21.4998C2.5 21.4998 6.24 20.9998 7.5 19.4998C8.21 18.6598 8.2 17.3698 7.41 16.5898C7.02131 16.2188 6.50929 16.0044 5.97223 15.9878C5.43516 15.9712 4.91088 16.1535 4.5 16.4998Z" stroke="#9b59b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                      <p className="text-white/70 leading-relaxed">{aboutData.mission}</p>
                    </div>
                  )}
                  {aboutData?.vision && (
                    <div className="bg-gradient-to-br from-c-blue-1/5 to-transparent p-8 rounded-3xl border border-c-blue-1/10">
                      <div className="w-12 h-12 rounded-2xl bg-c-blue-1/20 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M17.1667 8.25C17.7807 8.25 18.3202 8.65697 18.4888 9.24726L19.9797 14.4653C20.6323 16.7492 22.4175 18.5345 24.7015 19.187L29.9195 20.6779C30.5098 20.8466 30.9167 21.3861 30.9167 22C30.9167 22.6139 30.5098 23.1534 29.9195 23.3221L24.7015 24.813C22.4175 25.4655 20.6323 27.2508 19.9797 29.5347L18.4888 34.7527C18.3202 35.343 17.7807 35.75 17.1667 35.75C16.5528 35.75 16.0133 35.343 15.8447 34.7527L14.3538 29.5347C13.7012 27.2508 11.9159 25.4655 9.63202 24.813L4.41401 23.3221C3.82372 23.1534 3.41675 22.6139 3.41675 22C3.41675 21.3861 3.82372 20.8466 4.41401 20.6779L9.63202 19.187C11.916 18.5345 13.7012 16.7492 14.3538 14.4653L15.8447 9.24726C16.0133 8.65697 16.5528 8.25 17.1667 8.25Z" fill="#3498db" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M33.6667 2.75C34.2977 2.75 34.8477 3.17941 35.0007 3.79151L35.4753 5.68986C35.9063 7.41411 37.2526 8.76041 38.9769 9.19147L40.8752 9.66605C41.4873 9.81908 41.9167 10.3691 41.9167 11C41.9167 11.6309 41.4873 12.1809 40.8752 12.3339L38.9769 12.8085C37.2526 13.2396 35.9063 14.5859 35.4753 16.3101L35.0007 18.2085C34.8477 18.8206 34.2977 19.25 33.6667 19.25C33.0358 19.25 32.4858 18.8206 32.3328 18.2085L31.8582 16.3101C31.4272 14.5859 30.0809 13.2396 28.3566 12.8085L26.4583 12.3339C25.8462 12.1809 25.4167 11.6309 25.4167 11C25.4167 10.3691 25.8462 9.81908 26.4583 9.66605L28.3566 9.19147C30.0809 8.76041 31.4272 7.41411 31.8582 5.68986L32.3328 3.79151C32.4858 3.17941 33.0358 2.75 33.6667 2.75Z" fill="#3498db" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M30.9167 27.5C31.5086 27.5 32.034 27.8787 32.2212 28.4402L32.944 30.6085C33.2177 31.4297 33.8621 32.0741 34.6832 32.3478L36.8516 33.0706C37.413 33.2577 37.7917 33.7832 37.7917 34.375C37.7917 34.9668 37.413 35.4923 36.8516 35.6794L34.6832 36.4022C33.8621 36.6759 33.2177 37.3203 32.944 38.1415L32.2212 40.3098C32.034 40.8713 31.5086 41.25 30.9167 41.25C30.3249 41.25 29.7995 40.8713 29.6123 40.3098L28.8895 38.1415C28.6158 37.3203 27.9714 36.6759 27.1503 36.4022L24.9819 35.6794C24.4205 35.4923 24.0417 34.9668 24.0417 34.375C24.0417 33.7832 24.4205 33.2577 24.9819 33.0706L27.1503 32.3478C27.9714 32.0741 28.6158 31.4297 28.8895 30.6085L29.6123 28.4402C29.7995 27.8787 30.3249 27.5 30.9167 27.5Z" fill="#3498db" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                      <p className="text-white/70 leading-relaxed">{aboutData.vision}</p>
                    </div>
                  )}
                </div>
              )}
              
              {aboutData?.whatWeDo && aboutData.whatWeDo.length > 0 && (
                <div className="mt-20">
                  <h2 className="text-4xl font-semibold text-white text-center mb-4">What We Do</h2>
                  <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">Comprehensive solutions to power your digital success.</p>
                  <div className="grid md:grid-cols-2 gap-5">
                    {aboutData.whatWeDo.map((item, index) => (
                      <div key={index} className="group bg-c-black-2/40 p-6 rounded-2xl border border-c-purple-1/10 hover:border-c-purple-1/30 hover:bg-c-black-2/60 transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-c-purple-1/20 to-c-blue-1/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <span className="text-lg font-bold text-c-purple-1">{String(index + 1).padStart(2, '0')}</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Trust Section */}
              <div className="mt-20 text-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-c-purple-1/10 rounded-full border border-c-purple-1/20 mb-6">
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-c-purple-1 to-c-blue-1">{aboutData?.clientCount || "10+"}</span>
                  <span className="text-white/70">Businesses Trust Us</span>
                </div>
                <p className="text-white/60 max-w-2xl mx-auto">
                  We&apos;ve helped numerous businesses across different industries to modernize their digital presence and streamline their operations.
                </p>
              </div>

              {/* CTA Section */}
              <div className="mt-20 relative overflow-hidden bg-gradient-to-br from-c-purple-1/10 via-c-black-2/50 to-c-blue-1/10 rounded-3xl p-10 md:p-14 text-center border border-c-purple-1/20">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-c-purple-1/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-c-blue-1/20 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
                  <p className="text-white/60 mb-8 max-w-xl mx-auto">Let&apos;s discuss how we can help bring your ideas to life and take your business to the next level.</p>
                  <Link href="/contact">
                    <button className="px-10 py-4 bg-gradient-to-r from-c-purple-1 to-c-blue-1 text-white rounded-2xl font-semibold hover:shadow-xl hover:shadow-c-purple-1/30 hover:scale-105 transition-all duration-300">
                      Get a Free Quote
                    </button>
                  </Link>
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

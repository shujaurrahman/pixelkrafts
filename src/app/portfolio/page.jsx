"use client"
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobOverlay from "@/components/BlobOverlay";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon, CircleArrowIcon, GlobalToolsIcon } from "@/assets/Icons";
import { getAllPortfolio, urlFor } from "../../../lib/sanity.client";

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'website', label: 'Websites' },
  { value: 'app', label: 'Mobile Apps' },
  { value: 'ecommerce', label: 'E-Commerce' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'ai', label: 'AI Solutions' },
  { value: 'design', label: 'UI/UX Design' }
];



// Portfolio Card Component - Dark Theme Design
const PortfolioCard = ({ title, category, shortDescription, mainImage, overview, slug }) => {
  const categoryLabel = categories.find(c => c.value === category)?.label || category;
  const technologies = overview?.technologies || [];
  
  return (
    <Link href={slug?.current ? `/portfolio/${slug.current}` : '#'}>
      <div className="group bg-white/[0.03] rounded-2xl overflow-hidden hover:bg-white/[0.06] transition-all duration-500 cursor-pointer border border-white/10 hover:border-c-purple-1/50 h-full flex flex-col">
        
        {/* Image Container */}
        <div className="relative w-full h-72 bg-gradient-to-br from-c-purple-1/10 to-white/5 overflow-hidden">
          {mainImage ? (
            <Image 
              width={600} 
              height={400} 
              src={urlFor(mainImage).width(600).height(400).url()} 
              alt={`${title} project`} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-8xl opacity-30">
                {category === 'website' && '🌐'}
                {category === 'app' && '📱'}
                {category === 'ecommerce' && '🛒'}
                {category === 'fullstack' && '⚙️'}
                {category === 'ai' && '🤖'}
                {category === 'design' && '🎨'}
              </span>
            </div>
          )}
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-c-purple-1/20 backdrop-blur-sm text-c-purple-1 px-4 py-2 rounded-full text-xs font-semibold border border-c-purple-1/30">
              {categoryLabel}
            </span>
          </div>
          
          {/* Arrow Icon */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-c-purple-1 transition-all duration-300 border border-white/20">
            <ArrowIcon className="fill-white group-hover:fill-white w-5 h-5 transition-all duration-300 group-hover:rotate-45" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-semibold text-2xl text-white mb-3 group-hover:text-c-purple-1 transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          
          <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
            {shortDescription}
          </p>

          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {technologies.slice(0, 4).map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs px-3 py-1.5 rounded-full bg-c-purple-1/20 text-c-purple-1 font-medium"
                >
                  {tag}
                </span>
              ))}
              {technologies.length > 4 && (
                <span className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-white/70 font-medium">
                  +{technologies.length - 4}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPortfolio() {
      try {
        const data = await getAllPortfolio();
        setPortfolioData(data || []);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
        setPortfolioData([]);
      } finally {
        setLoading(false);
      }
    }
    fetchPortfolio();
  }, []);
  
  const filteredProjects = activeFilter === 'all' 
    ? portfolioData 
    : portfolioData.filter(p => p.category === activeFilter);

  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      
      <main className="pt-32 relative min-h-screen">
        <BlobOverlay />
        
        <div className="relative backdrop-blur-[100px] bg-c-black-1/35">
          {/* Hero Section */}
          <div className="container py-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-c-purple-1/20 flex items-center justify-center">
                <GlobalToolsIcon className="stroke-c-purple-1 w-8 h-8" />
              </div>
              <span className="text-c-purple-1 text-sm tracking-widest uppercase font-semibold">Our Portfolio</span>
            </div>

            <h1 className="mb-6 font-bold xl:text-6xl md:text-5xl text-4xl text-white">
              Our Work of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-c-purple-1 to-c-purple-1/60">
                Digital Creations
              </span>
            </h1>
            
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl mb-12">
              From concept to completion, our projects reflect the expertise and creativity of our team. 
              Each project is a testament to our commitment to delivering innovative solutions tailored 
              to meet the unique needs of our clients.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveFilter(cat.value)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeFilter === cat.value
                      ? 'bg-c-purple-1 text-white shadow-lg shadow-c-purple-1/30 scale-105'
                      : 'bg-white/5 text-white/70 border border-white/10 hover:border-c-purple-1 hover:text-c-purple-1'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid Section */}
          <div className="container pb-20">
            {loading ? (
              <div className="flex items-center justify-center py-32">
                <div className="relative">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-c-purple-1"></div>
                  <div className="absolute inset-0 animate-ping rounded-full border-2 border-c-purple-1 opacity-20"></div>
                </div>
              </div>
            ) : filteredProjects.length === 0 ? (
              <div className="text-center py-32">
                <div className="text-8xl mb-6 opacity-20">📂</div>
                <h3 className="text-2xl font-semibold text-white mb-2">No Projects Found</h3>
                <p className="text-white/60">No projects found in this category. Check back soon!</p>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {filteredProjects.map((project) => (
                  <PortfolioCard key={project._id} {...project} />
                ))}
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="container pb-20">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-c-purple-1 to-c-purple-1/80 p-16 text-center shadow-2xl">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
              <div className="relative z-10">
                <h2 className="text-5xl font-bold text-white mb-6">Have a Project in Mind?</h2>
                <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                  Let&apos;s create something amazing together. Share your vision with us and let&apos;s bring it to life.
                </p>
                <Link href="/contact">
                  <button className="px-10 py-5 bg-white text-c-purple-1 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 group">
                    Start Your Project
                    <CircleArrowIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
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

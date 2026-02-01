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



// Portfolio Card Component matching OurWork UI
const PortfolioCard = ({ title, category, description, mainImage, technologies, slug }) => {
  const categoryLabel = categories.find(c => c.value === category)?.label || category;
  
  return (
    <div>
      <div
        className="bg-gradient-to-r from-[#E6DBFF] via-[#F6F6F6] via-45% to-[#D8D7FF] rounded-3xl md:px-9 px-5
                   2xl:pt-11 md:pt-14 pt-7 flex md:flex-row flex-col md:gap-4 gap-7 relative overflow-hidden"
      >
        <div className="md:pb-11 flex-1">
          <span className="border border-c-purple-1 md:text-super-xs text-xs rounded-full py-2 px-4">{categoryLabel}</span>
          <h3 className="font-medium 2xl:text-2xl text-2.5xl md:my-4 mt-3.5">{title}</h3>
          <p className="font-light md:text-base text-super-sm line-clamp-3">{description}</p>
        </div>

        <div className="pb-0 mb-0 flex flex-col justify-end">
          {mainImage ? (
            <Image 
              width={312} 
              height={200} 
              src={urlFor(mainImage).url()} 
              alt={`${title} project`} 
              className="2xl:w-[312px] lg:w-[380px] md:w-[300px] w-full rounded-t-xl object-contain bg-gradient-to-br from-c-purple-1/5 to-c-blue-1/5" 
            />
          ) : (
            <div className="2xl:w-[312px] lg:w-[380px] md:w-[300px] w-full h-[176px] bg-gradient-to-br from-c-purple-1/20 to-c-blue-1/20 rounded-t-xl flex items-center justify-center">
              <span className="text-6xl">
                {category === 'website' && '🌐'}
                {category === 'app' && '📱'}
                {category === 'ecommerce' && '🛒'}
                {category === 'fullstack' && '⚙️'}
                {category === 'ai' && '🤖'}
                {category === 'design' && '🎨'}
              </span>
            </div>
          )}
        </div>

        <Link href={slug?.current ? `/portfolio/${slug.current}` : '#'}>
          <button
            className="2xl:w-10 2xl:h-10 md:w-11 md:h-11 w-10 h-10 rounded-full flex items-center justify-center
                     border border-white bg-white/40 absolute right-7 top-7 hover:bg-white/60 transition-all"
          >
            <ArrowIcon className="fill-black 2xl:w-6 2xl:h-6 w-7 h-7" />
          </button>
        </Link>
      </div>

      <p className="mt-4 text-white/85 font-extralight md:leading-7 leading-6 md:text-base text-sm line-clamp-3">{description}</p>

      <div className="flex flex-wrap gap-2.5 text-white font-light mt-3.5 text-xs tracking-wide">
        {technologies?.slice(0, 4).map((tag, index) => (
          <div key={index} className="border border-c-purple-1/80 rounded-full py-1.5 px-4">
            {tag}
          </div>
        ))}
      </div>
    </div>
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
          <div className="container py-16">
            
            {/* Header matching OurWork style */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full border border-[#ac8ef2]/50 flex items-center justify-center">
                <GlobalToolsIcon className="stroke-[#ac8ef2] w-7 h-7" />
              </div>
              <span className="text-white/60 text-sm tracking-wider uppercase">Our Portfolio</span>
            </div>

            <h1 className="mb-3 font-light xl:text-[2.6rem] md:text-[2.37rem] text-2.5xl lg:leading-[3.6rem] leading-[2.7rem] text-[#e5e5ff]">
              Our Work of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#ac8ef2] from-35% to-[#ac8ef2]/50">Digital Creations</span>
            </h1>
            
            <div className="flex lg:flex-row flex-col items-start xl:gap-6 gap-4 mb-12">
              <p className="text-white/75 xl:text-base md:text-sm text-xs md:leading-6 leading-5 tracking-wide font-extralight flex-1">
                From concept to completion, our projects reflect the expertise and creativity of our team. Each project is a testament
                to our commitment to delivering innovative solutions tailored to meet the unique needs of our clients.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveFilter(cat.value)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeFilter === cat.value
                      ? 'bg-white text-black border-white'
                      : 'border-white/20 text-white/75 hover:border-c-purple-1 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Portfolio Grid - matching OurWork UI */}
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-c-purple-1"></div>
              </div>
            ) : (
              <div className="grid 2xl:grid-cols-2 gap-x-10 2xl:gap-y-12 gap-16">
                {filteredProjects.map((project) => (
                  <PortfolioCard key={project._id} {...project} />
                ))}
              </div>
            )}

            {filteredProjects.length === 0 && !loading && (
              <div className="text-center py-20">
                <p className="text-white/60 text-lg">No projects found in this category.</p>
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="container pb-20">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-c-purple-1/20 to-c-blue-1/20 p-12 text-center border border-c-purple-1/20">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-4">Have a Project in Mind?</h2>
                <p className="text-white/75 mb-8 max-w-2xl mx-auto">
                  Let&apos;s create something amazing together. Share your vision with us and let&apos;s make it reality.
                </p>
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-c-purple-1 to-c-blue-1 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-c-purple-1/50 transition-all duration-300 hover:scale-105">
                    Start Your Project
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

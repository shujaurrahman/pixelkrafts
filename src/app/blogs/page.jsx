"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobOverlay from "@/components/BlobOverlay";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getAllBlogs, urlFor } from "../../../lib/sanity.client";

// Using consistent theme colors for all categories
const categoryColors = {
  'web-development': 'bg-c-purple-1/20 text-c-purple-1',
  'app-development': 'bg-c-purple-1/20 text-c-purple-1',
  'seo': 'bg-c-blue-1/20 text-c-blue-1',
  'digital-marketing': 'bg-c-purple-1/20 text-c-purple-1',
  'ai-automation': 'bg-c-blue-1/20 text-c-blue-1',
  'ui-ux-design': 'bg-c-purple-1/20 text-c-purple-1'
};

const categoryLabels = {
  'web-development': 'Web Development',
  'app-development': 'App Development',
  'seo': 'SEO',
  'digital-marketing': 'Digital Marketing',
  'ai-automation': 'AI & Automation',
  'ui-ux-design': 'UI/UX Design'
};

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const data = await getAllBlogs();
        setBlogs(data || []);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  const featuredPost = blogs.find(blog => blog.featured) || blogs[0];
  const regularPosts = blogs.filter(blog => blog._id !== featuredPost?._id);

  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      
      <main className="pt-32 relative min-h-screen">
        <BlobOverlay />
        
        <div className="relative backdrop-blur-[100px] bg-c-black-1/35">
          {/* Hero Section */}
          <div className="container py-16">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-c-purple-1/20 text-c-purple-1 mb-6">
                Our Blog
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Insights & <span className="bg-gradient-to-r from-c-purple-1 to-c-blue-1 bg-clip-text text-transparent">Innovation</span>
              </h1>
              <p className="text-white/70 text-lg max-w-xl">
                Explore the latest trends, tutorials, and insights from the world of digital innovation
              </p>
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="container mb-20">
              <Link href={`/blogs/${featuredPost.slug.current}`}>
                <div className="group relative rounded-3xl overflow-hidden">
                  {/* Background Image */}
                  <div className="relative h-[500px] md:h-[550px]">
                    {featuredPost.mainImage ? (
                      <Image 
                        src={urlFor(featuredPost.mainImage).width(1400).height(700).url()} 
                        alt={featuredPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-c-purple-1/30 to-c-blue-1/30 flex items-center justify-center">
                        <span className="text-8xl">📝</span>
                      </div>
                    )}
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-c-black-1 via-c-black-1/60 to-transparent" />
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-c-purple-1 to-c-blue-1 text-white">
                          Featured
                        </span>
                        {featuredPost.categories && featuredPost.categories[0] && (
                          <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${categoryColors[featuredPost.categories[0]]}`}>
                            {categoryLabels[featuredPost.categories[0]]}
                          </span>
                        )}
                      </div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 group-hover:text-c-purple-1 transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-white/80 text-base md:text-lg mb-6 line-clamp-2">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-white/60">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-c-purple-1 to-c-blue-1 flex items-center justify-center text-white text-xs font-bold">
                            {featuredPost.author?.charAt(0) || 'A'}
                          </div>
                          <span className="font-medium text-white/80">{featuredPost.author}</span>
                        </div>
                        <span>•</span>
                        <span>{new Date(featuredPost.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Blog Grid */}
          <div className="container pb-20">
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-3xl font-bold text-white whitespace-nowrap">Latest Articles</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-c-purple-1/30 via-c-purple-1/10 to-transparent" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((blog, index) => (
                <Link key={blog._id} href={`/blogs/${blog.slug.current}`}>
                  <article className="group h-full relative">
                    {/* Card Background with Gradient Border Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-c-purple-1/0 via-c-purple-1/0 to-c-blue-1/0 rounded-3xl group-hover:from-c-purple-1/50 group-hover:to-c-blue-1/50 transition-all duration-500 blur-sm opacity-0 group-hover:opacity-100" />
                    
                    <div className="relative h-full bg-c-black-2/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/5 group-hover:border-transparent transition-all duration-500">
                      {/* Image Container */}
                      <div className="relative h-56 overflow-hidden">
                        {blog.mainImage ? (
                          <Image 
                            src={urlFor(blog.mainImage).width(600).height(400).url()} 
                            alt={blog.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-c-purple-1/20 to-c-blue-1/20 flex items-center justify-center">
                            <span className="text-6xl opacity-50">📄</span>
                          </div>
                        )}
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-c-black-2 via-c-black-2/20 to-transparent" />
                        
                        {/* Category Badge */}
                        {blog.categories && blog.categories[0] && (
                          <div className="absolute top-4 left-4 z-10">
                            <span className={`px-4 py-2 rounded-xl text-xs font-semibold backdrop-blur-md bg-white/10 border border-white/10 text-white`}>
                              {categoryLabels[blog.categories[0]]}
                            </span>
                          </div>
                        )}

                        {/* Read Time Badge */}
                        <div className="absolute top-4 right-4 z-10">
                          <span className="px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-md bg-black/30 text-white/80">
                            {Math.ceil((blog.excerpt?.length || 100) / 200)} min read
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-c-purple-1 group-hover:to-c-blue-1 transition-all duration-300 line-clamp-2 leading-tight">
                          {blog.title}
                        </h3>
                        
                        {/* Excerpt */}
                        <p className="text-white/50 text-sm mb-5 line-clamp-2 leading-relaxed">
                          {blog.excerpt}
                        </p>
                        
                        {/* Footer */}
                        <div className="flex items-center justify-between pt-5 border-t border-white/5">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-c-purple-1 to-c-blue-1 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-c-purple-1/20">
                              {blog.author?.charAt(0) || 'A'}
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-white/80">{blog.author}</span>
                              <span className="text-xs text-white/40">{new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                          </div>
                          
                          {/* Arrow Icon */}
                          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-c-purple-1 group-hover:to-c-blue-1 transition-all duration-300">
                            <svg className="w-5 h-5 text-white/50 group-hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="container pb-20">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-c-purple-1/10 via-c-black-2/50 to-c-blue-1/10 p-12 md:p-16 text-center border border-c-purple-1/20">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-c-purple-1/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-c-blue-1/20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Want to Work Together?</h2>
                <p className="text-white/70 mb-8 max-w-xl mx-auto">
                  Let&apos;s discuss how we can help transform your digital presence
                </p>
                <Link href="/contact">
                  <button className="px-10 py-4 bg-gradient-to-r from-c-purple-1 to-c-blue-1 text-white rounded-2xl font-semibold hover:shadow-xl hover:shadow-c-purple-1/30 transition-all duration-300 hover:scale-105">
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

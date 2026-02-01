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
  'web-development': 'bg-c-purple-1/10 text-c-purple-1 border-c-purple-1/20',
  'app-development': 'bg-c-purple-1/10 text-c-purple-1 border-c-purple-1/20',
  'seo': 'bg-c-purple-1/10 text-c-purple-1 border-c-purple-1/20',
  'digital-marketing': 'bg-c-purple-1/10 text-c-purple-1 border-c-purple-1/20',
  'ai-automation': 'bg-c-purple-1/10 text-c-purple-1 border-c-purple-1/20',
  'ui-ux-design': 'bg-c-purple-1/10 text-c-purple-1 border-c-purple-1/20'
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
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Insights & <span className="bg-gradient-to-r from-c-purple-1 to-c-blue-1 bg-clip-text text-transparent">Innovation</span>
              </h1>
              <p className="text-white/75 text-xl">
                Explore the latest trends, tutorials, and insights from the world of digital innovation
              </p>
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="container mb-16">
              <Link href={`/blogs/${featuredPost.slug.current}`}>
                <div className="group relative bg-gradient-to-br from-c-purple-1/10 to-c-blue-1/10 rounded-2xl overflow-hidden border border-c-purple-1/20 hover:border-c-purple-1/50 transition-all duration-500 hover:shadow-2xl hover:shadow-c-purple-1/20">
                  <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-c-purple-1 to-c-blue-1 text-white">
                          Featured
                        </span>
                        {featuredPost.categories && featuredPost.categories[0] && (
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[featuredPost.categories[0]]}`}>
                            {categoryLabels[featuredPost.categories[0]]}
                          </span>
                        )}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-c-purple-1 transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-white/75 text-base mb-6 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-white/60">
                        <span className="font-medium">{featuredPost.author}</span>
                        <span>•</span>
                        <span>{new Date(featuredPost.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                    </div>
                    <div className="relative h-64 md:h-auto rounded-xl overflow-hidden bg-gradient-to-br from-c-purple-1/20 to-c-blue-1/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      {featuredPost.mainImage ? (
                        <Image 
                          src={urlFor(featuredPost.mainImage).width(600).height(400).url()} 
                          alt={featuredPost.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="text-7xl">📝</div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Blog Grid */}
          <div className="container pb-16">
            <h2 className="text-3xl font-bold text-white mb-10">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((blog) => (
                <Link key={blog._id} href={`/blogs/${blog.slug.current}`}>
                  <article className="group h-full bg-c-black-2/50 rounded-xl overflow-hidden border border-c-purple-1/20 hover:border-c-purple-1/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-c-purple-1/10">
                    <div className="relative h-48 bg-gradient-to-br from-c-purple-1/20 to-c-blue-1/20 flex items-center justify-center overflow-hidden">
                      {blog.mainImage ? (
                        <Image 
                          src={urlFor(blog.mainImage).width(400).height(250).url()} 
                          alt={blog.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="text-5xl">📄</div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {blog.categories && blog.categories.slice(0, 2).map((cat) => (
                          <span key={cat} className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[cat]}`}>
                            {categoryLabels[cat]}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-c-purple-1 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-white/75 text-sm mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-white/60 pt-4 border-t border-white/10">
                        <span className="font-medium">{blog.author}</span>
                        <span>{new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="container pb-20">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-c-purple-1/20 to-c-blue-1/20 p-12 text-center border border-c-purple-1/20">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-4">Want to Work Together?</h2>
                <p className="text-white/75 mb-8 max-w-2xl mx-auto">
                  Let&apos;s discuss how we can help transform your digital presence
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

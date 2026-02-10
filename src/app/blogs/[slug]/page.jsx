"use client"
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobOverlay from "@/components/BlobOverlay";
import { getBlogBySlug, urlFor } from "../../../../lib/sanity.client";
import { PortableText } from '@portabletext/react';

const categoryLabels = {
  'web-development': 'Web Development',
  'app-development': 'App Development',
  'seo': 'SEO',
  'digital-marketing': 'Digital Marketing',
  'ai-automation': 'AI & Automation',
  'ui-ux-design': 'UI/UX Design'
};

// Custom components for rendering Portable Text
const portableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="my-8 rounded-xl overflow-hidden">
          <img
            src={urlFor(value).width(800).url()}
            alt={value.alt || 'Blog image'}
            className="w-full h-auto"
          />
          {value.caption && (
            <p className="text-center text-white/50 text-sm mt-2">{value.caption}</p>
          )}
        </div>
      );
    },
    code: ({ value }) => (
      <pre className="bg-c-black-1 border border-c-purple-1/20 rounded-xl p-6 my-6 overflow-x-auto">
        <code className="text-sm text-white/90 font-mono">
          {value.code}
        </code>
      </pre>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-white mt-10 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-white mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-white mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold text-white mt-4 mb-2">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-white/80 text-lg leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-c-purple-1 pl-6 my-6 italic text-white/70">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside text-white/80 text-lg mb-6 space-y-2 ml-4">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside text-white/80 text-lg mb-6 space-y-2 ml-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="text-white/80">{children}</li>,
    number: ({ children }) => <li className="text-white/80">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-c-purple-1/20 text-c-purple-1 px-2 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-c-purple-1 hover:text-c-purple-2 underline transition-colors"
      >
        {children}
      </a>
    ),
  },
};

export default function BlogDetailPage() {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const data = await getBlogBySlug(params.slug);
        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlog();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="w-full overflow-hidden">
        <Navbar />
        <main className="pt-32 relative min-h-screen">
          <BlobOverlay />
          <div className="relative backdrop-blur-[100px] bg-c-black-1/35">
            <div className="container py-20">
              <div className="max-w-4xl mx-auto">
                <div className="animate-pulse">
                  <div className="h-10 bg-c-purple-1/20 rounded-lg mb-6 w-3/4"></div>
                  <div className="h-6 bg-c-purple-1/10 rounded-lg mb-4 w-1/2"></div>
                  <div className="h-64 bg-c-purple-1/10 rounded-xl mb-8"></div>
                  <div className="space-y-4">
                    <div className="h-4 bg-c-purple-1/10 rounded"></div>
                    <div className="h-4 bg-c-purple-1/10 rounded w-5/6"></div>
                    <div className="h-4 bg-c-purple-1/10 rounded w-4/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="w-full overflow-hidden">
        <Navbar />
        <main className="pt-32 relative min-h-screen">
          <BlobOverlay />
          <div className="relative backdrop-blur-[100px] bg-c-black-1/35">
            <div className="container py-20 text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Blog Not Found</h1>
              <p className="text-white/75 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
              <Link href="/blogs">
                <button className="px-6 py-3 bg-gradient-to-r from-c-purple-1 to-c-blue-1 text-white rounded-full font-medium hover:shadow-lg hover:shadow-c-purple-1/50 transition-all">
                  Back to Blogs
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      
      <main className="pt-32 relative min-h-screen">
        <BlobOverlay />
        
        <div className="relative backdrop-blur-[100px] bg-c-black-1/35">
          <article className="container py-16">
            <div className="max-w-4xl mx-auto">
              {/* Back Link */}
              <Link href="/blogs" className="inline-flex items-center gap-2 text-c-purple-1 hover:text-c-purple-2 mb-8 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blogs
              </Link>

              {/* Categories */}
              {blog.categories && blog.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.categories.map((cat) => (
                    <span 
                      key={cat} 
                      className="px-4 py-1.5 rounded-full text-sm font-medium bg-c-purple-1/10 text-c-purple-1 border border-c-purple-1/20"
                    >
                      {categoryLabels[cat] || cat}
                    </span>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {blog.title}
              </h1>

              {/* Meta */}
              <div className="flex items-center gap-4 text-white/60 mb-8 pb-8 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-c-purple-1 to-c-blue-1 flex items-center justify-center text-white font-bold">
                    {blog.author?.charAt(0) || 'P'}
                  </div>
                  <div>
                    <p className="text-white font-medium">{blog.author || 'PixelKrafts Team'}</p>
                    <p className="text-sm">
                      {new Date(blog.publishedAt).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              {blog.mainImage && (
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12">
                  <img
                    src={urlFor(blog.mainImage).width(1200).height(675).url()}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-c-black-1/30 to-transparent" />
                </div>
              )}

              {/* Excerpt */}
              {blog.excerpt && (
                <div className="bg-c-purple-1/5 border-l-4 border-c-purple-1 pl-6 py-4 mb-10 rounded-r-xl">
                  <p className="text-white/80 text-xl italic">{blog.excerpt}</p>
                </div>
              )}

              {/* Body Content */}
              <div className="prose prose-invert prose-lg max-w-none">
                {blog.body ? (
                  <PortableText value={blog.body} components={portableTextComponents} />
                ) : (
                  <p className="text-white/75">No content available for this blog post.</p>
                )}
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Share this article</h3>
                <div className="flex gap-4">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-c-purple-1/10 border border-c-purple-1/20 flex items-center justify-center text-white hover:bg-c-purple-1/20 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&title=${encodeURIComponent(blog.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-c-purple-1/10 border border-c-purple-1/20 flex items-center justify-center text-white hover:bg-c-purple-1/20 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-16 bg-gradient-to-r from-c-purple-1/10 to-c-blue-1/10 rounded-2xl p-8 text-center border border-c-purple-1/20">
                <h3 className="text-2xl font-bold text-white mb-3">Need help with your project?</h3>
                <p className="text-white/75 mb-6">Let&apos;s discuss how we can help bring your ideas to life.</p>
                <Link href="/contact">
                  <button className="px-8 py-3 bg-gradient-to-r from-c-purple-1 to-c-blue-1 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-c-purple-1/50 transition-all">
                    Get a Free Quote
                  </button>
                </Link>
              </div>
            </div>
          </article>

          <Footer />
        </div>
      </main>
    </div>
  );
}

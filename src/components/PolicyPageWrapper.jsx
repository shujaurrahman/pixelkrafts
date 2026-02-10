"use client"
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobOverlay from "@/components/BlobOverlay";
import { PortableText } from "@portabletext/react";
import { getLegalPageBySlug } from "../../lib/sanity.client";

const portableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-white mb-4 mt-8">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-white mb-3 mt-6">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-white mb-2 mt-4">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="mb-6 text-white/85 leading-relaxed">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <u>{children}</u>,
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-c-purple-1 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-6 space-y-2 text-white/85">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-6 space-y-2 text-white/85">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-4">{children}</li>,
    number: ({ children }) => <li className="ml-4">{children}</li>,
  },
};

export default function PolicyPageWrapper({ slug }) {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getLegalPageBySlug(slug);
        if (!data) {
          setError(true);
        } else {
          setPageData(data);
        }
      } catch (err) {
        console.error("Error fetching legal page:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [slug]);

  const title = pageData?.title || slug.charAt(0).toUpperCase() + slug.slice(1);
  const lastUpdated = pageData?.lastUpdated;

  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <main className="pt-32 relative min-h-screen">
        <BlobOverlay />
        <div className="relative backdrop-blur-[100px] bg-c-black-1/35">
          <div className="container py-20">
            <h1 className="text-5xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-c-purple-2 via-white to-c-purple-3 mb-6">
              {title}
            </h1>
            {lastUpdated && (
              <p className="text-center text-white/50 mb-12">
                Last updated: {new Date(lastUpdated).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
              </p>
            )}
            <div className="max-w-4xl mx-auto bg-c-black-2/50 border border-c-purple-1/20 rounded-3xl p-8 md:p-12">
              {loading ? (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-c-purple-1"></div>
                </div>
              ) : error ? (
                <div className="text-center py-12">
                  <p className="text-white/70">Content not found. Please check Sanity Studio.</p>
                </div>
              ) : pageData?.content ? (
                <div className="prose prose-invert max-w-none">
                  <PortableText value={pageData.content} components={portableTextComponents} />
                </div>
              ) : null}
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

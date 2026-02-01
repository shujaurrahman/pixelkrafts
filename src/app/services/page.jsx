"use client"
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobOverlay from "@/components/BlobOverlay";
import { ArrowIcon, RocketIcon } from "@/assets/Icons";
import Link from "next/link";
import { getAllServices } from "../../../lib/sanity.client";

// Fallback data
const fallbackServices = [
  {
    title: "Website Development",
    shortDescription: "We create fast, responsive, and conversion-focused websites tailored to your brand. Supporting WordPress, Shopify, and custom websites.",
    features: ["WordPress", "Shopify", "Custom Websites", "Responsive Design"],
    icon: "🌐"
  },
  {
    title: "App Development",
    shortDescription: "Build high-performance mobile apps with Flutter, React Native, and Laravel. Custom, Native/Hybrid solutions available.",
    features: ["Flutter", "React Native", "Laravel", "Native/Hybrid"],
    icon: "📱"
  },
  {
    title: "SEO Services",
    shortDescription: "Advanced SEO strategies to grow your brand's visibility, increase reach, and drive organic traffic to your website.",
    features: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Local SEO"],
    icon: "🔍"
  },
  {
    title: "Social Media Ads",
    shortDescription: "Create and manage targeted social media advertising campaigns across all major platforms to maximize your ROI.",
    features: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads", "Twitter Ads"],
    icon: "📢"
  },
  {
    title: "Digital Marketing",
    shortDescription: "Comprehensive digital marketing strategies to build your brand, engage your audience, and drive conversions.",
    features: ["Content Marketing", "Email Marketing", "PPC", "Analytics"],
    icon: "📈"
  },
  {
    title: "Chatbot Development",
    shortDescription: "Intelligent chatbots powered by AI to automate customer support and enhance user engagement 24/7.",
    features: ["AI-Powered", "Multi-Platform", "Custom Workflows", "24/7 Support"],
    icon: "🤖"
  },
  {
    title: "AI Models Development",
    shortDescription: "Custom AI models and machine learning solutions to automate processes and extract insights from your data.",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    icon: "🧠"
  },
  {
    title: "UI/UX Designing",
    shortDescription: "Create intuitive and engaging user interfaces that provide seamless experiences and keep users engaged.",
    features: ["User Research", "Wireframing", "Prototyping", "User Testing"],
    icon: "🎨"
  },
  {
    title: "APIs Development",
    shortDescription: "Build robust, scalable, and secure APIs to connect your applications and enable seamless data exchange.",
    features: ["RESTful APIs", "GraphQL", "Microservices", "API Documentation"],
    icon: "🔗"
  }
];

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const data = await getAllServices();
        if (data && data.length > 0) {
          setServices(data);
        } else {
          setServices(fallbackServices);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
        setServices(fallbackServices);
      } finally {
        setLoading(false);
      }
    }
    fetchServices();
  }, []);

  const displayServices = services.length > 0 ? services : fallbackServices;

  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      
      <main className="pt-32 relative min-h-screen">
        <BlobOverlay />
        
        <div className="relative backdrop-blur-[100px] bg-c-black-1/35">
          <div className="container py-20">
            <h1 className="text-5xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-c-purple-2 via-white to-c-purple-3 mb-6">
              Our Services
            </h1>
            <p className="text-center text-white/75 text-lg max-w-3xl mx-auto mb-16">
              Comprehensive Digital Solutions for Modern Businesses
            </p>
            
            {loading ? (
              <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-c-purple-1"></div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayServices.map((service, index) => (
                  <div 
                    key={service._id || index}
                    className="bg-c-black-2/50 border border-c-purple-1/20 rounded-3xl p-8 hover:border-c-purple-1/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-14 h-14 bg-c-purple-1/20 border border-c-purple-1/50 rounded-full flex items-center justify-center mb-6 text-2xl">
                      {service.icon || <RocketIcon className="stroke-c-purple-1 w-7 h-7" />}
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-white/75 mb-6 leading-relaxed">{service.shortDescription || service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {(service.features || []).slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="text-c-purple-1 text-sm flex items-center">
                          <span className="mr-2">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="flex items-center text-white hover:text-c-purple-1 transition-colors">
                      <span className="underline underline-offset-4 font-light">Get Started</span>
                      <ArrowIcon className="fill-current w-6 h-6 ml-2" />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <Footer />
        </div>
      </main>
    </div>
  );
}

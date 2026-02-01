"use client"
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobOverlay from "@/components/BlobOverlay";

const services = [
  { value: 'website-development', label: 'Website Development' },
  { value: 'ecommerce', label: 'E-commerce Solutions' },
  { value: 'mobile-app', label: 'Mobile App Development' },
  { value: 'branding', label: 'Branding & Identity' },
  { value: 'seo', label: 'SEO Services' },
  { value: 'smm', label: 'Social Media Marketing' },
  { value: 'ui-ux', label: 'UI/UX Design' },
  { value: 'ai-automation', label: 'AI & Automation' },
  { value: 'digital-marketing', label: 'Digital Marketing' },
  { value: 'other', label: 'Other' }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    inquiryType: 'quote',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! We will get back to you soon.'
        });
        setFormData({ name: '', email: '', phone: '', service: '', inquiryType: 'quote', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      
      <main className="pt-32 relative min-h-screen">
        <BlobOverlay />
        
        <div className="relative backdrop-blur-[100px] bg-c-black-1/35">
          <div className="container py-20">
            <h1 className="text-5xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-c-purple-2 via-white to-c-purple-3 mb-6">
              Contact Us
            </h1>
            <p className="text-center text-white/75 text-lg max-w-3xl mx-auto mb-16">
              Get started and we will get you a free quote
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="bg-c-black-2/50 border border-c-purple-1/20 rounded-3xl p-8">
                <h2 className="text-3xl font-semibold text-white mb-6">Send us a message</h2>
                
                {status.message && (
                  <div className={`mb-6 p-4 rounded-xl border ${
                    status.type === 'success' 
                      ? 'bg-green-500/10 border-green-500/20 text-green-400' 
                      : 'bg-red-500/10 border-red-500/20 text-red-400'
                  }`}>
                    {status.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inquiry Type Selection */}
                  <div>
                    <label className="block text-white/75 mb-3">What can we help you with?</label>
                    <div className="flex gap-4">
                      <label className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border cursor-pointer transition-all ${
                        formData.inquiryType === 'quote' 
                          ? 'bg-c-purple-1/20 border-c-purple-1 text-white' 
                          : 'bg-c-black-1/50 border-white/10 text-white/75 hover:border-white/30'
                      }`}>
                        <input 
                          type="radio" 
                          name="inquiryType" 
                          value="quote"
                          checked={formData.inquiryType === 'quote'}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="font-medium">Get a Quote</span>
                      </label>
                      <label className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border cursor-pointer transition-all ${
                        formData.inquiryType === 'information' 
                          ? 'bg-c-purple-1/20 border-c-purple-1 text-white' 
                          : 'bg-c-black-1/50 border-white/10 text-white/75 hover:border-white/30'
                      }`}>
                        <input 
                          type="radio" 
                          name="inquiryType" 
                          value="information"
                          checked={formData.inquiryType === 'information'}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">General Inquiry</span>
                      </label>
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label className="block text-white/75 mb-2">Service Interested In *</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-c-black-1/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-c-purple-1 appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map(service => (
                        <option key={service.value} value={service.value} className="bg-c-black-1">
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/75 mb-2">Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-c-black-1/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-c-purple-1"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/75 mb-2">Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-c-black-1/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-c-purple-1"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white/75 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-c-black-1/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-c-purple-1"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-white/75 mb-2">Message *</label>
                    <textarea 
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-c-black-1/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-c-purple-1"
                      placeholder="Tell us about your project"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-c-purple-1 to-c-blue-1 text-white rounded-full font-medium px-8 py-4 hover:shadow-lg hover:shadow-c-purple-1/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-c-black-2/50 border border-c-purple-1/20 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Office Address</h3>
                  <p className="text-white/75 text-lg">
                    Pilibhit 262001<br />
                    Uttar Pradesh, India
                  </p>
                </div>
                
                <div className="bg-c-black-2/50 border border-c-purple-1/20 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Working Hours</h3>
                  <p className="text-white/75 text-lg">
                    Mon - Sat: 10:00 AM - 06:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
                
                <div className="bg-c-black-2/50 border border-c-purple-1/20 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Get in Touch</h3>
                  <div className="space-y-3 text-white/75 text-lg">
                    <p>
                      <span className="text-c-purple-1">Phone:</span><br />
                      +91 7579966178
                    </p>
                    <p>
                      <span className="text-c-purple-1">Email:</span><br />
                      official@pixelkrafts.in
                    </p>
                  </div>
                </div>
                
                <div className="bg-c-black-2/50 border border-c-purple-1/20 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Book a Call</h3>
                  <p className="text-white/75 mb-4">
                    Schedule a free consultation to discuss your project
                  </p>
                  <a 
                    href="https://cal.com/shujaurrahman" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-c-purple-1 text-white rounded-full font-medium px-6 py-3 hover:bg-c-purple-2 transition-colors"
                  >
                    Book Free Call
                  </a>
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

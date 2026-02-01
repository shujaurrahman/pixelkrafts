"use client"
import BlobOverlay from "@/components/BlobOverlay";
import ChooseSection from "@/components/ChooseSection";
import Footer from "@/components/Footer";
import FrequentlyAskedSection from "@/components/FrequentlyAskedSection";
import HeaderHero from "@/components/HeaderHero";
import IntroSection from "@/components/IntroSection";
import LetsWorkSection from "@/components/LetsWorkSection";
import Navbar from "@/components/Navbar";
import OurWorkSection from "@/components/OurWorkSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {

  return (
    <div className="w-full overflow-hidden">
      {/*//! START Navbar */}
      <Navbar />
      {/*//? END Navbar */}

      {/*//! START Hero */}
      <HeaderHero />

      <main className="pt-20 relative">

        {/*//! Blog Overlay */}
        <BlobOverlay />

        <div className="relative backdrop-blur-[100px] bg-c-black-1/35">

          <IntroSection />

          <ServicesSection />

          {/*//! START Why ChooseUs */}
          <ChooseSection />
          {/*//? END Why ChooseUs */}

          {/*//! START OurWork */}
          <OurWorkSection />
          {/*//? END OurWork */}

          {/*//! START Testimonial */}
          <TestimonialSection />
          {/*//? END Testimonial */}

          {/*//! START Frequently Asked */}
          <FrequentlyAskedSection />
          {/*//? END Frequently Asked */}

          {/*//! Let's workUs */}
          <LetsWorkSection />
          {/*//! Let's workUs */}

          <Footer />

        </div>

      </main>

    </div>
  );
}

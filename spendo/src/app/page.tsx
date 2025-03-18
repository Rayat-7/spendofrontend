import Image from "next/image";
import Hero from '@/components/landingpage/Hero'
import NavBar from "@/components/landingpage/Navbar";
import CTASection from "@/components/landingpage/CTA";
import FeaturesSection from "@/components/landingpage/feature";
import App from "next/app";
import AppScreenshots from "@/components/landingpage/Appview";
import TestimonialsSection from "@/components/landingpage/Testimony";
import Footer from "@/components/landingpage/Footer";
export default function Home() {
  return (
    
    <div className="">
      <main className="">
        <NavBar/>
        <Hero/>
        <FeaturesSection/>
        <AppScreenshots/>
        <TestimonialsSection/>
        <CTASection/>
        <Footer/>
      </main>
      </div>
  );
}

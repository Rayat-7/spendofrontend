import Image from "next/image";
import Hero from '@/components/landingpage/Hero'
import NavBar from "@/components/landingpage/Navbar";
export default function Home() {
  return (
    
    <div className="">
      <main className="">
        <NavBar/>
        <Hero/>
        <Hero/>
      </main>
      </div>
  );
}

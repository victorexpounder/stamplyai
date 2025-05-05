import Image from "next/image";
import LandingHeader from "./Components/Landing/LandingHeader";
import Hero from "./Components/Landing/Hero";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]" style={{fontFamily: "Poppins, sans-serif"}}>
      <main className="min-h-screen">
        <LandingHeader/>
        <Hero/>
      </main>
      
    </div>
  );
}

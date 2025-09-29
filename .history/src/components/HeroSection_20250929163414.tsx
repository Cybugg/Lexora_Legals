import heroImage from "@/assets/hero-image.jpg";
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useGSAP(()=>{
        gsap.to("#building",{
            width:"180%",
            ease:"power1.inOut",
        })
   gsap.to("#header3",{
           opacity:1,
           duration:1,
            ease:"power1.inOut",
         })
    },[])
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
     
         <video 
        className="hero-video w-full absolute inset-0 z-[-1]  h-full top-0 object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
        poster="/bg.png"
        preload="auto"  // improves performance
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        {/* Fallback message */}
        Your browser does not support the video tag.
      </video>
        <div className="absolute inset-0 bg-black/40"></div>

      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="heading-hero mb-6 text-white">
         Lexora Legal
        </h1>
        <p className="text-body max-w-3xl mx-auto text-white/90 leading-relaxed">
          A law firm specializing in business law, dedicated to handling corporate crises and exceptional situations.
        </p>
        
        <div className="mt-12">
          <a 
            href="#the-firm"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#the-firm');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-elegant text-sm font-medium tracking-wide"
          >
            Learn More
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-white/30 animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;
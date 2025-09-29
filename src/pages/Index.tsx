import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import officeInterior from "@/assets/office-interior.jpg";
import architectureAbstract from "@/assets/architecture-abstract.jpg";
import buildingAbstract from "@/assets/building.jpg";
import chessStrategy from "@/assets/chess-strategy.jpg";
import TeamSection from "@/components/TeamSection";
import FeesServicesSection from "@/components/FeesServicesSection";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";


gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    // init Lenis
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth ease
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // integrate with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);
  useGSAP(()=>{
        gsap.to("#building",{
            width:"180%",
            ease:"power1.inOut",
          scrollTrigger:{
        trigger:"#building",
          scrub:true,
          start:"bottom bottom",
          end:"top top",
  }
        })
   gsap.to("#header3",{
           opacity:1,
           duration:1,
            ease:"power1.inOut",
          scrollTrigger:{
        trigger:"#header3",
         
          start:"bottom 80%",
          end:"top top",
  }})
    },[])
  return (
    <div className="min-h-screen" ref={containerRef}>
      <Navigation />
      <HeroSection />
      
      <ContentSection
        id="the-firm"
        title="The Firm"
        content="Lexora Legal supports businesses and their executives in disputes, challenges, growth processes, and complex situations. With its team of partners and associates, the firm has built strong expertise in restructuring and in both amicable and judicial prevention of financial distress. This includes amicable procedures or collective processes, from ad hoc mandates, conciliation, and mediation, to collective proceedings such as safeguard, restructuring, or judicial liquidation."
        imageSrc={officeInterior}
        imageAlt="Modern law office interior"
      />
      <section id={"expertise"} className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
          true ? 'lg:grid-flow-col-dense' : ''
        }`}>
          {/* Text Content */}
          <div className={true ? 'lg:col-start-2' : ''}>
            <h2 className="heading-section mb-8 text-foreground" id="header3">
              {"Our Expertise"}
            </h2>
            <div className="text-body text-muted-foreground space-y-6">
              {"Lexora Legal works with a wide range of clients and stakeholders: public, private, and investment banks, investment funds (including those involved in corporate restructurings or industrial collective proceedings), service companies, media organizations, professional groups, film and audiovisual production firms, fashion companies, court-appointed administrators and trustees, statutory auditors, and more.".split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className={`aspect-[4/3] relative flex h-full gap-3  ${true ? 'lg:col-start-1' : ''}`}>
            <div  id="building" className="w-20 overflow-hidden bg-accent">
              <img 
                src={architectureAbstract} 
                alt={"Abstract architectural photography"}
                className="w-full h-full object-cover hover-lift transition-elegant"
              />
            
            </div>
             <div className=" overflow-hidden bg-accent">
              <img 
                src={buildingAbstract} 
                alt={"Abstract architectural photography"}
                className="w-full h-full object-cover hover-lift transition-elegant"
              />
            
            </div>
          </div>
        </div>
      </div>
    </section>

      
      <ContentSection
        id="results"
        title="Results"
        content="Whether you are a creditor or debtor, a market leader or a smaller player,Lexora Legal applies its vast experience and expertise to achieve one clear goal: your success."
        imageSrc={chessStrategy}
        imageAlt="Strategic chess piece symbolizing corporate success"
      />
      <TeamSection />
      <FeesServicesSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
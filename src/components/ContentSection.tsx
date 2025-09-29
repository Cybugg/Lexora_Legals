import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

interface ContentSectionProps {
  id: string;
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  imageSrc2?:string;
  imageAlt2?: string;
  reverse?: boolean;
}

const ContentSection = ({ id, title, content, imageSrc, imageAlt, reverse = false, }: ContentSectionProps) => {
  useGSAP(()=>{
  //       gsap.to("#pic1",{
  //           scale:2,
  //           ease:"power1.inOut",
  //         scrollTrigger:{
  //       trigger:"#pic1",
  //         scrub:true,
  //         start:"bottom 80%",
  //         end:"top top",
  // }
  //       })

        gsap.to("#pic2",{
            scale:1.5,
            ease:"power1.inOut",
          scrollTrigger:{
        trigger:"#pic2",
          scrub:true,
          start:"bottom 80%",
          end:"top top",
  }
        })
        gsap.to("#header1",{
           opacity:1,
           duration:1,
            ease:"power1.inOut",
          scrollTrigger:{
        trigger:"#header1",
         
          start:"bottom 80%",
          end:"top top",
  }})
   gsap.to("#header2",{
           opacity:1,
           duration:1,
            ease:"power1.inOut",
          scrollTrigger:{
        trigger:"#header2",
         
          start:"bottom 80%",
          end:"top top",
  }})

    },[])
  return (
    <section id={id} className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
          reverse ? 'lg:grid-flow-col-dense' : ''
        }`}>
          {/* Text Content */}
          <div className={reverse ? 'lg:col-start-2' : ''}>
            <h2 className="heading-section mb-8 text-foreground opacity-0" id={id=="the-firm"?'header1':'header2'}>
              {title}
            </h2>
            <div className="text-body text-muted-foreground space-y-6">
              {content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className={`relative ${reverse ? 'lg:col-start-1' : ''}`}>
            <div className="aspect-[4/3] overflow-hidden bg-accent">
              <img 
              id={id=="the-firm"?'pic1':'pic2'}
                src={imageSrc} 
                alt={imageAlt}
                className="w-full h-full object-cover hover-lift transition-elegant"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
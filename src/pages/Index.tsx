import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroSection } from "@/components/HeroSection";
import { PropertiesSection } from "@/components/PropertiesSection";
import { ContactSection } from "@/components/ContactSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { Card3D } from "@/components/Card3D";
import { SparklesText } from "@/components/ui/sparkles-text";
gsap.registerPlugin(ScrollTrigger);
const Index = () => {
  const heroRef = useRef(null);
  const contactRef = useRef(null);
  const remaxImageRef = useRef(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: "power4.out"
    });
    gsap.from(remaxImageRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: remaxImageRef.current,
        start: "top 80%"
      }
    });
  }, []);
  return <div className="font-heebo">
      <HeroSection heroRef={heroRef} scrollToContact={scrollToContact} />
      
      {/* RE/MAX Image Section */}
      <section ref={remaxImageRef} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D3E4FD] via-[#E5DEFF] to-[#FDE1D3] opacity-100" />
        
        {/* Real Estate Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-28 h-28 border-4 border-primary rounded-lg transform rotate-6" />
          <div className="absolute top-40 left-20 w-36 h-36 border-4 border-primary rounded-lg transform -rotate-12" />
          <div className="absolute bottom-60 right-1/4 w-32 h-32 border-4 border-primary rounded-lg transform rotate-15" />
          <div className="absolute top-1/3 left-1/3 w-20 h-20 border-t-8 border-l-8 border-primary transform rotate-12" />
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-b-8 border-r-8 border-primary transform -rotate-6" />
          
          {/* House Silhouettes */}
          <svg className="absolute top-16 left-16 w-28 h-28 text-primary opacity-70" viewBox="0 0 24 24">
            <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
          </svg>
          <svg className="absolute bottom-16 right-16 w-32 h-32 text-primary opacity-70" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75Z" />
          </svg>
          <svg className="absolute top-2/3 right-1/3 w-24 h-24 text-primary opacity-70" viewBox="0 0 24 24">
            <path fill="currentColor" d="M5,10V20H19V10H5M6.5,12H10.5V15.5H6.5V12M17.5,17.5H13V14H17.5V17.5M13,12V13.5H17.5V12H13M3,4H21V8H19V10H21V12H11V8H9V10H3V4M7,6V7H5V6H7M5,8H7V9H5V8Z" />
          </svg>
        </div>
        
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-right space-y-6 animate-fade-up relative z-10">
              <div className="flex justify-start">
                <SparklesText text="הנדל״ן שלך, החיים שלך" className="text-3xl md:text-4xl font-bold text-[#1a56a7] bg-white/90 py-2 rounded-lg inline-block px-4 text-right" colors={{
                first: "#1a56a7",
                second: "#FDE1D3"
              }} sparklesCount={15} />
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-[#E5DEFF] via-[#FDE1D3] to-[#D3E4FD] mr-0 rounded-full"></div>
              <p className="text-lg font-medium text-[#221F26] bg-white/90 py-2 rounded-lg px-4 text-right">המומחיות שלי היא למצוא עבורך את הנכס המושלם או למכור את הנכס שלך במחיר הטוב ביותר.</p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3 bg-white p-3 rounded-lg shadow-sm ">
                  <p className="font-medium text-[#1a56a7] text-right">מציאת הבית החלומי שלך</p>
                  <div className="rounded-full bg-[#1a56a7] p-2 text-white">
                    <svg viewBox="0 0 24 24" className="w-5 h-5">
                      <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center justify-between  gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-medium text-[#1a56a7] text-right">ניסיון מוכח בתחום הנדל&quot;ן </p>
                  <div className="rounded-full bg-[#1a56a7] p-2 text-white">
                    <svg viewBox="0 0 24 24" className="w-5 h-5">
                      <path fill="currentColor" d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center justify-between gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-medium text-[#1a56a7] text-right">ליווי אישי לאורך כל התהליך</p>
                  <div className="rounded-full bg-[#1a56a7] p-2 text-white">
                    <svg viewBox="0 0 24 24" className="w-5 h-5">
                      <path fill="currentColor" d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start relative z-10">
              <Card3D imageSrc="/lovable-uploads/3d536c21-8209-4bb8-8391-12be27e309f2.png" alt="RE/MAX Unique - Lihen Biton" />
            </div>
          </div>
        </div>
      </section>
      
      <PropertiesSection />
      <AboutSection />
      <ContactSection contactRef={contactRef} />
      <Footer />
    </div>;
};
export default Index;
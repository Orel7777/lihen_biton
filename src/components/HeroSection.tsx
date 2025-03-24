import { RainbowButton } from "@/components/ui/rainbow-button";
import { Facebook, Instagram } from "lucide-react";
import { Tilt } from "@/components/ui/tilt";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroSectionProps {
  heroRef: React.RefObject<HTMLElement>;
  scrollToContact: () => void;
}

export const HeroSection = ({
  heroRef,
  scrollToContact
}: HeroSectionProps) => {
  const isMobile = useIsMobile();
  
  return <section ref={heroRef} className="relative h-[90vh] flex items-center justify-center text-white">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover">
          <source src="/lovable-uploads/video.mp4" type="video/mp4" />
          The dream home
        </video>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>
      
      {/* 3D Tilt Image - Show on all screen sizes */}
      <div className="absolute top-0 right-0 z-10">
        <Tilt 
          className={`rounded-bl-lg overflow-hidden shadow-xl ${isMobile ? 'w-24 h-24' : 'w-48 h-48'}`} 
          rotationFactor={isMobile ? 5 : 10}
        >
          <img src="/lovable-uploads/3835289b-4e98-44e5-9d6f-4cc7d8889185.png" alt="RE/MAX Unique - Lihen Biton" className="w-full h-full object-fill" />
        </Tilt>
      </div>
      
      <div className="relative container mx-auto text-center mt-32 md:mt-32">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          ליחן ביטון אשת הנדל״ן שלך
        </h1>
        <div className="w-40 h-1 bg-gradient-to-r from-[#000000] via-[#1A1A1A] to-[#D4AF37] mx-auto mt-3 rounded-full opacity-80"></div>
        <div className="flex flex-col items-center gap-4 mt-8">
          <RainbowButton onClick={scrollToContact} className="text-lg">
            צור קשר עכשיו
          </RainbowButton>
          <ul className="flex justify-center gap-4">
            <li className="group relative">
              <a href="https://wa.me/972500000000" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group-hover:bg-[#25D366]">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 group-hover:text-white transition-colors">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </li>
            <li className="group relative">
              <a href="https://instagram.com/lihen_biton" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group-hover:bg-[#e4405f]">
                <Instagram className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
              </a>
            </li>
            <li className="group relative">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group-hover:bg-[#1877f2]">
                <Facebook className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>;
};


import MacbookLoader from "./MacbookLoader";
import PlanetLoader from "./PlanetLoader";

export const Footer = () => {
  return (
    <footer className="py-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#D3E4FD] via-[#E5DEFF] to-[#FDE1D3] opacity-90" />
      
      {/* Real Estate Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-2 left-10 w-16 h-16 border-4 border-primary rounded-lg transform rotate-12" />
        <div className="absolute bottom-4 right-20 w-20 h-20 border-4 border-primary rounded-lg transform -rotate-6" />
        
        {/* House Silhouettes */}
        <svg className="absolute top-1 right-10 w-12 h-12 text-primary opacity-10" viewBox="0 0 24 24">
          <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
        </svg>
        <svg className="absolute bottom-1 left-14 w-16 h-16 text-primary opacity-10" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75Z" />
        </svg>
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex-1 flex justify-start" /> {/* Spacer */}
            <div className="text-center flex-1 flex items-center justify-center gap-2">
              <MacbookLoader />
              <img
                src="/lovable-uploads/214d8cad-0799-43e3-8d05-b68bae52e025.png"
                alt="Orel Bukris Logo"
                className="w-12 h-12 object-contain"
              />
              <PlanetLoader />
            </div>
            <div className="flex-1 flex justify-end" />
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} כל הזכויות שמורות ל
              <a
                href="https://orel-bukris-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#403E43] hover:text-purple-400 transition-colors mx-1">
                אוראל בוקריס
              </a>
              <span className="block text-[10px] mt-0.5">
                מפתח אתרים בתלת מימד
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};


import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";
import BoxLoader from "@/components/BoxLoader";
import { Tilt } from "@/components/ui/tilt";
import { Spotlight } from "@/components/ui/spotlight";
import styled from "styled-components";

const SocialIconsWrapper = styled.div`
  .social-icons {
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
  }

  /* for all social containers*/
  .socialContainer {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: rgb(44, 44, 44);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition-duration: .3s;
  }
  /* instagram*/
  .containerOne:hover {
    background-color: #d62976;
    transition-duration: .3s;
  }
  /* facebook*/
  .containerTwo:hover {
    background-color: #3b5998;
    transition-duration: .3s;
  }
  /* Whatsapp*/
  .containerFour:hover {
    background-color: #128C7E;
    transition-duration: .3s;
  }

  .socialContainer:active {
    transform: scale(0.9);
    transition-duration: .3s;
  }

  .socialSvg {
    width: 17px;
  }

  .socialSvg path {
    fill: rgb(255, 255, 255);
  }

  .socialContainer:hover .socialSvg {
    animation: slide-in-top 0.3s both;
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const ContactSection = ({
  contactRef
}: {
  contactRef: React.RefObject<HTMLElement>;
}) => {
  return <section ref={contactRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#D3E4FD] via-[#E5DEFF] to-[#FDE1D3] opacity-90" />
      
      {/* Real Estate Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-28 h-28 border-4 border-primary rounded-lg transform rotate-6" />
        <div className="absolute top-40 left-20 w-36 h-36 border-4 border-primary rounded-lg transform -rotate-12" />
        <div className="absolute bottom-60 right-1/4 w-32 h-32 border-4 border-primary rounded-lg transform rotate-15" />
        <div className="absolute top-1/3 left-1/3 w-20 h-20 border-t-8 border-l-8 border-primary transform rotate-12" />
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-b-8 border-r-8 border-primary transform -rotate-6" />
        
        {/* House Silhouettes */}
        <svg className="absolute top-16 left-16 w-28 h-28 text-primary opacity-10" viewBox="0 0 24 24">
          <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
        </svg>
        <svg className="absolute bottom-16 right-16 w-32 h-32 text-primary opacity-10" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75Z" />
        </svg>
        <svg className="absolute top-2/3 right-1/3 w-24 h-24 text-primary opacity-10" viewBox="0 0 24 24">
          <path fill="currentColor" d="M5,10V20H19V10H5M6.5,12H10.5V15.5H6.5V12M17.5,17.5H13V14H17.5V17.5M13,12V13.5H17.5V12H13M3,4H21V8H19V10H21V12H11V8H9V10H3V4M7,6V7H5V6H7M5,8H7V9H5V8Z" />
        </svg>
      </div>
      
      <div className="relative container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">צור קשר</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 space-x-reverse">
                <Phone className="w-6 h-6" />
                <div>
                  <h3 className="font-medium mb-1">טלפון</h3>
                  <p className="text-gray-600">050-5150002</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse">
                <Mail className="w-6 h-6" />
                <div>
                  <h3 className="font-medium mb-1">אימייל</h3>
                  <p className="text-gray-600">lihenb84@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse">
                <MapPin className="w-6 h-6" />
                <div>
                  <h3 className="font-medium mb-1">כתובת</h3>
                  <p className="text-gray-600">תל אביב</p>
                </div>
              </div>

              {/* רשתות חברתיות עם עיצוב חדש */}
              <SocialIconsWrapper>
                <div className="social-icons pt-4">
                  <a className="socialContainer containerTwo" href="https://facebook.com/lihen.biton" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg viewBox="0 0 320 512" className="socialSvg">
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg>
                  </a>
                  <a className="socialContainer containerOne" href="https://instagram.com/lihen_biton" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg viewBox="0 0 16 16" className="socialSvg">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                  <a className="socialContainer containerFour" href="https://wa.me/972505150002" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <svg viewBox="0 0 16 16" className="socialSvg">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                  </a>
                </div>
              </SocialIconsWrapper>

              <div className="flex justify-start">
                <BoxLoader />
              </div>
              
              {/* תמונה עם אפקט Tilt מתחת לריבוע הכתום */}
              <div className="mt-8">
                <Tilt
                  rotationFactor={6}
                  isRevese
                  style={{
                    transformOrigin: 'center center',
                  }}
                  springOptions={{
                    stiffness: 26.7,
                    damping: 4.1,
                    mass: 0.2,
                  }}
                  className="group relative rounded-lg max-w-[320px]"
                >
                  <Spotlight
                    className="z-10 from-white/50 via-white/20 to-white/10 blur-2xl"
                    size={320}
                    springOptions={{
                      stiffness: 26.7,
                      damping: 4.1,
                      mass: 0.2,
                    }}
                  />
                  <img
                    src="/lovable-uploads/7ca65098-19e0-4a43-8b0c-4e57a31e21b4.png"
                    alt="Business Card"
                    className="w-full h-[180px] rounded-lg object-cover shadow-lg duration-700 group-hover:shadow-xl"
                  />
                </Tilt>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>;
};

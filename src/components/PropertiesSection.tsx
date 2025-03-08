
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import Tree3D from "@/components/Tree3D";
import { useRef, useState } from "react";
import gsap from "gsap";

interface Property {
  image: string;
  title: string;
  price: string;
  location: string;
  details: string;
  isSold?: boolean;
  isRented?: boolean;
  isExclusive?: boolean;
}

export const PropertiesSection = () => {
  const propertiesTitleRef = useRef(null);
  const [filter, setFilter] = useState<'all' | 'sold' | 'available'>('all');

  const allProperties: Property[] = [{
    image: "/lovable-uploads/f6295a4f-becb-44ea-9ce2-4abda0962b85.png",
    title: "שכונת המושאה דירת 4 חדרים",
    price: "₪4,000,000",
    location: "מודיעין",
    details: "4 חדרים | מרפסת עם נוף | קומה גבוהה",
    isSold: true,
    isExclusive: true
  }, {
    image: "/lovable-uploads/81cbd7d8-7523-423c-9b7e-263ccce666af.png",
    title: "דירת גן 4 חדרים עם גינה ענקית ו2 חניות",
    price: "₪4,350,000",
    location: "מודיעין שכונת מורשת",
    details: "4 חדרים | 104 מ״ר | גינה",
    isExclusive: true
  }, {
    image: "/lovable-uploads/e7f70dcb-3404-4920-8d76-aea4a6a13469.png",
    title: "דירת 5 חדרים ענקית ומוארת",
    price: "₪3,590,000",
    location: "שכונת הנביאים מודיעין",
    details: "5 חדרים | 137 מ״ר | מרפסת שמש | שתי חניות",
    isExclusive: true
  }, {
    image: "/lovable-uploads/03c93028-25f9-4a1f-a9b3-9e3eea1b4ac1.png",
    title: "דופלקס 5 חדרים מעוצבת ומרשימה עם נוף פתוח",
    price: "₪4,390,000",
    location: "מודיעין שכונת נופים",
    details: "5 חדרים | 140 מ״ר | דו משפחתי",
    isSold: false,
    isExclusive: true
  }, {
    image: "/lovable-uploads/045e09ed-69e0-4ea8-8a50-d493a011cb6b.png",
    title: "דופלקס דירת 6 חדרים",
    price: "₪4,500,000",
    location: "רחוב סביון, שכונת הפרחים",
    details: "6 חדרים | 200 מ״ר",
    isSold: true,
    isExclusive: true
  }, {
    image: "/lovable-uploads/8eaad152-952f-4d2c-aac2-4b5a46173496.png",
    title: "דירת 4 חדרים דם המכבים",
    price: "₪3,500,000",
    location: "מודיעין מכבי",
    details: "4 חדרים | נמכר",
    isSold: true,
    isExclusive: true
  }, {
    image: "/lovable-uploads/96e330a2-c723-4412-885a-5e3197aae3fc.png",
    title: "דופלקס דו משפחתי 5 חדרים",
    price: "הושכר",
    location: "נץ החלב שכונת הפרחים",
    details: "5 חדרים | 150 מ״ר | גינה",
    isRented: true,
    isExclusive: true
  }, {
    image: "/lovable-uploads/1778ea6e-3bcb-453d-9c31-79a06a1229d4.png",
    title: "דו משפחתי 5 חדרים + ממד ומרפסת סוכה",
    price: "₪6,500,000",
    location: "שכונת בוכמן היוקרתית רחוב בנימין המבוקש",
    details: "5 חדרים | 2 חניות גארז סגורות | חדר ילדים עם מרפסת 12 מ״ר",
    isExclusive: true
  }, {
    image: "/lovable-uploads/1f8d5bb3-5609-49b7-97c4-d76420b597d2.png",
    title: "דירת 3 חדרים עם מחסן ענק",
    price: "₪2,420,000",
    location: "מודיעין שכונת הכרמים",
    details: "3 חדרים | 87 מ״ר |  מרפסת 12 מ״ר",
    isExclusive: true
  }];

  const filteredProperties = allProperties.filter(property => {
    if (filter === 'sold') return property.isSold;
    if (filter === 'available') return !property.isSold && !property.isRented;
    return true;
  });

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#D3E4FD] via-[#E5DEFF] to-[#FDE1D3] opacity-90" />
      
      {/* Transparent Real Estate Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary rounded-lg transform rotate-12" />
        <div className="absolute top-40 right-20 w-40 h-40 border-4 border-primary rounded-lg transform -rotate-6" />
        <div className="absolute bottom-20 left-1/4 w-36 h-36 border-4 border-primary rounded-lg transform rotate-45" />
      </div>

      <div className="relative container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Tree3D />
            <h2 ref={propertiesTitleRef} className="text-3xl font-bold px-0 py-0 flex justify-center items-center">
              נכסים נבחרים
            </h2>
            <Tree3D />
          </div>
        </div>
        
        <div className="flex justify-center gap-4 mb-8">
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'} 
            onClick={() => setFilter('all')} 
            className="min-w-[120px] hover:scale-105 transition-transform backdrop-blur-sm"
          >
            הכל
          </Button>
          <Button 
            variant={filter === 'available' ? 'default' : 'outline'} 
            onClick={() => setFilter('available')} 
            className="min-w-[120px] hover:scale-105 transition-transform backdrop-blur-sm"
          >
            למכירה
          </Button>
          <Button 
            variant={filter === 'sold' ? 'default' : 'outline'} 
            onClick={() => setFilter('sold')} 
            className="min-w-[120px] hover:scale-105 transition-transform backdrop-blur-sm"
          >
            נמכר
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <div key={index} className="opacity-0" ref={el => {
              if (el) {
                gsap.to(el, {
                  scrollTrigger: {
                    trigger: el,
                    start: "top 85%"
                  },
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  delay: index * 0.2
                });
              }
            }}>
              <PropertyCard {...property} />
            </div>
          ))}
        </div>

        {/* More Properties Link */}
        <div className="flex justify-center mt-12">
          <a
            href="https://www.remax-israel.com/he-il/%D7%9E%D7%AA%D7%95%D7%95%D7%9B%D7%99%D7%9D/%D7%9E%D7%A8%D7%9B%D7%96/%D7%9E%D7%95%D7%93%D7%99%D7%A2%D7%99%D7%9F/%D7%9C%D7%99%D7%97%D7%9F-%D7%91%D7%99%D7%98%D7%95%D7%9F-lihen-biton/51001102"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl rounded-xl bg-gradient-to-r from-[#D3E4FD] via-[#E5DEFF] to-[#FDE1D3]">
              <span className="relative z-10 text-primary">נכסים נוספים</span>
              <div className="absolute inset-0 rounded-xl bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

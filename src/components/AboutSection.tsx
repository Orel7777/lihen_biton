
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import StarLoader from "./StarLoader";
import { motion } from "framer-motion";
import { Card3D } from "./Card3D";

export const AboutSection = () => {
  const testimonials = [{
    src: "/lovable-uploads/e69edb93-f9e6-4355-bcff-ca1ed1a9ba1d.png",
    name: "נטלי קופמן",
    quote: "יש מישהו שמעוניין לקחת שיש מטבח?"
  }, {
    src: "/lovable-uploads/6f17495b-46b8-4452-b23a-598c49f41c6d.png",
    name: "חן נזריאן אמיר",
    quote: "טוב אז אחרי חיפושים של כמה חודשים טובים לדירה שכל כך רצינו, דיברנו ונפגשנו עם כמה מתווכים עד שהגענו לליחן המדהימה."
  }, {
    src: "/lovable-uploads/c265b691-63ad-46a9-be19-5c495a45bd58.png",
    name: "אלי",
    quote: "שבת שלום, אכלנו הערב ארוחה חלבית ופתחנו את הגבינות שהיו ממש טעימות."
  }, {
    src: "/lovable-uploads/b6f8d4fa-3785-4f87-8a9c-b838bc4cb4d5.png",
    name: "נטלי קופמן",
    quote: "טוב אז אחרי חיפושים של כמה חודשים טובים לדירה שכל כך רצינו, דיברנו ונפגשנו עם כמה מתווכים."
  }];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#D3E4FD] via-[#E5DEFF] to-[#FDE1D3] opacity-90" />
      
      {/* Real Estate Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-primary rounded-lg transform rotate-12" />
        <div className="absolute top-60 right-20 w-40 h-40 border-4 border-primary rounded-lg transform -rotate-6" />
        <div className="absolute bottom-40 left-1/4 w-36 h-36 border-4 border-primary rounded-lg transform rotate-45" />
        <div className="absolute top-1/4 right-1/3 w-24 h-24 border-b-8 border-r-8 border-primary transform rotate-12" />
        <div className="absolute bottom-1/3 right-1/4 w-28 h-28 border-t-8 border-l-8 border-primary transform -rotate-12" />
        
        {/* House Silhouettes */}
        <svg className="absolute top-10 right-10 w-24 h-24 text-primary opacity-10" viewBox="0 0 24 24">
          <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
        </svg>
        <svg className="absolute bottom-20 left-20 w-32 h-32 text-primary opacity-10" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75Z" />
        </svg>
        <svg className="absolute top-1/2 left-1/3 w-20 h-20 text-primary opacity-10" viewBox="0 0 24 24">
          <path fill="currentColor" d="M5,10V20H19V10H5M6.5,12H10.5V15.5H6.5V12M17.5,17.5H13V14H17.5V17.5M13,12V13.5H17.5V12H13M3,4H21V8H19V10H21V12H11V8H9V10H3V4M7,6V7H5V6H7M5,8H7V9H5V8Z" />
        </svg>
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card3D 
                  imageSrc="/lovable-uploads/84ff8dc7-a771-4eb4-839d-413a35904399.png"
                  alt="ליחן ביטון"
                />
              </motion.div>
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold mb-4"
            >
              ליחן ביטון: נדל"ן עם תוצאות
            </motion.h2>
            <div className="flex justify-center space-x-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="scale-75">
                  <StarLoader />
                </div>
              ))}
            </div>
          </div>
          
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} className="space-y-6 text-right mb-20">
            <p className="leading-relaxed">
              ליחן ביטון היא נדלניסטית מנוסה ומקצועית עם רקורד עשיר בתחום הנדל"ן, המתמחה במכירות, קניות והשכרות נכסים. הנדל"ן הוא לא רק העבודה שלה – זה העולם שלה. היא חיה את השטח, מכירה לעומק את השוק ויודעת לתת את המענה המקצועי ביותר לכל לקוח.
            </p>
            
            <p className="leading-relaxed">
              עם רשת רחבה של אנשי מקצוע, כולל יועצי משכנתאות, יועצי מס, עורכי דין, שמאים ואדריכלים, לכן מלווה את לקוחותיה לכל אורך הדרך ומספקת פתרונות מותאמים אישית לכל צורך. היא מאמינה בשירות אישי, מקצועיות בלתי מתפשרת וליווי צמוד לכל עסקה – עד לפרטים הקטנים ביותר.
            </p>
            
            <p className="font-medium text-lg">
              כאשר אתם מחפשים ליווי אמין בעולם הנדל"ן – ליחן ביטון היא הכתובת שלכם.
            </p>
          </motion.div>

          <div className="w-full max-w-5xl mx-auto">
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};

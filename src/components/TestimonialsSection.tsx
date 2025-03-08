
import { useRef } from "react";
import { Star } from "lucide-react";
import gsap from "gsap";

interface Testimonial {
  name: string;
  rating: number;
  date: string;
  content: string;
  image?: string;
}

export const TestimonialsSection = () => {
  const testimonialsRef = useRef(null);

  const testimonials: Testimonial[] = [{
    name: "נטלי קופמן",
    rating: 5,
    date: "25 דק׳",
    content: "טוב אז אחרי חיפושים של כמה חודשים טובים לדירה שכל כך רצינו, דיברנו ונפגשנו עם כמה מתווכים עד שהגענו לליהן המדהימה. אני ממש רוצה להמליץ על מתווכת שהבינה את כל כולנו! דאגה לבדוק כל דבר שביקשנו, הייתה זמינה לכל שאלה ושיחה, נעימה, עומדת בזמנים. בקיצור מי שמחפש מתווכת All-In שבאמת עושה את העבודה מכל הלב תדברו עם ליהן בטלפון 0505150002",
    image: "/lovable-uploads/f21393f4-30f4-425c-8c8a-837c4ef9166d.png"
  }, {
    name: "דני כהן",
    rating: 5,
    date: "שבוע שעבר",
    content: "ליהן עזרה לנו למצוא את הבית המושלם. היא הייתה מקצועית, קשובה וזמינה לכל שאלה. ממליץ בחום!"
  }, {
    name: "מירב לוי",
    rating: 5,
    date: "לפני חודש",
    content: "היה תענוג לעבוד עם ליהן. היא הבינה בדיוק מה אנחנו מחפשים והצליחה להתאים לנו את הדירה המושלמת. שירות אישי ומקצועי."
  }];

  return (
    <section ref={testimonialsRef} className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">מה הלקוחות אומרים עלינו</h2>
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="opacity-0"
              ref={el => {
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
              }}
            >
              <div className="bg-secondary/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  {testimonial.image && (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.date}</p>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

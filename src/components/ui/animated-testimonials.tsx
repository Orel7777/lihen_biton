
"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type Testimonial = {
  quote: string;
  name: string;
  designation?: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);
  const [isImageOpen, setIsImageOpen] = useState(false);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <>
      <div className={cn("max-w-7xl mx-auto", className)}>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-[4/3] w-[80%] mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[active].src}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
                onClick={() => setIsImageOpen(true)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={testimonials[active].src}
                  alt={testimonials[active].name}
                  className="h-full w-full rounded-3xl object-cover object-center shadow-xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-right">
                {testimonials[active].name}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed text-right">
                {testimonials[active].quote}
              </p>
            </motion.div>

            <div className="flex gap-4 justify-end">
              <button
                onClick={handleNext}
                className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
                aria-label="המלצה הבאה"
              >
                <IconArrowRight className="h-6 w-6" />
              </button>
              <button
                onClick={handlePrev}
                className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
                aria-label="המלצה קודמת"
              >
                <IconArrowLeft className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
          <img 
            src={testimonials[active].src} 
            alt={testimonials[active].name} 
            className="w-full h-auto max-h-[90vh] object-contain"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

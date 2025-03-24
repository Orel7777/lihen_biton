"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
export const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "slow",
  pauseOnHover = true,
  className
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    addAnimation();
  }, []);
  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // שכפול התוכן 24 פעמים כדי להבטיח רצף אינסופי
      for (let i = 0; i < 24; i++) {
        scrollerContent.forEach(item => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
      }
      setStart(true);
    }
  };
  const getSpeed = () => {
    switch (speed) {
      case "fast":
        return "60s";
      case "normal":
        return "80s";
      case "slow":
        return "100s";
      default:
        return "100s";
    }
  };
  return <div ref={containerRef} className={cn("scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]", className)}>
      <ul ref={scrollerRef} className={cn("flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap", start && "animate-scroll", pauseOnHover && "hover:[animation-play-state:paused]")} style={{
      "--animation-duration": getSpeed(),
      animationDirection: direction === "right" ? "normal" : "reverse"
    } as React.CSSProperties}>
        {items.map((item, idx) => <li key={idx} className="w-[350px] flex-shrink-0 rounded-2xl border px-6 py-4 backdrop-blur-sm bg-slate-400 hover:bg-slate-300">
            <blockquote>
              <p className="text-lg leading-[1.7] font-medium font-serif">{item.quote}</p>
              <p className="mt-2 font-bold text-lg">{item.name}</p>
              <p className="text-sm font-medium text-muted-foreground">{item.title}</p>
            </blockquote>
          </li>)}
      </ul>
    </div>;
};
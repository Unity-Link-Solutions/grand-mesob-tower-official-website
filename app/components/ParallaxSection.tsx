'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number; // Multiplier for parallax effect (0.5 = half speed, 1.5 = faster)
  className?: string;
}

export default function ParallaxSection({
  children,
  speed = 0.5,
  className = '',
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let rafId: number;

    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const scrolled = window.scrollY;
        
        // Only apply transform when section is in viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // Calculate parallax offset based on how far the element has scrolled into view
          const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
          const offset = scrollProgress * 100 * (speed - 1);
          
          section.style.transform = `translate3d(0, ${offset}px, 0)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [speed]);

  return (
    <div ref={sectionRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}


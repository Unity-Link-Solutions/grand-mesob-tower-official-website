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

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrolled = window.scrollY;
      const sectionTop = scrolled + rect.top;
      const offset = (scrolled - sectionTop) * speed;

      // Only apply transform when section is in viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        section.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={sectionRef} className={`transition-transform ${className}`}>
      {children}
    </div>
  );
}


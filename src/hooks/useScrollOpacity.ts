import { useState, useEffect } from 'react';

export const useScrollOpacity = (): number => {
  const [opacity, setOpacity] = useState<number>(1);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Calculate opacity: starts at 1 (top), fades to 0 after one viewport height
      // opacity = 1 - (scrollY / viewportHeight)
      // When scrollY = 0, opacity = 1 (fully visible)
      // When scrollY = viewportHeight, opacity = 0 (fully invisible)
      let calc = 1 - scrollY / viewportHeight;
      
      // Clamp between 0 and 1
      calc = Math.max(0, Math.min(1, calc));
      
      setOpacity(calc);
    };

    // Set initial opacity
    handleScroll();

    // Use requestAnimationFrame for smoother scroll handling
    let ticking = false;
    const optimizedScroll = (): void => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizedScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', optimizedScroll);
    };
  }, []);

  return opacity;
};

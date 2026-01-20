import { useState, useEffect } from 'react';

interface UseScrollOpacityOptions {
  range?: number;
  offset?: number;
}

export const useScrollOpacity = ({ range = 500, offset = 700 }: UseScrollOpacityOptions = {}): number => {
  const [opacity, setOpacity] = useState<number>(1);

  useEffect(() => {
    const handleScroll = (): void => {
      let calc = 1 - (window.scrollY - offset + range) / range;
      
      if (calc > 1) {
        calc = 1;
      } else if (calc < 0) {
        calc = 0;
      }
      
      setOpacity(calc);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [range, offset]);

  return opacity;
};

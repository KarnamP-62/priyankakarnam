import { useState, useEffect } from 'react';

// Breakpoint values in pixels
const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  wide: 1440
};

export function useViewport() {
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
    isMobile: false,
    isTablet: false,
    isDesktop: true
  });

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Use matchMedia for breakpoint detection (synced with CSS)
      const isMobile = window.matchMedia(`(max-width: ${BREAKPOINTS.tablet - 1}px)`).matches;
      const isTablet = window.matchMedia(`(min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop - 1}px)`).matches;
      const isDesktop = window.matchMedia(`(min-width: ${BREAKPOINTS.desktop}px)`).matches;

      setViewport({
        width,
        height,
        isMobile,
        isTablet,
        isDesktop
      });

      // Set CSS custom properties for viewport height (avoiding vh issues on mobile)
      document.documentElement.style.setProperty('--viewport-height', `${height}px`);
      document.documentElement.style.setProperty('--viewport-width', `${width}px`);
    };

    // Initial calculation
    updateViewport();

    // Update on resize
    window.addEventListener('resize', updateViewport);

    // Also handle orientation change for mobile
    window.addEventListener('orientationchange', () => {
      // Delay to allow browser to complete orientation change
      setTimeout(updateViewport, 100);
    });

    return () => {
      window.removeEventListener('resize', updateViewport);
      window.removeEventListener('orientationchange', updateViewport);
    };
  }, []);

  return viewport;
}

export { BREAKPOINTS };

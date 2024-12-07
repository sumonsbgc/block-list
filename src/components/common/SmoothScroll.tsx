'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    const handleHashChange = (event: HashChangeEvent) => {
      const hash = window.location.hash;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Listen for hashchange events
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return null; // This component is only responsible for smooth scrolling behavior
}

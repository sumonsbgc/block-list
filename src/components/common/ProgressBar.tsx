'use client';

import { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const startProgress = () => {
      console.log('startProgress');
      setIsAnimating(true);
      setProgress(0);

      // Simulate progress over time
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 90 ? prev + 10 : prev));
      }, 200);

      return () => clearInterval(interval);
    };

    const completeProgress = () => {
      console.log('completeProgress');
      setProgress(100);

      // Wait for the bar to complete, then hide it
      setTimeout(() => {
        setIsAnimating(false);
        setProgress(0);
      }, 300);
    };

    const handleHashChange = () => {
      console.log('startProgress');
      startProgress();
      setTimeout(completeProgress, 500); // Simulate load completion
    };

    // Listen for custom events (full route changes)
    window.addEventListener('loading:start', startProgress);
    window.addEventListener('loading:end', completeProgress);

    // Listen for hash changes (e.g., /#section navigation)
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('loading:start', startProgress);
      window.removeEventListener('loading:end', completeProgress);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '4px',
        backgroundColor: 'red',
        width: `${progress}%`,
        transition: 'width 0.3s ease, opacity 0.3s ease',
        opacity: isAnimating ? 1 : 0,
        zIndex: 9999,
      }}
    />
  );
};

export default ProgressBar;

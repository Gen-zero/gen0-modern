const PerformanceMonitor = () => {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          // Optimize performance
          if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
              // Monitor Core Web Vitals
              if ('PerformanceObserver' in window) {
                new PerformanceObserver((entryList) => {
                  const entries = entryList.getEntries();
                  const lastEntry = entries[entries.length - 1];
                  console.log('LCP:', lastEntry.startTime);
                }).observe({entryTypes: ['largest-contentful-paint']});
              }
              
              // Preload likely resources
              const preloadImages = () => {
                const images = document.querySelectorAll('img[data-src]');
                images.forEach(img => {
                  if (img.dataset.src) {
                    const imageObj = new Image();
                    imageObj.src = img.dataset.src;
                  }
                });
              };
              
              setTimeout(preloadImages, 2000);
            });
          }
        `
      }}
    />
  );
};

export default PerformanceMonitor;

export const createParticle = (y: number) => {
  const particle = document.createElement('div');
  particle.className = 'quantum-particle';
  
  // Position next to scrollbar
  const scrollbarWidth = 14;
  const right = Math.random() * 5 + 2; // Vary particle position slightly
  const size = Math.random() * 6 + 3;  // Random size between 3-9px
  
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.right = `${scrollbarWidth + right}px`;
  particle.style.top = `${y}px`;
  
  document.body.appendChild(particle);
  
  // Remove particle after animation completes
  setTimeout(() => {
    if (particle.parentNode === document.body) {
      document.body.removeChild(particle);
    }
  }, 1200);
};

export const createScrollParticles = (thumbPosition: number, count: number = 3) => {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      createParticle(thumbPosition + Math.random() * 50);
    }, i * 50);
  }
};


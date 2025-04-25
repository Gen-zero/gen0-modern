
import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  alpha: number;
  velocity: number;
}

interface ParticleTrailProps {
  thumbPosition: number;
  scrollVelocity: number;
  active: boolean;
  isAboutPage?: boolean;
}

const ParticleTrail: React.FC<ParticleTrailProps> = ({ 
  thumbPosition, 
  scrollVelocity,
  active,
  isAboutPage = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  
  // Generate particles effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = 30;
      canvas.height = window.innerHeight;
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    // Animation loop for particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Generate new particles when active
      if (active && Math.abs(scrollVelocity) > 0.5) {
        const particleCount = Math.min(5, Math.floor(Math.abs(scrollVelocity) / 2));
        
        for (let i = 0; i < particleCount; i++) {
          const size = Math.random() * 3 + 1;
          const velocityFactor = Math.min(Math.abs(scrollVelocity) / 10, 1);
          
          // Different particle colors for About page
          const aboutPageColors = [
            `rgba(147, 51, 234, ${Math.random() * 0.7 + 0.3})`, // Purple
            `rgba(236, 72, 153, ${Math.random() * 0.7 + 0.3})`, // Pink
            `rgba(79, 70, 229, ${Math.random() * 0.7 + 0.3})`,  // Indigo
          ];
          
          const defaultColors = [
            `rgba(0, 206, 209, ${Math.random() * 0.7 + 0.3})`, 
            `rgba(75, 0, 130, ${Math.random() * 0.7 + 0.3})`
          ];
          
          const colorOptions = isAboutPage ? aboutPageColors : defaultColors;
          const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
          
          particles.current.push({
            x: canvas.width / 2 - 5 + Math.random() * 10,
            y: thumbPosition + Math.random() * 16,
            size,
            color,
            alpha: 1,
            velocity: (Math.random() * 2 + 0.5) * velocityFactor
          });
        }
      }
      
      // Update and draw existing particles
      particles.current.forEach((particle, index) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(/[\d.]+\)$/g, `${particle.alpha})`);
        ctx.fill();
        
        // Update particle properties
        particle.alpha -= 0.02;
        particle.y += scrollVelocity > 0 ? particle.velocity : -particle.velocity;
        particle.size -= 0.05;
        
        // Remove particles that are no longer visible
        if (particle.alpha <= 0 || particle.size <= 0) {
          particles.current.splice(index, 1);
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animationRef.current);
      particles.current = [];
    };
  }, [thumbPosition, scrollVelocity, active, isAboutPage]);
  
  return (
    <canvas ref={canvasRef} className="quantum-particles" />
  );
};

export default ParticleTrail;

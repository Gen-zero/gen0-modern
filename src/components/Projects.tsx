
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const projects = [{
  id: 1,
  title: 'Guild Board',
  category: 'Web App',
  image: '/lovable-uploads/611c98b6-d6c7-4eef-8c6e-2adb0ecc29ef.png',
  description: 'Organization at your fingertips. Guild Board isn’t just another social platform—it’s where ideas evolve into startups while the rest of social media keeps you consuming. Here, you don’t scroll—you build.

Create your Guild. Start building. ⚡'
}, {
  id: 2,
  title: 'Saadhana Board',
  category: 'Web App',
  image: 'https://ik.imagekit.io/kalidaspem/d1660e9c-7a59-4119-9b87-992fd0e28886.jpg',
  description: 'A divine digital space for your Saadhana—pick any deity, manifest your goals, and track your spiritual journey like a boss.'
}, {
  id: 3,
  title: 'Fuel Unit',
  category: 'Web App',
  image: 'https://ik.imagekit.io/kalidaspem/b8a842e9-0b59-4687-8b15-ea15a15a2a0d.jpg',
  description: 'Fuel Unit tracks fuel prices in real-time, spotting the cheapest fuel stops along your route—no cap, just savings!'
}];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const isMobile = useIsMobile();
  
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="md:max-w-lg mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Featured projects</h2>
            <p className="text-muted-foreground text-lg">
              A selection of our in-house projects showcasing our expertise and creative approach.
            </p>
          </div>
          <Link to="/projects">
            <Button variant="outline" size="lg" className="group">
              <span>View all projects</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-xl animate-fade-in" 
              style={{
                animationDelay: `${index * 0.15}s`
              }}
              onMouseEnter={() => setHoveredProject(project.id)} 
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 z-10 transition-opacity duration-300" 
                style={{
                  opacity: isMobile || hoveredProject === project.id ? 0.95 : 0.7
                }}
              ></div>
              
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-[400px] object-cover transition-transform duration-700 ease-out" 
                style={{
                  transform: isMobile || hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)'
                }}
                loading="lazy" 
              />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8 transition-all duration-300">
                <span className="text-white/70 text-sm font-medium mb-2">{project.category}</span>
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-3">{project.title}</h3>
                <p 
                  className="text-white/80 mb-6 transition-opacity duration-300 max-w-sm" 
                  style={{
                    opacity: isMobile || hoveredProject === project.id ? 1 : 0,
                    transform: isMobile || hoveredProject === project.id ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.3s ease, transform 0.3s ease'
                  }}
                >
                  {project.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-fit transition-all duration-300 bg-white/10 hover:bg-white/20 border-white/20 text-white" 
                  style={{
                    opacity: isMobile || hoveredProject === project.id ? 1 : 0,
                    transform: isMobile || hoveredProject === project.id ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.3s ease, transform 0.3s ease'
                  }}
                >
                  View project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

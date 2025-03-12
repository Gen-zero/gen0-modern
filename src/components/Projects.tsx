import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
const projects = [{
  id: 1,
  title: 'Modern eCommerce Platform',
  category: 'Web Development',
  image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
  description: 'A comprehensive eCommerce solution with advanced product filtering, user authentication, and payment processing.'
}, {
  id: 2,
  title: 'Luxury Brand Identity',
  category: 'Brand Design',
  image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
  description: 'Complete brand identity system for a high-end fashion brand, including logo design, typography, and visual language.'
}, {
  id: 3,
  title: 'Financial Dashboard',
  category: 'UI/UX Design',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  description: 'An intuitive financial management dashboard with real-time data visualization and predictive analytics.'
}];
const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  return <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="md:max-w-lg mb-8 md:mb-0">
            
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Featured projects</h2>
            <p className="text-muted-foreground text-lg">
              A selection of our in-house projects showcasing our expertise and creative approach.
            </p>
          </div>
          <Button variant="outline" size="lg" className="group">
            <span>View all projects</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => <div key={project.id} className="group relative overflow-hidden rounded-xl animate-fade-in" style={{
          animationDelay: `${index * 0.15}s`
        }} onMouseEnter={() => setHoveredProject(project.id)} onMouseLeave={() => setHoveredProject(null)}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 transition-opacity duration-300" style={{
            opacity: hoveredProject === project.id ? 0.9 : 0.6
          }}></div>
              
              <img src={project.image} alt={project.title} className="w-full h-[400px] object-cover transition-transform duration-700 ease-out" style={{
            transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)'
          }} loading="lazy" />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8 transition-all duration-300">
                <span className="text-white/70 text-sm font-medium mb-2">{project.category}</span>
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-white/80 mb-6 transition-opacity duration-300 max-w-sm" style={{
              opacity: hoveredProject === project.id ? 1 : 0,
              transform: hoveredProject === project.id ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.3s ease, transform 0.3s ease'
            }}>
                  {project.description}
                </p>
                <Button variant="outline" size="sm" className="w-fit transition-all duration-300 bg-white/10 hover:bg-white/20 border-white/20 text-white" style={{
              opacity: hoveredProject === project.id ? 1 : 0,
              transform: hoveredProject === project.id ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.3s ease, transform 0.3s ease'
            }}>
                  View project
                </Button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Projects;
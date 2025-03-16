
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";

const projects = [{
  id: 1,
  title: "Modern eCommerce Platform",
  category: "Web Development",
  image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
  description: "A comprehensive eCommerce solution with advanced product filtering, user authentication, and payment processing.",
  fullDescription: "Our team designed and developed a comprehensive eCommerce platform that provides businesses with a scalable, high-performance solution. The platform includes advanced product filtering, user authentication, payment processing integration, and a dashboard for inventory management. Built with React and Node.js, this solution offers excellent performance and maintainability."
}, {
  id: 2,
  title: "Luxury Brand Identity",
  category: "Brand Design",
  image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
  description: "Complete brand identity system for a high-end fashion brand, including logo design, typography, and visual language.",
  fullDescription: "We created a comprehensive brand identity system for a high-end fashion label. The project encompassed logo design, typography selection, color palette development, and a complete visual language that reflects the brand's luxury positioning. The system was implemented across digital platforms, print materials, packaging design, and in-store experiences."
}, {
  id: 3,
  title: "Financial Dashboard",
  category: "UI/UX Design",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  description: "An intuitive financial management dashboard with real-time data visualization and predictive analytics.",
  fullDescription: "Our team designed and developed an intuitive financial management dashboard for a fintech startup. The dashboard features real-time data visualization, predictive analytics, and personalized insights. The interface was designed with a focus on clarity and ease of use, allowing users to quickly understand complex financial data through interactive charts and customizable reports."
}, {
  id: 4,
  title: "Healthcare Mobile App",
  category: "Mobile Development",
  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  description: "A patient-centered healthcare app that connects users with medical professionals and manages health records.",
  fullDescription: "We developed a comprehensive healthcare mobile application that connects patients with medical professionals. The app features secure messaging, appointment scheduling, health record management, and medication reminders. Using React Native, we created a cross-platform solution that delivers a seamless experience across iOS and Android devices while maintaining strict compliance with healthcare data security standards."
}, {
  id: 5,
  title: "Sustainable Packaging Design",
  category: "Packaging Design",
  image: "https://images.unsplash.com/photo-1607461194986-4acca4203c5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  description: "Eco-friendly packaging solutions for a food delivery service, reducing environmental impact while maintaining brand identity.",
  fullDescription: "For a popular food delivery service, we designed a line of eco-friendly packaging solutions that significantly reduced environmental impact while maintaining brand identity. The project involved material research, structural design, and visual branding. The final designs used biodegradable materials, minimized waste, and created a recognizable unboxing experience that enhanced the brand's commitment to sustainability."
}, {
  id: 6,
  title: "Social Media Analytics Platform",
  category: "Web Development",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
  description: "A comprehensive analytics dashboard for social media marketers to track campaign performance and audience engagement.",
  fullDescription: "We built a powerful social media analytics platform that helps marketers track campaign performance across multiple channels. The platform aggregates data from various social networks, providing unified insights into audience engagement, content performance, and ROI. Features include customizable dashboards, automated reporting, competitor analysis, and AI-powered recommendations for content optimization."
}];

const ProjectsPage = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <ScrollArea className="h-screen no-scrollbar">
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col gap-2 mb-16">
              <Link to="/" className="flex items-center text-sm text-muted-foreground hover:text-accent transition-colors mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Inhouse Projects</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">These are our in-house projects—check them out, vibe with us, and join our mission of levelling up humanity!</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="group relative overflow-hidden rounded-xl animate-fade-in border border-border/50" 
                  style={{
                    animationDelay: `${index * 0.15}s`
                  }} 
                  onMouseEnter={() => setHoveredProject(project.id)} 
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 transition-opacity duration-300" 
                    style={{
                      opacity: isMobile || hoveredProject === project.id ? 0.9 : 0.6
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
                    <Link to={`/projects/${project.id}`}>
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
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        
        {/* Contact CTA */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's work together to create something amazing. Our team is ready to bring your vision to life.
            </p>
            <Link to="/#contact">
              <Button size="lg" className="px-8">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
        
        {/* Footer */}
        <div className="container mx-auto py-6 text-center text-muted-foreground text-sm border-t border-border/40 mt-10">
          <p>© {new Date().getFullYear()} Gen0. All rights reserved.</p>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ProjectsPage;


import Navbar from "@/components/Navbar";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";

const projects = [{
  id: 1,
  title: "Guild Board",
  category: "Web App",
  image: "/lovable-uploads/611c98b6-d6c7-4eef-8c6e-2adb0ecc29ef.png",
  description: "Organization at your fingertips. Guild Board isn’t just another social platform—Here, you don’t scroll—you build.\n\nCreate your Guild and build⚡",
  fullDescription: "Our team designed and developed a comprehensive eCommerce platform that provides businesses with a scalable, high-performance solution. The platform includes advanced product filtering, user authentication, payment processing integration, and a dashboard for inventory management. Built with React and Node.js, this solution offers excellent performance and maintainability."
}, {
  id: 2,
  title: "Saadhana Board",
  category: "Web App",
  image: "https://ik.imagekit.io/kalidaspem/d1660e9c-7a59-4119-9b87-992fd0e28886.jpg",
  description: "A digital Yantra to connect with your deity and your inner self. This sacred tool helps manifest the deity’s will into reality. 🔱✨",
  fullDescription: "We created a comprehensive brand identity system for a high-end fashion label. The project encompassed logo design, typography selection, color palette development, and a complete visual language that reflects the brand's luxury positioning. The system was implemented across digital platforms, print materials, packaging design, and in-store experiences."
}, {
  id: 3,
  title: "Fuel Unit",
  category: "Web App",
  image: "https://ik.imagekit.io/kalidaspem/b8a842e9-0b59-4687-8b15-ea15a15a2a0d.jpg",
  description: "Fuel Unit tracks fuel prices in real-time, spotting the cheapest fuel stops along your route—no cap, just savings!",
  fullDescription: "Our team designed and developed an intuitive financial management dashboard for a fintech startup. The dashboard features real-time data visualization, predictive analytics, and personalized insights. The interface was designed with a focus on clarity and ease of use, allowing users to quickly understand complex financial data through interactive charts and customizable reports."
}, {
  id: 4,
  title: "Kaali Punk",
  category: "Virtual Influencer",
  image: "https://ik.imagekit.io/kalidaspem/5c4ffdbb-03fc-4225-a964-bcd912ac12be.jpg",
  description: "Kaali Punk is a cyber-mystic avatar dropping truth bombs, mixing Vedic wisdom with futuristic vibes to wake minds and shake the system. 🚀🔥",
  fullDescription: "We developed a comprehensive healthcare mobile application that connects patients with medical professionals. The app features secure messaging, appointment scheduling, health record management, and medication reminders. Using React Native, we created a cross-platform solution that delivers a seamless experience across iOS and Android devices while maintaining strict compliance with healthcare data security standards."
}, {
  id: 5,
  title: "Prompt Engineering Course",
  category: "Course",
  image: "https://ik.imagekit.io/kalidaspem/DALL_E%202025-03-16%2020.20.28%20-%20A%20pure%20minimalistic%20and%20truthful%20visual%20representation%20of%20'Prompt%20Engineering.'%20The%20image%20features%20an%20abstract,%20clean%20depiction%20of%20a%20hand%20subtly%20guidi.webp",
  description: "Master the art of prompt engineering—learn how to craft killer prompts, unlock AI superpowers, and level up your skills to pro in no time. No fluff, just pure AI mastery!",
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

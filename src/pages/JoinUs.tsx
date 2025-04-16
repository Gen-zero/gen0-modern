
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/about/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, Clock, Code, FileCheck, MessageSquareMore, Sparkles, Users, Zap } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinUs = () => {
  useScrollAnimation();
  const [activeTab, setActiveTab] = useState("culture");
  const navigate = useNavigate();
  
  const goToContactSection = () => {
    navigate('/#contact');
  };
  
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        staggerChildren: 0.2,
      }
    },
    exit: { opacity: 0 }
  };
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <SEO 
        title="Join Us | Gen0 - The Digital Studio for the next generation"
        description="Join the Gen0 team and be part of building products that transform lives. We're a remote-first, task-based digital studio focused on meaningful solutions."
        keywords="GenZ jobs, remote tech jobs, digital innovation careers, task-based work environment, join tech startup, UX design jobs, developer positions, prompt engineering roles"
        canonicalUrl="https://gen0.design/join-us"
        ogTitle="Join the Gen0 Team | Build Meaningful Digital Products"
        ogDescription="We're looking for passionate individuals to join our mission of building products that transform lives. Discover our culture and work processes."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "JobPosting",
          "title": "Digital Innovation Team Member",
          "description": "Join our growing team to help build the next generation of digital products.",
          "datePosted": new Date().toISOString(),
          "employmentType": "FULL_TIME",
          "hiringOrganization": {
            "@type": "Organization",
            "name": "Gen0",
            "sameAs": "https://gen0.design"
          },
          "jobLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN",
              "addressLocality": "Remote"
            }
          }
        }}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        className="pt-24 lg:pt-32 pb-16 bg-secondary/20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-4"
            >
              <div className="bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-medium inline-flex items-center">
                <Users className="h-4 w-4 mr-2" />
                We're expanding our team
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 background-animate bg-gradient-to-r from-primary/80 via-accent to-primary/80 bg-clip-text text-transparent"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Join Us in Building <br className="hidden md:block" />
              <span className="relative inline-block">
                Meaningful Products
                <motion.span 
                  className="absolute -top-6 -right-8 text-accent"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ scale: 1, rotate: 15 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Sparkles className="h-8 w-8" />
                </motion.span>
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              At Gen0, we're building the future of digital products that transform lives.
              Join our remote-first team and be part of something greater.
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" onClick={() => {
                document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' });
              }} className="bg-primary text-white hover:bg-primary/90">
                See Open Positions
              </Button>
              
              <Button variant="outline" size="lg" onClick={() => {
                document.getElementById('culture')?.scrollIntoView({ behavior: 'smooth' });
              }} className="border-primary/20 hover:bg-yellow-200 hover:text-black hover:border-yellow-300">
                Learn About Our Culture
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Our Culture Section */}
      <motion.section 
        id="culture"
        className="py-20 bg-background"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Work Culture</h2>
            <p className="text-lg text-muted-foreground">
              At Gen0, we believe in creating an environment where innovation thrives and each team member can do their best work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Remote-First */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden group">
              <CardContent className="p-8">
                <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4 group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Remote-First</h3>
                <p className="text-muted-foreground">
                  Work from anywhere in the world. We believe talented people should be able to work from where they're most productive.
                </p>
              </CardContent>
            </Card>
            
            {/* Card 2: Task-Based Work */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden group">
              <CardContent className="p-8">
                <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4 group-hover:bg-primary/20 transition-colors">
                  <FileCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Task-Based Work</h3>
                <p className="text-muted-foreground">
                  We focus on outcomes, not hours. We trust our team to manage their time and deliver quality results.
                </p>
              </CardContent>
            </Card>
            
            {/* Card 3: Open Communication */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden group">
              <CardContent className="p-8">
                <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4 group-hover:bg-primary/20 transition-colors">
                  <MessageSquareMore className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Open Communication</h3>
                <p className="text-muted-foreground">
                  Transparent communication is our foundation. Everyone has a voice and is encouraged to contribute ideas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>
      
      {/* How We Work Section */}
      <motion.section 
        className="py-20 bg-secondary/10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
            <div className="flex-1">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We've designed our workflow to maximize productivity while ensuring work-life balance. Our process is built around flexibility, clarity, and collaboration.
                </p>
                
                <div className="space-y-6">
                  {/* Process Item 1 */}
                  <div className="flex gap-4">
                    <div className="bg-primary/10 h-12 w-12 flex items-center justify-center rounded-lg shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Task-Based Environment</h3>
                      <p className="text-muted-foreground">
                        We don't measure success by hours worked, but by tasks completed. This gives you the freedom to work when you're most productive.
                      </p>
                    </div>
                  </div>
                  
                  {/* Process Item 2 */}
                  <div className="flex gap-4">
                    <div className="bg-primary/10 h-12 w-12 flex items-center justify-center rounded-lg shrink-0">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Streamlined Protocols</h3>
                      <p className="text-muted-foreground">
                        Clear documentation, code standards, and project management practices ensure everyone is aligned and work progresses smoothly.
                      </p>
                    </div>
                  </div>
                  
                  {/* Process Item 3 */}
                  <div className="flex gap-4">
                    <div className="bg-primary/10 h-12 w-12 flex items-center justify-center rounded-lg shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Collaborative Projects</h3>
                      <p className="text-muted-foreground">
                        While we value independent work, we also believe in the power of collaboration. Regular sync-ups ensure we're all moving in the right direction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 order-first md:order-last">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-70"></div>
                <Card className="relative border-0 shadow-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <img 
                      src="/lovable-uploads/611c98b6-d6c7-4eef-8c6e-2adb0ecc29ef.png" 
                      alt="Gen0 team collaboration" 
                      className="w-full h-[400px] object-cover object-center" 
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Tools and Communication */}
      <motion.section 
        className="py-20 bg-background"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tools & Communication</h2>
            <p className="text-lg text-muted-foreground">
              We leverage modern tools to stay connected and collaborative, no matter where we are in the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Tool 1: Guild Board */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden group">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <img src="/lovable-uploads/064b72fa-db67-415f-804d-69b24d008e2b.png" alt="Guild Board Logo" className="h-12 w-12 object-contain" />
                  <h3 className="text-xl font-semibold">Guild Board</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Our own product serves as our primary collaboration platform. It helps us organize tasks, share documents, and track progress.
                </p>
                <div className="text-xs text-muted-foreground/70">
                  Used for: Task management, document sharing, progress tracking
                </div>
              </CardContent>
            </Card>
            
            {/* Tool 2: Communication */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden group">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <MessageSquareMore className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Messaging Platforms</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  We use modern messaging tools for quick communication, team updates, and collaborative discussions.
                </p>
                <div className="text-xs text-muted-foreground/70">
                  Used for: Daily communication, team updates, quick questions
                </div>
              </CardContent>
            </Card>
            
            {/* Tool 3: Design */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden group">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3L4.5 8.5V15.5L12 21L19.5 15.5V8.5L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Design Tools</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Our design workflow incorporates the latest tools for UI/UX design, prototyping, and user testing.
                </p>
                <div className="text-xs text-muted-foreground/70">
                  Used for: UI/UX design, prototyping, user testing
                </div>
              </CardContent>
            </Card>
            
            {/* Tool 4: Development */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden group">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Development Stack</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  We use modern technologies and frameworks to build scalable, maintainable, and innovative products.
                </p>
                <div className="text-xs text-muted-foreground/70">
                  Used for: Frontend development, backend engineering, QA testing
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>
      
      {/* Open Positions */}
      <motion.section 
        id="positions"
        className="py-20 bg-secondary/10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Positions</h2>
            <p className="text-lg text-muted-foreground">
              We're always looking for passionate individuals to join our team. Check out our current openings below.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Position 1 */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div>
                    <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium inline-block mb-3">
                      Full-time Remote
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Backend Developer</h3>
                    <p className="text-muted-foreground max-w-xl">
                     We're looking for a forward-thinking Backend Developer who can transform complex challenges into robust, scalable server-side solutions.
                    </p>
                  </div>
                  <Button 
                    className="shrink-0 hover:bg-cursor-glow hover:text-black hover:border-yellow-300 hover:shadow-[0_0_20px_rgba(254,240,138,0.7)]"
                    onClick={goToContactSection}
                  >
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Position 2 */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div>
                    <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium inline-block mb-3">
                      Full-time Remote
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Content Creator</h3>
                    <p className="text-muted-foreground max-w-xl">
                      We're looking for a creative YouTube Content Creator & Video Editor who can transform complex ideas into engaging, visually appealing stories.
                    </p>
                  </div>
                  <Button 
                    className="shrink-0 hover:bg-cursor-glow hover:text-black hover:border-yellow-300 hover:shadow-[0_0_20px_rgba(254,240,138,0.7)]"
                    onClick={goToContactSection}
                  >
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Position 3 */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div>
                    <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium inline-block mb-3">
                      Full-time Remote
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Prompt Engineer</h3>
                    <p className="text-muted-foreground max-w-xl">
                      Help us leverage AI technologies to enhance our products and streamline our workflows.
                    </p>
                  </div>
                  <Button 
                    className="shrink-0 hover:bg-cursor-glow hover:text-black hover:border-yellow-300 hover:shadow-[0_0_20px_rgba(254,240,138,0.7)]"
                    onClick={goToContactSection}
                  >
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Open Application */}
            <div className="text-center mt-12">
              <p className="text-lg mb-6">
                Don't see a position that matches your skills? We're always looking for talented individuals.
              </p>
              <Button 
                variant="outline"
                size="lg"
                onClick={goToContactSection}
                className="border-primary/20 hover:bg-cursor-glow hover:text-black hover:border-yellow-300 hover:shadow-[0_0_20px_rgba(254,240,138,0.7)]"
              >
                Send Open Application
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-secondary/30 via-background to-secondary/20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you're passionate about building meaningful products and want to be part of a forward-thinking team, we'd love to hear from you.
            </p>
            <Button 
              size="lg"
              onClick={goToContactSection}
              className="bg-primary text-white hover:bg-cursor-glow hover:text-black hover:shadow-[0_0_20px_rgba(254,240,138,0.7)]"
            >
              Apply Today
            </Button>
          </div>
        </div>
      </motion.section>
      
      <Footer />
    </motion.div>
  );
};

export default JoinUs;

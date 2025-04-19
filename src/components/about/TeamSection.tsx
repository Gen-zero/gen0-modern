
import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  personalDetail: string;
  imgUrl: string;
  expertise?: string[];
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [{
    name: "Manu Narayanan",
    position: "Founder & Advisor",
    bio: "Lowkey a scientist, highkey a visionary—he's all about building cool stuff that actually moves humanity forward. Obsessed with innovation, stacked with ideas, and always clocking what's really going on around him. He gets the daily grind Gen Z pros go through (been there, felt that) and is out here tryna flip the game with solutions that actually hit.",
    personalDetail: "He's the guru Gen Z didn't know they needed—got a knack for spotting untapped potential and bringing it to the surface just by vibing with people.",
    imgUrl: "https://ik.imagekit.io/kalidaspem/c46019ce-faea-4d33-b80c-b78d9da6d500.jpg?updatedAt=1742559972141",
    expertise: ["Prompt Engineering", "0 to 1 Product Development", "UX Designer", "Strategic Planning", "Branding", "Sales"]
  }, {
    name: "Kalidasan P E M",
    position: "Co-Founder and CTO",
    bio: "Once a freelancer stacking wins with websites and webapps, now a full-time dream chaser who dropped out of college to build this vision from the ground up. He codes like a wizard, thinks like a strategist, and lives like it's all one big open-world game—where even failures just level him up with extra XP.",
    personalDetail: "When he's not building worlds in code, he's conjuring them in words—poems and tales that stir souls and leave echoes in the hearts of those who read them.",
    imgUrl: "https://ik.imagekit.io/kalidaspem/894146aa-4ab3-4820-b55b-55478d7507a9.jpg?updatedAt=1742559972090",
    expertise: ["Web Development", "MVP Building", "Prompt Engineering", "Backend Systems", "UI Design"]
  }, {
    name: "Yedhu Krishna",
    position: "Creative Director",
    bio: "Yedhu's award-winning design approach combines aesthetics with functionality. He leads our creative team in delivering visually stunning work with a focus on GenZ user experiences.",
    personalDetail: "Yedhu is a published photographer and maintains a popular design blog in his spare time.",
    imgUrl: "https://ik.imagekit.io/kalidaspem/yedhukrishnan.jpg",
    expertise: ["UI/UX Design", "Brand Strategy", "Design Systems", "User Research"]
  }, { 
    name: "Harshita Macom",
    position: "Full-Stack Developer",
    bio: "Just a student tryna figure out AIML, but don't let that fool you—she's out here stacking hackathon wins like they're daily quests. From the GDG Solution Challenge to Smart India Hackathon, she's been in the trenches and came out shining. Her project for GDG Solution Challenge 2024 even got the golden ticket to be showcased at Google's Build with AI event. A core member of GDG on Campus CMRIT, she recently turned her college into a hackathon battleground. She codes, she competes, she dreams—basically, she's building her own AI-powered world, one line of code at a time.",
    personalDetail: "When she's not crushing it in AI and ML, you'll find her flexing those competitive programming muscles on Leetcode and Codechef.",
    imgUrl: "https://ik.imagekit.io/kalidaspem/ef516116-3834-4044-9557-a0b13da50833.jpg",
    expertise: ["Front End", "Back End", "RESTful APIs", "Python"]
  }, {
    name: "Kannan S",
    position: "Backend Developer",
    bio: "Kannan excels at translating client needs into product strategies. His background in psychology gives him unique insight into user behavior and digital experiences.",
    personalDetail: "A devoted father of twins, Kannan is also working on his first science fiction novel.",
    imgUrl: "https://ik.imagekit.io/kalidaspem/DeWatermark.ai_1742651326709.png",
    expertise: ["Backend Development", "Database Architecture", "API Design", "System Integration"]
  }];

  // Create structured data for the team
  const teamStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Gen0",
    "url": "https://gen0.design",
    "employee": teamMembers.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.position,
      "description": member.bio,
      "knowsAbout": member.expertise,
      "image": member.imgUrl
    }))
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Navigation functions
  const nextMember = () => {
    setActiveIndex(prev => (prev + 1) % teamMembers.length);
  };
  
  const prevMember = () => {
    setActiveIndex(prev => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  // The DNA helix animation effect
  useEffect(() => {
    const dnaStrands = document.querySelectorAll('.dna-strand');
    
    dnaStrands.forEach((strand, index) => {
      gsap.to(strand, {
        y: '+=20',
        opacity: index % 2 === 0 ? 0.8 : 0.4,
        duration: 2 + (index * 0.2),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.1
      });
    });

    // Scroll to specific team member on activeIndex change
    if (cardsRef.current) {
      const cards = Array.from(cardsRef.current.children);
      if (cards[activeIndex]) {
        cards[activeIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }

    return () => {
      // Clean up GSAP animations
      gsap.killTweensOf('.dna-strand');
    };
  }, [activeIndex]);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(teamStructuredData)}
        </script>
      </Helmet>
      
      <div className="relative py-24 overflow-hidden animate-on-scroll" ref={containerRef}>
        {/* DNA-like background effect */}
        <div className="absolute inset-0 z-0 opacity-20">
          {Array.from({ length: 24 }).map((_, index) => (
            <div 
              key={index}
              className={`dna-strand absolute h-[20px] w-[80%] rounded-full bg-primary/20 left-${index % 12 * 8} top-${(index * 4) % 100}`}
              style={{
                left: `${(index % 8) * 12}%`,
                top: `${(index * 5) % 100}%`,
                width: `${30 + (index % 6) * 10}px`,
                height: "4px",
                transform: `rotate(${index % 2 === 0 ? '-' : ''}${(index % 20) * 9}deg)`,
                opacity: 0.1 + (index % 10) / 20
              }}
            />
          ))}
        </div>
        
        {/* Header */}
        <div className="text-center mb-16 z-10 relative px-4 sm:px-6 md:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent 
          bg-gradient-to-r from-primary via-accent to-secondary">The Minds Behind Gen0</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            The architects of change, the ones who move when the signal calls—wheels turn, tides shift, 
            and the unseen hand shapes what's next. Our team specializes in prompt engineering, MVP development, 
            and creating digital products for GenZ and beyond. ⚙️🌊✨
          </p>
        </div>
        
        {/* Interactive Team Card Display */}
        <div className="relative mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          {/* Controls */}
          <div className="absolute top-1/2 z-20 flex justify-between w-full -translate-y-1/2 px-2">
            <button 
              onClick={prevMember} 
              className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 hover:bg-primary/10 transition-all duration-300"
              aria-label="Previous team member"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>
            <button 
              onClick={nextMember} 
              className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 hover:bg-primary/10 transition-all duration-300"
              aria-label="Next team member"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>
          </div>
          
          {/* The horizontal scrolling container */}
          <div className="overflow-x-auto hide-scrollbar snap-x snap-mandatory touch-pan-x" ref={cardsRef}>
            <div className="flex space-x-6 px-4">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className={`snap-center min-w-[85vw] sm:min-w-[450px] md:min-w-[600px] flex-shrink-0 transform transition-all duration-700 ${
                    activeIndex === index ? 'scale-100' : 'scale-90 opacity-50'
                  }`}
                >
                  <motion.div 
                    className={`relative bg-card rounded-2xl overflow-hidden shadow-xl border-2 ${
                      activeIndex === index ? 'border-primary' : 'border-transparent'
                    } hover:shadow-2xl transition-shadow`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      rotateY: hoveredIndex === index ? 10 : 0,
                      scale: hoveredIndex === index ? 1.02 : 1
                    }}
                    transition={{ duration: 0.5 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Image with overlay pattern */}
                      <div 
                        className="relative md:w-2/5 aspect-square overflow-hidden"
                        style={{ 
                          clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)"
                        }}
                      >
                        <div 
                          className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/20"
                        />
                        <img 
                          src={member.imgUrl} 
                          alt={`${member.name} - ${member.position}`} 
                          className="w-full h-full object-cover"
                        />
                        {/* Floating position badge */}
                        <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-primary/30 shadow-lg">
                          <p className="text-sm font-semibold text-primary">{member.position}</p>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold mb-2 relative">
                            {member.name}
                            <span 
                              className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary to-transparent rounded"
                              style={{ width: `${member.name.length * 10}px`, maxWidth: '100%' }}
                            />
                          </h3>
                          
                          <p className="text-muted-foreground mb-6">{member.bio}</p>
                          
                          {/* Expertise tags with staggered animation */}
                          {member.expertise && (
                            <div className="mb-6">
                              <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Expertise</h4>
                              <div className="flex flex-wrap gap-2">
                                {member.expertise.map((skill, idx) => (
                                  <motion.span 
                                    key={idx} 
                                    className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1 flex items-center gap-1"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ 
                                      opacity: activeIndex === index ? 1 : 0.7,
                                      scale: activeIndex === index ? 1 : 0.9
                                    }}
                                    transition={{ 
                                      delay: idx * 0.1,
                                      duration: 0.3
                                    }}
                                  >
                                    <Star size={10} className="text-accent" />
                                    {skill}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        
                        {/* Personal detail in a decorative box */}
                        <div className="relative mt-auto">
                          <div 
                            className="absolute inset-0 bg-accent/5 rounded-lg transform -rotate-1"
                          />
                          <div 
                            className="absolute inset-0 bg-primary/5 rounded-lg transform rotate-1"
                          />
                          <blockquote className="relative bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-primary/10 italic text-sm">
                            "{member.personalDetail}"
                          </blockquote>
                        </div>
                      </div>
                    </div>
                    
                    {/* Orbit decorative elements */}
                    <div className="absolute top-0 right-0 w-20 h-20 rounded-full border border-dashed border-primary/20 opacity-30 transform -translate-x-12 translate-y-12" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full border border-dashed border-accent/20 opacity-30 transform translate-x-5 -translate-y-8" />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-primary w-8' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
                aria-label={`Go to team member ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSection;


import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  personalDetail: string;
  imgUrl: string;
  expertise?: string[];
}

const TeamSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  
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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const container = containerRef.current;
    if (!container) return;

    const sections = gsap.utils.toArray<HTMLElement>(container.querySelectorAll('.team-member-card'));
    
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => "+=" + container.offsetWidth * (sections.length - 1),
      }
    });

    // Update active slide based on scroll position
    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: () => "+=" + container.offsetWidth * (sections.length - 1),
      onUpdate: (self) => {
        const newIndex = Math.round(self.progress * (sections.length - 1));
        setActiveSlide(newIndex);
      }
    });
  }, []);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(teamStructuredData)}
        </script>
      </Helmet>
      
      <div className="py-16 sm:py-20 animate-on-scroll">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">The Minds Behind Gen0</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            The architects of change, the ones who move when the signal calls—wheels turn, tides shift, 
            and the unseen hand shapes what's next. Our team specializes in prompt engineering, MVP development, 
            and creating digital products for GenZ and beyond. ⚙️🌊✨
          </p>
        </div>

        <div 
          ref={containerRef} 
          className="relative overflow-hidden"
          style={{ height: '600px' }}
        >
          <div className="flex">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="team-member-card min-w-full px-4"
              >
                <div className="bg-card rounded-xl overflow-hidden shadow-md transition-all duration-500 transform hover:scale-[1.02] h-full">
                  <div className="grid md:grid-cols-2 gap-6 h-full">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={member.imgUrl} 
                        alt={`${member.name} - ${member.position} at Gen0`} 
                        className="w-full h-full object-cover transition-transform hover:scale-105" 
                        loading="lazy"
                        itemProp="image" 
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold mb-2" itemProp="name">{member.name}</h3>
                        <p className="text-primary font-medium mb-4" itemProp="jobTitle">{member.position}</p>
                        <p className="text-muted-foreground mb-6" itemProp="description">{member.bio}</p>
                        {member.expertise && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {member.expertise.map((skill, idx) => (
                              <span 
                                key={idx} 
                                className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1"
                                itemProp="knowsAbout"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <p className="text-sm italic border-t border-border pt-4">
                        {member.personalDetail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {teamMembers.map((member, index) => (
            <button
              key={index}
              className={cn(
                "w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 hover:scale-110",
                activeSlide === index ? "border-primary" : "border-transparent opacity-70"
              )}
            >
              <img
                src={member.imgUrl}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamSection;

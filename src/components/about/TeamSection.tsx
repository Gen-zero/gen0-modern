
import { Helmet } from "react-helmet-async";

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
    bio: "Just a student tryna figure out AIML, but don’t let that fool you—she’s out here stacking hackathon wins like they're daily quests. From the GDG Solution Challenge to Smart India Hackathon, she's been in the trenches and came out shining. Her project for GDG Solution Challenge 2024 even got the golden ticket to be showcased at Google's Build with AI event. A core member of GDG on Campus CMRIT, she recently turned her college into a hackathon battleground. She codes, she competes, she dreams—basically, she’s building her own AI-powered world, one line of code at a time.",
    personalDetail: "When she’s not crushing it in AI and ML, you’ll find her flexing those competitive programming muscles on Leetcode and Codechef.",
    imgUrl: "https://ik.imagekit.io/kalidaspem/yedhukrishnan.jpg",
    expertise: ["Backend", "Front end", "RESTful APIs", "Automation"]
  },{
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

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(teamStructuredData)}
        </script>
      </Helmet>
      
      <div className="py-16 sm:py-20 container mx-auto px-4 sm:px-6 md:px-12 animate-on-scroll">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">The Minds Behind Gen0</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            The architects of change, the ones who move when the signal calls—wheels turn, tides shift, 
            and the unseen hand shapes what's next. Our team specializes in prompt engineering, MVP development, 
            and creating digital products for GenZ and beyond. ⚙️🌊✨
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              itemScope 
              itemType="https://schema.org/Person"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.imgUrl} 
                  alt={`${member.name} - ${member.position} at Gen0`} 
                  className="w-full h-full object-cover transition-transform hover:scale-105" 
                  loading="lazy"
                  itemProp="image" 
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-1" itemProp="name">{member.name}</h3>
                <p className="text-primary font-medium mb-2 sm:mb-3" itemProp="jobTitle">{member.position}</p>
                <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4" itemProp="description">{member.bio}</p>
                {member.expertise && (
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {member.expertise.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-primary/10 text-primary rounded-full px-2 sm:px-3 py-1"
                        itemProp="knowsAbout"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-xs sm:text-sm italic border-t border-border pt-2 sm:pt-3">
                  {member.personalDetail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamSection;

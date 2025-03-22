
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
    bio: "With 15 years of industry experience and a passion for inclusive design, Manu founded Gen0 with a vision to build digital products that truly matter for GenZ and beyond.",
    personalDetail: "When not leading the team, Manu is an avid rock climber and amateur chef.",
    imgUrl: "https://ik.imagekit.io/kalidaspem/c46019ce-faea-4d33-b80c-b78d9da6d500.jpg?updatedAt=1742559972141",
    expertise: ["Prompt Engineering", "0 to 1 Product Development", "UI/UX Design", "Strategic Planning"]
  }, {
    name: "Kalidasan P E M",
    position: "Co-Founder and CTO",
    bio: "Kalidasan's technical leadership has shaped our engineering culture. He specializes in scalable architecture, prompt engineering, and emerging technologies for digital transformation.",
    personalDetail: "A former competitive gamer, Kalidasan now spends his free time teaching coding to underprivileged youth.",
    imgUrl: "https://ik.imagekit.io/kalidaspem/894146aa-4ab3-4820-b55b-55478d7507a9.jpg?updatedAt=1742559972090",
    expertise: ["Web Development", "MVP Building", "Prompt Engineering", "Backend Systems"]
  }, {
    name: "Yedhu Krishna",
    position: "Creative Director",
    bio: "Yedhu's award-winning design approach combines aesthetics with functionality. He leads our creative team in delivering visually stunning work with a focus on GenZ user experiences.",
    personalDetail: "Yedhu is a published photographer and maintains a popular design blog in his spare time.",
    imgUrl: "https://ik.imagekit.io/kalidaspem/yedhukrishnan.jpg",
    expertise: ["UI/UX Design", "Brand Strategy", "Design Systems", "User Research"]
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

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(teamStructuredData)}
        </script>
      </Helmet>
      
      <div className="py-20 container mx-auto px-6 md:px-12 animate-on-scroll">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Minds Behind Gen0</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The architects of change, the ones who move when the signal calls—wheels turn, tides shift, 
            and the unseen hand shapes what's next. Our team specializes in prompt engineering, MVP development, 
            and creating digital products for GenZ and beyond. ⚙️🌊✨
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1" itemProp="name">{member.name}</h3>
                <p className="text-primary font-medium mb-3" itemProp="jobTitle">{member.position}</p>
                <p className="text-muted-foreground mb-4" itemProp="description">{member.bio}</p>
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
                <p className="text-sm italic border-t border-border pt-3">
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

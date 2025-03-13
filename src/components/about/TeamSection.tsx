interface TeamMember {
  name: string;
  position: string;
  bio: string;
  personalDetail: string;
  imgUrl: string;
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      bio: "Sarah brings 15 years of industry experience and a passion for inclusive design. She founded Gen0 with a vision to build digital products that truly matter.",
      personalDetail: "When not leading the team, Sarah is an avid rock climber and amateur chef.",
      imgUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }, 
    {
      name: "Michael Chen",
      position: "CTO",
      bio: "Michael's technical leadership has shaped our engineering culture. He specializes in scalable architecture and emerging technologies.",
      personalDetail: "A former competitive gamer, Michael now spends his free time teaching coding to underprivileged youth.",
      imgUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }, 
    {
      name: "Elena Rodriguez",
      position: "Creative Director",
      bio: "Elena's award-winning design approach combines aesthetics with functionality. She leads our creative team in delivering visually stunning work.",
      personalDetail: "Elena is a published photographer and maintains a popular design blog in her spare time.",
      imgUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }, 
    {
      name: "David Okafor",
      position: "Head of Product",
      bio: "David excels at translating client needs into product strategies. His background in psychology gives him unique insight into user behavior.",
      personalDetail: "A devoted father of twins, David is also working on his first science fiction novel.",
      imgUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="py-20 container mx-auto px-6 md:px-12 animate-on-scroll">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Team</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our success is built on the talent and dedication of our amazing team members. Get to know the people behind Gen0.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="aspect-square overflow-hidden">
              <img 
                src={member.imgUrl} 
                alt={member.name} 
                className="w-full h-full object-cover transition-transform hover:scale-105" 
                loading="lazy" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.position}</p>
              <p className="text-muted-foreground mb-4">{member.bio}</p>
              <p className="text-sm italic border-t border-border pt-3">
                {member.personalDetail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;


import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import TeamMemberCard, { TeamMemberProps } from "./TeamMemberCard";
import TeamMemberDetails from "./TeamMemberDetails";

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMemberProps | null>(null);

  const teamMembers: TeamMemberProps[] = [{
    id: 0,
    name: "Manu Narayanan",
    position: "Founder & Advisor",
    bio: "A visionary leader with a deep-rooted curiosity for human evolution, biotech, and spirituality. Manu is the brother who dreams beyond boundaries, pushing the edges of possibility while grounding his insights in scientific rigor. With a mind tuned to the deeper mysteries of life, he combines the metaphysical with the practical, creating solutions that bridge the seen and the unseen, the known and the unknown. His journey is a testament to growth, consciousness, and the relentless pursuit of progress.",
    personalDetail: "When he's not solving complex problems, he's conjuring up new visions, exploring the frontiers of thought, and finding fresh perspectives on the art of creation.",
    imgUrl: "https://ik.imagekit.io/kalidaspem/c46019ce-faea-4d33-b80c-b78d9da6d500.jpg?updatedAt=1742559972141",
    expertise: ["Prompt Engineering", "0 to 1 Product Development", "UX Designer", "Strategic Planning", "Branding", "Sales"]
  }, {
    id: 1,
    name: "Kalidasan P E M",
    position: "Co-Founder and CTO",
    bio: "An avid gamer, coder, and the builder of visions. Kalidasan is the brother who thrives in the realm of logic and code, transforming abstract ideas into tangible realities. While his brother pushes the boundaries of possibility, he fine-tunes those visions into gamified environments, enabling people to evolve into something much more. He lives to build, to create, and to code his way through challenges, turning every project into a leveled-up experience.",
    personalDetail: "When he's not building worlds in code, he's having fun bringing his brother's crazy visions to life, stacking XP in the game of creation.",
    imgUrl: "https://ik.imagekit.io/kalidaspem/894146aa-4ab3-4820-b55b-55478d7507a9.jpg?updatedAt=1742559972090",
    expertise: ["Web Development", "MVP Building", "Prompt Engineering", "Backend Systems", "UI Design"]
  }, {
    id: 2,
    name: "Yedhu Krishna",
    position: "Creative Director",
    bio: "Yedhu's award-winning design approach combines aesthetics with functionality. He leads our creative team in delivering visually stunning work with a focus on GenZ user experiences.",
    personalDetail: "Yedhu is a published photographer and maintains a popular design blog in his spare time.",
    imgUrl: "https://ik.imagekit.io/kalidaspem/yedhukrishnan.jpg",
    expertise: ["UI/UX Design", "Brand Strategy", "Design Systems", "User Research"]
  }, { 
    id: 3,
    name: "Harshita Macom",
    position: "Full-Stack Developer",
    bio: "Just a student tryna figure out AIML, but don't let that fool you—she's out here stacking hackathon wins like they're daily quests. From the GDG Solution Challenge to Smart India Hackathon, she's been in the trenches and came out shining. Her project for GDG Solution Challenge 2024 even got the golden ticket to be showcased at Google's Build with AI event. A core member of GDG on Campus CMRIT, she recently turned her college into a hackathon battleground. She codes, she competes, she dreams—basically, she's building her own AI-powered world, one line of code at a time.",
    personalDetail: "When she's not crushing it in AI and ML, you'll find her flexing those competitive programming muscles on Leetcode and Codechef.",
    imgUrl: "https://ik.imagekit.io/kalidaspem/ef516116-3834-4044-9557-a0b13da50833.jpg",
    expertise: ["Front End", "Back End", "RESTful APIs", "Python"]
  }, {
    id: 4,
    name: "Kannan S",
    position: "Backend Developer",
    bio: "a product whisperer—he’s seen ideas go from scribbles on a napkin to full-scale deployments used by thousands. A senior software dev who's danced with deadlines across time zones and built with clients from every corner of the globe. He doesn’t just write code—he architects experiences, scales dreams, and bridges the gap between vision and version 1.0.",
    personalDetail: "When he’s not shipping features or solving scalability puzzles, he’s probably deep in thought—mapping out the next big idea or musing over the poetry of clean code. He builds not just with skill, but with soul.",
    imgUrl: "https://ik.imagekit.io/kalidaspem/DeWatermark.ai_1742651326709.png",
    expertise: ["Full-Stack Engineering", "backend Architecture", "MVP Launch Strategy", "Product Development", "Client Collaboration"]
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
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </motion.div>
      </div>

      {/* Expanded team member details */}
      {selectedMember && (
        <TeamMemberDetails
          member={selectedMember}
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </>
  );
};

export default TeamSection;

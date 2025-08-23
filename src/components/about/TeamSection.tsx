import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ExternalLink, Award, MapPin, Calendar } from "lucide-react";
import TeamMemberCard, { TeamMemberProps } from "./TeamMemberCard";
import TeamMemberDetails from "./TeamMemberDetails";
const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMemberProps | null>(null);
  const [selectedMemberIndex, setSelectedMemberIndex] = useState<number>(-1);
  
  const handleMemberSelect = (member: TeamMemberProps) => {
    const index = teamMembers.findIndex(m => m.id === member.id);
    setSelectedMember(member);
    setSelectedMemberIndex(index);
  };
  
  const navigateToPrevious = () => {
    if (selectedMemberIndex > 0) {
      const newIndex = selectedMemberIndex - 1;
      setSelectedMember(teamMembers[newIndex]);
      setSelectedMemberIndex(newIndex);
    }
  };
  
  const navigateToNext = () => {
    if (selectedMemberIndex < teamMembers.length - 1) {
      const newIndex = selectedMemberIndex + 1;
      setSelectedMember(teamMembers[newIndex]);
      setSelectedMemberIndex(newIndex);
    }
  };
  
  const handleClose = () => {
    setSelectedMember(null);
    setSelectedMemberIndex(-1);
  };
  const teamMembers: TeamMemberProps[] = [{
    id: 0,
    name: "Manu Narayanan",
    position: "Founder & Advisor",
    bio: "A visionary leader with a deep-rooted curiosity for human evolution, biotech, and spirituality. Manu is the brother who dreams beyond boundaries, pushing the edges of possibility while grounding his insights in scientific rigor. With a mind tuned to the deeper mysteries of life, he combines the metaphysical with the practical, creating solutions that bridge the seen and the unseen, the known and the unknown. His journey is a testament to growth, consciousness, and the relentless pursuit of progress.",
    personalDetail: "When he's not solving complex problems, he's conjuring up new visions, exploring the frontiers of thought, and finding fresh perspectives on the art of creation.",
    imgUrl: "https://ik.imagekit.io/kalidaspem/a-striking-studio-portrait-photograph-of_rrjcGP-7QJ64dnsrj0iIWQ_pUV6Tgr0QEq8p4V5UbcMag(1).jpeg",
    expertise: ["Prompt Engineering", "0 to 1 Product Development", "UX Designer", "Strategic Planning", "Branding", "Sales"],
    // Enhanced trust signals
    location: "India",
    experience: "8+ years",
    education: "Biotechnology & Spiritual Studies",
    achievements: ["Published researcher in biotech", "Spiritual wellness advocate", "Product strategy consultant"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/manu-narayanan-027525276/",
      twitter: "https://twitter.com/manu_gen0"
    }
  }, {
    id: 1,
    name: "Kalidasan P E M",
    position: "Co-Founder and CEO",
    bio: "An avid gamer, coder, and the builder of visions. Kalidasan is the brother who thrives in the realm of logic and code, transforming abstract ideas into tangible realities. While his brother pushes the boundaries of possibility, he fine-tunes those visions into gamified environments, enabling people to evolve into something much more. He lives to build, to create, and to code his way through challenges, turning every project into a leveled-up experience.",
    personalDetail: "When he's not building worlds in code, he's having fun bringing his brother's crazy visions to life, stacking XP in the game of creation.",
    imgUrl: "https://ik.imagekit.io/kalidaspem/a-cinematic-studio-portrait-of-a-young-s_tjZqzAj-QR2XUaQMR1INcQ_HGzMm9-HT7-Al9-0bg5Vpw.jpeg",
    expertise: ["Web Development", "MVP Building", "Prompt Engineering", "Backend Systems", "UI Design"],
    // Enhanced trust signals
    location: "India",
    experience: "6+ years",
    education: "Computer Science & Engineering",
    achievements: ["Full-stack architect for 10+ products", "Open source contributor", "Gaming technology innovator"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/kalidas-75b323298/",
      github: "https://github.com/kalidaspem"
    }
  }, {
    id: 2,
    name: "Yedhu Krishna",
    position: "Creative Director",
    bio: "Yedhu's award-winning design approach combines aesthetics with functionality. He leads our creative team in delivering visually stunning work with a focus on GenZ user experiences.",
    personalDetail: "Yedhu is a published photographer and maintains a popular design blog in his spare time.",
    imgUrl: "https://ik.imagekit.io/kalidaspem/yedhukrishnan.jpg",
    expertise: ["UI/UX Design", "Brand Strategy", "Design Systems", "User Research"],
    location: "Kerala, India",
    experience: "5+ years",
    education: "Visual Communication & Design",
    achievements: ["Design award winner 2023", "Published photographer", "Design community leader"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/yedhu-krishna",
      behance: "https://behance.net/yedhukrishna"
    }
  }, /* {
    id: 3,
    name: "Harshita Macom",
    position: "Full-Stack Developer",
    bio: "Just a student tryna figure out AIML, but don't let that fool you—she's out here stacking hackathon wins like they're daily quests. From the GDG Solution Challenge to Smart India Hackathon, she's been in the trenches and came out shining. Her project for GDG Solution Challenge 2024 even got the golden ticket to be showcased at Google's Build with AI event. A core member of GDG on Campus CMRIT, she recently turned her college into a hackathon battleground. She codes, she competes, she dreams—basically, she's building her own AI-powered world, one line of code at a time.",
    personalDetail: "When she's not crushing it in AI and ML, you'll find her flexing those competitive programming muscles on Leetcode and Codechef.",
    imgUrl: "https://ik.imagekit.io/kalidaspem/ef516116-3834-4044-9557-a0b13da50833.jpg",
    expertise: ["Front End", "Back End", "RESTful APIs", "Python"],
    location: "Bangalore, India",
    experience: "2+ years",
    education: "Computer Science (Final Year)",
    achievements: ["GDG Solution Challenge Finalist", "Smart India Hackathon Winner", "Google Build with AI Showcase"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/harshita-macom",
      github: "https://github.com/harshitamacom"
    } */
   {
    id: 3,
    name: "Vaibhav Kumar",
    position: "Full-Stack Developer",
    bio: "A coder at heart, he transforms raw ideas into seamless, intelligent systems. Passionate about automation, AI, and problem-solving, he treats every project like a new level to conquer. For him, challenges are opportunities, and code is the tool to shape possibilities into realities—always creating, always evolving, always leveling up.",
    personalDetail: "When he's not coding, he's meditating",
    imgUrl: "https://ik.imagekit.io/kalidaspem/a-soft-studio-portrait-of-the-referenced_9giUqaejQDOqEXcuXm9Tww_-cUbXmeiQ7Kp2GBlH52lEQ.jpeg?updatedAt=1755694225759",
    expertise: ["python","java","springboot","n8n","Mysql"],
    location: "Jharkhand, India",
    experience: "Fresher",
    education: "Computer Science (Final Year)",
    achievements: ["GDG Solution Challenge Finalist", "Smart India Hackathon Winner", "Google Build with AI Showcase"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/vaibhav-kumar-9404461b0/",
      github: "https://github.com/harshitamacom"
    }
  }, {
    id: 4,
    name: "Kannan S",
    position: "Backend Developer",
    bio: "a product whisperer—he's seen ideas go from scribbles on a napkin to full-scale deployments used by thousands. A senior software dev who's danced with deadlines across time zones and built with clients from every corner of the globe. He doesn't just write code—he architects experiences, scales dreams, and bridges the gap between vision and version 1.0.",
    personalDetail: "When he's not shipping features or solving scalability puzzles, he's probably deep in thought—mapping out the next big idea or musing over the poetry of clean code. He builds not just with skill, but with soul.",
    imgUrl: "https://ik.imagekit.io/kalidaspem/DeWatermark.ai_1742651326709.png",
    expertise: ["Full-Stack Engineering", "backend Architecture", "MVP Launch Strategy", "Product Development", "Client Collaboration"],
    location: "Kerala, India",
    experience: "7+ years",
    education: "Software Engineering",
    achievements: ["Scaled products to 10K+ users", "Global client portfolio", "Technical mentor"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/kannan-s-gen0"
    }
  }, {
    id: 5,
    name: "Anubind C Biju",
    position: "Video Editor",
    bio: "Anubind is a visual storyteller with a strong creative core. With a passion for photography, video editing, and cinematic expression, he sees the world through a lens that blends detail with emotion. Whether he's crafting sharp visuals, refining a timeline, or designing something that feels right, his work speaks with clarity and style.",
    personalDetail: "When he’s not immersed in the creative grind, Anubind dives into the things that fuel his spirit — watching anime, getting lost in movies, or gaming to unwind.",
    imgUrl: "https://ik.imagekit.io/kalidaspem/0002_4_a-sophisticated-studio-portrait-showcasi_40G6JMuoQLC8OL5fIDglbA_Yy06_F_kRkOBYwls83blzQ.jpeg",
    expertise: ["Photography","Videography","Video Editing","Photo Editing","Creative Direction","Basic Programming & Tools"],
    experience: "Student",
    education: "Software Engineering",
    achievements: ["Lead media team of IEDC", "Organize Events"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/anubind-c-biju-b54577291/"
    }
  }, {
    id: 6,
    name: "Adityan B",
    position: "Video Editor",
    bio: "A creator at heart, a builder by nature. Adhithyan blends logic with imagination to bring bold ideas to life—whether it’s coding smart systems, designing intuitive interfaces, or crafting visuals that speak louder than words. From web apps to IoT gadgets, he thrives at the intersection of tech and creativity. Driven by the belief that learning should feel like play, he’s on a mission to make innovation more accessible, one project at a time.",
    personalDetail: "When he’s not soldering wires or sketching out user flows, Adhithyan’s editing timelines or designing posters, turning even the smallest ideas into experiences that pop. For him, every build is a chance to explore, experiment, and evolve.",
    imgUrl: "https://ik.imagekit.io/kalidaspem/0001_3_a-sophisticated-studio-portrait-in-a-fas_PzOl_NciTZSqQnPb_owQ5w_Z1IzDrWYRVCWWA4p7vybvA.jpeg",
    expertise: ["IoT & Embedded Systems","Web Development","Graphic Design", "Video Editing"],
    experience: "Student",
    education: "Computer Science",
    achievements: ["Scaled products to 10K+ users", "Global client portfolio", "Technical mentor"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/adhithyan-h-nair/"
    }
  }];

  // Enhanced structured data with more trust signals
  const teamStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Gen0",
    "url": "https://gen0.xyz",
    "employee": teamMembers.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.position,
      "description": member.bio,
      "knowsAbout": member.expertise,
      "image": member.imgUrl,
      "worksFor": {
        "@type": "Organization",
        "name": "Gen0"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": member.location
      },
      "alumniOf": member.education,
      "award": member.achievements,
      "sameAs": Object.values(member.socialLinks || {})
    })),
    "foundingDate": "2023",
    "numberOfEmployees": "5-10",
    "slogan": "From 0 to 1 - Digital Innovation Studio"
  };
  return <>
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
          
          {/* Trust signals section */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              
              
            </div>
            <div className="flex items-center gap-2">
              
              
            </div>
            <div className="flex items-center gap-2">
              
              
            </div>
          </div>
        </div>
        
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5
      }}>
          {teamMembers.map(member => <TeamMemberCard key={member.id} member={member} onClick={() => handleMemberSelect(member)} />)}
        </motion.div>

        {/* Additional trust signals */}
        
      </div>

      {/* Expanded team member details */}
      {selectedMember && (
        <TeamMemberDetails 
          member={selectedMember} 
          isOpen={!!selectedMember} 
          onClose={handleClose}
          onPrevious={navigateToPrevious}
          onNext={navigateToNext}
          hasPrevious={selectedMemberIndex > 0}
          hasNext={selectedMemberIndex < teamMembers.length - 1}
        />
      )}
    </>;
};
export default TeamSection;
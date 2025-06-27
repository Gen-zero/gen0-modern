import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import TwinklingStars from './TwinklingStars';
export interface TeamMemberProps {
  id: number;
  name: string;
  position: string;
  bio: string;
  personalDetail: string;
  imgUrl: string;
  expertise?: string[];
  backgroundColor?: string;
  // Enhanced trust signals
  location?: string;
  experience?: string;
  education?: string;
  achievements?: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    behance?: string;
  };
}
interface TeamMemberCardProps {
  member: TeamMemberProps;
  onClick: () => void;
}
const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  member,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const backgroundStyles = ['bg-gradient-to-br from-purple-100/30 to-blue-100/30', 'bg-gradient-to-br from-blue-100/30 to-green-100/30', 'bg-gradient-to-br from-pink-100/30 to-purple-100/30', 'bg-gradient-to-br from-orange-100/30 to-yellow-100/30', 'bg-gradient-to-br from-green-100/30 to-teal-100/30'];
  const backgroundStyle = backgroundStyles[member.id % backgroundStyles.length];
  return <motion.div whileHover={{
    y: -5,
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
    transition: {
      duration: 0.2
    }
  }} initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: member.id * 0.1
  }}>
      <Card className={cn("h-full cursor-pointer overflow-hidden transition-all duration-300 relative", backgroundStyle)} onClick={onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="aspect-square overflow-hidden">
          <img src={member.imgUrl} alt={`${member.name} - ${member.position}`} className="w-full h-full object-cover transition-transform hover:scale-105" loading="lazy" />
        </div>
        <div className="p-5 bg-gradient-to-br from-black/90 to-purple-900/90 relative">
          {isHovered && <TwinklingStars />}
          <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
          <p className="text-primary font-medium text-blue-300 mb-2">{member.position}</p>
          
          {/* Trust signals */}
          
        </div>
      </Card>
    </motion.div>;
};
export default TeamMemberCard;
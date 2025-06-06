
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { type TeamMemberProps } from './TeamMemberCard';
import { cn } from '@/lib/utils';

interface TeamMemberDetailsProps {
  member: TeamMemberProps;
  isOpen: boolean;
  onClose: () => void;
}

const TeamMemberDetails: React.FC<TeamMemberDetailsProps> = ({ 
  member, 
  isOpen, 
  onClose 
}) => {
  const [typedBio, setTypedBio] = useState('');
  const bioRef = useRef<HTMLParagraphElement>(null);
  
  // Typewriter effect for bio
  useEffect(() => {
    if (!isOpen) return;
    
    let index = 0;
    const timer = setInterval(() => {
      if (index < member.bio.length) {
        setTypedBio(member.bio.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 20); // Speed of typing
    
    return () => clearInterval(timer);
  }, [isOpen, member.bio]);
  
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="relative w-full max-w-4xl h-[90vh] rounded-xl bg-card shadow-lg team-member-modal overflow-hidden"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 20 }}
            role="dialog"
            aria-modal="true"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 z-[70]"
              onClick={onClose}
              aria-label="Close details"
            >
              <X className="h-4 w-4" />
            </Button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              {/* Image section - Fixed */}
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-70 mix-blend-overlay" />
                <img 
                  src={member.imgUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content section - Scrollable */}
              <ScrollArea className="h-full">
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
                  <p className="text-primary text-xl mb-8">{member.position}</p>
                  
                  {/* Bio with typewriter effect */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">Bio</h3>
                    <p ref={bioRef} className="text-muted-foreground">
                      {typedBio}
                      <span className="inline-block w-0.5 h-4 bg-primary animate-blink ml-0.5"></span>
                    </p>
                  </div>
                  
                  {/* Expertise as interactive bubbles */}
                  {member.expertise && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-3">Expertise</h3>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <motion.span 
                            key={idx} 
                            className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                              delay: 0.2 + (idx * 0.1),
                              type: "spring",
                              stiffness: 260,
                              damping: 20
                            }}
                            whileHover={{ 
                              scale: 1.05, 
                              backgroundColor: 'rgb(var(--primary) / 0.2)' 
                            }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Personal detail with artistic reveal */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <h3 className="text-lg font-semibold mb-2">Personal Note</h3>
                    <div className="bg-secondary/20 p-4 rounded-lg border border-secondary/30 italic text-sm">
                      {member.personalDetail}
                    </div>
                  </motion.div>
                </div>
              </ScrollArea>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamMemberDetails;

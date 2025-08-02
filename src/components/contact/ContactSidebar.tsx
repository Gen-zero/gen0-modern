import { Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";
const ContactSidebar = () => {
  const contactInfo = [{
    icon: <Mail className="h-5 w-5" />,
    title: 'Email Us',
    details: 'kalidas@gen0.xyz'
  }, {
    icon: <Phone className="h-5 w-5" />,
    title: 'Text us',
    details: '+91 9995813930'
  }, {
    icon: <MapPin className="h-5 w-5" />,
    title: 'Visit Us',
    details: 'Adoor, India'
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <motion.div 
      className="animate-fade-in"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="h-5 w-5 text-accent" />
            <h3 className="text-xl font-semibold font-condensed">Get in Touch</h3>
          </div>
          
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ContactInfo 
                  icon={info.icon}
                  title={info.title}
                  details={info.details}
                />
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div variants={itemVariants}>
          <SocialLinks />
        </motion.div>
      </div>
    </motion.div>
  );
};
export default ContactSidebar;

import { Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";

const ContactSidebar = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email Us',
      details: 'kalidas@gen0.xyz'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Text us',
      details: '+91 9995813930'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Visit Us',
      details: 'Adoor, India'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="space-y-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          Get in touch
          <motion.span
            animate={{ 
              rotate: 10,
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          >
            <Sparkles className="h-4 w-4 text-accent" />
          </motion.span>
        </h3>
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
            >
              <ContactInfo 
                icon={info.icon}
                title={info.title}
                details={info.details}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <h3 className="text-xl font-semibold mb-6">Working hours</h3>
        <motion.p 
          className="text-muted-foreground mb-1"
          whileHover={{ color: "hsl(var(--accent))" }}
          transition={{ duration: 0.3 }}
        >
          Monday - Friday: 9:00 AM - 6:00 PM
        </motion.p>
        <motion.p 
          className="text-muted-foreground"
          whileHover={{ color: "hsl(var(--accent))" }}
          transition={{ duration: 0.3 }}
        >
          Weekend: Closed
        </motion.p>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <h3 className="text-xl font-semibold mb-6">Follow us</h3>
        <SocialLinks />
      </motion.div>
    </motion.div>
  );
};

export default ContactSidebar;

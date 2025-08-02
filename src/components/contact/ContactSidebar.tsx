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
  return;
};
export default ContactSidebar;
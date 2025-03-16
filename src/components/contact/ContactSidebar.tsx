
import { Mail, MapPin, Phone } from "lucide-react";
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

  return (
    <div className="space-y-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <div>
        <h3 className="text-xl font-semibold mb-6">Get in touch</h3>
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <ContactInfo 
              key={index}
              icon={info.icon}
              title={info.title}
              details={info.details}
            />
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-6">Working hours</h3>
        <p className="text-muted-foreground mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p className="text-muted-foreground">Weekend: Closed</p>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-6">Follow us</h3>
        <SocialLinks />
      </div>
    </div>
  );
};

export default ContactSidebar;

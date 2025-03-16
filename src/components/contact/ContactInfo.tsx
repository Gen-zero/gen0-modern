
import { ReactNode } from 'react';

interface ContactInfoProps {
  icon: ReactNode;
  title: string;
  details: string;
}

const ContactInfo = ({ icon, title, details }: ContactInfoProps) => {
  return (
    <div className="flex items-start">
      <div className="p-3 rounded-lg bg-primary/5 mr-4">
        {icon}
      </div>
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-muted-foreground">{details}</p>
      </div>
    </div>
  );
};

export default ContactInfo;

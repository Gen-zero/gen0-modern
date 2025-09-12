import { GraduationCap, Handshake, HeartHandshake, MailQuestion, TrendingUp, UserPlus } from 'lucide-react';
import ContactForm from './contact/ContactForm';
import ContactSidebar from './contact/ContactSidebar';
import { InquiryOption, Project } from './contact/types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
const Contact = () => {
  // Use location to access query parameters
  const location = useLocation();
  const [formType, setFormType] = useState<string | null>(null);

  // Check for query parameters on component mount
  useEffect(() => {
    // First check normal query params in the URL
    const params = new URLSearchParams(location.search);
    const formTypeParam = params.get('formType');

    // If no formType in standard query params, check if it's after the hash
    if (!formTypeParam && location.hash) {
      const hashParts = location.hash.split('?');
      if (hashParts.length > 1) {
        const hashParams = new URLSearchParams(hashParts[1]);
        const hashFormType = hashParams.get('formType');
        if (hashFormType) {
          setFormType(hashFormType);
          return;
        }
      }
    }

    // Set from standard query param if found
    if (formTypeParam) {
      setFormType(formTypeParam);
    }
  }, [location]);
  const projectOptions: Project[] = [{
    id: '1',
    name: 'Guild Board',
    description: 'Your Organization at your fingertips.'
  }, {
    id: '2',
    name: 'Saadhana Board',
    description: 'A digital Yantra to connect with your deity and your inner self.'
  }, {
    id: '3',
    name: 'Fuel Unit',
    description: 'Fuel Unit tracks fuel prices in real-time, spotting the cheapest fuel stops along your route.'
  }, {
    id: '4',
    name: 'Kaali Punk',
    description: 'Kaali Punk is the first real superhero VI, a mix of human and AI, your mentor, big bro, and truth-seeker in a world of illusions 🕉️.'
  }];
  const inquiryOptions: InquiryOption[] = [{
    value: 'general',
    label: 'General Inquiry',
    icon: <MailQuestion className="h-4 w-4" />,
    placeholder: "I have a question about your company..."
  }, {
    value: 'service',
    label: 'Avail a Service',
    icon: <Handshake className="h-4 w-4" />,
    placeholder: "I'm interested in your services for my project..."
  }, {
    value: 'join',
    label: 'Work with Us',
    icon: <HeartHandshake className="h-4 w-4" />,
    placeholder: "I'm interested in working with your company as..."
  }, {
    value: 'volunteer',
    label: 'Volunteer With Us',
    icon: <UserPlus className="h-4 w-4" />,
    placeholder: "I'd like to volunteer my skills in..."
  }, {
    value: 'intern',
    label: 'Apply as an Intern',
    icon: <GraduationCap className="h-4 w-4" />,
    placeholder: "I'm a student at [university/college] studying [field] and I'm interested in an internship opportunity..."
  }, {
    value: 'invest',
    label: 'Invest in Us',
    icon: <TrendingUp className="h-4 w-4" />,
    placeholder: "I'm interested in investment opportunities with your company..."
  }];
  return <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto md:px-12 px-[50px] py-0">
        <div className="text-center mb-16 md:max-w-2xl mx-auto">
          <span className="block font-medium text-accent mb-3 text-6xl md:text-7xl lg:text-8xl xl:text-[8rem] 2xl:text-[10rem]">Contact Us</span>
          <h2 className="text-3xl font-semibold mb-6 md:text-3xl font-condensed text-gray-50">Let's start a conversation</h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind or want to learn more about how we can help your business? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-6 font-condensed">Send us a message</h3>
            <ContactForm inquiryOptions={inquiryOptions} projectOptions={projectOptions} initialFormType={formType} />
          </div>
          
          <ContactSidebar />
        </div>
      </div>
    </section>;
};
export default Contact;
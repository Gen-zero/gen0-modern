import { GraduationCap, Handshake, HeartHandshake, MailQuestion, TrendingUp, UserPlus } from 'lucide-react';
import ContactForm from '../contact/ContactForm';
import ContactSidebar from '../contact/ContactSidebar';
import { InquiryOption, Project } from '../contact/types';
const ApplyNowSection = () => {
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
    placeholder: "I have a question about joining your team..."
  }, {
    value: 'service',
    label: 'Freelance/Contract Work',
    icon: <Handshake className="h-4 w-4" />,
    placeholder: "I'm interested in freelance or contract opportunities..."
  }, {
    value: 'join',
    label: 'Full-time Position',
    icon: <HeartHandshake className="h-4 w-4" />,
    placeholder: "I'm interested in a full-time position as..."
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
    label: 'Investment Inquiry',
    icon: <TrendingUp className="h-4 w-4" />,
    placeholder: "I'm interested in investment opportunities with your company..."
  }];
  return <section id="apply-now" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto md:px-12 px-[50px] py-0">
        <div className="text-center mb-16 md:max-w-2xl mx-auto">
          <span className="block font-medium text-accent mb-3 text-8xl">Apply Now</span>
          
          <p className="text-muted-foreground text-lg">
            Take the next step in your career journey. We're excited to learn about your skills and how you can contribute to our mission.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-6 font-condensed">Tell us about yourself</h3>
            <ContactForm inquiryOptions={inquiryOptions} projectOptions={projectOptions} initialFormType="join" />
          </div>
          
          <ContactSidebar />
        </div>
      </div>
    </section>;
};
export default ApplyNowSection;
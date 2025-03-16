
import { Mail, Phone, MapPin, Send, Handshake, UserPlus, GraduationCap, TrendingUp, HeartHandshake, MailQuestion } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { useToast } from '../hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Checkbox } from './ui/checkbox';

const ContactInfo = ({ icon, title, details }: { icon: React.ReactNode, title: string, details: string }) => {
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

type InquiryType = 'service' | 'join' | 'volunteer' | 'intern' | 'invest' | 'general';

interface InquiryOption {
  value: InquiryType;
  label: string;
  icon: React.ReactNode;
  placeholder: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryType>('general');
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);
  const { toast } = useToast();

  const projectOptions: Project[] = [
    {
      id: 'ai-solutions',
      name: 'AI Solutions',
      description: 'Advanced AI technologies for business automation'
    },
    {
      id: 'blockchain',
      name: 'Blockchain Ventures',
      description: 'Decentralized applications and blockchain infrastructure'
    },
    {
      id: 'eco-tech',
      name: 'Eco-Tech Initiatives',
      description: 'Sustainable technology solutions for environmental challenges'
    },
    {
      id: 'health-innovations',
      name: 'Healthcare Innovations',
      description: 'Digital health platforms and medical technology'
    },
    {
      id: 'education-tech',
      name: 'Education Technology',
      description: 'Online learning platforms and educational tools'
    }
  ];

  const inquiryOptions: InquiryOption[] = [
    {
      value: 'general',
      label: 'General Inquiry',
      icon: <MailQuestion className="h-4 w-4" />,
      placeholder: "I have a question about your company..."
    },
    {
      value: 'service',
      label: 'Avail a Service',
      icon: <Handshake className="h-4 w-4" />,
      placeholder: "I'm interested in your services for my project..."
    },
    {
      value: 'join',
      label: 'Join Our Cause',
      icon: <HeartHandshake className="h-4 w-4" />,
      placeholder: "I'm passionate about your mission and would like to contribute by..."
    },
    {
      value: 'volunteer',
      label: 'Volunteer With Us',
      icon: <UserPlus className="h-4 w-4" />,
      placeholder: "I'd like to volunteer my skills in..."
    },
    {
      value: 'intern',
      label: 'Apply as an Intern',
      icon: <GraduationCap className="h-4 w-4" />,
      placeholder: "I'm a student at [university/college] studying [field] and I'm interested in an internship opportunity..."
    },
    {
      value: 'invest',
      label: 'Invest in Us',
      icon: <TrendingUp className="h-4 w-4" />,
      placeholder: "I'm interested in investment opportunities with your company..."
    }
  ];

  const getCurrentInquiry = () => {
    return inquiryOptions.find(option => option.value === selectedInquiry) || inquiryOptions[0];
  };

  // Form validation schema
  const formSchema = z.object({
    purpose: z.string(),
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    message: z.string().min(10, {
      message: "Message must be at least 10 characters.",
    }),
    company: z.string().optional(),
    position: z.string().optional(),
    budget: z.string().optional(),
    skills: z.string().optional(),
    portfolio: z.string().optional(),
    university: z.string().optional(),
    courseName: z.string().optional(),
    investmentAmount: z.string().optional(),
    projectsInterested: z.array(z.string()).optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      purpose: 'general',
      name: '',
      email: '',
      message: '',
      company: '',
      position: '',
      budget: '',
      skills: '',
      portfolio: '',
      university: '',
      courseName: '',
      investmentAmount: '',
      projectsInterested: [],
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    console.log('Form values:', values);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset({
        purpose: 'general',
        name: '',
        email: '',
        message: '',
        company: '',
        position: '',
        budget: '',
        skills: '',
        portfolio: '',
        university: '',
        courseName: '',
        investmentAmount: '',
        projectsInterested: [],
      });
      setSelectedInquiry('general');
      setSelectedProjects([]);
      setIsSubmitting(false);
    }, 1500);
  };

  const handleInquiryChange = (value: string) => {
    setSelectedInquiry(value as InquiryType);
    form.setValue('purpose', value);
  };

  const handleProjectSelectionChange = (projectId: string) => {
    setSelectedProjects(prev => {
      if (prev.includes(projectId)) {
        const newSelection = prev.filter(id => id !== projectId);
        form.setValue('projectsInterested', newSelection);
        return newSelection;
      } else {
        const newSelection = [...prev, projectId];
        form.setValue('projectsInterested', newSelection);
        return newSelection;
      }
    });
  };

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
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:max-w-2xl mx-auto">
          <span className="block text-sm font-medium text-accent mb-3">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Let's start a conversation</h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind or want to learn more about how we can help your business? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="mb-6">
                  <FormItem>
                    <FormLabel>What can we help you with?</FormLabel>
                    <Select defaultValue="general" onValueChange={handleInquiryChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your inquiry type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {inquiryOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value} className="flex items-center">
                            <span className="flex items-center">
                              {option.icon}
                              <span className="ml-2">{option.label}</span>
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Conditional fields based on inquiry type */}
                {selectedInquiry === 'service' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Budget Range</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., $5,000 - $10,000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {selectedInquiry === 'join' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="skills"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Skills</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., React, Node.js, Design" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="portfolio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Portfolio/LinkedIn</FormLabel>
                          <FormControl>
                            <Input placeholder="https://..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {selectedInquiry === 'volunteer' && (
                  <>
                    <FormField
                      control={form.control}
                      name="skills"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Skills & Availability</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Design, 10 hours/week" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="space-y-3">
                      <FormLabel>Projects interested in (select all that apply)</FormLabel>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {projectOptions.map((project) => (
                          <div key={project.id} className="flex items-start space-x-2">
                            <Checkbox 
                              id={`volunteer-project-${project.id}`} 
                              checked={selectedProjects.includes(project.id)}
                              onCheckedChange={() => handleProjectSelectionChange(project.id)}
                            />
                            <div className="grid gap-1.5 leading-none">
                              <label
                                htmlFor={`volunteer-project-${project.id}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {project.name}
                              </label>
                              <p className="text-xs text-muted-foreground">
                                {project.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {selectedInquiry === 'intern' && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="university"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>University/College</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., MIT" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="courseName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Course/Major</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Computer Science" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-3">
                      <FormLabel>Projects interested in (select all that apply)</FormLabel>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {projectOptions.map((project) => (
                          <div key={project.id} className="flex items-start space-x-2">
                            <Checkbox 
                              id={`intern-project-${project.id}`} 
                              checked={selectedProjects.includes(project.id)}
                              onCheckedChange={() => handleProjectSelectionChange(project.id)}
                            />
                            <div className="grid gap-1.5 leading-none">
                              <label
                                htmlFor={`intern-project-${project.id}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {project.name}
                              </label>
                              <p className="text-xs text-muted-foreground">
                                {project.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {selectedInquiry === 'invest' && (
                  <>
                    <FormField
                      control={form.control}
                      name="investmentAmount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Investment Interest Range</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., $10k-$50k" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="space-y-3">
                      <FormLabel>Projects interested in (select all that apply)</FormLabel>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {projectOptions.map((project) => (
                          <div key={project.id} className="flex items-start space-x-2">
                            <Checkbox 
                              id={`project-${project.id}`} 
                              checked={selectedProjects.includes(project.id)}
                              onCheckedChange={() => handleProjectSelectionChange(project.id)}
                            />
                            <div className="grid gap-1.5 leading-none">
                              <label
                                htmlFor={`project-${project.id}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {project.name}
                              </label>
                              <p className="text-xs text-muted-foreground">
                                {project.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={getCurrentInquiry().placeholder}
                          className="min-h-[120px]"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </div>
          
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
              <div className="flex space-x-4">
                <a href="#" className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors" aria-label="Twitter">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors" aria-label="LinkedIn">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
                <a href="#" className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors" aria-label="Instagram">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

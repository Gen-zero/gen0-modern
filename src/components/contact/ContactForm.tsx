
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ServiceInquiryFields from "./inquiries/ServiceInquiryFields";
import JoinInquiryFields from "./inquiries/JoinInquiryFields";
import VolunteerInquiryFields from "./inquiries/VolunteerInquiryFields";
import InternInquiryFields from "./inquiries/InternInquiryFields";
import InvestInquiryFields from "./inquiries/InvestInquiryFields";
import { FormValues, InquiryOption, InquiryType, Project, formSchema } from "./types";

interface ContactFormProps {
  inquiryOptions: InquiryOption[];
  projectOptions: Project[];
}

const ContactForm = ({ inquiryOptions, projectOptions }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryType>('general');
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);
  const { toast } = useToast();

  const form = useForm<FormValues>({
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

  const getCurrentInquiry = () => {
    return inquiryOptions.find(option => option.value === selectedInquiry) || inquiryOptions[0];
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

  const onSubmit = (values: FormValues) => {
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

  return (
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
          <ServiceInquiryFields form={form} />
        )}

        {selectedInquiry === 'join' && (
          <JoinInquiryFields form={form} />
        )}

        {selectedInquiry === 'volunteer' && (
          <VolunteerInquiryFields 
            form={form} 
            projectOptions={projectOptions}
            selectedProjects={selectedProjects}
            handleProjectSelectionChange={handleProjectSelectionChange}
          />
        )}

        {selectedInquiry === 'intern' && (
          <InternInquiryFields 
            form={form} 
            projectOptions={projectOptions}
            selectedProjects={selectedProjects}
            handleProjectSelectionChange={handleProjectSelectionChange}
          />
        )}

        {selectedInquiry === 'invest' && (
          <InvestInquiryFields 
            form={form} 
            projectOptions={projectOptions}
            selectedProjects={selectedProjects}
            handleProjectSelectionChange={handleProjectSelectionChange}
          />
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
  );
};

export default ContactForm;


import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormValues, InquiryOption, InquiryType, Project, formSchema } from "./types";
import InquiryTypeSelector from "./InquiryTypeSelector";
import CommonFormFields from "./CommonFormFields";
import MessageField from "./MessageField";
import SubmitButton from "./SubmitButton";
import ServiceInquiryFields from "./inquiries/ServiceInquiryFields";
import JoinInquiryFields from "./inquiries/JoinInquiryFields";
import VolunteerInquiryFields from "./inquiries/VolunteerInquiryFields";
import InternInquiryFields from "./inquiries/InternInquiryFields";
import InvestInquiryFields from "./inquiries/InvestInquiryFields";

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
        <InquiryTypeSelector 
          inquiryOptions={inquiryOptions}
          defaultValue="general"
          onValueChange={handleInquiryChange}
        />

        <CommonFormFields form={form} />

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
        
        <MessageField 
          form={form} 
          placeholder={getCurrentInquiry().placeholder} 
        />
        
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </Form>
  );
};

export default ContactForm;

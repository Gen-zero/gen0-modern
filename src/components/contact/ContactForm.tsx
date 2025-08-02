
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
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
  initialFormType?: string | null;
}

// Google Apps Script deployment URL - REPLACE THIS WITH YOUR DEPLOYMENT URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzkd9YmAsmTLnYuL58YDatywu6i6Rqi4BlRQtPHVL00fi6eQ0KO_tj469EUzLxAesaiCw/exec";

const ContactForm = ({ inquiryOptions, projectOptions, initialFormType }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryType>('general');
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);
  const [isExternallyTriggered, setIsExternallyTriggered] = useState(false);
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
      resumeLink: '',
      linkedinProfile: '',
    },
  });

  // Set initial form type based on URL parameter (external navigation only)
  useEffect(() => {
    if (initialFormType && inquiryOptions.some(option => option.value === initialFormType)) {
      setSelectedInquiry(initialFormType as InquiryType);
      form.setValue('purpose', initialFormType);
      setIsExternallyTriggered(true);
    } else {
      // Always default to general if no external trigger
      setSelectedInquiry('general');
      form.setValue('purpose', 'general');
      setIsExternallyTriggered(false);
    }
  }, [initialFormType, form, inquiryOptions]);

  const getCurrentInquiry = () => {
    return inquiryOptions.find(option => option.value === selectedInquiry) || inquiryOptions[0];
  };

  const handleInquiryChange = (value: string) => {
    // Only allow change if externally triggered, otherwise keep general
    if (isExternallyTriggered) {
      setSelectedInquiry(value as InquiryType);
      form.setValue('purpose', value);
    } else {
      // Reset to general if user tries to change via dropdown
      setSelectedInquiry('general');
      form.setValue('purpose', 'general');
    }
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

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    console.log('Form values:', values);

    try {
      // Prepare form data for Google Sheets
      const formData = new FormData();
      
      // Add basic fields
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('message', values.message);
      formData.append('purpose', values.purpose);
      
      // Add conditional fields based on inquiry type
      if (values.company) formData.append('company', values.company);
      if (values.position) formData.append('position', values.position);
      if (values.budget) formData.append('budget', values.budget);
      if (values.skills) formData.append('skills', values.skills);
      if (values.portfolio) formData.append('portfolio', values.portfolio);
      if (values.university) formData.append('university', values.university);
      if (values.courseName) formData.append('courseName', values.courseName);
      if (values.investmentAmount) formData.append('investmentAmount', values.investmentAmount);
      if (values.linkedinProfile) formData.append('linkedinProfile', values.linkedinProfile);
      if (values.resumeLink) formData.append('resumeLink', values.resumeLink);
      
      // Add project interests as a comma-separated string
      if (values.projectsInterested && values.projectsInterested.length > 0) {
        const projectNames = values.projectsInterested.map(id => {
          const project = projectOptions.find(p => p.id === id);
          return project ? project.name : id;
        });
        formData.append('projectsInterested', projectNames.join(', '));
      }
      
      // Get timestamp
      formData.append('timestamp', new Date().toISOString());
      
      // Submit to Google Sheets
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Required for Google Apps Script
      });
      
      // Since we're using no-cors, we can't read the response
      // We'll assume success and notify the user
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
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
        resumeLink: '',
        linkedinProfile: '',
      });
      
      setSelectedInquiry('general');
      setSelectedProjects([]);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <InquiryTypeSelector 
          inquiryOptions={inquiryOptions}
          defaultValue="general"
          value={selectedInquiry}
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

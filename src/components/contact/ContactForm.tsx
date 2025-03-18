
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import CommonFormFields from './CommonFormFields';
import MessageField from './MessageField';
import SubmitButton from './SubmitButton';
import InquiryTypeSelector from './InquiryTypeSelector';
import ServiceInquiryFields from './inquiries/ServiceInquiryFields';
import JoinInquiryFields from './inquiries/JoinInquiryFields';
import InvestInquiryFields from './inquiries/InvestInquiryFields';
import VolunteerInquiryFields from './inquiries/VolunteerInquiryFields';
import InternInquiryFields from './inquiries/InternInquiryFields';
import { useToast } from '../../hooks/use-toast';
import { Project, InquiryOption } from './types';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  inquiryType: z.string(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  position: z.string().optional(),
  experience: z.string().optional(),
  availabilityDate: z.string().optional(),
  investmentAmount: z.string().optional(),
  investmentGoals: z.string().optional(),
  hoursPerWeek: z.string().optional(),
  interests: z.string().optional(),
  message: z.string().min(10, 'Message is required'),
  projectsInterested: z.array(z.string()).optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  inquiryOptions: InquiryOption[];
  projectOptions: Project[];
}

const ContactForm = ({ inquiryOptions, projectOptions }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inquiryType: 'service',
      projectsInterested: [],
    },
  });

  const { register, handleSubmit, watch, reset, control, setValue, formState: { errors } } = form;

  const inquiryType = watch('inquiryType');

  const handleProjectSelectionChange = (projectId: string) => {
    setSelectedProjects(prev => {
      const isSelected = prev.includes(projectId);
      const newSelection = isSelected
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId];
      
      // Update the form value
      setValue('projectsInterested', newSelection);
      return newSelection;
    });
  };

  const getCurrentInquiryOption = () => {
    return inquiryOptions.find(option => option.value === inquiryType) || inquiryOptions[0];
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Google Apps Script Web App URL - replace with your deployed script URL
      const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID_HERE/exec';
      
      const formData = new FormData();
      // Add all form fields to FormData
      Object.entries(data).forEach(([key, value]) => {
        if (value) {
          if (Array.isArray(value)) {
            formData.append(key, value.join(','));
          } else {
            formData.append(key, value.toString());
          }
        }
      });
      
      // Add timestamp
      formData.append('timestamp', new Date().toISOString());
      
      // Using fetch with no-cors mode for cross-origin requests
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
      
      // Reset the form
      reset();
      setSelectedProjects([]);
      
      // Show success toast
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
    >
      <h2 className="text-2xl font-semibold text-white mb-6">Contact Us</h2>

      <CommonFormFields form={form} />

      <InquiryTypeSelector 
        inquiryOptions={inquiryOptions} 
        defaultValue={inquiryType}
        onValueChange={(value) => setValue('inquiryType', value)} 
      />

      {inquiryType === 'service' && <ServiceInquiryFields form={form} />}
      {inquiryType === 'join' && <JoinInquiryFields form={form} />}
      {inquiryType === 'invest' && (
        <InvestInquiryFields 
          form={form} 
          projectOptions={projectOptions} 
          selectedProjects={selectedProjects} 
          handleProjectSelectionChange={handleProjectSelectionChange} 
        />
      )}
      {inquiryType === 'volunteer' && (
        <VolunteerInquiryFields 
          form={form} 
          projectOptions={projectOptions} 
          selectedProjects={selectedProjects} 
          handleProjectSelectionChange={handleProjectSelectionChange} 
        />
      )}
      {inquiryType === 'intern' && (
        <InternInquiryFields 
          form={form} 
          projectOptions={projectOptions} 
          selectedProjects={selectedProjects} 
          handleProjectSelectionChange={handleProjectSelectionChange} 
        />
      )}

      <MessageField form={form} placeholder={getCurrentInquiryOption().placeholder} />

      <div className="flex justify-end">
        <SubmitButton isSubmitting={isSubmitting} />
      </div>
    </form>
  );
};

export default ContactForm;

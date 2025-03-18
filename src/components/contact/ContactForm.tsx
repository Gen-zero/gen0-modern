
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
import { Button } from '../ui/button';
import { useToast } from '../../hooks/use-toast';
import { Loader2 } from 'lucide-react';

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
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inquiryType: 'service',
    },
  });

  const inquiryType = watch('inquiryType');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Google Apps Script Web App URL - replace with your deployed script URL
      const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID_HERE/exec';
      
      const formData = new FormData();
      // Add all form fields to FormData
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value.toString());
      });
      
      // Add timestamp
      formData.append('timestamp', new Date().toISOString());
      
      // Using fetch with no-cors mode for cross-origin requests
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
      
      // Reset the form
      reset();
      
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

      <CommonFormFields register={register} errors={errors} />

      <InquiryTypeSelector register={register} />

      {inquiryType === 'service' && <ServiceInquiryFields register={register} errors={errors} />}
      {inquiryType === 'join' && <JoinInquiryFields register={register} errors={errors} />}
      {inquiryType === 'invest' && <InvestInquiryFields register={register} errors={errors} />}
      {inquiryType === 'volunteer' && <VolunteerInquiryFields register={register} errors={errors} />}
      {inquiryType === 'intern' && <InternInquiryFields register={register} errors={errors} />}

      <MessageField register={register} errors={errors} />

      <div className="flex justify-end">
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="rounded-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;

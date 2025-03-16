
import { ReactNode } from "react";
import { z } from "zod";

export type InquiryType = 'service' | 'join' | 'volunteer' | 'intern' | 'invest' | 'general';

export interface InquiryOption {
  value: InquiryType;
  label: string;
  icon: ReactNode;
  placeholder: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
}

// Form validation schema
export const formSchema = z.object({
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

export type FormValues = z.infer<typeof formSchema>;

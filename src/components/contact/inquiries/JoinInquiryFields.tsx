
import { FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../types";

interface JoinInquiryFieldsProps {
  form: UseFormReturn<FormValues>;
}

const JoinInquiryFields = ({ form }: JoinInquiryFieldsProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position Interested In</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Developer, Designer, Manager" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="linkedinProfile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>LinkedIn Profile</FormLabel>
              <FormControl>
                <Input placeholder="https://linkedin.com/in/..." type="url" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="resumeLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resume/CV Link</FormLabel>
              <FormControl>
                <Input 
                  type="url" 
                  placeholder="Google Drive or OneDrive link"
                  {...field}
                />
              </FormControl>
              <FormDescription>Share a link to your resume (Google Drive, OneDrive, etc.)</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default JoinInquiryFields;

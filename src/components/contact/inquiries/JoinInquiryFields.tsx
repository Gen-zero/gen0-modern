
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../types";

interface JoinInquiryFieldsProps {
  form: UseFormReturn<FormValues>;
}

const JoinInquiryFields = ({ form }: JoinInquiryFieldsProps) => {
  return (
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
  );
};

export default JoinInquiryFields;

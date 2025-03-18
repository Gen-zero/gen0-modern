
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

// Made this generic to accept any form type that has these optional fields
interface ServiceInquiryFieldsProps<T extends { company?: string; budget?: string }> {
  form: UseFormReturn<T>;
}

const ServiceInquiryFields = <T extends { company?: string; budget?: string }>({ 
  form 
}: ServiceInquiryFieldsProps<T>) => {
  return (
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
  );
};

export default ServiceInquiryFields;

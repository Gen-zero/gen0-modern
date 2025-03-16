
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { FormValues, InquiryOption } from "./types";

interface MessageFieldProps {
  form: UseFormReturn<FormValues>;
  placeholder: string;
}

const MessageField = ({ form, placeholder }: MessageFieldProps) => {
  return (
    <FormField
      control={form.control}
      name="message"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Your Message</FormLabel>
          <FormControl>
            <Textarea 
              placeholder={placeholder}
              className="min-h-[120px]"
              {...field}
              required
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default MessageField;

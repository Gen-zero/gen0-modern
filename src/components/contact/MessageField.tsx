
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";

interface MessageFieldProps<T extends { message: string }> {
  form: UseFormReturn<T>;
  placeholder: string;
}

const MessageField = <T extends { message: string }>({ 
  form, 
  placeholder 
}: MessageFieldProps<T>) => {
  return (
    <FormField
      control={form.control}
      name="message" as="message"
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


import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { InquiryOption, InquiryType } from "./types";

interface InquiryTypeSelectorProps {
  inquiryOptions: InquiryOption[];
  defaultValue?: InquiryType;
  value?: InquiryType;
  onValueChange: (value: string) => void;
}

const InquiryTypeSelector = ({ 
  inquiryOptions, 
  defaultValue = "general",
  value,
  onValueChange 
}: InquiryTypeSelectorProps) => {
  return (
    <div className="mb-6">
      <FormItem>
        <FormLabel>What can we help you with?</FormLabel>
        <Select value={value || defaultValue} onValueChange={onValueChange}>
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Select your inquiry type" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {inquiryOptions.map((option) => (
              <SelectItem key={option.value} value={option.value} className="flex items-center">
                <span className="flex items-center">
                  {option.icon}
                  <span className="ml-2">{option.label}</span>
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormItem>
    </div>
  );
};

export default InquiryTypeSelector;

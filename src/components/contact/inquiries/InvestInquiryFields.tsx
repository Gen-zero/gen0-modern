
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { Project } from "../types";
import ProjectSelection from "../ProjectSelection";

interface FormValues {
  investmentAmount?: string;
  projectsInterested?: string[];
  [key: string]: any;
}

interface InvestInquiryFieldsProps {
  form: UseFormReturn<FormValues>;
  projectOptions: Project[];
  selectedProjects: string[];
  handleProjectSelectionChange: (projectId: string) => void;
}

const InvestInquiryFields = ({ 
  form, 
  projectOptions, 
  selectedProjects, 
  handleProjectSelectionChange 
}: InvestInquiryFieldsProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="investmentAmount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Investment Interest Range</FormLabel>
            <FormControl>
              <Input placeholder="e.g., $10k-$50k" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <ProjectSelection 
        projects={projectOptions} 
        selectedProjects={selectedProjects} 
        onSelectionChange={handleProjectSelectionChange}
      />
    </>
  );
};

export default InvestInquiryFields;

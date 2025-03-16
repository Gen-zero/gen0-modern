
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { FormValues, Project } from "../types";
import ProjectSelection from "../ProjectSelection";

interface VolunteerInquiryFieldsProps {
  form: UseFormReturn<FormValues>;
  projectOptions: Project[];
  selectedProjects: string[];
  handleProjectSelectionChange: (projectId: string) => void;
}

const VolunteerInquiryFields = ({ 
  form, 
  projectOptions, 
  selectedProjects, 
  handleProjectSelectionChange 
}: VolunteerInquiryFieldsProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="skills"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your Skills & Availability</FormLabel>
            <FormControl>
              <Input placeholder="e.g., Design, 10 hours/week" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <ProjectSelection 
        projects={projectOptions} 
        selectedProjects={selectedProjects} 
        onSelectionChange={handleProjectSelectionChange} 
        prefix="volunteer-project"
      />
    </>
  );
};

export default VolunteerInquiryFields;

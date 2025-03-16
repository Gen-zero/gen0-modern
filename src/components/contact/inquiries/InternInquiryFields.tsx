
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { FormValues, Project } from "../types";
import ProjectSelection from "../ProjectSelection";

interface InternInquiryFieldsProps {
  form: UseFormReturn<FormValues>;
  projectOptions: Project[];
  selectedProjects: string[];
  handleProjectSelectionChange: (projectId: string) => void;
}

const InternInquiryFields = ({ 
  form, 
  projectOptions, 
  selectedProjects, 
  handleProjectSelectionChange 
}: InternInquiryFieldsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="university"
          render={({ field }) => (
            <FormItem>
              <FormLabel>University/College</FormLabel>
              <FormControl>
                <Input placeholder="e.g., MIT" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="courseName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course/Major</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Computer Science" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <ProjectSelection 
        projects={projectOptions} 
        selectedProjects={selectedProjects} 
        onSelectionChange={handleProjectSelectionChange} 
        prefix="intern-project"
      />
    </>
  );
};

export default InternInquiryFields;

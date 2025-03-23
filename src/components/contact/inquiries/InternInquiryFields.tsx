
import { FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { FormValues, Project } from "../types";
import ProjectSelection from "../ProjectSelection";
import { AlertCircle } from "lucide-react";
import { useEffect } from "react";

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
  useEffect(() => {
    if (selectedProjects.length > 2) {
      const limitedProjects = selectedProjects.slice(0, 2);
      form.setValue('projectsInterested', limitedProjects);
    }
  }, [selectedProjects, form]);
  
  const maxProjectsReached = selectedProjects.length >= 2;

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
              <FormDescription>
If you are not a college student [ dropout, or under 18 ] fill it with "None".</FormDescription>
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
              <FormDescription>This can also stand for your area of expertise that is not certified.Ps, Impress us with your works.
</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <div className="space-y-3">
        <ProjectSelection 
          projects={projectOptions} 
          selectedProjects={selectedProjects} 
          onSelectionChange={(projectId) => {
            if (!selectedProjects.includes(projectId) && maxProjectsReached) {
              return;
            }
            handleProjectSelectionChange(projectId);
          }}
          prefix="intern-project"
        />
        {maxProjectsReached && (
          <div className="flex items-center text-xs text-amber-600">
            <AlertCircle className="h-3 w-3 mr-1" />
            <span>Maximum of 2 projects can be selected</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="linkedinProfile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>LinkedIn Profile</FormLabel>
              <FormControl>
                <Input placeholder="https://linkedin.com/in/yourprofile" type="url" {...field} />
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
    </>
  );
};

export default InternInquiryFields;


import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";
import { useLocation } from "react-router-dom";
import { memo } from "react";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

// Use memo to prevent unnecessary re-renders
const SubmitButton = memo(({ isSubmitting }: SubmitButtonProps) => {
  const location = useLocation();
  const isJoinUsPage = location.pathname === "/join-us";
  
  return (
    <Button 
      type="submit" 
      className="w-full md:w-auto"
      disabled={isSubmitting}
      variant={isJoinUsPage ? "holo" : "default"}
    >
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          Send Message
          <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
});

SubmitButton.displayName = 'SubmitButton';

export default SubmitButton;

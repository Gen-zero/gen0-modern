
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useLocation } from "react-router-dom";
import { memo } from "react";
import usePerformanceMode from "@/hooks/usePerformanceMode";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

// Use memo to prevent unnecessary re-renders
const SubmitButton = memo(({ isSubmitting }: SubmitButtonProps) => {
  const location = useLocation();
  const isJoinUsPage = location.pathname === "/join-us";
  const { shouldReduceMotion } = usePerformanceMode();
  
  return (
    <Button 
      type="submit" 
      className="w-full md:w-auto"
      disabled={isSubmitting}
      variant={isJoinUsPage ? "holo" : "default"}
    >
      {isSubmitting ? (
        <>
          <div className="code-skeleton mr-2 w-16 h-4">
            <div 
              className="line" 
              style={{
                margin: '0',
                height: '100%',
                animationDuration: shouldReduceMotion ? '3s' : '1.8s'
              }}
            />
          </div>
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

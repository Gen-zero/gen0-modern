
import React from 'react';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';

interface SubmitButtonProps {
  isSubmitting?: boolean;
}

const SubmitButton = ({ isSubmitting = false }: SubmitButtonProps) => {
  return (
    <Button 
      type="submit" 
      disabled={isSubmitting}
      className="rounded-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    >
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        'Send Message'
      )}
    </Button>
  );
};

export default SubmitButton;

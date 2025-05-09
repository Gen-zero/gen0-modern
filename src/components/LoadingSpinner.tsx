
import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-background">
      <Loader2 className="h-10 w-10 text-primary animate-spin" />
    </div>
  );
};

export default LoadingSpinner;

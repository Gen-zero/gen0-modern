import { Suspense } from "react";
import { motion } from "framer-motion";
import SectionLoader from "./SectionLoader";

interface LazySectionProps {
  children: React.ReactNode;
  variants: any;
  shouldLoad: boolean;
  className?: string;
  useViewport?: boolean;
}

const LazySection = ({ 
  children, 
  variants, 
  shouldLoad, 
  className = "",
  useViewport = false 
}: LazySectionProps) => {
  const motionProps = useViewport ? {
    variants,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.2 }
  } : {
    variants
  };

  return (
    <div className={className}>
      <motion.div {...motionProps}>
        {shouldLoad ? (
          <Suspense fallback={<SectionLoader />}>
            {children}
          </Suspense>
        ) : (
          <div className="h-96">
            <SectionLoader />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default LazySection;

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in working with us?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Let's collaborate on your next project. Our team is ready to bring your vision to life.
        </p>
        <Link to="/#contact">
          <Button variant="wave" size="lg" className="px-8">
            <span className="relative z-10">Get in Touch</span>
            <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;

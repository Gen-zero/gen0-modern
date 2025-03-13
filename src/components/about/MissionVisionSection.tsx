
import { Globe, Target } from 'lucide-react';

const MissionVisionSection = () => {
  return (
    <div className="py-20 bg-primary/5 animate-on-scroll">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                To empower businesses and individuals through innovative digital solutions that solve real-world problems. We strive to create technology that is accessible, impactful, and built with integrity.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                To be the leading force in creating digital experiences that transform industries and improve lives. We envision a future where technology bridges gaps, fosters connection, and drives positive change on a global scale.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video bg-white p-1 rounded-xl shadow-xl rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Team brainstorming session" 
                className="rounded-lg w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-4 -left-4 aspect-square w-48 bg-white p-1 rounded-xl shadow-xl -rotate-6">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Team collaboration" 
                className="rounded-lg w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionSection;

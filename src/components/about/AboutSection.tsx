
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const values = [
    'User-centered approach in everything we do', 
    'Continuous innovation and learning', 
    'Transparent communication and processes', 
    'Attention to detail and quality craftsmanship'
  ];

  return (
    <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
      <span className="block text-sm mb-3 text-gray-400 font-semibold">ABOUT US</span>
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">We're a team of creative problem solvers</h2>
      <p className="text-muted-foreground text-lg mb-8">
        Founded in 2013, we've grown from a small design studio to a full-service digital agency with a global footprint. Our multidisciplinary team combines strategic thinking with technical expertise to deliver exceptional results.
      </p>
      
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4">Our Values</h3>
        <ul className="space-y-3">
          {values.map((value, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-medium mb-4">Our Approach</h3>
        <p className="text-muted-foreground">
          We take a collaborative approach to every project, working closely with our clients to understand their unique challenges and objectives. Our proven process ensures we deliver solutions that not only meet but exceed expectations.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;

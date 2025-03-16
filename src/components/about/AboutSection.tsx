import { CheckCircle } from 'lucide-react';
const AboutSection = () => {
  const values = ['User-centered approach in everything we do', 'Continuous innovation and learning', 'Transparent communication and processes', 'Attention to detail and quality craftsmanship'];
  return <div className="animate-on-scroll" style={{
    animationDelay: '0.2s'
  }}>
      <span className="block mb-3 text-gray-400 font-semibold text-4xl">ABOUT US</span>
      <h2 className="text-3xl font-semibold mb-6 md:text-2xl">We're a crew of creative game-changers!</h2>
      <p className="text-muted-foreground mb-8 text-lg">We're a squad of multidisciplinary talent crafting next-gen projects to level up humanity—They call us GenZ, but we are GenZero. </p>
      
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4">Our Values</h3>
        <ul className="space-y-3">
          {values.map((value, index) => <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
              <span>{value}</span>
            </li>)}
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-medium mb-4">Our Approach</h3>
        <p className="text-muted-foreground">We keep it collaborative AF—teaming up closely with our clients to vibe with their unique goals and challenges. Our process? Proven to deliver solutions that don't just hit expectations, they smash them!</p>
      </div>
    </div>;
};
export default AboutSection;

import { CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [{
    value: '10+',
    label: 'Years Experience'
  }, {
    value: '200+',
    label: 'Projects Completed'
  }, {
    value: '50+',
    label: 'Team Members'
  }, {
    value: '30+',
    label: 'Global Clients'
  }];
  
  const values = ['User-centered approach in everything we do', 'Continuous innovation and learning', 'Transparent communication and processes', 'Attention to detail and quality craftsmanship'];
  
  return (
    <section id="about" className="py-16 sm:py-20 md:py-32 bg-secondary/30 display-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
          <div className="relative h-[350px] sm:h-[450px] md:h-[500px] order-2 lg:order-1 animate-fade-in">
            <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-white rounded-xl shadow-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="Team collaboration" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-primary/5 rounded-xl -z-10"></div>
            
            <div className="absolute bottom-4 right-4 glass rounded-lg p-4 sm:p-6 shadow-xl w-48 sm:w-56 animate-float">
              <div className="flex flex-wrap gap-2 sm:gap-4 justify-between">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            <span className="block text-sm font-medium text-primary mb-2 sm:mb-3">About Us</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6">We're a team of creative problem solvers</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Founded in 2013, we've grown from a small design studio to a full-service digital agency with a global footprint. Our multidisciplinary team combines strategic thinking with technical expertise to deliver exceptional results.
            </p>
            
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Our Values</h3>
              <ul className="space-y-2 sm:space-y-3">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Our Approach</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                We take a collaborative approach to every project, working closely with our clients to understand their unique challenges and objectives. Our proven process ensures we deliver solutions that not only meet but exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

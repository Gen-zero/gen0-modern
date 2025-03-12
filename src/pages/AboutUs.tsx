
import { CheckCircle } from 'lucide-react';
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

const AboutUs = () => {
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '200+', label: 'Projects Completed' },
    { value: '50+', label: 'Team Members' },
    { value: '30+', label: 'Global Clients' }
  ];
  
  const values = [
    'User-centered approach in everything we do',
    'Continuous innovation and learning',
    'Transparent communication and processes',
    'Attention to detail and quality craftsmanship'
  ];

  // Smooth reveal animation for sections on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach((section) => {
      section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a team of passionate creators dedicated to building exceptional digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative h-[500px] animate-on-scroll">
              <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-white rounded-xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover" 
                  loading="lazy" 
                />
              </div>
              <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-primary/5 rounded-xl -z-10"></div>
              
              <div className="absolute bottom-4 right-4 glass rounded-lg p-6 shadow-xl w-56 animate-float">
                <div className="flex flex-wrap gap-4 justify-between">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <span className="block text-sm font-medium text-primary mb-3">Our Story</span>
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
          </div>
        </div>
      </section>
      
      {/* Company Timeline Section */}
      <section className="py-20 container mx-auto px-6 md:px-12 animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Journey</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>
          
          {/* Timeline items */}
          <div className="space-y-20">
            {[
              { year: '2013', title: 'Founded', description: 'Our journey began with a small team of designers passionate about crafting beautiful digital experiences.' },
              { year: '2015', title: 'First Major Client', description: 'Landed our first enterprise client and expanded our team to include full-stack developers.' },
              { year: '2018', title: 'International Expansion', description: 'Opened our first international office and began serving clients globally.' },
              { year: '2021', title: 'Innovation Focus', description: 'Established our innovation lab to explore emerging technologies and their applications.' },
              { year: '2023', title: 'Today', description: 'Continuing to grow and evolve, with a team of 50+ creatives serving clients around the world.' }
            ].map((item, index) => (
              <div key={index} className={`relative flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="flex-1"></div>
                <div className="w-10 flex justify-center relative">
                  <div className="h-6 w-6 rounded-full bg-primary absolute top-0"></div>
                </div>
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-10' : 'pl-10'}`}>
                  <span className="text-primary font-bold text-lg">{item.year}</span>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Copyright Section */}
      <div className="container mx-auto py-6 text-center text-muted-foreground text-sm border-t border-border/40 mt-10">
        <p>© {new Date().getFullYear()} Gen0. All rights reserved.</p>
      </div>
    </div>
  );
};

export default AboutUs;

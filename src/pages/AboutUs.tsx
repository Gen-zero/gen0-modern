import { CheckCircle, Globe, Target } from 'lucide-react';
import Navbar from "@/components/Navbar";
import { useEffect, useState, useRef } from "react";
const AboutUs = () => {
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
  const teamMembers = [{
    name: "Sarah Johnson",
    position: "CEO & Founder",
    bio: "Sarah brings 15 years of industry experience and a passion for inclusive design. She founded Gen0 with a vision to build digital products that truly matter.",
    personalDetail: "When not leading the team, Sarah is an avid rock climber and amateur chef.",
    imgUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }, {
    name: "Michael Chen",
    position: "CTO",
    bio: "Michael's technical leadership has shaped our engineering culture. He specializes in scalable architecture and emerging technologies.",
    personalDetail: "A former competitive gamer, Michael now spends his free time teaching coding to underprivileged youth.",
    imgUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }, {
    name: "Elena Rodriguez",
    position: "Creative Director",
    bio: "Elena's award-winning design approach combines aesthetics with functionality. She leads our creative team in delivering visually stunning work.",
    personalDetail: "Elena is a published photographer and maintains a popular design blog in her spare time.",
    imgUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }, {
    name: "David Okafor",
    position: "Head of Product",
    bio: "David excels at translating client needs into product strategies. His background in psychology gives him unique insight into user behavior.",
    personalDetail: "A devoted father of twins, David is also working on his first science fiction novel.",
    imgUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }];

  // Shuffling words effect
  const words = ['CREATORS', 'IDEATORS', 'PROGRAMMERS', 'DESIGNERS', 'ENGINEERS', 'ENTREPRENEURS', 'STUDENTS'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState(words[0]);
  const scrambleWord = (finalWord: string) => {
    let iteration = 0;
    const totalIterations = finalWord.length;
    const scrambleInterval = setInterval(() => {
      let newText = '';
      for (let i = 0; i < finalWord.length; i++) {
        if (i < iteration) {
          newText += finalWord[i];
        } else {
          newText += String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
      }
      setDisplayedWord(newText);
      iteration++;
      if (iteration > totalIterations) {
        clearInterval(scrambleInterval);
        setDisplayedWord(finalWord);
      }
    }, 50);
  };
  useEffect(() => {
    setDisplayedWord(words[0]);
    const interval = setInterval(() => {
      setCurrentWordIndex(prev => {
        const nextIndex = (prev + 1) % words.length;
        scrambleWord(words[nextIndex]);
        return nextIndex;
      });
    }, 1790);
    return () => clearInterval(interval);
  }, []);

  // Smooth reveal animation for sections on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, {
      threshold: 0.1
    });
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => {
      section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observer.observe(section);
    });
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12">
          {/* Landing page style hero section with image box */}
          <div className="mb-16">
            <div className="relative h-[40vh] w-full rounded-2xl overflow-hidden shadow-2xl border border-accent/20 animate-fade-in mb-12">
              <div className="absolute top-0 left-0 w-full h-full">
                <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="Team collaboration" className="w-full h-full object-cover" loading="eager" />
              </div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center px-8">
                <h2 className="text-2xl text-white uppercase mix-blend-exclusion font-extrabold md:text-3xl text-center">
                  WE'RE PASSIONATE {' '}
                  <span className="inline-block" style={{
                  minWidth: '220px'
                }}>
                    {displayedWord}
                  </span>
                  {' '}DEDICATED TO LEVELLING UP HUMANITY.
                </h2>
              </div>
            </div>
            
            <div className="text-center mb-16 animate-on-scroll">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're a team of passionate creators dedicated to building exceptional digital experiences.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative h-[500px] animate-on-scroll">
              <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-white rounded-xl shadow-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="Team collaboration" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-primary/5 rounded-xl -z-10"></div>
              
              <div className="absolute bottom-4 right-4 glass rounded-lg p-6 shadow-xl w-56 animate-float">
                <div className="flex flex-wrap gap-4 justify-between">
                  {stats.map((stat, index) => <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>)}
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll" style={{
            animationDelay: '0.2s'
          }}>
              <span className="block text-sm mb-3 text-gray-400 font-semibold">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">We're a team of creative problem solvers</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Founded in 2013, we've grown from a small design studio to a full-service digital agency with a global footprint. Our multidisciplinary team combines strategic thinking with technical expertise to deliver exceptional results.
              </p>
              
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
                <p className="text-muted-foreground">
                  We take a collaborative approach to every project, working closely with our clients to understand their unique challenges and objectives. Our proven process ensures we deliver solutions that not only meet but exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Vision Section */}
      <section className="py-20 bg-primary/5 animate-on-scroll">
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
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Team brainstorming session" className="rounded-lg w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 aspect-square w-48 bg-white p-1 rounded-xl shadow-xl -rotate-6">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Team collaboration" className="rounded-lg w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet the Team Section */}
      <section className="py-20 container mx-auto px-6 md:px-12 animate-on-scroll">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our success is built on the talent and dedication of our amazing team members. Get to know the people behind Gen0.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => <div key={index} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img src={member.imgUrl} alt={member.name} className="w-full h-full object-cover transition-transform hover:scale-105" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <p className="text-sm italic border-t border-border pt-3">
                  {member.personalDetail}
                </p>
              </div>
            </div>)}
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
            {[{
            year: '2013',
            title: 'Founded',
            description: 'Our journey began with a small team of designers passionate about crafting beautiful digital experiences.'
          }, {
            year: '2015',
            title: 'First Major Client',
            description: 'Landed our first enterprise client and expanded our team to include full-stack developers.'
          }, {
            year: '2018',
            title: 'International Expansion',
            description: 'Opened our first international office and began serving clients globally.'
          }, {
            year: '2021',
            title: 'Innovation Focus',
            description: 'Established our innovation lab to explore emerging technologies and their applications.'
          }, {
            year: '2023',
            title: 'Today',
            description: 'Continuing to grow and evolve, with a team of 50+ creatives serving clients around the world.'
          }].map((item, index) => <div key={index} className={`relative flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="flex-1"></div>
                <div className="w-10 flex justify-center relative">
                  <div className="h-6 w-6 rounded-full bg-primary absolute top-0"></div>
                </div>
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-10' : 'pl-10'}`}>
                  <span className="text-primary font-bold text-lg">{item.year}</span>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      
      {/* Copyright Section */}
      <div className="container mx-auto py-6 text-center text-muted-foreground text-sm border-t border-border/40 mt-10">
        <p>© {new Date().getFullYear()} Gen0. All rights reserved.</p>
      </div>
    </div>;
};
export default AboutUs;
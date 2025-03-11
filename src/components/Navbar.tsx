
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId.charAt(0).toUpperCase() + sectionId.slice(1));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const navLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'Services',
    href: '#services'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Contact',
    href: '#contact'
  }];

  const services = [{
    name: 'UI/UX Design',
    href: '#'
  }, {
    name: 'Web Development',
    href: '#'
  }, {
    name: 'Brand Identity',
    href: '#'
  }, {
    name: 'Digital Strategy',
    href: '#'
  }];

  const legal = [{
    name: 'Privacy Policy',
    href: '#'
  }, {
    name: 'Terms of Service',
    href: '#'
  }, {
    name: 'Cookie Policy',
    href: '#'
  }];

  return <>
      {/* Sticky Navbar */}
      <header className={`fixed top-4 left-4 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-background/60 backdrop-blur-sm'} p-3 rounded-lg w-[40vw] max-w-[300px] border border-border/30`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="text-foreground/90 hover:text-accent transition-colors focus:outline-none" onClick={toggleMenu} aria-label={menuOpen ? "Close Menu" : "Open Menu"}>
              <Menu size={24} />
            </button>
            
            <img src="/lovable-uploads/a9bfe93b-b4a8-45e7-b6ec-0ccf561e4234.png" alt="Gen0 Logo" className="h-11 object-contain" />
          </div>
          
          <span className="text-sm font-medium text-foreground/80 ml-auto">
            {activeSection}
          </span>
        </div>
      </header>
      
      {/* Menu Overlay */}
      <div className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-500 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu} />
      
      {/* Modern Navigation Modal */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-500`}>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/98 to-background/90 backdrop-blur-md" onClick={toggleMenu}></div>
        
        <div className="relative w-full max-w-7xl mx-auto h-[90vh] overflow-auto p-6 md:p-10 rounded-xl">
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 z-50 text-foreground/80 hover:text-accent transition-colors duration-300 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <X size={32} className="hover:rotate-90 transition-transform duration-300" />
          </button>
          
          {/* Header */}
          <div className="flex flex-col mb-10 md:mb-16">
            <div className="flex items-center gap-4 mb-6">
              <img src="/lovable-uploads/a9bfe93b-b4a8-45e7-b6ec-0ccf561e4234.png" alt="Gen0 Logo" className="h-16 object-contain" />
              <div className="flex items-center gap-3">
                <Sparkles className="text-accent h-6 w-6 animate-pulse-subtle" />
                <span className="font-bold text-xl md:text-2xl">GEN<span className="text-accent">Ø</span></span>
              </div>
            </div>
            
            {/* Animated Punchline */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-3xl mb-4 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
              We create digital experiences that are beautiful, functional, and designed to help your business grow.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Main Navigation - Left Column */}
            <div className="md:col-span-5 lg:col-span-4">
              <div className="space-y-8">
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link, index) => (
                    <a 
                      key={link.name} 
                      href={link.href} 
                      className={cn(
                        "group relative flex items-center text-2xl md:text-3xl font-medium transition-colors",
                        activeSection === link.name ? "text-accent" : "text-foreground/90 hover:text-accent"
                      )} 
                      onClick={() => setMenuOpen(false)}
                      style={{transitionDelay: `${index * 50}ms`}}
                    >
                      <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2">
                        {link.name}
                      </span>
                      <ArrowRight className={cn(
                        "ml-2 h-5 w-5 opacity-0 transition-all duration-300", 
                        "group-hover:opacity-100 group-hover:translate-x-2"
                      )} />
                    </a>
                  ))}
                </nav>
                
                <Button 
                  className="w-full text-base py-6 px-8 mt-8 font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/20" 
                  onClick={() => setMenuOpen(false)}
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Right Column - Secondary Links */}
            <div className="md:col-span-7 lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Services Links */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold mb-4 text-accent">Services</h3>
                  <ul className="space-y-3">
                    {services.map(service => (
                      <li key={service.name}>
                        <a 
                          href={service.href} 
                          className="relative inline-block text-muted-foreground hover:text-foreground transition-colors duration-300 after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left" 
                          onClick={() => setMenuOpen(false)}
                        >
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Links */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
                  <ul className="space-y-3">
                    {navLinks.map(link => (
                      <li key={link.name}>
                        <a 
                          href={link.href} 
                          className="relative inline-block text-muted-foreground hover:text-foreground transition-colors duration-300 after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left" 
                          onClick={() => setMenuOpen(false)}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal Links */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold mb-4 text-accent">Legal</h3>
                  <ul className="space-y-3">
                    {legal.map(item => (
                      <li key={item.name}>
                        <a 
                          href={item.href} 
                          className="relative inline-block text-muted-foreground hover:text-foreground transition-colors duration-300 after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left" 
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="mt-16 hidden md:block">
                <div className="relative h-[1px] w-full bg-border/30">
                  <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-accent animate-pulse-subtle"></div>
                </div>
                <div className="mt-8 text-muted-foreground/60 text-sm">
                  <p>© {new Date().getFullYear()} Gen0. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};

export default Navbar;

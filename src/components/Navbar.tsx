
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "./ui/button";

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
      <div className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu} />
      
      {/* Full-width Menu Modal */}
      <div className={`fixed left-0 top-0 h-full w-full bg-background z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto`}>
        <div className="container mx-auto px-6 py-10">
          <div className="flex justify-between items-center mb-8">
            <a href="#" className="flex items-center gap-2">
              <img src="/lovable-uploads/a9bfe93b-b4a8-45e7-b6ec-0ccf561e4234.png" alt="Gen0 Logo" className="h-14 object-contain" />
              
            </a>
            <button className="text-foreground focus:outline-none hover:text-accent transition-colors" onClick={toggleMenu} aria-label="Close Menu">
              <X size={24} />
            </button>
          </div>
          
          {/* Punchline */}
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl">
            We create digital experiences that are beautiful, functional, and designed to help your business grow.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Main Navigation */}
            <div>
              <h3 className="text-xl font-medium mb-6">Navigation</h3>
              <nav className="flex flex-col space-y-6">
                {navLinks.map(link => <a key={link.name} href={link.href} className={`text-lg font-medium hover:text-accent transition-colors ${activeSection === link.name ? 'text-accent' : 'text-foreground/80'}`} onClick={() => setMenuOpen(false)}>
                    {link.name}
                  </a>)}
                
                <Button className="mt-4 w-full md:w-auto" onClick={() => setMenuOpen(false)}>
                  Get in Touch
                </Button>
              </nav>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-medium mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {navLinks.map(link => <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-base" onClick={() => setMenuOpen(false)}>
                      {link.name}
                    </a>
                  </li>)}
              </ul>
            </div>
            
            {/* Services Links */}
            <div>
              <h3 className="text-xl font-medium mb-6">Services</h3>
              <ul className="space-y-4">
                {services.map(service => <li key={service.name}>
                    <a href={service.href} className="text-muted-foreground hover:text-foreground transition-colors text-base" onClick={() => setMenuOpen(false)}>
                      {service.name}
                    </a>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>;
};

export default Navbar;

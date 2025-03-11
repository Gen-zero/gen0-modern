import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "./ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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

  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-semibold tracking-tight transition-opacity duration-300">
            <img src="/lovable-uploads/gen0-logo-color.png" alt="Gen0 Logo" className="h-8 object-contain" />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-foreground animated-link">
                {link.name}
              </a>)}
            <Button size="sm" className="ml-4">Get in Touch</Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground focus:outline-none" onClick={toggleMobileMenu} aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`fixed inset-0 bg-background z-40 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden pt-24`}>
        <nav className="flex flex-col items-center space-y-8 p-8">
          {navLinks.map(link => <a key={link.name} href={link.href} className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
              {link.name}
            </a>)}
          <Button className="mt-4 w-full" onClick={() => setMobileMenuOpen(false)}>
            Get in Touch
          </Button>
        </nav>
      </div>
    </header>;
};

export default Navbar;

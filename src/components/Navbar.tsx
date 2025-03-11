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
  return <>
      {/* Sticky Navbar */}
      <header className={`fixed top-4 left-4 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-background/60 backdrop-blur-sm'} p-3 rounded-lg w-[40vw] max-w-[300px]`}>
        <div className="flex items-center gap-3">
          <button className="text-foreground focus:outline-none" onClick={toggleMenu} aria-label={menuOpen ? "Close Menu" : "Open Menu"}>
            <Menu size={24} />
          </button>
          
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/a9bfe93b-b4a8-45e7-b6ec-0ccf561e4234.png" alt="Gen0 Logo" className="h-8 object-contain" />
            <span className="text-sm font-medium text-foreground/80">
              {activeSection}
            </span>
          </div>
        </div>
      </header>
      
      {/* Menu Overlay */}
      <div className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu} />
      
      {/* Menu Modal */}
      <div className={`fixed left-0 top-0 h-full bg-background z-50 w-[280px] transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'} p-6`}>
        <div className="flex justify-between items-center mb-8">
          <a href="#" className="flex items-center gap-2">
            <img src="/lovable-uploads/a9bfe93b-b4a8-45e7-b6ec-0ccf561e4234.png" alt="Gen0 Logo" className="h-10 object-contain" />
            <span className="text-lg font-semibold">
          </span>
          </a>
          <button className="text-foreground focus:outline-none" onClick={toggleMenu} aria-label="Close Menu">
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex flex-col space-y-6">
          {navLinks.map(link => <a key={link.name} href={link.href} className={`text-base font-medium hover:text-accent transition-colors ${activeSection === link.name ? 'text-accent' : 'text-foreground/80'}`} onClick={() => setMenuOpen(false)}>
              {link.name}
            </a>)}
          
          <Button className="mt-4 w-full" onClick={() => setMenuOpen(false)}>
            Get in Touch
          </Button>
        </nav>
      </div>
    </>;
};
export default Navbar;

import { X, ArrowRight, Sparkles, Home, Layers, Briefcase, Mail } from 'lucide-react';
import { Button } from "../ui/button";
import { Link } from 'react-router-dom';
import NavMenuLinks from './NavMenuLinks';
import NavMenuServices from './NavMenuServices';
import NavMenuQuickLinks from './NavMenuQuickLinks';
import NavMenuLegal from './NavMenuLegal';
import { useNavbar } from '@/contexts/NavbarContext';
import { ScrollArea } from "@/components/ui/scroll-area";

interface NavMenuProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const NavMenu = ({
  menuOpen,
  toggleMenu
}: NavMenuProps) => {
  const {
    activeSection
  } = useNavbar();
  
  const navLinks = [{
    name: 'Home',
    href: '#home',
    icon: <Home size={18} />
  }, {
    name: 'Services',
    href: '#services',
    icon: <Layers size={18} />
  }, {
    name: 'Projects',
    href: '#projects',
    icon: <Briefcase size={18} />
  }, {
    name: 'Contact',
    href: '#contact',
    icon: <Mail size={18} />
  }];
  
  // Function to handle scrolling to contact section
  const handleContactClick = () => {
    toggleMenu();
    // If already on home page, scroll to contact section
    if (window.location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with state to scroll to contact section
      window.location.href = '/#contact';
    }
  };
  
  return <>
      {/* Menu Overlay */}
      <div className={`fixed inset-0 bg-black/60 z-70 transition-opacity duration-500 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu} />
      
      {/* Modern Navigation Modal */}
      <div className={`fixed inset-0 z-80 flex items-center justify-center ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-500`}>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/98 to-background/90 backdrop-blur-md" onClick={toggleMenu}></div>
        
        <div className="relative w-full max-w-7xl mx-auto h-[90vh] overflow-y-auto no-scrollbar p-6 md:p-10 rounded-xl touch-auto">
          {/* Close Button */}
          <button className="absolute top-6 right-6 z-50 text-foreground/80 hover:text-accent transition-colors duration-300 focus:outline-none" onClick={toggleMenu} aria-label="Close Menu">
            <X size={32} className="hover:rotate-90 transition-transform duration-300" />
          </button>
          
          {/* Header */}
          <div className="flex flex-col mb-10 md:mb-16 px-[28px]">
            <Link to="/" className="flex items-center gap-4 mb-6" onClick={toggleMenu}>
              <img src="/lovable-uploads/a9bfe93b-b4a8-45e7-b6ec-0ccf561e4234.png" alt="Gen0 Logo" className="h-16 object-contain" />
              <div className="flex items-center gap-3">
                <Sparkles className="text-accent h-6 w-6 animate-pulse-subtle" />
                
              </div>
            </Link>
            
            {/* Animated Punchline */}
            <h2 className="text-2xl lg:text-4xl font-bold max-w-3xl mb-4 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-gray-50 md:text-xl">✨ We ideate 💡, organize 🗂️, and execute 🚀 altruistic projects dedicated to levelling up humanity 🌏—From Bharat, for the world 🕉️.
          </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 px-[28px]">
            <div className="md:col-span-5 lg:col-span-4">
              <div className="space-y-8 mx-0 px-0 py-px my-px">
                <NavMenuLinks navLinks={navLinks} activeSection={activeSection} toggleMenu={toggleMenu} />
                
                <Button 
                  className="w-full text-base py-6 px-8 mt-8 font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group" 
                  onClick={handleContactClick}
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            
            <div className="md:col-span-7 lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <NavMenuServices toggleMenu={toggleMenu} />
                
                <NavMenuQuickLinks navLinks={navLinks} toggleMenu={toggleMenu} />
                
                <NavMenuLegal toggleMenu={toggleMenu} />
              </div>
              
              <div className="mt-16 hidden md:block">
                <div className="relative">
                  <div className="h-[1px] w-full bg-border/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
                  </div>
                  <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-accent group-hover:bg-white transition-colors duration-300 delay-700 animate-pulse-subtle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};

export default NavMenu;

import { X, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';
import NavMenuLinks from './NavMenuLinks';
import NavMenuServices from './NavMenuServices';
import NavMenuQuickLinks from './NavMenuQuickLinks';
import NavMenuLegal from './NavMenuLegal';

interface NavMenuProps {
  menuOpen: boolean;
  toggleMenu: () => void;
  activeSection: string;
}

const NavMenu = ({
  menuOpen,
  toggleMenu,
  activeSection
}: NavMenuProps) => {
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
    name: 'Contact',
    href: '#contact'
  }];
  
  return <>
      {/* Menu Overlay */}
      <div className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-500 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu} />
      
      {/* Modern Navigation Modal */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-500`}>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/98 to-background/90 backdrop-blur-md" onClick={toggleMenu}></div>
        
        <div className="relative w-full max-w-7xl mx-auto h-[90vh] overflow-auto p-6 md:p-10 rounded-xl py-0 px-[28px] my-0 overflow-scroll">
          {/* Close Button */}
          <button className="absolute top-6 right-6 z-50 text-foreground/80 hover:text-accent transition-colors duration-300 focus:outline-none" onClick={toggleMenu} aria-label="Close Menu">
            <X size={32} className="hover:rotate-90 transition-transform duration-300" />
          </button>
          
          {/* Header */}
          <div className="flex flex-col mb-10 md:mb-16">
            <Link to="/" className="flex items-center gap-4 mb-6" onClick={toggleMenu}>
              <img src="/lovable-uploads/a9bfe93b-b4a8-45e7-b6ec-0ccf561e4234.png" alt="Gen0 Logo" className="h-16 object-contain" />
              <div className="flex items-center gap-3">
                <Sparkles className="text-accent h-6 w-6 animate-pulse-subtle" />
                <span className="font-bold text-xl md:text-2xl">GEN<span className="text-accent">Ø</span></span>
              </div>
            </Link>
            
            {/* Animated Punchline */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-3xl mb-4 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
              We create digital experiences that are beautiful, functional, and designed to help your business grow.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5 lg:col-span-4">
              <div className="space-y-8">
                <NavMenuLinks navLinks={navLinks} activeSection={activeSection} toggleMenu={toggleMenu} />
                
                <Button className="w-full text-base py-6 px-8 mt-8 font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group" onClick={() => toggleMenu()}>
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


import { Menu, ChevronRight, ChevronLeft } from 'lucide-react';
import NavMenu from './navbar/NavMenu';
import { Link } from 'react-router-dom';
import NavbarSectionTitle from './navbar/NavbarSectionTitle';
import NavbarSectionLinks from './navbar/NavbarSectionLinks';
import { NavbarProvider, useNavbar } from '@/contexts/NavbarContext';
import { useNavbarAnimation } from '@/hooks/useNavbarAnimation';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';

const NavbarContent = () => {
  const { isScrolled, menuOpen, setMenuOpen, navbarExpanded } = useNavbar();
  const { navbarRef, toggleNavbarExpand } = useNavbarAnimation();
  
  useNavbarScroll(); // Initialize scroll effects
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };
  
  return (
    <>
      <header 
        ref={navbarRef}
        className={`fixed top-4 left-4 z-50 transition-colors duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-background/60 backdrop-blur-sm'} p-3 rounded-lg border border-border/30 overflow-hidden`}
        style={{ width: 'auto', maxWidth: navbarExpanded ? '80vw' : '300px' }}
      >
        <div className="flex items-center justify-between">
          <button className="text-foreground/90 hover:text-accent transition-colors focus:outline-none" onClick={toggleMenu} aria-label={menuOpen ? "Close Menu" : "Open Menu"}>
            <Menu size={24} />
          </button>
          
          <Link to="/" className="flex items-center justify-center mx-auto">
            <img src="/lovable-uploads/a9bfe93b-b4a8-45e7-b6ec-0ccf561e4234.png" alt="Gen0 Logo" className="h-11 object-contain" />
          </Link>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <NavbarSectionTitle />
              <NavbarSectionLinks />
            </div>

            <button 
              onClick={toggleNavbarExpand}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 hover:bg-accent/20 text-accent transition-all ml-1"
              aria-label={navbarExpanded ? "Collapse Navigation" : "Expand Navigation"}
            >
              {navbarExpanded ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </button>
          </div>
        </div>
      </header>
      
      <NavMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

const Navbar = () => {
  return (
    <NavbarProvider>
      <NavbarContent />
    </NavbarProvider>
  );
};

export default Navbar;

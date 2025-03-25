
import { Menu, ChevronRight, ChevronLeft, ArrowLeft } from 'lucide-react';
import NavMenu from './navbar/NavMenu';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import NavbarSectionTitle from './navbar/NavbarSectionTitle';
import NavbarSectionLinks from './navbar/NavbarSectionLinks';
import { NavbarProvider, useNavbar } from '@/contexts/NavbarContext';
import { useNavbarAnimation } from '@/hooks/useNavbarAnimation';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect } from 'react';
import { useNavbarRoute } from '@/hooks/useNavbarRoute';

const NavbarContent = () => {
  const { isScrolled, menuOpen, setMenuOpen, navbarExpanded, setActiveSection, setPrevActiveSection } = useNavbar();
  const { navbarRef, toggleNavbarExpand, isSmallScreen } = useNavbarAnimation();
  const { isHomePage, isProjectDetailPage, isBlogPage, projectName } = useNavbarRoute();
  const location = useLocation();
  const navigate = useNavigate();
  const isMobileScreen = useIsMobile();
  
  useNavbarScroll(); // Initialize scroll effects
  
  // Reset section when route changes to ensure clean transitions
  useEffect(() => {
    if (location.pathname === '/projects') {
      setPrevActiveSection('Projects');
      setActiveSection('Projects');
    } else if (location.pathname.startsWith('/projects/') && isProjectDetailPage) {
      setPrevActiveSection('Projects');
      setActiveSection(projectName || 'Project');
    } else if (location.pathname === '/privacy-policy') {
      setPrevActiveSection('Privacy');
      setActiveSection('Privacy');
    } else if (location.pathname === '/terms-of-service') {
      setPrevActiveSection('Terms');
      setActiveSection('Terms');
    } else if (location.pathname === '/cookie-policy') {
      setPrevActiveSection('Cookies');
      setActiveSection('Cookies');
    } else if (location.pathname === '/about') {
      setPrevActiveSection('About');
      setActiveSection('About');
    } else if (location.pathname.startsWith('/blog')) {
      setPrevActiveSection('Blog');
      setActiveSection('Blog');
    } else if (location.pathname === '/') {
      setPrevActiveSection('Home');
      setActiveSection('Home');
    }
  }, [location.pathname, setPrevActiveSection, setActiveSection, isProjectDetailPage, projectName, isBlogPage]);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const handleBackClick = () => {
    navigate(-1); // Navigate back
  };
  
  return (
    <>
      <header 
        ref={navbarRef}
        className={`fixed top-4 left-4 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-background/60 backdrop-blur-sm'} p-3 rounded-lg border border-border/30 overflow-hidden`}
        style={{ 
          width: navbarExpanded && !isSmallScreen && isHomePage ? 'auto' : '300px',
          transition: 'width 0.4s ease-in-out' 
        }}
      >
        <div className="flex items-center justify-between">
          <button className="text-foreground/90 hover:text-accent transition-colors focus:outline-none" onClick={toggleMenu} aria-label={menuOpen ? "Close Menu" : "Open Menu"}>
            <Menu size={24} />
          </button>
          
          <Link to="/" className="flex items-center justify-center mx-4">
            <img src="/lovable-uploads/a9bfe93b-b4a8-45e7-b6ec-0ccf561e4234.png" alt="Gen0 Logo" className="h-11 object-contain" />
          </Link>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <NavbarSectionTitle />
              {!isSmallScreen && isHomePage && <NavbarSectionLinks />}
            </div>

            {!isSmallScreen && isHomePage && (
              <button 
                onClick={toggleNavbarExpand}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 hover:bg-primary/20 text-white transition-all ml-1"
                aria-label={navbarExpanded ? "Collapse Navigation" : "Expand Navigation"}
              >
                {navbarExpanded ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
              </button>
            )}
          </div>
        </div>
      </header>
      
      {/* Back button - only show on non-home pages and non-small screens */}
      {!isHomePage && !isMobileScreen && (
        <button
          onClick={handleBackClick}
          className="fixed top-4 right-4 z-50 p-3 rounded-lg bg-background/60 backdrop-blur-sm border border-border/30 transition-all duration-300 hover:bg-primary/10 text-white hover:text-primary focus:outline-none"
          aria-label="Go back"
        >
          <ArrowLeft size={24} />
        </button>
      )}
      
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

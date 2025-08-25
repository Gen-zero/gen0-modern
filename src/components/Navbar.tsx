
import { Menu, ArrowLeft } from 'lucide-react';
import NavMenu from './navbar/NavMenu';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import NavbarSectionTitle from './navbar/NavbarSectionTitle';
import { useNavbar } from '@/contexts/NavbarContext';
import { useNavbarAnimation } from '@/hooks/useNavbarAnimation';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect } from 'react';
import { useNavbarRoute } from '@/hooks/useNavbarRoute';

const Navbar = () => {
  const { isScrolled, menuOpen, setMenuOpen, navbarExpanded, setActiveSection, setPrevActiveSection } = useNavbar();
  const { navbarRef, isSmallScreen } = useNavbarAnimation();
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
        className={`fixed top-4 left-4 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/40 backdrop-blur-xl shadow-lg border-primary/10' 
            : 'bg-background/30 backdrop-blur-md'
        } p-3 rounded-lg border border-white/10 overflow-hidden`}
        style={{ 
          width: '250px',
          transition: 'width 0.4s ease-in-out',
          boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.05)'
        }}
      >
        <div className="flex items-center justify-between">
          <button className="text-foreground/90 hover:text-accent transition-colors focus:outline-none" onClick={toggleMenu} aria-label={menuOpen ? "Close Menu" : "Open Menu"}>
            <Menu size={24} />
          </button>
          
          <Link to="/" className="flex items-center justify-center mx-4">
            <img src="/lovable-uploads/ee84fdfe-ba5d-4ccf-acad-c575de3d4633.png" alt="Gen0 Logo" className="h-14 object-contain" />
          </Link>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <NavbarSectionTitle />
            </div>
          </div>
        </div>
      </header>
      
      {/* Back button - only show on non-home pages and non-small screens */}
      {!isHomePage && !isMobileScreen && (
        <button
          onClick={handleBackClick}
          className="fixed top-4 right-4 z-50 p-3 rounded-lg bg-background/30 backdrop-blur-md border border-white/10 transition-all duration-300 hover:bg-primary/10 text-white hover:text-primary focus:outline-none"
          aria-label="Go back"
        >
          <ArrowLeft size={24} />
        </button>
      )}
      
      <NavMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;

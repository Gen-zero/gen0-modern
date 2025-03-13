
import { useState, useEffect } from 'react';
import { Menu, Sparkles } from 'lucide-react';
import NavMenu from './navbar/NavMenu';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [prevActiveSection, setPrevActiveSection] = useState('Home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
      
      // Check if navbar should be scrolled
      setIsScrolled(currentScrollY > 50);

      // Only determine active section on home page
      if (!isAboutPage) {
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
          const sectionTop = (section as HTMLElement).offsetTop - 100;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          const sectionId = section.getAttribute('id') || '';
          if (currentScrollY >= sectionTop && currentScrollY < sectionTop + sectionHeight) {
            const newSection = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
            if (newSection !== activeSection) {
              setPrevActiveSection(activeSection);
              setActiveSection(newSection);
              setIsTransitioning(true);
              setTimeout(() => setIsTransitioning(false), 500);
            }
          }
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAboutPage, activeSection, lastScrollY]);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };
  
  return <>
      {/* Sticky Navbar */}
      <header className={`fixed top-4 left-4 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-background/60 backdrop-blur-sm'} p-3 rounded-lg w-[40vw] max-w-[300px] border border-border/30`}>
        <div className="flex items-center justify-between">
          <button className="text-foreground/90 hover:text-accent transition-colors focus:outline-none" onClick={toggleMenu} aria-label={menuOpen ? "Close Menu" : "Open Menu"}>
            <Menu size={24} />
          </button>
          
          <Link to="/" className="flex items-center justify-center mx-auto">
            <img src="/lovable-uploads/a9bfe93b-b4a8-45e7-b6ec-0ccf561e4234.png" alt="Gen0 Logo" className="h-11 object-contain" />
          </Link>
          
          <div className="relative min-w-[80px] h-6 overflow-hidden">
            {/* Current section text */}
            <span 
              className={`absolute inset-0 text-sm font-medium text-foreground/80 mx-auto text-center transition-transform duration-500 ${
                isTransitioning 
                  ? (scrollDirection === 'down' ? '-translate-y-8' : 'translate-y-8') + ' opacity-0' 
                  : 'translate-y-0 opacity-100'
              }`}
            >
              {isAboutPage ? "About Us" : activeSection}
            </span>
            
            {/* Previous section text */}
            <span 
              className={`absolute inset-0 text-sm font-medium text-foreground/80 mx-auto text-center transition-transform duration-500 ${
                isTransitioning 
                  ? 'translate-y-0 opacity-100' 
                  : (scrollDirection === 'down' ? 'translate-y-8' : '-translate-y-8') + ' opacity-0'
              }`}
            >
              {isAboutPage ? "About Us" : prevActiveSection}
            </span>
          </div>
        </div>
      </header>
      
      <NavMenu menuOpen={menuOpen} toggleMenu={toggleMenu} activeSection={activeSection} />
    </>;
};
export default Navbar;

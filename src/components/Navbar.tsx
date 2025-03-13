
import { useState, useEffect, useRef } from 'react';
import { Menu, Sparkles } from 'lucide-react';
import NavMenu from './navbar/NavMenu';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [prevActiveSection, setPrevActiveSection] = useState('Home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  const activeTextRef = useRef<HTMLSpanElement>(null);
  const prevTextRef = useRef<HTMLSpanElement>(null);
  const transitionTimeoutRef = useRef<number | null>(null);
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';
  
  // Animation function using GSAP
  const animateSectionChange = (direction: string) => {
    if (activeTextRef.current && prevTextRef.current) {
      // Reset any ongoing animations
      gsap.killTweensOf([activeTextRef.current, prevTextRef.current]);
      
      // Set initial positions
      gsap.set(activeTextRef.current, { 
        y: direction === 'down' ? 20 : -20, 
        autoAlpha: 0 
      });
      
      gsap.set(prevTextRef.current, { 
        y: 0, 
        autoAlpha: 1 
      });
      
      // Animate previous text out
      gsap.to(prevTextRef.current, {
        y: direction === 'down' ? -20 : 20,
        autoAlpha: 0,
        duration: 0.4,
        ease: "power2.inOut"
      });
      
      // Animate current text in
      gsap.to(activeTextRef.current, {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          setIsTransitioning(false);
          if (transitionTimeoutRef.current) {
            window.clearTimeout(transitionTimeoutRef.current);
            transitionTimeoutRef.current = null;
          }
        }
      });
    }
  };
  
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
            if (newSection !== activeSection && !isTransitioning) {
              setPrevActiveSection(activeSection);
              setActiveSection(newSection);
              setIsTransitioning(true);
              
              // Clear any existing timeout
              if (transitionTimeoutRef.current) {
                window.clearTimeout(transitionTimeoutRef.current);
              }
              
              // Set a safety timeout to reset transitioning state
              transitionTimeoutRef.current = window.setTimeout(() => {
                setIsTransitioning(false);
                transitionTimeoutRef.current = null;
              }, 1000); // Slightly longer timeout as a safety
            }
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (transitionTimeoutRef.current) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [isAboutPage, activeSection, lastScrollY, isTransitioning]);
  
  // Trigger GSAP animation when activeSection changes
  useEffect(() => {
    if (isTransitioning) {
      animateSectionChange(scrollDirection);
    }
  }, [activeSection, isTransitioning, scrollDirection]);
  
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
            {/* Current section text - controlled by GSAP */}
            <span 
              ref={activeTextRef}
              className="absolute inset-0 text-sm font-medium text-foreground/80 mx-auto text-center"
            >
              {isAboutPage ? "About Us" : activeSection}
            </span>
            
            {/* Previous section text - controlled by GSAP */}
            <span 
              ref={prevTextRef}
              className="absolute inset-0 text-sm font-medium text-foreground/80 mx-auto text-center"
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

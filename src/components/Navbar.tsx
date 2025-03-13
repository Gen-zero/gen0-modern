import { useState, useEffect, useRef } from 'react';
import { Menu, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import NavMenu from './navbar/NavMenu';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [prevActiveSection, setPrevActiveSection] = useState('Home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const activeTextRef = useRef<HTMLSpanElement>(null);
  const prevTextRef = useRef<HTMLSpanElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const transitionTimeoutRef = useRef<number | null>(null);
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';
  
  const animateSectionChange = (direction: string) => {
    if (activeTextRef.current && prevTextRef.current) {
      gsap.killTweensOf([activeTextRef.current, prevTextRef.current]);
      
      gsap.set(activeTextRef.current, { 
        y: direction === 'down' ? 20 : -20, 
        autoAlpha: 0 
      });
      
      gsap.set(prevTextRef.current, { 
        y: 0, 
        autoAlpha: 1 
      });
      
      gsap.to(prevTextRef.current, {
        y: direction === 'down' ? -20 : 20,
        autoAlpha: 0,
        duration: 0.4,
        ease: "power2.inOut"
      });
      
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

  const toggleNavbarExpand = () => {
    setNavbarExpanded(!navbarExpanded);
    
    if (navbarRef.current) {
      const expandableContentRef = document.querySelector('.expandable-section-links');
      
      if (!navbarExpanded && expandableContentRef) {
        gsap.fromTo(expandableContentRef, 
          { width: 0, opacity: 0 },
          {
            width: 'auto',
            opacity: 1,
            duration: 0.8,
            ease: "power2.inOut"
          }
        );
      } else if (expandableContentRef) {
        gsap.to(expandableContentRef, {
          width: 0,
          opacity: 0,
          duration: 0.7,
          ease: "power3.inOut"
        });
      }
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
      
      setIsScrolled(currentScrollY > 50);

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
              
              if (transitionTimeoutRef.current) {
                window.clearTimeout(transitionTimeoutRef.current);
              }
              
              transitionTimeoutRef.current = window.setTimeout(() => {
                setIsTransitioning(false);
                transitionTimeoutRef.current = null;
              }, 1000);
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

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];
  
  return <>
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
              <div className="relative min-w-[80px] h-6 overflow-hidden">
                <span 
                  ref={activeTextRef}
                  className="absolute inset-0 text-sm font-medium text-foreground/80 mx-auto text-center"
                >
                  {isAboutPage ? "About Us" : activeSection}
                </span>
                
                <span 
                  ref={prevTextRef}
                  className="absolute inset-0 text-sm font-medium text-foreground/80 mx-auto text-center"
                >
                  {isAboutPage ? "About Us" : prevActiveSection}
                </span>
              </div>

              <div className={`expandable-section-links overflow-hidden flex ${navbarExpanded ? 'w-auto opacity-100 ml-3' : 'w-0 opacity-0 ml-0'}`}>
                <div className="flex items-center space-x-3 whitespace-nowrap">
                  {sections.map((section) => {
                    const isActive = activeSection.toLowerCase() === section.label.toLowerCase();
                    if (!isActive) {
                      return (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          className="px-3 py-1 text-sm rounded-md transition-colors hover:bg-card text-foreground/70 hover:text-foreground"
                        >
                          {section.label}
                        </a>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
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
      
      <NavMenu menuOpen={menuOpen} toggleMenu={toggleMenu} activeSection={activeSection} />
    </>;
};
export default Navbar;

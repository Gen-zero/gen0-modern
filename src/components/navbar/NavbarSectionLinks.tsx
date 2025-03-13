
import { useNavbar } from '@/contexts/NavbarContext';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import { useEffect, useRef } from 'react';
import { useNavbarRoute } from '@/hooks/useNavbarRoute';

interface Section {
  id: string;
  label: string;
}

const NavbarSectionLinks = () => {
  const { activeSection, navbarExpanded } = useNavbar();
  const { isHomePage } = useNavbarRoute();
  const containerRef = useRef<HTMLDivElement>(null);

  // Check for small screen size
  useEffect(() => {
    const checkScreenSize = () => {
      if (containerRef.current) {
        if (window.innerWidth < 550 || !isHomePage) {
          containerRef.current.style.display = 'none';
        } else {
          containerRef.current.style.display = '';
        }
      }
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [isHomePage]);

  // Only show section links on home page
  if (!isHomePage) {
    return null;
  }

  // Home page links
  const sectionLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div ref={containerRef} className="expandable-section-links overflow-hidden flex ml-0 opacity-0" style={{ width: 0 }}>
      <div className="flex items-center space-x-3 whitespace-nowrap">
        {sectionLinks.map((section) => {
          const isActive = activeSection === section.label;
          if (!isActive) {
            return (
              <a
                key={section.id}
                href={`/#${section.id}`}
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
  );
};

export default NavbarSectionLinks;

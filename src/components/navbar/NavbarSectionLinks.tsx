
import { useNavbar } from '@/contexts/NavbarContext';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import { useEffect, useRef } from 'react';

interface Section {
  id: string;
  label: string;
}

const NavbarSectionLinks = () => {
  const { activeSection, navbarExpanded } = useNavbar();
  const { isAboutPage, isProjectsPage, isPrivacyPage, isTermsPage, isCookiePage, sections } = useNavbarScroll();
  const containerRef = useRef<HTMLDivElement>(null);

  // Check for small screen size
  useEffect(() => {
    const checkScreenSize = () => {
      if (containerRef.current) {
        if (window.innerWidth < 550) {
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
  }, []);

  // Determine section links based on current page
  let sectionLinks: Section[] = [];
  
  if (isAboutPage) {
    sectionLinks = [
      { id: 'our-story', label: 'Our Story' },
      { id: 'mission', label: 'Mission' },
      { id: 'team', label: 'Team' },
      { id: 'journey', label: 'Journey' }
    ];
  } else if (isProjectsPage) {
    sectionLinks = [
      { id: 'featured', label: 'Featured' },
      { id: 'all', label: 'All Projects' }
    ];
  } else if (isPrivacyPage || isTermsPage || isCookiePage) {
    // Legal pages typically don't have section navigation
    sectionLinks = [];
  } else {
    // Home page
    sectionLinks = [
      { id: 'home', label: 'Home' },
      { id: 'services', label: 'Services' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' }
    ];
  }

  return (
    <div ref={containerRef} className="expandable-section-links overflow-hidden flex ml-0 opacity-0" style={{ width: 0 }}>
      <div className="flex items-center space-x-3 whitespace-nowrap">
        {sectionLinks.map((section) => {
          const isActive = activeSection === section.label;
          if (!isActive) {
            return (
              <a
                key={section.id}
                href={
                  isAboutPage 
                    ? `#${section.id}` 
                    : isProjectsPage 
                      ? `#${section.id}` 
                      : `/#${section.id}`
                }
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

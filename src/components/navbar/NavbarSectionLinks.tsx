
import { useNavbar } from '@/contexts/NavbarContext';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';

interface Section {
  id: string;
  label: string;
}

const NavbarSectionLinks = () => {
  const { activeSection, navbarExpanded } = useNavbar();
  const { isAboutPage } = useNavbarScroll();

  const sections: Section[] = isAboutPage 
    ? [
        { id: 'our-story', label: 'Our Story' },
        { id: 'mission', label: 'Mission' },
        { id: 'team', label: 'Team' },
        { id: 'journey', label: 'Journey' }
      ] 
    : [
        { id: 'home', label: 'Home' },
        { id: 'services', label: 'Services' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
      ];

  return (
    <div className="expandable-section-links overflow-hidden flex ml-0 opacity-0" style={{ width: 0 }}>
      <div className="flex items-center space-x-3 whitespace-nowrap">
        {sections.map((section) => {
          const isActive = activeSection.toLowerCase() === section.label.toLowerCase();
          if (!isActive) {
            return (
              <a
                key={section.id}
                href={isAboutPage ? `#${section.id}` : `/#${section.id}`}
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

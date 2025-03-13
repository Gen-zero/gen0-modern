
import { useNavbar } from '@/contexts/NavbarContext';

interface Section {
  id: string;
  label: string;
}

const NavbarSectionLinks = () => {
  const { activeSection, navbarExpanded } = useNavbar();

  const sections: Section[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className={`expandable-section-links overflow-hidden flex ${navbarExpanded ? 'ml-3' : 'ml-0'}`}>
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
  );
};

export default NavbarSectionLinks;

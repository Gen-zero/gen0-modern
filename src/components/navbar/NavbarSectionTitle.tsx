
import { useNavbar } from '@/contexts/NavbarContext';
import { useNavbarAnimation } from '@/hooks/useNavbarAnimation';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';

const NavbarSectionTitle = () => {
  const { activeSection, prevActiveSection } = useNavbar();
  const { activeTextRef, prevTextRef } = useNavbarAnimation();
  const { isAboutPage } = useNavbarScroll();

  // Define active section based on current page
  const currentSection = isAboutPage ? "About Us" : activeSection;
  const previousSection = isAboutPage ? "About Us" : prevActiveSection;

  return (
    <div className="relative min-w-[80px] h-6 overflow-hidden">
      <span 
        ref={activeTextRef}
        className="absolute inset-0 text-sm font-medium text-foreground/80 mx-auto text-center"
      >
        {currentSection}
      </span>
      
      <span 
        ref={prevTextRef}
        className="absolute inset-0 text-sm font-medium text-foreground/80 mx-auto text-center"
      >
        {previousSection}
      </span>
    </div>
  );
};

export default NavbarSectionTitle;

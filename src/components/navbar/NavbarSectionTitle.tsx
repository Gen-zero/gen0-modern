
import { useNavbar } from '@/contexts/NavbarContext';
import { useNavbarTextAnimation } from '@/hooks/useNavbarTextAnimation';
import { useNavbarRoute } from '@/hooks/useNavbarRoute';

const NavbarSectionTitle = () => {
  const { activeSection, prevActiveSection } = useNavbar();
  const { activeTextRef, prevTextRef } = useNavbarTextAnimation();
  const { isHomePage } = useNavbarRoute();
  
  return (
    <div className="relative min-w-[80px] h-6 overflow-hidden">
      <span 
        ref={activeTextRef}
        className="absolute inset-0 text-sm font-medium text-foreground/80 mx-auto text-center block"
      >
        {activeSection}
      </span>
      
      <span 
        ref={prevTextRef}
        className="absolute inset-0 text-sm font-medium text-foreground/80 mx-auto text-center block opacity-0"
      >
        {prevActiveSection}
      </span>
    </div>
  );
};

export default NavbarSectionTitle;

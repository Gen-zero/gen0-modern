
import { useNavbar } from '@/contexts/NavbarContext';
import { useNavbarAnimation } from '@/hooks/useNavbarAnimation';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import { useLocation } from 'react-router-dom';

const NavbarSectionTitle = () => {
  const { activeSection, prevActiveSection } = useNavbar();
  const { activeTextRef, prevTextRef } = useNavbarAnimation();
  const location = useLocation();

  return (
    <div className="relative min-w-[80px] h-6 overflow-hidden">
      <span 
        ref={activeTextRef}
        className="absolute inset-0 text-sm font-medium text-foreground/80 mx-auto text-center"
      >
        {activeSection}
      </span>
      
      <span 
        ref={prevTextRef}
        className="absolute inset-0 text-sm font-medium text-foreground/80 mx-auto text-center"
      >
        {prevActiveSection}
      </span>
    </div>
  );
};

export default NavbarSectionTitle;

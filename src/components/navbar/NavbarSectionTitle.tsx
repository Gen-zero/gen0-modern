import { useNavbar } from '@/contexts/NavbarContext';
import { useNavbarAnimation } from '@/hooks/useNavbarAnimation';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
const NavbarSectionTitle = () => {
  const {
    activeSection,
    prevActiveSection
  } = useNavbar();
  const {
    activeTextRef,
    prevTextRef
  } = useNavbarAnimation();
  const {
    isAboutPage
  } = useNavbarScroll();
  return <div className="relative min-w-[80px] h-6 overflow-hidden">
      <span ref={activeTextRef} className="absolute inset-0 text-sm font-medium text-foreground/80 mx-auto text-center">
        {isAboutPage ? "About Us" : activeSection}
      </span>
      
      <span ref={prevTextRef} className="fixed inset-0 text-sm font-medium text-foreground/80 mx-auto text-center">
        {isAboutPage ? "About Us" : prevActiveSection}
      </span>
    </div>;
};
export default NavbarSectionTitle;
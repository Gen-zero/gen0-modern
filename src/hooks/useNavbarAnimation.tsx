
import { useLocation } from 'react-router-dom';
import { useNavbarTextAnimation } from './useNavbarTextAnimation';
import { useNavbarExpansion } from './useNavbarExpansion';

export const useNavbarAnimation = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';
  
  // Get text animation functionality
  const { activeTextRef, prevTextRef } = useNavbarTextAnimation();
  
  // Get navbar expansion functionality
  const { navbarRef, toggleNavbarExpand, isSmallScreen } = useNavbarExpansion();

  return {
    activeTextRef,
    prevTextRef,
    navbarRef,
    toggleNavbarExpand,
    isSmallScreen,
    isAboutPage
  };
};


import { useLocation } from 'react-router-dom';
import { useNavbarTextAnimation } from './useNavbarTextAnimation';
import { useNavbarExpansion } from './useNavbarExpansion';
import { useNavbarRoute } from './useNavbarRoute';

export const useNavbarAnimation = () => {
  // Use the route hook to get isAboutPage
  const { isAboutPage } = useNavbarRoute();
  
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

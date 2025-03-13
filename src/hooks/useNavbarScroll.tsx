
import { useNavbarRoute } from './useNavbarRoute';
import { useNavbarScrollPosition } from './useNavbarScrollPosition';
import { useNavbarSectionDetection } from './useNavbarSectionDetection';

export const useNavbarScroll = () => {
  // Use the new focused hooks
  const { 
    isAboutPage, 
    isProjectsPage, 
    isPrivacyPage, 
    isTermsPage, 
    isCookiePage, 
    sections 
  } = useNavbarRoute();
  
  // Initialize scroll position tracking
  useNavbarScrollPosition();
  
  // Initialize section detection
  useNavbarSectionDetection();

  return { 
    isAboutPage, 
    isProjectsPage, 
    isPrivacyPage, 
    isTermsPage, 
    isCookiePage, 
    sections 
  };
};

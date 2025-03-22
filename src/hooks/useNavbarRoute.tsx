
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useNavbarRoute = () => {
  const location = useLocation();
  
  // Route-specific flags
  const isHomePage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';
  const isProjectsPage = location.pathname === '/projects';
  const isJoinUsPage = location.pathname === '/join-us';
  const isPrivacyPage = location.pathname === '/privacy-policy';
  const isTermsPage = location.pathname === '/terms-of-service';
  const isCookiePage = location.pathname === '/cookie-policy';
  
  // Determine if we're on a route with fixed section title (non-scrollable)
  const isFixedTitlePage = isProjectsPage || isJoinUsPage || isPrivacyPage || isTermsPage || isCookiePage;
  
  const [sections, setSections] = useState<string[]>([]);
  
  // Set sections array based on current page
  useEffect(() => {
    if (isAboutPage) {
      setSections(['Our Story', 'Mission', 'Team', 'Journey']);
    } else if (isProjectsPage) {
      setSections(['Projects']);
    } else if (isJoinUsPage) {
      setSections(['Join Us']);
    } else if (isPrivacyPage) {
      setSections(['Privacy']);
    } else if (isTermsPage) {
      setSections(['Terms']);
    } else if (isCookiePage) {
      setSections(['Cookies']);
    } else {
      // Default to home page sections
      setSections(['Home', 'Services', 'Projects', 'Contact']);
    }
  }, [location.pathname, isAboutPage, isProjectsPage, isJoinUsPage, isPrivacyPage, isTermsPage, isCookiePage]);

  return { 
    isHomePage,
    isAboutPage, 
    isProjectsPage,
    isJoinUsPage,
    isPrivacyPage, 
    isTermsPage, 
    isCookiePage, 
    isFixedTitlePage,
    sections,
    location
  };
};

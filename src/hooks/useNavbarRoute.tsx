
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { projects } from '@/data/projectsData';

export const useNavbarRoute = () => {
  const location = useLocation();
  const { id } = useParams();
  
  // Route-specific flags
  const isHomePage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';
  const isProjectsPage = location.pathname === '/projects';
  const isProjectDetailPage = location.pathname.startsWith('/projects/') && location.pathname !== '/projects';
  const isJoinUsPage = location.pathname === '/join-us';
  const isPrivacyPage = location.pathname === '/privacy-policy';
  const isTermsPage = location.pathname === '/terms-of-service';
  const isCookiePage = location.pathname === '/cookie-policy';
  const isBlogPage = location.pathname.startsWith('/blog');
  
  // Get project name if on a project detail page
  const [projectName, setProjectName] = useState('');
  
  useEffect(() => {
    if (isProjectDetailPage && id) {
      const projectId = parseInt(id);
      const project = projects.find(p => p.id === projectId);
      if (project) {
        setProjectName(project.title);
      } else {
        setProjectName('Project');
      }
    }
  }, [id, isProjectDetailPage]);
  
  // Determine if we're on a route with fixed section title (non-scrollable)
  const isFixedTitlePage = isProjectsPage || isProjectDetailPage || isJoinUsPage || isPrivacyPage || isTermsPage || isCookiePage || isBlogPage;
  
  const [sections, setSections] = useState<string[]>([]);
  
  // Set sections array based on current page
  useEffect(() => {
    if (isAboutPage) {
      setSections(['Our Story', 'Mission', 'Team', 'Journey']);
    } else if (isProjectsPage) {
      setSections(['Projects']);
    } else if (isProjectDetailPage) {
      setSections([projectName]);
    } else if (isJoinUsPage) {
      setSections(['Join Us']);
    } else if (isPrivacyPage) {
      setSections(['Privacy']);
    } else if (isTermsPage) {
      setSections(['Terms']);
    } else if (isCookiePage) {
      setSections(['Cookies']);
    } else if (isBlogPage) {
      setSections(['Blog']);
    } else {
      // Default to home page sections
      setSections(['Home', 'Services', 'Projects', 'Contact']);
    }
  }, [location.pathname, isAboutPage, isProjectsPage, isProjectDetailPage, isJoinUsPage, isPrivacyPage, isTermsPage, isCookiePage, isBlogPage, projectName]);

  return { 
    isHomePage,
    isAboutPage, 
    isProjectsPage,
    isProjectDetailPage,
    isJoinUsPage,
    isPrivacyPage, 
    isTermsPage, 
    isCookiePage,
    isBlogPage,
    isFixedTitlePage,
    sections,
    location,
    projectName
  };
};

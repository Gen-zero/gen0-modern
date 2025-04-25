
/**
 * Calculate the visibility ratio of a section in the viewport
 * @param section The DOM element representing the section
 * @returns Visibility ratio plus any priority boost
 */
export const calculateSectionVisibility = (section: Element): { 
  sectionId: string; 
  visibilityRatio: number;
} => {
  const sectionId = section.getAttribute('id') || '';
  const rect = section.getBoundingClientRect();
  const sectionTop = rect.top;
  const sectionHeight = rect.height;
  const windowHeight = window.innerHeight;
  
  let visibilityRatio = 0;
  
  // Section is considered active when its top enters the top 40% of the viewport
  if (sectionTop <= windowHeight * 0.4 && sectionTop + sectionHeight > 0) {
    // Calculate how much of the section is visible
    const visibleHeight = Math.min(windowHeight, Math.max(0, sectionTop + sectionHeight));
    visibilityRatio = visibleHeight / sectionHeight;
    
    // Add extra weight to sections near the top of the viewport
    if (sectionTop >= 0 && sectionTop <= windowHeight * 0.4) {
      visibilityRatio += 0.5; // Boost priority of sections that have just entered viewport
    }
  }
  
  return { sectionId, visibilityRatio };
};

/**
 * Format a section ID into a display name
 * @param sectionId The raw section ID from the DOM
 * @param isAboutPage Whether we're on the About page
 * @returns Formatted section name for display
 */
export const formatSectionName = (sectionId: string, isAboutPage: boolean): string => {
  if (isAboutPage) {
    // Map section ids to display names for About page
    switch(sectionId) {
      case 'team': return 'Team';
      case 'journey': return 'Journey';
      case 'mission': return 'Mission';
      case 'our-story': return 'Our Story';
      default: return sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
    }
  } else {
    // For main page, just capitalize the section id
    return sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
  }
};

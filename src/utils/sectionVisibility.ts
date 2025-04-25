
// Helper functions for calculating section visibility and formatting section names

/**
 * Calculate how visible a section is in the viewport
 */
export const calculateSectionVisibility = (section: Element) => {
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  
  // Calculate how much of the section is visible
  const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
  const sectionHeight = rect.height;
  
  // Calculate visibility ratio (0 to 1)
  const visibilityRatio = Math.max(0, visibleHeight / sectionHeight);
  
  // Get section ID
  const sectionId = section.id;
  
  return {
    sectionId,
    visibilityRatio
  };
};

/**
 * Format section ID into a readable name with special handling for About page
 */
export const formatSectionName = (sectionId: string, isAboutPage: boolean = false) => {
  // If no ID, return empty string
  if (!sectionId) return '';
  
  // Special case formatting for About page sections
  if (isAboutPage) {
    switch (sectionId) {
      case 'our-story':
        return 'Our Story';
      case 'mission':
        return 'Mission';
      case 'team':
        return 'Team';
      case 'journey':
        return 'Journey';
      default:
        break;
    }
  }
  
  // Default formatting: replace hyphens with spaces and capitalize each word
  return sectionId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

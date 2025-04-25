
/**
 * Utility functions for checking cursor interaction with different element types
 */

export const isModalElement = (element: HTMLElement): boolean => {
  return !!(
    element.closest('[role="dialog"]') ||
    element.closest('.team-member-modal')
  );
};

export const isInteractiveElement = (element: HTMLElement): boolean => {
  const tag = element.tagName.toLowerCase();
  return (
    tag === 'a' ||
    tag === 'button' ||
    !!element.closest('a') ||
    !!element.closest('button')
  );
};

export const isDropdownElement = (element: HTMLElement): boolean => {
  return !!(
    element.classList.contains('dropdown-trigger') ||
    element.closest('[data-state="open"]') ||
    element.closest('[role="menu"]') ||
    element.closest('[role="menuitem"]') ||
    element.closest('.dropdown-content') ||
    element.classList.contains('radix-dropdown-item') ||
    element.closest('[role="listbox"]') ||
    element.closest('[role="option"]') ||
    element.closest('[data-radix-popper-content-wrapper]')
  );
};

export const isTextInputElement = (element: HTMLElement): boolean => {
  const tag = element.tagName.toLowerCase();
  const isInputElement = tag === 'input';
  const isTextArea = tag === 'textarea';
  
  if (isInputElement) {
    const inputType = element.getAttribute('type');
    const textInputTypes = ['text', 'email', 'search', 'tel', 'url', 'password', null];
    return textInputTypes.includes(inputType);
  }
  
  return isTextArea || !!element.closest('input') || !!element.closest('textarea');
};

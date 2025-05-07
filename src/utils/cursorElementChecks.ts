
export const isModalElement = (element: HTMLElement): boolean => {
  return element.closest('[role="dialog"]') !== null || 
         element.closest('.modal') !== null;
};

export const isInteractiveElement = (element: HTMLElement): boolean => {
  const interactiveSelectors = [
    'a', 'button', 
    '.join-us-btn', 
    '.our-works-btn', 
    '.about-us-btn',
    'select',
    '[role="combobox"]',
    '[role="listbox"]',
    '.InquiryTypeSelector',
    '.project-selector'
  ];
  
  return interactiveSelectors.some(selector => 
    element.matches(selector) || 
    element.closest(selector) !== null
  );
};

export const isDropdownElement = (element: HTMLElement): boolean => {
  return element.closest('[role="menu"]') !== null || 
         element.closest('.dropdown') !== null ||
         element.closest('[role="combobox"]') !== null ||
         element.closest('[role="listbox"]') !== null ||
         element.closest('select') !== null ||
         element.closest('.InquiryTypeSelector') !== null ||
         element.closest('.project-selector') !== null;
};

export const isTextInputElement = (element: HTMLElement): boolean => {
  return ['input', 'textarea'].includes(element.tagName.toLowerCase()) || 
         element.getAttribute('contenteditable') === 'true';
};

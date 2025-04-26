
import { isElement } from '@/lib/utils';

export const isModalElement = (element: HTMLElement): boolean => {
  return element.closest('[role="dialog"]') !== null || 
         element.closest('.modal') !== null;
};

export const isInteractiveElement = (element: HTMLElement): boolean => {
  const interactiveSelectors = [
    'a', 'button', 
    '.join-us-btn', 
    '.our-works-btn', 
    '.about-us-btn'
  ];
  
  return interactiveSelectors.some(selector => 
    element.matches(selector) || 
    element.closest(selector) !== null
  );
};

export const isDropdownElement = (element: HTMLElement): boolean => {
  return element.closest('[role="menu"]') !== null || 
         element.closest('.dropdown') !== null;
};

export const isTextInputElement = (element: HTMLElement): boolean => {
  return ['input', 'textarea'].includes(element.tagName.toLowerCase()) || 
         element.getAttribute('contenteditable') === 'true';
};

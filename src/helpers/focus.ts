const fousableSelectors = [
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'embed',
  'iframe',
  'object',
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '*[tabindex]:not([aria-disabled])',
  '*[contenteditable]',
];

const focusableSelector = fousableSelectors.join();

const getAllFocusable = <T extends HTMLElement>(container: T) => {
  const elements = Array.from(container.querySelectorAll<T>(focusableSelector));
  elements.unshift(container);
  return elements.filter((el) => window.getComputedStyle(el).display !== 'none');
};

export { getAllFocusable };

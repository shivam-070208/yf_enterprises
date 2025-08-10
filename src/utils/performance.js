// Performance optimization utilities
export const generateImageURL = (url, options = {}) => {
  const { width, quality = 75 } = options;
  if (!url) return '';
  
  // If it's already a data URL or absolute URL, return as is
  if (url.startsWith('data:') || url.startsWith('http')) {
    return url;
  }

  // For local images, add width and quality parameters
  const params = new URLSearchParams();
  if (width) params.append('w', width.toString());
  params.append('q', quality.toString());
  
  return `${url}?${params.toString()}`;
};

export const imagePlaceholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';

export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  });
};

export const preloadImages = async (images) => {
  try {
    await Promise.all(images.map(preloadImage));
    return true;
  } catch (error) {
    console.error('Failed to preload images:', error);
    return false;
  }
};

// Debounce function for performance optimization
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

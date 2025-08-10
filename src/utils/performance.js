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
  if (!src) return Promise.reject(new Error('No image source provided'));
  
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};

export const preloadImages = async (images) => {
  if (!Array.isArray(images)) {
    console.error('preloadImages expects an array of image sources');
    return false;
  }

  try {
    const validImages = images.filter(img => img && typeof img === 'string');
    await Promise.all(validImages.map(preloadImage));
    return true;
  } catch (error) {
    console.error('Failed to preload images:', error.message);
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

// Price formatting utility
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

// Image preloader
export const preloadImages = (imageArray) => {
  imageArray.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

// Debounce function for performance
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

// Validation helpers
export const validateInviteCount = (count) => {
  return count >= 10 && count <= 1000;
};

export const validateEventDuration = (duration) => {
  return duration >= 1 && duration <= 30;
};
import React from 'react';

const AccessibilityWrapper = ({ children, skipLinksId = "main-content" }) => {
  return (
    <>
      {/* Skip to main content link for screen readers */}
      <a 
        href={`#${skipLinksId}`}
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-orange-600 text-white p-3 z-50 rounded-br-md transition-all duration-200"
        onFocus={(e) => e.target.style.position = 'fixed'}
        onBlur={(e) => e.target.style.position = 'absolute'}
      >
        Skip to main content
      </a>
      
      {/* Main content wrapper */}
      <div id={skipLinksId} role="main" aria-label="Main content">
        {children}
      </div>
    </>
  );
};

export default AccessibilityWrapper;

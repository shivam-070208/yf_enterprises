import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OptimizedImage = memo(({ 
  src, 
  alt, 
  className, 
  width, 
  height,
  effect = 'blur',
  placeholderSrc
}) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      effect={effect}
      placeholderSrc={placeholderSrc}
      loading="lazy"
      decoding="async"
    />
  );
});

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  effect: PropTypes.string,
  placeholderSrc: PropTypes.string
};

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;

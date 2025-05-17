
import { useEffect, useRef, useState } from 'react';
import { useInView as useFramerInView } from 'framer-motion';

// Custom hook for scroll animations
export const useInView = (options = { threshold: 0.1, once: true }) => {
  const ref = useRef(null);
  const isInView = useFramerInView(ref, options);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated && options.once) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, options.once]);

  return {
    ref,
    isInView: options.once ? isInView || hasAnimated : isInView,
  };
};

// Animation variants for staggered children animations
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

export const slideFromLeftVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

export const slideFromRightVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

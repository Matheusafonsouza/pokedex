import React from 'react';
import { motion } from 'framer-motion';

import { Container } from './styles';

const loadingContainer = {
  width: '10%',
  height: '10%',
  display: 'flex',
  justifyContent: 'space-around',
};

const loadingCircle = {
  display: 'block',
  width: '30px',
  height: '30px',
  backgroundColor: '#f6c729',
  borderRadius: '50%',
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: '0%',
  },
  end: {
    y: '100%',
  },
};

const loadingCircleTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: 'easeInOut',
};

const Loading: React.FC = () => {
  return (
    <Container>
      <motion.div
        style={loadingContainer}
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </motion.div>
    </Container>
  );
};

export default Loading;

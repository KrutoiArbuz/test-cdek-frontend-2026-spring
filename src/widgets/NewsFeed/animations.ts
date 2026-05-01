import type { Transition, Variants } from 'framer-motion';

const fadeTransition: Transition = { duration: 0.15 };

const cardTransition: Transition = { duration: 0.2, ease: 'easeOut' };

export const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: fadeTransition },
  exit: { opacity: 0, transition: fadeTransition },
};

export const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: cardTransition },
};

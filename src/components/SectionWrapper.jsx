import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function SectionWrapper({
  id,
  className,
  ariaLabelledby,
  children,
  noContainer,
  altBackground,
}) {
  return (
    <motion.section
      id={id}
      className={clsx(
        'section-wrapper section-spacing',
        altBackground && 'section-wrapper--alt',
        className
      )}
      aria-labelledby={ariaLabelledby}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.01, margin: '50px' }}
      variants={sectionVariants}
    >
      {noContainer ? children : <div className="section-container">{children}</div>}
    </motion.section>
  );
}

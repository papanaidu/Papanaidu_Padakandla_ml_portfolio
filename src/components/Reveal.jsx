import { motion, useReducedMotion } from "motion/react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.58,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.2, 0.7, 0.25, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

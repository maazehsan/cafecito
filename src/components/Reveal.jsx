import { motion, useReducedMotion } from 'framer-motion'

const easeOut = [0.22, 1, 0.36, 1]

// Single-element fade/slide-in, triggered once when it enters the viewport.
export function Reveal({ children, className = '', delay = 0, y = 24, once = true }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  )
}

// Wrap a group with StaggerGroup and each direct child's wrapper with
// StaggerItem to get a staggered reveal instead of everything fading in
// at once. When reduced motion is preferred, the hidden/show states are
// made identical so nothing perceptibly animates, but the same variant
// propagation still runs (no structural branching, so behavior stays
// predictable either way).
export function StaggerGroup({ children, className = '', stagger = 0.12, once = true }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-80px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : stagger } } }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', y = 20 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : y },
        show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.6, ease: easeOut } },
      }}
    >
      {children}
    </motion.div>
  )
}

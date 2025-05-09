import { motion } from 'framer-motion'

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1,  transition:{duration: 0.4} },
  exit: { opacity: 0 , transition:{duration: 0.4} },
}

export const AnimatedPageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}

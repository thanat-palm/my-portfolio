import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import * as motion from "motion/react-client"

export const Route = createFileRoute('/')({
  component: App,
})

const welcomeVariants = {
  textIn: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
  textOut: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
  textIn2: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 , delay: 1.4 },
  },
  textOut2: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 },
  },
  textIn3: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 , delay: 1.4 },
  },
  textOut3: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
  dividerIn: {
    scaleX: 1,
    transition: { type: 'spring', duration: 0.8 , delay: 0.5 },
  },
  dividerOut: {
    scaleX: 0,
    transition: { duration: 0.5 },
  },
  textAnimate: {
    y: [0 , 5 , 0],
    transition: { 
      duration: 0.3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 2, 
    },
  }
}


function App() {
  const {t} = useTranslation();
  return (
    <motion.div 
      className="w-full h-[100vh] overflow-hidden flex flex-col gap-6 justify-center items-center"
      variants={welcomeVariants}
      initial="textOut"
      animate="textIn"
      
    >
        <motion.h1 
        className='text-8xl uppercase'
        variants={welcomeVariants}
        animate="textAnimate"
        >
          {t('welcome')}
        </motion.h1>
        <div className="flex justify-center items-center w-full">
          <motion.span 
          className='divider origin-left w-full'
          variants={welcomeVariants}
          initial="dividerOut"
          animate="dividerIn"
          />
          <motion.h2 
            className='text-2xl mx-4 text-nowrap'
            variants={welcomeVariants}
            initial="textOut2"
            animate="textIn2"
            >
            {t('click_to_dashboard')}
          </motion.h2>
          <motion.span 
          className='divider origin-right w-full'
          variants={welcomeVariants}
          initial="dividerOut"
          animate="dividerIn"
          />
        </div>
        <motion.div 
          className=""
          variants={welcomeVariants}
          initial="textOut3"
          animate="textIn3"
        >
          <Link className='btn btn-soft btn-secondary btn-xl px-10 text-xl rounded-4xl' to='/dashboard'>{t('click')}</Link>
        </motion.div>
    </motion.div>
  )
}

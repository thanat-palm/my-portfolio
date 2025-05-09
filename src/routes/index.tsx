import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import * as motion from "motion/react-client"
import { welcomeVariants } from '@/constants/AnimateVariants';
import { useEffect } from 'react';

export const Route = createFileRoute('/')({
  component: App,
})


function App() {

  useEffect(() => {
    console.log('[welcome] mounted');
    return () => console.log('[welcome] unmounted');
  }, []);

  const {t} = useTranslation();
  return (
  <div className="w-full h-[100vh] overflow-hidden flex flex-col gap-6 justify-center items-center">
      <motion.div 
        className=""
        variants={welcomeVariants}
        initial="textOut"
        animate="textIn"
        >
        <motion.h1 
        className='text-9xl uppercase'
        variants={welcomeVariants}
        animate="textAnimate"
        >
          {t('welcome')}
        </motion.h1>
      </motion.div>
        <div className="flex justify-center items-center w-full">
          <motion.span 
          className='divider origin-left w-full'
          variants={welcomeVariants}
          initial="dividerOut"
          animate="dividerIn"
          />
          <motion.h2 
            className='text-4xl mx-4 text-nowrap'
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
          <Link className='btn btn-soft btn-secondary btn-xl px-10 text-3xl rounded-4xl' to='/dashboard'>{t('click')}</Link>
        </motion.div>
  </div>
  )
}

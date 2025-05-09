import { heroVariants } from '@/constants/AnimateVariants'
import { scrollToSection } from '@/utils/functions/Scrolling'
import * as motion from "motion/react-client"
import DragPointer from './DragPointer'
import { useTranslation } from 'react-i18next'

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className='hero bg-base-200 min-h-screen bg-gradient-to-b from-accent to-base-100'>
      <div className="text-center max-w-4xl px-6">
        <motion.h1 
          className="text-7xl font-extrabold mb-6"
          variants={heroVariants}
          animate="textLoop"  
        >
          {t('hero-title')}
        </motion.h1>
        <p className="text-2xl mb-6">
          {t('hero-subtitle')}
        </p>
        <motion.button 
        onClick={() =>  scrollToSection('about')} 
        className="btn btn-xl overflow-hidden bg-gradient-to-r from-primary to-secondary text-base-100 border-none rounded-full text-2xl hover:scale-105 transition-all duration-300 transform "
        variants={heroVariants}
        initial="btnOut"
        animate="btnIn"
        >
          <motion.h1
            variants={heroVariants}
            animate="textBtnLoop"
          >
            {t('scroll')}
          </motion.h1>
        </motion.button>
      </div>
      {/* <DragPointer/> */}
  </div>
  )
}

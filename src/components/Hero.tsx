import { heroVariants } from '@/constants/AnimateVariants'
import { WordSwap } from '@/utils/components/WordSwap'
import { scrollToSection } from '@/utils/functions/Scrolling'
import {  motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const heroWords = ['front-end','developer']

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className={` mx-auto px-6 flex flex-col min-h-screen rounded-b-[64px] overflow-hidden bg-[url('/bg/palm.png')] bg-cover bg-top bg-no-repeat bg-fixed relative`}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="flex flex-1 items-center z-10">

        <div className="flex-1 text-center">
          <motion.h1 className="text-5xl font-bold text-primary mb-0 ">
            Hi, I'm Palm a
          </motion.h1>
          <WordSwap words={heroWords} className='text-8xl uppercase text-primary m-0'/>
          <motion.button
            onClick={() => scrollToSection('about')}
            className="btn btn-xl overflow-hidden bg-gradient-to-r from-primary to-error via-secondary text-base-100 border-none rounded-full text-2xl z-10 mt-10"
            variants={heroVariants}
            initial="btnOut"
            animate="btnIn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
            >
            <motion.h1 variants={heroVariants} animate="textBtnLoop">
              {t('scroll')}
            </motion.h1>
          </motion.button>
        </div>
      </div>
      <div className="w-full flex justify-center lg:gap-12 my-4 flex-wrap z-10 text-lg md:text-3xl ">
        <div className="text-center">
          <h3 className="text-4xl md:text-6xl text-secondary">1+</h3>
          <p className="text-gray-600">Years Experience</p>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="text-center">
          <h3 className="text-4xl md:text-6xl text-secondary">5+</h3>
          <p className="text-gray-600">Framework</p>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="text-center">
          <h3 className="text-4xl md:text-6xl text-secondary">5+</h3>
          <p className="text-gray-600">Language</p>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="text-center">
          <h3 className="text-4xl md:text-6xl text-secondary">6+</h3>
          <p className="text-gray-600">Tools</p>
        </div>
      </div>
    </section>
  );
};

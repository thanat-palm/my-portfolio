import { heroVariants } from '@/constants/AnimateVariants'
import { WordSwap } from '@/utils/components/WordSwap'
import { scrollToSection } from '@/utils/functions/Scrolling'
import {  motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

const myImg = {
  heroImg: '/amen.png',
  bgImg: '/bg/bgmock.png',
}

const heroWords = ['front-end','developer']

export const Hero = () => {
  const imageRef = useRef(null);
  const { scrollY } = useScroll();
  const x = useTransform(scrollY , [0,600],[0,300]);
  const rotate = useTransform(scrollY, [0, 500], [0, 20]);
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className={` mx-auto px-6 flex flex-col min-h-screen rounded-b-[64px] overflow-hidden bg-[url('/bg/bgmock.png')] bg-cover bg-top bg-no-repeat bg-fixed relative`}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="flex flex-col-reverse lg:flex-row gap-10 flex-1 z-10">
        {/* left */}
        <div className="flex-1 space-y-6 self-center max-lg:text-center">
          <motion.h1 className="text-5xl font-bold text-primary mb-0 ">
            Hi, I'm Palm a
          </motion.h1>
          <WordSwap words={heroWords} className='text-8xl uppercase'/>
          <motion.button
            onClick={() => scrollToSection('about')}
            className="btn btn-xl overflow-hidden bg-gradient-to-r from-primary to-error via-secondary text-base-100 border-none rounded-full text-2xl"
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

        {/* right */}
        <div className="flex-1 flex justify-center relative">
          <motion.div
            className="flex justify-center items-center min-w-[350px] h-[80vh] overflow-hidden rounded-b-full bg-gradient-to-b from-primary to-base-100 relative"
          >
            <motion.img
              src={myImg.heroImg}
              alt="Profile"
              className="w-full h-full object-cover absolute -bottom-50 left-0 scale-150"
              ref={imageRef}
              style={{x , rotate}}
            />
          </motion.div>

        </div>
      </div>

      {/* bottom */}
      <div className="w-full flex justify-center lg:gap-12 my-10 flex-wrap z-10 text-lg md:text-3xl ">
        <div className="text-center">
          <h3 className="text-4xl md:text-6xl text-secondary">1+</h3>
          <p className="text-gray-600">Years Experience</p>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="text-center">
          <h3 className="text-4xl md:text-6xl text-secondary">200+</h3>
          <p className="text-gray-600">Projects Completed</p>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="text-center">
          <h3 className="text-4xl md:text-6xl text-secondary">98%</h3>
          <p className="text-gray-600">Client Satisfaction</p>
        </div>
      </div>
    </section>
  );
};

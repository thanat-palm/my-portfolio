import { bannerLoop, heroVariants } from '@/constants/AnimateVariants'
import { scrollToSection } from '@/utils/functions/Scrolling'
import { AnimatePresence, useCycle } from 'framer-motion'
import * as motion from "motion/react-client"
import { useTranslation } from 'react-i18next'

export const Hero = () => {
    const [showFirst, cycleShowFirst] = useCycle(true, false);

    const handleAnimationComplete = () => {
        setTimeout(() => {
            cycleShowFirst();
        }, 2000);
    }

  const { t } = useTranslation();
  return (
    <section id="hero" className="w-full mx-auto px-6 flex flex-col min-h-screen bg-[url('/public/palm.png')] bg-cover bg-top bg-no-repeat">
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="flex flex-col-reverse lg:flex-row gap-10 flex-1 z-10">
        {/* left */}
        <div className="flex-1 space-y-6 self-center">
            <motion.h1
              className="text-5xl font-bold text-primary mb-0"
              >Hi, I'm Palm
            </motion.h1>
            <AnimatePresence mode='wait'>
            {showFirst ? (
              <motion.h1
              variants={bannerLoop}
              initial="hide"
              animate="visible"
              exit="hide"
              onAnimationComplete={handleAnimationComplete}
              key="first"
              className="text-8xl uppercase text-primary"
              >front-end
            </motion.h1>
            ):(
              <motion.h1
              variants={bannerLoop}
              initial="hide"
              animate="visible"
              exit="hide"
              onAnimationComplete={handleAnimationComplete}
              key="second"
              className="text-8xl uppercase text-primary"
              >developer
            </motion.h1>
            )}
            </AnimatePresence>
            <motion.button 
            onClick={() => scrollToSection('about')} 
            className="btn btn-xl overflow-hidden bg-gradient-to-r from-primary to-error via-secondary text-base-100 border-none rounded-full text-2xl"
            variants={heroVariants}
            initial="btnOut"
            animate="btnIn"
            whileHover={{scale: 1.1}}
            whileTap={{scale: 1.2}}
            >
              <div className="">
                <motion.h1
                  variants={heroVariants}
                  animate="textBtnLoop"
                  >
                  {t('scroll')}
                </motion.h1>
              </div>
            </motion.button>      
          </div>
          {/* right */}
          <div className="flex-1 flex justify-center">
            <motion.div 
                className="flex justify-center items-center min-w-[500px] h-[80vh] overflow-hidden rounded-b-full bg-gradient-to-b from-accent to-base-100 relative"
                >
              <img
                src="/public/palm2.png"
                alt="Profile"
                className="w-full h-full object-cover absolute -bottom-30 left-0"
                />
            </motion.div>
          </div>
      </div>

      {/* bottom */}
      <div className="w-full flex justify-center gap-12 my-10 flex-wrap z-10">
        <div className="text-center">
          <h3 className="text-4xl font-bold text-primary">5+</h3>
          <p className="text-gray-600">Years Experience</p>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="text-center">
          <h3 className="text-4xl font-bold text-primary">200+</h3>
          <p className="text-gray-600">Projects Completed</p>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="text-center">
          <h3 className="text-4xl font-bold text-primary">98%</h3>
          <p className="text-gray-600">Client Satisfaction</p>
        </div>
      </div>
  </section>
  )
}
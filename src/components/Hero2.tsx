import { useCallback, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";
import { scrollToSection } from "@/utils/functions/Scrolling";
import { heroVariants } from "@/constants/AnimateVariants";
import { useTranslation } from "react-i18next";

export default function Hero() {
    const {t} = useTranslation();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadLinksPreset(engine);
  }, []);

  const heroRef = useRef(null);
  const { scrollY } = useScroll();

  // Animate whole section
  const scale = useSpring(useTransform(scrollY, [0, 300], [1, 0.8]), {
    stiffness: 100,
    damping: 20,
  });
  const translateY = useSpring(useTransform(scrollY, [0, 300], [0, -100]), {
    stiffness: 100,
    damping: 20,
  });
  const opacity = useSpring(useTransform(scrollY, [0, 300], [1, 0.6]), {
    stiffness: 100,
    damping: 20,
  });

  return (
    <motion.div
      ref={heroRef}
      style={{ scale, y: translateY, opacity }}
      className="relative min-h-screen overflow-hidden text-base-content flex items-center justify-center px-6 sm:px-12 md:px-20 bg-gradient-to-b from-accent to-base-100"
    >
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          preset: "links",
          background: { color: "transparent" },
          particles: {
            color: { value: "#ffffff" },
            links: {
              enable: true,
              color: "#ffffff",
              distance: 120,
              opacity: 0.4,
              width: 1.2,
            },
            move: { enable: true, speed: 1.5 },
            number: { value: 60, density: { enable: true, area: 800 } },
            opacity: { value: 0.6 },
            shape: { type: "circle" },
            size: { value: 3 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Floating Effects */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute top-10 left-10 w-60 h-60 md:w-80 md:h-80 bg-white opacity-10 rounded-full mix-blend-overlay"
      />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-10 right-10 w-72 h-72 md:w-[28rem] md:h-[28rem] bg-white opacity-10 rounded-full mix-blend-overlay"
      />

      {/* Hero Content */}
      <div className="z-10 text-center max-w-6xl px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-8">
          {t('hero-title')}
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-base-content mb-10 font-light">
          {t('hero-subtitle')}
        </p>

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
    </motion.div>
  );
}

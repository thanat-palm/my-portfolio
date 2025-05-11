import { aboutVariants, childUpVariants } from "@/constants/AnimateVariants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
    const {t} = useTranslation();
  return (
    <section id="about" className="flex items-center justify-center min-h-screen py-28 px-6 sm:px-12 md:px-28 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center">
            <motion.div 
                className="flex justify-center items-center relative size-80 z-0 shadow-2xl rounded-full"
                variants={aboutVariants}
                initial="imageOut"
                whileInView="imageIn"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 1.2}}
                >
            <img
                src="https://printler.com/media/photo/176171-1.jpg"
                alt="Profile"
                className="size-72 object-cover rounded-full bg-white"
                />
            <motion.div 
                className="size-80 rounded-full shadow-lg bg-gradient-to-r from-primary via-accent to-secondary absolute -z-10"
                variants={aboutVariants}
                animate="imageLoop"
                />
            </motion.div>
        </div>

        {/* About Text */}
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-10  leading-tight">
            {t('about')}
          </h2>

          <p className="text-2xl sm:text-3xl  mb-10 leading-relaxed font-light">
            {t('about-subtitle')}
          </p>

        <motion.ul 
          className="flex flex-wrap gap-3 mt-4"
          variants={aboutVariants}
          initial="childOut"
          whileInView="childIn"
        >
          {['Vue.js', 'React', 'Tailwind CSS', 'Node.js', 'UX/UI', 'MySQL'].map((skill) => (
            <motion.li 
              key={skill} 
              className=" badge badge-lg sm:badge-xl text-lg sm:text-2xl badge-secondary hover:cursor-pointer"
              variants={childUpVariants}
              whileHover={{scale: 1.05}}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

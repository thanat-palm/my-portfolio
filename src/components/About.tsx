
import { aboutVariants, childUpVariants } from '@/constants/AnimateVariants'
import {motion} from 'framer-motion'

export const About = () => {
  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-10 bg-base-100 min-h-screen">
      {/* Left Content */} 
      <div className="flex-1 space-y-6">
        <motion.h1 
          className="text-6xl font-bold text-primary"
          variants={aboutVariants}
          initial="titleOut"
          whileInView="titleIn"
          >Hi, I'm Palm</motion.h1>
        <motion.p 
          className="text-base-content text-2xl leading-relaxed"
          variants={aboutVariants}
          initial="subtitleOut"
          whileInView="subtitleIn"
        >
          I'm a passionate full-stack developer specializing in Vue.js, React, and Node.js. I love crafting intuitive user experiences and building efficient web systems.
        </motion.p>
        <motion.ul 
          className="flex flex-wrap gap-3 mt-4"
          variants={aboutVariants}
          initial="childOut"
          whileInView="childIn"
        >
          {['Vue.js', 'React', 'Tailwind CSS', 'Node.js', 'UX/UI', 'MySQL'].map((skill) => (
            <motion.li 
              key={skill} 
              className=" badge badge-lg text-2xl badge-secondary hover:cursor-pointer"
              variants={childUpVariants}
              whileHover={{scale: 1.05}}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Profile Image */}
      <div className="flex-1 flex justify-center">
        <motion.div 
            className="flex justify-center items-center relative size-70 z-0"
            variants={aboutVariants}
            initial="imageOut"
            whileInView="imageIn"
            whileHover={{scale: 1.1}}
            whileTap={{scale: 1.2}}
            >
          <img
            src="https://printler.com/media/photo/176171-1.jpg"
            alt="Profile"
            className="size-64 object-cover rounded-full bg-white"
          />
          <motion.div 
            className="size-70 rounded-full shadow-lg bg-gradient-to-r from-primary via-accent to-secondary absolute -z-10"
            variants={aboutVariants}
            animate="imageLoop"
          />
        </motion.div>
      </div>
    </section>
  )
}

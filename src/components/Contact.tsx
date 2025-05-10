// "use-client"

import { FaExternalLinkAlt, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa"
import ContactForm from "./ContactForm"
import * as motion from "motion/react-client"
import { HiOutlineMail } from "react-icons/hi";
import { childLeftVariants, childUpVariants, contactVariants } from "@/constants/AnimateVariants"

const contactlist = [
  {
    platform: 'Email',
    value: 'thanat061143@gmail.com',
    link: '',
    icon: <HiOutlineMail />,
  },
  {
    platform: 'Facebook',
    value: 'Thanat Roongjakrwal',
    link: 'https://www.facebook.com/thanat.roongjakrwal',
    icon: <FaFacebook />,
  },
  {
    platform: 'Instagram',
    value: 'palm_tnrw',
    link: 'https://www.instagram.com/palm_tnrw',
    icon: <FaInstagram />,
  },
  {
    platform: 'Github',
    value: 'thanat roongjakrwal',
    link: 'https://github.com/thanat-palm',
    icon: <FaGithub />,
  },
]

export default function Contact() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20" id="contact">
      {/* Header */}
      <motion.div 
        className="text-center mb-12"
        variants={contactVariants}
        initial="childOut"
        whileInView="childIn"
      >
        <motion.h1 
          className="text-6xl font-bold text-primary"
          variants={childUpVariants}  
        >Let's Get In Touch</motion.h1>
        <motion.p 
          className="text-base-content mt-2 text-2xl"
          variants={childUpVariants}  
        >
          Have a question or want to work together? Fill out the form below or reach me directly.
        </motion.p>
      </motion.div>

      {/* Grid: Form + Info */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.div 
          className=""
          variants={contactVariants}
          initial="formOut"
          whileInView="formIn"
        >
          <ContactForm/>
        </motion.div>

        {/* Contact Info */}
        <div className="space-y-4 text-2xl">
              <motion.ul 
                className="list text-2xl"
                variants={contactVariants}
                initial="childOut"
                whileInView="childIn"
              >
               {contactlist.map((list) => (
                 <motion.li 
                  className="list-row flex" key={list.platform}
                  variants={childLeftVariants}
                  >
                   <div className="text-2xl flex-1">
                     {list.icon}
                   </div>
                   <div className="flex-6 justify-center ">
                      <a className=" text-nowrap">
                        {list.value}
                      </a>
                   </div>
                   <div className="flex-1 justify-self-end">
                    {list.link && (
                      <a href={list.link} className=" link link-primary">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                   </div>
                 </motion.li>
               ))}
             </motion.ul>
        </div>
      </div>
    </section>
  )
}

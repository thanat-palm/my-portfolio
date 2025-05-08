"use-client"

import ContactForm from "./ContactForm"
import { FaExternalLinkAlt } from "react-icons/fa"
import * as motion from "motion/react-client"

const contactlist = [
  {
    platform: 'Email',
    value: 'thanat061143@gmail.com',
    link: '',
    icon: '',
  },
  {
    platform: 'Facebook',
    value: 'Thanat Roongjakrwal',
    link: 'https://www.facebook.com/thanat.roongjakrwal',
    icon: '',
  },
  {
    platform: 'Instagram',
    value: 'palm_tnrw',
    link: 'https://www.instagram.com/palm_tnrw',
    icon: '',
  },
  {
    platform: 'Github',
    value: 'thanat roongjakrwal',
    link: 'https://github.com/thanat-palm',
    icon:'',
  },
]

const contactVariants = {
  contactIn: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 , delay: 0.4 },
  },
  contactOut: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.2 },
  },
  formIn: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 , delay: 0.4 },
  },
  formOut: {
    opacity: 0,
    x: 20,
    transition: { duration: 0.2 },
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

export const Contact = () => {
  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center max-lg:flex-col gap-4 mb-4">
        <motion.div 
          className="card p-8 h-fit"
          variants={contactVariants}
          initial="contactOut"
          whileInView="contactIn"
        >
          <div className="card-title self-center">
            <motion.h1 
              className="text-6xl uppercase"
              variants={contactVariants}
              animate="textAnimate"
            >Contact</motion.h1>
          </div>
          <div className="divider "></div>
          <div className="card-body">
            <ul className="list text-xl">
              {contactlist.map((list) => (
                <li className="list-row grid-cols-5" key={list.platform}>
                  <div className="badge badge-primary badge-outline col-span-2 text-xl badge-lg">
                    {list.platform}
                  </div>
                    <a className=" col-span-2 text-nowrap">
                      {list.value}
                    </a>
                  {list.link && (
                    <a href={list.link} className="col-span-1 justify-self-end link link-primary">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        <motion.div 
          className="card rounded-4xl shadow-xl p-8 w-[600px] h-fit"
          variants={contactVariants}
          initial="formOut"
          whileInView="formIn"
        >
          <div className="card-title w-full justify-center my-4">
            <h1 className="text-6xl uppercase">Contact Form</h1>
          </div>
          <div className="card-body">
            <ContactForm/>
          </div>
        </motion.div>
    </div>
  )
}

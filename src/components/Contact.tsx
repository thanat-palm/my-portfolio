"use client"

import { FaExternalLinkAlt, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa"
import ContactForm from "./ContactForm"
import * as motion from "motion/react-client"
import { HiOutlineMail } from "react-icons/hi"
import { childLeftVariants, childUpVariants, contactVariants } from "@/constants/AnimateVariants"
import { useTranslation } from "react-i18next"

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
  const { t } = useTranslation()

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 py-28" id="contact">
      {/* Header */}
      <motion.div
        className="text-center mb-20"
        variants={contactVariants}
        initial="childOut"
        whileInView="childIn"
      >
        <motion.h1
          className="text-7xl sm:text-8xl font-extrabold text-primary"
          variants={childUpVariants}
        >
          {t('contact-title')}
        </motion.h1>
        <motion.p
          className="mt-4 text-3xl text-base-content font-light"
          variants={childUpVariants}
        >
          {t('contact-subtitle')}
        </motion.p>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Contact Form */}
        <motion.div
          variants={contactVariants}
          initial="formOut"
          whileInView="formIn"
        >
          <ContactForm />
        </motion.div>

        {/* Contact Info */}
        <motion.ul
          className="space-y-6 text-3xl"
          variants={contactVariants}
          initial="childOut"
          whileInView="childIn"
        >
          {contactlist.map((list) => (
            <motion.li
              key={list.platform}
              className="flex items-center gap-6"
              variants={childLeftVariants}
            >
              <div className="text-4xl text-primary">{list.icon}</div>
              <div className="flex-1 text-nowrap">{list.value}</div>
              {list.link && (
                <a
                  href={list.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-primary hover:scale-110 transition-transform"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

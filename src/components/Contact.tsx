// "use-client"

import { FaExternalLinkAlt } from "react-icons/fa"
import ContactForm from "./ContactForm"
import * as motion from "motion/react-client"
import { childLeftVariants, childUpVariants, contactVariants } from "@/constants/AnimateVariants"

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


// export const Contact = () => {
//   return (
//     <div className="w-full max-w-6xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-10 min-h-screen">
//         <motion.div 
//           className="card glass rounded-4xl shadow-xl p-8 h-fit"
//           variants={contactVariants}
//           initial="contactOut"
//           whileInView="contactIn"
//         >
//           <div className="card-title self-center">
//             <motion.h1 
//               className="text-6xl uppercase"
//               variants={contactVariants}
//               animate="textAnimate"
//             >Contact</motion.h1>
//           </div>
//           <div className="divider "></div>
//           <div className="card-body">
//             <ul className="list text-2xl">
//               {contactlist.map((list) => (
//                 <li className="list-row grid-cols-5" key={list.platform}>
//                   <div className="badge badge-primary badge-outline col-span-2 text-2xl badge-xl">
//                     {list.platform}
//                   </div>
//                     <a className=" col-span-2 text-nowrap">
//                       {list.value}
//                     </a>
//                   {list.link && (
//                     <a href={list.link} className="col-span-1 justify-self-end link link-primary">
//                       <FaExternalLinkAlt />
//                     </a>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </motion.div>
//         <motion.div 
//           className="card p-8 w-[600px] h-fit"
//           variants={contactVariants}
//           initial="formOut"
//           whileInView="formIn"
//         >
//           <div className="card-title w-full justify-center my-4">
//             <h1 className="text-6xl uppercase">Contact Form</h1>
//           </div>
//           <div className="card-body">
//             <ContactForm/>
//           </div>
//         </motion.div>
//     </div>
//   )
// }

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
                   <div className="badge badge-primary badge-outline text-2xl badge-xl flex-1">
                     {list.platform}
                   </div>
                   <a className="flex-2 text-nowrap">
                     {list.value}
                   </a>
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

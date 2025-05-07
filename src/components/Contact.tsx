"use-client"

import { a } from "framer-motion/client"
import ContactForm from "./ContactForm"
import { FaExternalLinkAlt } from "react-icons/fa"

const contactlist = [
  {
    platform: 'email',
    value: 'thanat061143@gmail.com',
    link: '',
    icon: '',
  },
  {
    platform: 'facebook',
    value: 'Thanat Roongjakrwal',
    link: 'https://www.facebook.com/thanat.roongjakrwal',
    icon: '',
  },
  {
    platform: 'instagram',
    value: 'palm_tnrw',
    link: 'https://www.instagram.com/palm_tnrw',
    icon: '',
  },
  {
    platform: 'github',
    value: 'thanat roongjakrwal',
    link: 'https://github.com/thanat-palm',
    icon:'',
  },
  
]

export const Contact = () => {
  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center max-md:flex-col-reverse gap-4 mb-4">
        <div className="card p-8 h-fit">
          <div className="card-title self-center">
            <h1 className="text-4xl uppercase">Contact</h1>
          </div>
          <div className="divider "></div>
          <div className="card-body">
            <ul className="list">
              {contactlist.map((list) => (
                <li className="list-row grid-cols-5" key={list.platform}>
                  <div className="badge badge-primary badge-md badge-outline col-span-2">
                    {list.platform}
                  </div>
                    <a className=" col-span-2">
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
        </div>
        <div className="card shadow-xl bg-base-300 p-8 h-fit">
          <div className="card-title w-full justify-center my-4">
            <h1 className="text-4xl uppercase">Contact Form</h1>
          </div>
          <div className="card-body">
            <ContactForm/>
          </div>
        </div>
    </div>
  )
}


'use client'
import { GenericGridService } from '@/utils/components/GenericGridService';
import { MagicCard } from '@/utils/components/MagicCard';
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { FolderCard } from './SkillCard';
import { SkillModal } from './SkillModal';
import myData from "@/data/data.json"
import { useState } from 'react';
import { FaLink } from "react-icons/fa";
import { PiNotepadBold } from "react-icons/pi";

export const About = () => {
  const [selected, setSelected] = useState<null | "language" | "framework" | "tool">(null);
  
  const {t} = useTranslation();
  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 py-20 gap-10 bg-base-100 min-h-screen">
      <h1 className='text-8xl text-center mb-4 text-primary uppercase'>{t('about-title')}</h1>
      <div className="flex flex-col gap-4 lg:flex-row">
        {/* left */}
        <div className="flex-2 relative">
          <GenericGridService delay={0.3} >
            <div className="card">
              <div className="card-body">
                <div className="card-title text-6xl">
                  My name is Palm
                </div>
                <MagicCard className='rounded-box border-2 border-base-content/10'>
                  <div className="card">
                    <div className="card-body text-2xl">
                      Aspiring to strengthen my coding skills and become proficient in web and application development. My goal is to build and develop my own applications in the future. I am eager to gain hands-on experience in both frontend and backend development and to contribute meaningfully while learning and growing in the tech industry.
                    </div>
                  </div>
                </MagicCard>
                <div className="card-actions">
                  <a href="/public/pdf/myresume.pdf" target="_blank" rel="noopener noreferrer" className=' btn btn-soft btn-primary btn-lg text-xl transition-all duration-300 rounded-box '><PiNotepadBold /> My Resume</a>
                </div>
              </div>
            </div>
            <div className="divider w-9/10 justify-self-center"></div>
            <div className="card-body flex flex-col items-center justify-center">
                  <h1 className="text-5xl w-full mb-6">Skills</h1>
            
                  <div className="flex flex-col sm:flex-row gap-6">
                    <FolderCard
                    title="Language"
                    onClick={() => setSelected("language")}
                    isActive={selected === "language"}
                    />
                    <FolderCard
                    title="Framework"
                    onClick={() => setSelected("framework")}
                    isActive={selected === "framework"}
                    />
                    <FolderCard
                    title="Tool"
                    onClick={() => setSelected("tool")}
                    isActive={selected === "tool"}
                    />      
                  </div>
            
                  <SkillModal
                    isOpen={selected !== null}
                    onClose={() => setSelected(null)}
                    title={`${selected}`}
                    skills={selected ? myData.skills : []}

                  />
                </div>
          </GenericGridService>
        </div>
        {/* right */}
        <div className="flex-1 flex gap-4 flex-wrap">
          {myData.working.map((work , index) => (
            <GenericGridService delay={(4+index)*0.1} className="">
            <div className="card z-10 group min-h-60">
              <div className="card-body">
                <div className=" card-title text-3xl">
                  <h1>{work.title}</h1>
                </div>
                <div className="text-xl">
                  <p>{work.subtitle} <span>({work.year})</span></p>
                </div>
                <div className="text-xl">
                  <p>{work.description}</p>
                </div>
              </div>
            </div>
            <img src={work.logo} alt={work.title} className='rounded-full size-60 opacity-10 absolute -bottom-10 -right-10 group-hover:scale-120 transition-all duration-400'/>
            <a href={work.link} className='btn btn-circle btn-info text-base-content absolute bottom-2 right-2 hover:cursor-pointer z-10 tooltip ' data-tip="link"><FaLink /></a>
          </GenericGridService >
          ))}
        </div>
      </div>
    </section>
  )
}

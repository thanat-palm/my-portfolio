
import { GenericGridService } from '@/utils/components/GenericGridService';
import { useTranslation } from 'react-i18next'
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";

export const About = () => {
  const {t} = useTranslation();
  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 py-20 gap-10 bg-base-100 min-h-screen">
      <h1 className='text-8xl text-center mb-4 text-primary'>{t('about')}</h1>
      <div className="flex flex-col-reverse gap-4 lg:flex-row">
        <div className="flex-1">
          <GenericGridService delay={0.5} className="h-full text-base-content ">
            <div className="card">
              <div className="card-body">
                <div className="text-6xl">
                  My name is Palm
                </div>
              </div>
            </div>
            <img src="" alt="" />
          </GenericGridService>
        </div>
        <div className="flex-1 flex gap-4 flex-wrap">
          <GenericGridService delay={0.5} className="h-60 text-base-content ">
            <div className="card z-10">
              <div className="card-body">
                <div className=" card-title">
                  <h1>GitLab</h1>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, incidunt assumenda? Beatae unde officiis natus quos, consequatur quas suscipit animi!</p>
              </div>
            </div>
              <FaGithub  className='size-60 text-secondary/10 absolute top-15 -right-15'/>
          </GenericGridService >
          <GenericGridService delay={0.5} className="h-60 ">
            <div className="card z-10">
              <div className="card-body">
                <div className="card-title">
                  <h1>Smart Block Tech</h1>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusamus quibusdam distinctio totam aspernatur praesentium maxime minus rerum deleniti veniam cumque tempora veritatis nulla, odit corrupti vel rem ullam ipsam.</p>
              </div>
            </div>
            <img src="/sbt.jpg" alt="sbt" className='rounded-full opacity-10 absolute top-15 -right-10'/>
          </GenericGridService>
          <GenericGridService delay={0.5} className="h-60 ">
            <div className="">
              <div className="card-body">
                <div className="card-title">
                  <h1>Gitlab</h1>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, voluptatum.</p>
              </div>
            </div>
            <FaGitlab  className='size-60 text-secondary/10 absolute top-15 -right-10'/>
          </GenericGridService>
        </div>
      </div>
    </section>
  )
}

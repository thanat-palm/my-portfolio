
import { GenericGridService } from '@/utils/components/GenericGridService';
import { MagicCard } from '@/utils/components/MagicCard';
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import data from '@/data/data.json'

const skillist = data.skills;

export const About = () => {
  const {t} = useTranslation();
  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 py-20 gap-10 bg-base-100 min-h-screen">
      <h1 className='text-8xl text-center mb-4 text-primary uppercase'>{t('about-title')}</h1>
      <div className="flex flex-col gap-4 lg:flex-row">
        {/* left */}
        <div className="flex-2 relative">
          <GenericGridService delay={0.3} className="min-h-[700px]">
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
                <div className="">
                  <ul className=' mt-4'>
                    { skillist.map((list , index) => (
                      <li key={list.name} className='text-xl'>
                        <h1>
                          {list.name}
                        </h1>
                        <div className={index === skillist.length - 1 ? '' : 'divider m-0' }></div>
                      </li>
                    ))
                    }
                  </ul>
                </div>
                <div className="card-actions">
                  <button className=' btn btn-soft btn-lg text-xl transition-all duration-300 rounded-full'>resume</button>
                </div>
              </div>
            </div>
              <motion.img 
                src="/amen.png" 
                alt="avatar" 
                className='absolute bottom-0 right-0 w-md translate-y-2/5 translate-x-1/4'
                initial={{scale:1 ,y:0}}
                whileHover={{scale:1.1 , y:-50}}
              />
          </GenericGridService>
        </div>
        {/* right */}
        <div className="flex-1 flex gap-4 flex-wrap">
          <GenericGridService delay={0.4} className="h-60 ">
            <div className="card z-10 group">
              <div className="card-body">
                <div className=" card-title text-3xl">
                  <h1>Provincial Electricity Authority of Thailand</h1>
                </div>
                <div className="text-lg">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque neque aliquid laudantium rerum saepe id, quod optio adipisci necessitatibus! Consectetur.</p>
                </div>
              </div>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Logo_of_the_Provincial_Electricity_Authority_of_Thailand.svg" alt="sbt" className='rounded-full size-60 opacity-10 absolute top-15 -right-10 group-hover:scale-120 transition-all duration-400'/>
          </GenericGridService >
          <GenericGridService delay={0.5} className="h-60 ">
            <div className="card z-10 group">
              <div className="card-body">
                <div className="card-title text-3xl">
                  <h1>King Mongkut's Institute of Technology Ladkrabang</h1>
                </div>
                <div className="text-lg">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod error qui inventore repellendus magni excepturi ut maiores quia quas harum.</p>
                </div>
              </div>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/th/thumb/e/e4/Seal_of_King_Mongkut%27s_Institute_of_Technology_Ladkrabang.svg/800px-Seal_of_King_Mongkut%27s_Institute_of_Technology_Ladkrabang.svg.png" alt="sbt" className='rounded-full size-60 opacity-10 absolute top-15 -right-10 group-hover:scale-120 transition-all duration-400'/>
          </GenericGridService>
          <GenericGridService delay={0.6} className="h-60 ">
            <div className="card z-10 group">
              <div className="card-body">
                <div className="card-title text-3xl">
                  <h1>Smart Block Tech co. ltd</h1>
                </div>
                <div className="text-lg">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, nisi!</p>
                </div>
              </div>
            </div>
            <img src="https://scontent.fbkk35-1.fna.fbcdn.net/v/t39.30808-6/440847962_740216821658484_715239254535156610_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=POfcY4aITiUQ7kNvwEgPOdG&_nc_oc=AdnkRvI9XG5OPhpTr3LSlq2xNAO5UQbNRxX5rmcKSp-umAPnr_zhO4JaEqLaHzlimgoVXMyGlyFiOgKbuhgYOIM0&_nc_zt=23&_nc_ht=scontent.fbkk35-1.fna&_nc_gid=HSRGEFhFaV4nf8YTrM5-YQ&oh=00_AfIQ-iOHv7_jTVHZzi-9ekvGnD5drRTAnrlhvSXHkpMATQ&oe=683318B7" alt="sbt" className='rounded-full size-60 opacity-10 absolute top-15 -right-10 group-hover:scale-120 transition-all duration-400'/>
          </GenericGridService>
        </div>
      </div>
    </section>
  )
}

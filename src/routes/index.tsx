import { createFileRoute } from '@tanstack/react-router'
import * as motion from "motion/react-client"
import { navVariants } from '@/constants/AnimateVariants';
import Sidebar from '@/layouts/Sidebar';
import { Navbar } from '@/layouts/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Portfolio } from '@/components/Portfolio';
import Contact from '@/components/Contact';
import { Footer } from '@/layouts/Footer';

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  
  return (
    <div className=''>
      <Sidebar className="fixed z-30 h-full lg:hidden"/>
      <motion.div 
        className='flex left-0 justify-center w-full fixed top-2 z-30' 
        variants={navVariants} 
        initial="closed"
        animate="open"
        exit="closed"
      >
        <Navbar className='items-center overflow-hidden p-2 bg-base-100/40 backdrop-blur-3xl rounded-full border-2 border-primary max-lg:hidden'/>
      </motion.div>
      <Hero/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer />
    </div>
  )
}
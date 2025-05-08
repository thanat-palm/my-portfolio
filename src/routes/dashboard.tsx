
// routes/dashboard/__layout.tsx
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Footer } from '@/layouts/Footer'
import { Navbar } from '@/layouts/Navbar'
import * as motion from "motion/react-client"
import Sidebar from '@/layouts/Sidebar'

export const Route = createFileRoute('/dashboard')({
  component: DashboardLayout,
})

const navVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 , delay: 0.3 },
  },
  closed: {
    opacity: 0,
    y: -20,
  },
}



function DashboardLayout() {
  return (
    <div className=''>
      <Sidebar className="fixed z-30 h-full md:hidden"/>
      <motion.div 
        className='flex left-2 lg:left-0 lg:justify-center w-full fixed top-2 z-30' 
        variants={navVariants} 
        initial="closed"
        animate="open"
        exit="closed"
      >
        <Navbar className='items-center overflow-hidden p-2  bg-base-300 rounded-full border-2 border-primary max-md:hidden'/>
      </motion.div>
      <Outlet />
      <Footer />
    </div>
  )
}

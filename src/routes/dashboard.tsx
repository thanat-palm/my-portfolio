
// routes/dashboard/__layout.tsx
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Footer } from '@/layouts/Footer'
import { Navbar } from '@/layouts/Navbar'
import * as motion from "motion/react-client"
import Sidebar from '@/layouts/Sidebar'
import { navVariants } from '@/constants/AnimateVariants'

export const Route = createFileRoute('/dashboard')({
  component: DashboardLayout,
})

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
        <Navbar className='items-center overflow-hidden p-2 bg-transparent backdrop-blur-lg rounded-full border-2 border-primary max-md:hidden'/>
      </motion.div>
      <Outlet />
      <Footer />
    </div>
  )
}


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
        className='flex left-0 justify-center w-full fixed top-2 z-30' 
        variants={navVariants} 
        initial="closed"
        animate="open"
        exit="closed"
      >
        <Navbar className='items-center overflow-hidden p-2 bg-base-100/40 backdrop-blur-3xl rounded-full border-2 border-primary max-lg:hidden'/>
      </motion.div>
      <Outlet />
      <Footer />
    </div>
  )
}

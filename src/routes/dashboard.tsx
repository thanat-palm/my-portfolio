// routes/dashboard/__layout.tsx
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Footer } from '@/layouts/Footer'
import { Navbar } from '@/layouts/Navbar'
import Sidebar from '@/layouts/Sidebar'

export const Route = createFileRoute('/dashboard')({
  component: DashboardLayout,
})

function DashboardLayout() {
  return (
    <div className=''>
      <Sidebar className="fixed z-30 h-full md:hidden"/>
      <Navbar className='navbar max-w-screen-md justify-center gap-6 fixed top-2 left-1/2 -translate-x-1/2 z-30 bg-base-300 rounded-xl max-md:hidden'/>
      <Outlet />
      <Footer />
    </div>
  )
}

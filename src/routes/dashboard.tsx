// routes/dashboard/__layout.tsx
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Footer } from '@/layouts/Footer'
import { Navbar } from '@/layouts/Navbar'

export const Route = createFileRoute('/dashboard')({
  component: DashboardLayout,
})

function DashboardLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

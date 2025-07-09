import { About } from '@/components/About'
import Contact from '@/components/Contact'
import { Hero } from '@/components/Hero'
import { Portfolio } from '@/components/Portfolio'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='relative'>
      <Hero/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

import { About } from '@/components/About'
import About2 from '@/components/About2'
import Contact from '@/components/Contact'
import { Hero } from '@/components/Hero'
import Hero2 from '@/components/Hero2'
import { Portfolio } from '@/components/Portfolio'
import Test from '@/components/Test'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
    useEffect(() => {
      console.log('[dashboard] mounted');
      return () => console.log('[dashboard] unmounted');
    }, []);
  return (
    <div className='relative'>
    {/* <Hero2/> */}
    <Test />
    <About2/>
    <Portfolio/>
    <Contact/>
    </div>
  );
}

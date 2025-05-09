import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Hero } from '@/components/Hero'
import { Portfolio } from '@/components/Portfolio'
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
    <div className=''>
    <section className='h-[100vh] w-full text-center' id="hero"><Hero/></section>
    <section className='h-[100vh] w-full text-center' id="about"><About/></section>
    <section className='h-[100vh] w-full text-center' id="portfolio"><Portfolio/></section>
    <section className='w-full' id="contact"><Contact/></section>
    </div>
  );
}

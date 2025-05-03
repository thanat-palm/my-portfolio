import { About } from '@/components/About'
import { Contact } from '@/components/Contract'
import { Hero } from '@/components/Hero'
import { Portfolio } from '@/components/Portfolio'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='container'>
    <section className='h-[100vh] w-full text-center' id="hero"><Hero/></section>
    <section className='h-[100vh] w-full text-center' id="about"><About/></section>
    <section className='h-[100vh] w-full text-center' id="portfolio"><Portfolio/></section>
    <section className='h-[100vh] w-full text-center' id="contact"><Contact/></section>
  </div>
}

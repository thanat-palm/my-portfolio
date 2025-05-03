import { SwitchMenus } from '@/utils/components/SwitchMenus'
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const {t} = useTranslation();

  const scrollToSection = (sectionId:string) => {
    const element = document.getElementById(sectionId)
    if(element) {
      element.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <nav className='navbar w-fit px-10 mx-auto my-2 bg-[#00000054] justify-center rounded-2xl gap-10 sticky top-2'>
        <Link to="/" className='btn btn-soft btn-secondary py-2 px-4 rounded-md'>{t('welcome')}</Link>
        <div className="flex gap-4">
          <button onClick={() => scrollToSection('hero')} className='btn btn-soft btn-primary py-2 px-4 rounded-md '>{t('home')}</button>
          <button onClick={() => scrollToSection('about')} className='btn btn-soft btn-primary py-2 px-4 rounded-md ' >{t('about')}</button>
          <button onClick={() => scrollToSection('portfolio')} className='btn btn-soft btn-primary py-2 px-4 rounded-md ' >{t('portfolio')}</button>
          <button onClick={() => scrollToSection('contact')} className='btn btn-soft btn-primary py-2 px-4 rounded-md ' >{t('contact')}</button>
        </div>
        <div className="lg:hidden">
          <SwitchMenus/>
        </div>
    </nav>
  )
}

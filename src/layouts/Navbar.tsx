import { SwitchMenus } from '@/layouts/SwitchMenus'
import { scrollToSection, toTop } from '@/utils/functions/Scrolling';
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  const {t} = useTranslation();

  return (
    <nav className={className}>
          <Link to="/" className='btn btn-soft btn-secondary btn-xl py-2 px-4 rounded-3xl max-md:w-full text-2xl'>{t('welcome')}</Link>
          <button onClick={toTop} className='btn btn-soft btn-primary btn-xl py-2 px-4 rounded-3xl max-md:w-full text-2xl'>{t('home')}</button>
          <button onClick={() => scrollToSection('about')} className='btn btn-soft btn-primary btn-xl py-2 px-4 rounded-3xl max-md:w-full text-2xl' >{t('about')}</button>
          <button onClick={() => scrollToSection('portfolio')} className='btn btn-soft btn-primary btn-xl py-2 px-4 rounded-3xl max-md:w-full text-2xl' >{t('portfolio')}</button>
          <button onClick={() => scrollToSection('contact')} className='btn btn-soft btn-primary btn-xl py-2 px-4 rounded-3xl max-md:w-full text-2xl' >{t('contact')}</button>
          <SwitchMenus className='menu menu-horizontal gap-2 relative'/>
    </nav>
  )
}

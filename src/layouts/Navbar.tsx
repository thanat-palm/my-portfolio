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
          <Link to="/" className='btn btn-soft btn-secondary py-2 px-4 rounded-md max-md:w-full'>{t('welcome')}</Link>
          <button onClick={toTop} className='btn btn-soft btn-primary py-2 px-4 rounded-md max-md:w-full'>{t('home')}</button>
          <button onClick={() => scrollToSection('about')} className='btn btn-soft btn-primary py-2 px-4 rounded-md max-md:w-full' >{t('about')}</button>
          <button onClick={() => scrollToSection('portfolio')} className='btn btn-soft btn-primary py-2 px-4 rounded-md max-md:w-full' >{t('portfolio')}</button>
          <button onClick={() => scrollToSection('contact')} className='btn btn-soft btn-primary py-2 px-4 rounded-md max-md:w-full' >{t('contact')}</button>
          <SwitchMenus className='menu menu-horizontal gap-2 relative'/>
    </nav>
  )
}

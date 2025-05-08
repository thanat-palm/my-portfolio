import { scrollToSection, toTop } from '@/utils/functions/Scrolling';
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  const {t} = useTranslation();

  return (
    <div className={className}>
          <Link to="/" className='btn btn-ghost btn-secondary lg:btn-xl btn-lg rounded-full lg:max-sm:rounded-r-full max-md:w-full lg:text-2xl text-lg  max-md:btn-soft '>{t('welcome')}</Link>
          <button onClick={toTop} className='btn btn-ghost btn-primary btn-lg lg:btn-xl rounded-full max-md:w-full lg:text-2xl text-lg max-md:btn-soft '>{t('home')}</button>
          <button onClick={() => scrollToSection('about')} className='btn btn-ghost btn-primary btn-lg lg:btn-xl rounded-full max-md:w-full lg:text-2xl text-lg max-md:btn-soft ' >{t('about')}</button>
          <button onClick={() => scrollToSection('portfolio')} className='btn btn-ghost btn-primary btn-lg lg:btn-xl rounded-full max-md:w-full lg:text-2xl text-lg max-md:btn-soft ' >{t('portfolio')}</button>
          <button onClick={() => scrollToSection('contact')} className='btn btn-ghost btn-primary btn-lg lg:btn-xl rounded-full max-md:w-full lg:text-2xl text-lg max-md:btn-soft ' >{t('contact')}</button>
    </div>
  )
}

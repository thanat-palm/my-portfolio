import { scrollToSection, toTop } from '@/utils/functions/Scrolling';
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
  onSectionClick?: (section?: string) => void;
}

export const Navbar = ({className,onSectionClick}: NavbarProps) => {
  const {t} = useTranslation();
  const HandleSectionClick = (pathname:string) => {
    scrollToSection(pathname);
    if (onSectionClick) {
      onSectionClick(pathname);
    }
  }
  const HandleTopClick = () => {
    toTop();
    if (onSectionClick) {
      onSectionClick('toTop');
    }
  }

  return (
    <div className={className}>
          <Link to="/" className='btn btn-ghost btn-secondary lg:btn-xl btn-lg rounded-full lg:max-sm:rounded-r-full max-md:w-full max-md:text-4xl max-lg:text-lg text-2xl max-md:btn-soft '>{t('welcome')}</Link>
          <button onClick={HandleTopClick} className='btn btn-ghost btn-primary btn-lg lg:btn-xl rounded-full max-md:w-full max-md:btn-soft max-md:text-4xl max-lg:text-lg text-2xl'>{t('home')}</button>
          <button onClick={() => HandleSectionClick('about')} className='btn btn-ghost btn-primary btn-lg lg:btn-xl rounded-full max-md:w-full  max-md:btn-soft max-md:text-4xl max-lg:text-lg text-2xl' >{t('about')}</button>
          <button onClick={() => HandleSectionClick('portfolio')} className='btn btn-ghost btn-primary btn-lg lg:btn-xl rounded-full max-md:w-full max-md:btn-soft max-md:text-4xl max-lg:text-lg text-2xl' >{t('portfolio')}</button>
          <button onClick={() => HandleSectionClick('contact')} className='btn btn-ghost btn-primary btn-lg lg:btn-xl rounded-full max-md:w-full max-md:btn-soft max-md:text-4xl max-lg:text-lg text-2xl' >{t('contact')}</button>
    </div>
  )
}

import { languages, type LanguageCode } from '@/constants/languages';
import { useUIStore } from '@/store/uiStore';
import { useTranslation } from 'react-i18next';
import { MdOutlineLanguage } from 'react-icons/md'

export const LanguageSwitch = () => {
    const { i18n } = useTranslation();
    const { language , setLanguage } = useUIStore();

    const changeLanguage = (lng: LanguageCode) => {
        setLanguage(lng);
        i18n.changeLanguage(lng)
      }
  return (
    <div tabIndex={0} className='dropdown dropdown-bottom dropdown-end btn btn-soft btn-circle btn-xl'>
        <label >
            <MdOutlineLanguage className='text-primary size-8'/>
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-4 shadow bg-base-200 rounded-box w-fit relative text-xl">
            {Object.values(languages).map((lang) => (
                <li key={lang.code} >
                    <button onClick={() => changeLanguage(lang.code)} className={language === lang.code ? 'btn-active' : ''}>
                        <span className='badge badge-neutral'>{lang.emoji}</span>  {lang.label}
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}

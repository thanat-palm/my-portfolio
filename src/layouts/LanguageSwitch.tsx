import { languages, type LanguageCode } from '@/constants/languages';
import { useUIStore } from '@/store/uiStore';
import { useTranslation } from 'react-i18next';
import { MdOutlineLanguage } from 'react-icons/md'

export const LanguageSwitch = () => {
    const { i18n } = useTranslation();
    const { setLanguage } = useUIStore();

    const changeLanguage = (lng: LanguageCode) => {
        setLanguage(lng);
        i18n.changeLanguage(lng)
      }
  return (
    <div tabIndex={0} className='dropdown dropdown-bottom dropdown-end btn btn-soft btn-accent rounded-r-full btn-lg'>
        <label >
            <MdOutlineLanguage className=' size-7'/>
        </label>
        <div tabIndex={0} className="dropdown-content join join-vertical bg-base-300 rounded-box shadow-2xl w-40 p-2">
            {Object.values(languages).map((lang) => (
                    <input
                    type="radio"
                    name="lang-buttons"
                    className="btn join-item"
                    aria-label={lang.label}
                    value={lang.code}
                    onChange={() => changeLanguage(lang.code)}
                    key={lang.code}
                    />
            ))}
        </div>
    </div>

  )
}

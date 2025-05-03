import { useTranslation } from 'react-i18next';
import { MdOutlineLanguage } from 'react-icons/md'

const languagelist = [
    {
        name: 'thai',
        value: 'th',
        icon: '',
    },
    {
        name: 'english',
        value: 'en',
        icon: '',
    }
]



export const LanguageSwitch = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
      }
  return (
        <button className='dropdown dropdown-bottom dropdown-end'>
        <MdOutlineLanguage className='text-primary size-5'/>
        <ul className="dropdown-content bg-base-300 rounded-box z-1 shadow-2xl">
            {languagelist.map((lang) => (
                <li key={lang.name}>
                    <button onClick={() => changeLanguage(lang.value)}>
                        {lang.name}
                    </button>
                </li>
            ))}
        </ul>
    </button>
  )
}

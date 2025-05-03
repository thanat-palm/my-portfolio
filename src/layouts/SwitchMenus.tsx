import { LanguageSwitch } from './LanguageSwitch'
import { ThemeSwitch } from './ThemeSwtich'

export const SwitchMenus = () => {
  return (
    <ul className='menu menu-horizontal gap-2 z-50 relative'>
        <li>
            <ThemeSwitch/>
        </li>
        <li>
            <LanguageSwitch/>
        </li>
    </ul>
  )
}

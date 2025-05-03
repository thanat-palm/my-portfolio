import { LanguageSwitch } from './LanguageSwitch'
import { ThemeSwtich } from './ThemeSwtich'

export const SwitchMenus = () => {
  return (
    <ul className='menu menu-horizontal bg-base-200 rounded-box gap-2'>
        <li>
            <ThemeSwtich/>
        </li>
        <li>
            <LanguageSwitch/>
        </li>
    </ul>
  )
}

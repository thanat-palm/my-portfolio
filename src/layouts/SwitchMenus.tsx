import { LanguageSwitch } from './LanguageSwitch'
import { ThemeSwitch } from './ThemeSwtich'

interface SwitchMenuProps {
  className?: string;
}

export const SwitchMenus = ({className}: SwitchMenuProps) => {
  return (
    <ul className={className}>
        <li>
            <ThemeSwitch/>
        </li>
        <li>
            <LanguageSwitch/>
        </li>
    </ul>
  )
}

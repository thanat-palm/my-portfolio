import { LanguageSwitch } from './LanguageSwitch'
import { ThemeSwitch } from './ThemeSwtich'

interface SwitchMenuProps {
  className?: string;
}

export const SwitchMenus = ({className}: SwitchMenuProps) => {
  return (
    <div className={className}>
      <ThemeSwitch/>
      <LanguageSwitch/>
    </div>
  )
}

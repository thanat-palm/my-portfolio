import { themes } from '@/constants/themes'
import { MdOutlineColorLens } from 'react-icons/md'
import { useUIStore } from '@/store/uiStore'

export const ThemeSwitch = () => {
  const { setTheme } = useUIStore()

  return (
    <div tabIndex={0} className="dropdown dropdown-bottom dropdown-end btn btn-soft btn-accent rounded-l-full btn-lg">
      <label >
        <MdOutlineColorLens className=" size-7" />
      </label>
      <div tabIndex={0} className="dropdown-content join join-vertical bg-base-300 rounded-box shadow-2xl w-40 p-2">
        {Object.values(themes).map((themeName) => (
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item"
                    aria-label={themeName.label}
                    value={themeName.code}
                    onChange={() => setTheme(themeName.code)}
                    key={themeName.code}
                />
        ))}
      </div>
    </div>
  )
}

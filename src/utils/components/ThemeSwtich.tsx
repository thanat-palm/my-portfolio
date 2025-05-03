import { MdOutlineColorLens } from 'react-icons/md'

const themelist = [
    {
        name: 'light',
        value: 'light',
    },
    {
        name: 'dark',
        value: 'dark',
    },
    {
        name: 'abyss',
        value: 'abyss',
    },
]

export const ThemeSwtich = () => {
  return (
            <button className="dropdown dropdown-bottom dropdown-end" >
                <MdOutlineColorLens className='text-primary size-5'/>
                <ul className="dropdown-content menu bg-base-300 rounded-box z-1 shadow-2xl">
                    {themelist.map(theme => (
                        <li key={theme.name}>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                            aria-label={theme.name}
                            value={theme.value} />
                        </li>
                    ))}
                </ul>
            </button>
  )
}

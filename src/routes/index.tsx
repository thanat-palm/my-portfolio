import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'


export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const {t} = useTranslation();
  return (
    <div className="w-full h-[100vh] overflow-hidden flex flex-col gap-6 justify-center items-center">
        <h1 className='text-7xl uppercase'>
          {t('welcome')}
        </h1>
        <h2 className='text-xl mb-4'>
          {t('click_to_dashboard')}
        </h2>
        <Link className='btn btn-soft btn-secondary px-6' to='/dashboard'>{t('click')}</Link>
    </div>
  )
}

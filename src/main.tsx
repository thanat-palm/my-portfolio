import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import i18n from './locales/i18n.ts'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

import './styles.css'
import reportWebVitals from './reportWebVitals.ts'
import { getLocalStorage } from './utils/functions/getLocalStorage.ts'
import type { LanguageCode } from './constants/languages.ts'
import type { ThemeCode } from './constants/themes.ts'

//ดึงข้อมูล localstorage ui-store
const ui = getLocalStorage<{state: {language: LanguageCode; theme: ThemeCode} }>('ui-store');

if(ui?.state?.language) {
  i18n.changeLanguage(ui.state.language)
} else {
  i18n.changeLanguage('th')
}

if (ui?.state?.theme) {
  document.documentElement.setAttribute('data-theme', ui.state.theme)
} else {
  document.documentElement.setAttribute('data-theme', 'light')
}


// Create a new router instance
const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

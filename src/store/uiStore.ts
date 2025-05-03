import type { LanguageCode } from '@/constants/languages'
import type { ThemeCode } from '@/constants/themes'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UIState {
  theme: ThemeCode
  language: LanguageCode
  setTheme: (theme: ThemeCode) => void
  setLanguage: (language: LanguageCode) => void
}

export const useUIStore = create<UIState>()(
    persist(
        (set) => ({
            theme: 'light',
            language: 'th',
            setTheme: (theme) => set({ theme }),
            setLanguage: (language) => set({ language }),
        }),
        {
            name: 'ui-store',
        }
    )
)

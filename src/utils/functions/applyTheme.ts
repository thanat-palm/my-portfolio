import { useUIStore } from '@/store/uiStore'
import { useEffect } from 'react'

export function useApplyTheme() {
  const theme = useUIStore((state) => state.theme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
}

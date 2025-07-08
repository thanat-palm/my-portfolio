import { useApplyTheme } from "../functions/applyTheme"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useApplyTheme()
  return <>{children}</>
}

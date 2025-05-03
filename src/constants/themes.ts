export const themes = {
    light: 'light',
    dark: 'dark',
    abyss: 'abyss',
} as const

export type ThemeCode = keyof typeof themes
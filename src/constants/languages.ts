export const languages = {
    th: {
        label: "ไทย",
        code: "th",
        emoji: "TH",
    },
    en: {
        label: "English",
        code: "en",
        emoji: "EN",
    },
} as const

export type LanguageCode = keyof typeof languages
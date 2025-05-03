import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// import ภาษา
import en from './en.json'
import th from './th.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      th: { translation: th },
    },
    lng: 'th', // ภาษาเริ่มต้น
    fallbackLng: 'en', // ถ้าไม่เจอ ให้ใช้ en
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n

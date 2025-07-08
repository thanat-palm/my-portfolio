export function getLocalStorage<T>(key: string): T | null {
    const item = localStorage.getItem(key)
    if (!item) return null
    try {
      return JSON.parse(item) as T
    } catch (err) {
      console.error("Invalid JSON in localStorage")
      return null
    }
  }
  
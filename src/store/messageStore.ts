// stores/useToastStore.ts
import { create } from 'zustand'

type ToastStatus = 'success' | 'fail' | 'info'

interface ToastState {
  message: string
  isVisible: boolean
  messageStatus: ToastStatus
  showToast: (message: string, status: ToastStatus, duration?: number) => void
  hideToast: () => void
}

export const useToastStore = create<ToastState>((set) => ({
  message: '',
  isVisible: false,
  messageStatus: 'info',
  showToast: (message, messageStatus, duration = 4000) => {
    set({ message, messageStatus, isVisible: true })

    setTimeout(() => {
      set({ isVisible: false })
    }, duration)
  },
  hideToast: () => set({ isVisible: false }),
}))

// components/Toast.tsx
import { useToastStore } from '@/store/messageStore'
import { AnimatePresence, motion } from 'framer-motion'
import { BsCheckCircleFill , BsXCircleFill , BsExclamationCircleFill  } from "react-icons/bs";

export const Toast = () => {
  const { message, messageStatus, isVisible } = useToastStore()

  const getStatusStyle = () => {
    switch (messageStatus) {
      case 'success':
        return {
          icon: <BsCheckCircleFill className="w-6 h-6 text-success-content" />,
          bg: 'bg-success',
          text: 'text-success-content',
        }
      case 'fail':
        return {
          icon: <BsXCircleFill className="w-6 h-6 text-error-content" />,
          bg: 'bg-error',
          text: 'text-error-content',
        }
      case 'info':
      default:
        return {
          icon: <BsExclamationCircleFill className="w-6 h-6 text-info-content" />,
          bg: 'bg-info',
          text: 'text-info-content',
        }
    }
  }

  const { icon, bg, text } = getStatusStyle()

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="toast"
          className={`toast toast-end z-50 ${bg} p-4 rounded shadow-lg`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className={`flex items-center gap-3 ${text}`}>
            {icon}
            <span className="text-2xl">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

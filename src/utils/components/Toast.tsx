// components/Toast.tsx
import { useToastStore } from '@/store/messageStore'
import { AnimatePresence, motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import { BsCheckCircleFill , BsXCircleFill , BsExclamationCircleFill  } from "react-icons/bs";

export const Toast = () => {
  const { message, messageStatus, isVisible } = useToastStore()

  const getStatusStyle = () => {
    switch (messageStatus) {
      case 'success':
        return {
          icon: <BsCheckCircleFill className="w-6 h-6 text-green-500" />,
          bg: 'bg-green-100',
          text: 'text-green-800',
        }
      case 'fail':
        return {
          icon: <BsXCircleFill className="w-6 h-6 text-red-500" />,
          bg: 'bg-red-100',
          text: 'text-red-800',
        }
      case 'info':
      default:
        return {
          icon: <BsExclamationCircleFill className="w-6 h-6 text-blue-500" />,
          bg: 'bg-blue-100',
          text: 'text-blue-800',
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
            <span className="text-lg font-medium">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

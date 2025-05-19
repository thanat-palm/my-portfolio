import React from 'react'
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion'
import { cn } from '../functions/Merge'
const root = getComputedStyle(document.documentElement);
const primary = root.getPropertyValue('--p') || '59 130 246'; // fallback

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputGradient = React.forwardRef<HTMLInputElement, InputProps>(
   ({ className, type, ...props }, ref) => {
      const radius = 100 // change this to increase the rdaius of the hover effect
      const [visible, setVisible] = React.useState(false)

      const mouseX = useMotionValue(0)
      const mouseY = useMotionValue(0)

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function handleMouseMove({ currentTarget, clientX, clientY }: any) {
         const { left, top } = currentTarget.getBoundingClientRect()

         mouseX.set(clientX - left)
         mouseY.set(clientY - top)
      }
      return (
         <motion.div
            style={{
               background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
          var(--color-primary) ,
          transparent 80%
        )
      `,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className="group/input rounded-lg p-[2px] transition duration-300"
         >
            <input
               type={type}
               className={cn(
                  `flex h-10 w-full rounded-md border border-black/10 bg-gray-50 px-3 py-2 text-sm text-black shadow-input transition duration-400 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-600 placeholder:opacity-50 focus-visible:ring-[2px] focus-visible:ring-neutral-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-none dark:bg-neutral-900/80 dark:text-white dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-600`,
                  className,
               )}
               ref={ref}
               {...props}
            />
         </motion.div>
      )
   },
)

InputGradient.displayName = 'InputGradient'

"use client"

import type React from "react"

import { AnimatePresence, type delay, type Variants } from "motion/react"
import * as motion from "motion/react-client"
import { useEffect, useRef, useState } from "react"
import { Navbar } from "./Navbar"

interface SidebarProps {
  className?: string;
}

export default function Sidebar({className}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { height } = useDimensions(containerRef)

  return (
    <div className={className}>
        <motion.nav initial={false} animate={isOpen ? "open" : "closed"} custom={height} ref={containerRef} className={isOpen ? 'w-screen h-screen ' : ''}>
          <motion.div className="bg-primary absolute top-0 left-0 bottom-0 w-screen z-30" variants={sidebarVariants} />
          <AnimatePresence>
            {isOpen && (
              <Navigation />
            )}
          </AnimatePresence>
          <MenuToggle toggle={() => setIsOpen(!isOpen)} className="btn btn-circle outline-0 border-0 shadow-none bg-primary absolute top-[20px] left-[20px] z-50"/>
        </motion.nav>
    </div>
  )
}

const Navigation = () => (
  <motion.div 
    className='w-screen h-screen z-40 relative flex justify-center items-center' 
    variants={navVariants} 
    initial="closed"
    animate="open"
    exit="closed"
  >
    <Navbar className="flex flex-col min-w-[250px] items-center justify-center gap-4"/>
  </motion.div>
)

const navVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 , delay: 0.4 },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
}

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0 at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

interface PathProps {
  d?: string
  variants: Variants
  transition?: { duration: number }
}

const Path = (props: PathProps) => (
  <motion.path fill="transparent" strokeWidth="3" className=" stroke-primary-content" strokeLinecap="round" {...props} />
)

type MenuToggleProps = {
  toggle: () => void;
  className?: string;
};

const MenuToggle = ({ toggle , className }: MenuToggleProps) => (
  <button className={className} onClick={toggle}>
    <svg width="24" height="24" viewBox="0 0 24 24">
      <Path
        variants={{
          closed: { d: "M 4 5 L 20 5" },
          open: { d: "M 4 19 L 20 5" },
        }}
      />
      <Path
        d="M 4 12 L 20 12"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 4 19 L 20 19" },
          open: { d: "M 4 5 L 20 19" },
        }}
      />
    </svg>
  </button>
)

const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
  const dimensions = useRef({ width: 0, height: 0 })

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth
      dimensions.current.height = ref.current.offsetHeight
    }
  }, [ref])

  return dimensions.current
}

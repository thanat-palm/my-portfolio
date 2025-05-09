"use client"

import { frame, motion, useSpring } from "motion/react"
import { type RefObject, useEffect, useRef } from "react"

export default function DragPointer() {
    const ref = useRef<HTMLDivElement>(null)
    const { x, y } = useFollowPointer(ref)

    return <motion.div ref={ref} className="size-[100px] rounded-full border-2 " style={{ x , y }} />
}


export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
    const x = useSpring(0)
    const y = useSpring(0)

    useEffect(() => {
        if (!ref.current) return

        const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
            const element = ref.current!

            frame.read(() => {
                x.set(clientX - element.offsetLeft - element.offsetWidth / 2)
                y.set(clientY - element.offsetTop - element.offsetHeight / 2)
            })
        }

        window.addEventListener("pointermove", handlePointerMove)

        return () =>
            window.removeEventListener("pointermove", handlePointerMove)
    }, [])

    return { x, y }
}

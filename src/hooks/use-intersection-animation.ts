"use client"

import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import gsap from "gsap"

export function useIntersectionAnimation(threshold = 0.1) {
  const ref = useRef(null);
  const [inViewRef, inView] = useInView({
    threshold,
    triggerOnce: true,
  })

  useEffect(() => {
      gsap.context(() => {
        if (ref.current) {
      gsap.context(() => {
        gsap.to(ref.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        })
      })
    }



},[inViewRef, inView] )
  })
 return [inViewRef, inView] as const
}
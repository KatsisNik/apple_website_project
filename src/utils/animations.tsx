import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

interface AnimationProps {
    [key: string]: any
}

interface ScrollProps {
    trigger?: string
    toggleActions?: string
    start?: string
    [key: string]: any
}

export const animateWithGsap = (target: string, animationProps?: AnimationProps, scrollProps?: ScrollProps) => {
    gsap.to(target, {
        ...animationProps,
        scrollTrigger: {
            trigger: target,
            toggleActions: "restart reverse restart reverse",
            start: "top 85%",
            ...scrollProps,
        }
    })
}

interface AnimationTimelineProps {
    [key: string]: any
}

export const animateWithGsapTimeline = (timeline: gsap.core.Timeline, rotationRef: React.MutableRefObject<any>, rotationState: number, firstTarget: string, secondTarget: string, animationProps: AnimationTimelineProps) => {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: "power2.inOut"
    })

    timeline.to(
        firstTarget,
        {
            ...animationProps,
            ease: "power2.inOut"
        },
        "<"
    )

    timeline.to(
        secondTarget,
        {
            ...animationProps,
            ease: "power2.inOut"
        },
        "<"
    )
}
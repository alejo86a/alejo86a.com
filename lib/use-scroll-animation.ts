import { useEffect, useRef } from "react"

/**
 * Returns a ref to attach to any element.
 * When the element enters the viewport, the class `is-visible` is added.
 * Pair with `.animate-on-scroll` / `.is-visible` CSS classes.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>() {
    const ref = useRef<T>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("is-visible")
                    observer.unobserve(el)
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return ref
}

import { useState, useEffect, useRef } from 'react'

const Magnet = ({ children }) => {
    const MAGNET_STRENGTH = 5
    const PADDING = 50

    const [isActive, setIsActive] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const magnetRef = useRef(null)

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!magnetRef.current) return;

            const { left, top, width, height } = magnetRef.current.getBoundingClientRect()
            const centerX = left + width / 2
            const centerY = top + height / 2

            const distX = Math.abs(centerX - e.clientX)
            const distY = Math.abs(centerY - e.clientY)

            if (distX < width / 2 + PADDING && distY < height / 2 + PADDING) {
                setIsActive(true)

                const offsetX = (e.clientX - centerX) / MAGNET_STRENGTH
                const offsetY = (e.clientY - centerY) / MAGNET_STRENGTH
                setPosition({ x: offsetX, y: offsetY })
            } else {
                setIsActive(false)
                setPosition({ x: 0, y: 0 })
            }
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [PADDING, MAGNET_STRENGTH])

    const transitionStyle = isActive ? "transform 0.3s ease-out" : "transform 0.5s ease-in-out"

    return (
        <div
            ref={magnetRef}
            style={{ position: "relative", display: "inline-block" }}
        >
            <div
                style={{
                    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                    transition: transitionStyle,
                    willChange: "transform"
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default Magnet
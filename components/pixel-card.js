import { useEffect, useRef } from "react";

class Pixel {
    constructor(canvas, context, x, y, color, speed, delay) {
        this.width = canvas.width
        this.height = canvas.height
        this.ctx = context
        this.x = x
        this.y = y
        this.color = color
        this.speed = this.getRandomValue(0.1, 0.9) * speed
        this.size = 0
        this.sizeStep = Math.random() * 0.4
        this.minSize = 0.5
        this.maxSizeInteger = 2
        this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger)
        this.delay = delay
        this.counter = 0
        this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01
        this.isIdle = false
        this.isReverse = false
        this.isShimmer = false
    }

    getRandomValue(min, max) {
        return Math.random() * (max - min) + min
    }

    draw() {
        const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(
            this.x + centerOffset,
            this.y + centerOffset,
            this.size,
            this.size
        );
    }

    appear() {
        this.isIdle = false
        if (this.counter <= this.delay) {
            this.counter += this.counterStep;
            return
        }
        if (this.size >= this.maxSize) {
            this.isShimmer = true
        }
        if (this.isShimmer) {
            this.shimmer()
        } else {
            this.size += this.sizeStep
        }
        this.draw()
    }

    disappear() {
        this.isShimmer = false
        this.counter = 0
        if (this.size <= 0) {
            this.isIdle = true
            return
        } else {
            this.size -= 0.1
        }
        this.draw()
    }

    shimmer() {
        if (this.size >= this.maxSize) {
            this.isReverse = true
        } else if (this.size <= this.minSize) {
            this.isReverse = false
        }
        if (this.isReverse) {
            this.size -= this.speed
        } else {
            this.size += this.speed
        }
    }
}

function getEffectiveSpeed(value) {
    const min = 0
    const max = 100
    const throttle = 0.001
    const parsed = parseInt(value, 10)

    if (parsed <= min) {
        return min
    } else if (parsed >= max) {
        return max * throttle
    } else {
        return parsed * throttle
    }
}

const VARIANTS = {
    default: {
        activeColor: null,
        gap: 5,
        speed: 35,
        colors: "#f8fafc,#f1f5f9,#cbd5e1",
        noFocus: false
    },
    blue: {
        activeColor: "#e0f2fe",
        gap: 10,
        speed: 25,
        colors: "#e0f2fe,#7dd3fc,#0ea5e9",
        noFocus: false
    },
    yellow: {
        activeColor: "#fef08a",
        gap: 3,
        speed: 20,
        colors: "#fef08a,#fde047,#eab308",
        noFocus: false
    },
    red: {
        activeColor: "#f75757",
        gap: 6,
        speed: 80,
        colors: "#f75757,#ff2424,#b02010",
        noFocus: true
    }
}

export default function PixelCard({
    variant = "default",
    gap,
    speed,
    colors,
    noFocus,
    className = "",
    children
}) {
    const containerRef = useRef(null)
    const canvasRef = useRef(null)
    const pixelsRef = useRef([])
    const animationRef = useRef(null)
    const timePreviousRef = useRef(performance.now())

    const variantCfg = VARIANTS[variant] || VARIANTS.default;
    const finalGap = gap ?? variantCfg.gap
    const finalSpeed = speed ?? variantCfg.speed
    const finalColors = colors ?? variantCfg.colors
    const finalNoFocus = noFocus ?? variantCfg.noFocus

    const initPixels = () => {
        if (!containerRef.current || !canvasRef.current) return;

        const rect = containerRef.current.getBoundingClientRect()
        const width = Math.floor(rect.width)
        const height = Math.floor(rect.height)
        const ctx = canvasRef.current.getContext("2d")

        canvasRef.current.width = width
        canvasRef.current.height = height
        canvasRef.current.style.width = `${width}px`
        canvasRef.current.style.height = `${height}px`

        const colorsArray = finalColors.split(",");
        const pxs = [];
        for (let x = 0; x < width; x += parseInt(finalGap, 10)) {
            for (let y = 0; y < height; y += parseInt(finalGap, 10)) {
                const color =
                    colorsArray[Math.floor(Math.random() * colorsArray.length)]

                const dx = x - width / 2
                const dy = y - height / 2
                const distance = Math.sqrt(dx * dx + dy * dy)

                pxs.push(
                    new Pixel(
                        canvasRef.current,
                        ctx,
                        x,
                        y,
                        color,
                        getEffectiveSpeed(finalSpeed),
                        distance
                    )
                );
            }
        }
        pixelsRef.current = pxs;
    };

    const doAnimate = (fnName) => {
        animationRef.current = requestAnimationFrame(() => doAnimate(fnName))
        const timeNow = performance.now()
        const timePassed = timeNow - timePreviousRef.current
        const timeInterval = 1000 / 120

        if (timePassed < timeInterval) return;
        timePreviousRef.current = timeNow - (timePassed % timeInterval)

        const ctx = canvasRef.current?.getContext("2d");
        if (!ctx || !canvasRef.current) return;

        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        let allIdle = true;
        for (let i = 0; i < pixelsRef.current.length; i++) {
            const pixel = pixelsRef.current[i]
            pixel[fnName]()
            if (!pixel.isIdle) {
                allIdle = false
            }
        }
        if (allIdle) {
            cancelAnimationFrame(animationRef.current)
        }
    };

    const handleAnimation = (name) => {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = requestAnimationFrame(() => doAnimate(name))
    };

    const onMouseEnter = () => handleAnimation("appear");
    const onMouseLeave = () => handleAnimation("disappear");
    const onFocus = (e) => {
        if (e.currentTarget.contains(e.relatedTarget)) return;
        handleAnimation("appear")
    };
    const onBlur = (e) => {
        if (e.currentTarget.contains(e.relatedTarget)) return;
        handleAnimation("disappear")
    };

    useEffect(() => {
        initPixels();
        const observer = new ResizeObserver(() => {
            initPixels()
        });
        if (containerRef.current) {
            observer.observe(containerRef.current)
        }
        return () => {
            observer.disconnect();
            cancelAnimationFrame(animationRef.current)
        };
    }, [finalGap, finalSpeed, finalColors, finalNoFocus])

    return (
        <>
            <style jsx>{`
                .pixel-canvas {
                    width: 100%;
                    height: 100%;
                    display: block;
                }

                .pixel-card {
                    position: relative;
                    overflow: hidden;
                    display: grid;
                    place-items: center;
                    aspect-ratio: 1;
                    isolation: isolate;
                    transition: border-color 200ms cubic-bezier(0.5, 1, 0.89, 1);
                    user-select: none;
                }

                .pixel-card::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    margin: auto;
                    background: radial-gradient(circle, #09090b, transparent 85%);
                    opacity: 0;
                    transition: opacity 800ms cubic-bezier(0.5, 1, 0.89, 1);
                }

                .pixel-card:hover::before,
                .pixel-card:focus-within::before {
                    opacity: 1;
                }

            `}</style>

            <div
                ref={containerRef}
                className={`pixel-card ${className}`}

                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}

                onFocus={finalNoFocus ? undefined : onFocus}
                onBlur={finalNoFocus ? undefined : onBlur}
                tabIndex={finalNoFocus ? -1 : 0}
            >
                <canvas
                    className="pixel-canvas"
                    ref={canvasRef}
                />
                {children}
            </div>
        </>
    )
}
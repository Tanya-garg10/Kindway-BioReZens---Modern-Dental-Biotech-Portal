'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
    { number: 1500, label: 'Workshops/Trainings', description: 'Workshop and Training Organized' },
    { number: 1160, label: 'Students', description: 'Students enrolled in Workshop/Training/Courses' },
    { number: 1145, label: 'Medical Camps', description: 'Medical camps organized' },
]

export default function Statistics() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="section-padding bg-blue-600 text-white">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-5xl md:text-6xl font-bold mb-2">
                                {isVisible && <Counter target={stat.number} />}
                                <span className="text-4xl">+</span>
                            </div>
                            <h3 className="text-2xl font-semibold mb-2">{stat.label}</h3>
                            <p className="text-blue-100">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function Counter({ target }: { target: number }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const duration = 2000
        const steps = 60
        const increment = target / steps
        let current = 0

        const timer = setInterval(() => {
            current += increment
            if (current >= target) {
                setCount(target)
                clearInterval(timer)
            } else {
                setCount(Math.floor(current))
            }
        }, duration / steps)

        return () => clearInterval(timer)
    }, [target])

    return <>{count}</>
}

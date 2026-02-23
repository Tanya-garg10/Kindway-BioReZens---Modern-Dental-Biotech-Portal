'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
    {
        title: 'Elevating Dental Excellence',
        description: 'At Kindway Biorezens, we are dedicated to the advancement of dental healthcare. We take pride in our mission to empower dental professionals with innovative solutions, cutting-edge products, and unwavering support.',
        image: '/assets/images/bg2.jpg',
    },
    {
        title: 'Why Choose Kindway',
        description: "We're not just a company but committed to advancing dental care through innovation, quality, and precision.",
        image: '/assets/images/bg1.jpg',
    },
    {
        title: 'Pioneering Products',
        description: 'We offer a curated selection of dental products and medical devices that are at the forefront of dental technology.',
        image: '/assets/images/bg.jpg',
    },
    {
        title: 'Training and Education',
        description: 'At Kindway Biorezens, we believe in continuous learning. We offer training, workshops, and educational resources to empower dental professionals with the latest techniques and best practices.',
        image: '/assets/images/bg3.jpg',
    },
]

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

    return (
        <section className="relative h-[600px] md:h-[700px] lg:h-[800px] mt-20 overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
                        }}
                    />
                    <div className="relative h-full flex items-center">
                        <div className="container-custom">
                            <div className="max-w-3xl text-white animate-fade-in">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
                                    {slide.description}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/products" className="btn-primary">
                                        Discover Now
                                    </Link>
                                    <Link href="/about" className="btn-secondary bg-white/10 border-white text-white hover:bg-white/20">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}

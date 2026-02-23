'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Moon, Sun } from 'lucide-react'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Catalogue', href: '/catalogue' },
    { name: 'Services', href: '/services' },
    { name: 'Training', href: '/training' },
    { name: 'Events', href: '/events' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isDark, setIsDark] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme === 'dark') {
            setIsDark(true)
            document.documentElement.classList.add('dark')
            document.body.classList.add('dark')
        }

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleDarkMode = () => {
        setIsDark(!isDark)
        if (!isDark) {
            document.documentElement.classList.add('dark')
            document.body.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            document.body.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-slate-900 shadow-lg' : 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm'
                }`}
        >
            <nav className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="text-2xl md:text-3xl font-bold">
                            <span className="text-gray-900 dark:text-white">Kindway</span>
                            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">BioReZens</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium transition-colors hover:text-red-500 ${pathname === item.href
                                    ? 'text-red-500'
                                    : 'text-gray-700 dark:text-gray-300'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {isDark ? (
                                <Sun className="w-5 h-5 text-yellow-500" />
                            ) : (
                                <Moon className="w-5 h-5 text-gray-700" />
                            )}
                        </button>

                        <Link href="/training" className="btn-primary text-sm">
                            Register for Workshop
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center space-x-2">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {isDark ? (
                                <Sun className="w-5 h-5 text-yellow-500" />
                            ) : (
                                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                            )}
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-200 dark:border-slate-700 animate-fade-in">
                        <div className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-base font-medium transition-colors hover:text-red-500 ${pathname === item.href
                                        ? 'text-red-500'
                                        : 'text-gray-700 dark:text-gray-300'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/training"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="btn-primary text-sm w-full"
                            >
                                Register for Workshop
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}


import Link from 'next/link'
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container-custom section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="mb-4">
                            <h3 className="text-2xl font-bold">
                                <span className="text-white">Kindway</span>
                                <span className="text-blue-500">BioReZens</span>
                            </h3>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            We are more than a company — we are a purpose-driven force committed to advancing dental care through innovation, quality, and precision.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/share/1GBc9pA6Rg/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.youtube.com/@kindwaydentalimplants"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/quadhelixx?igsh=dHB4bzQ2Y2dycWd4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-4">Useful Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/gallery" className="hover:text-blue-400 transition-colors">Gallery</Link></li>
                            <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
                            <li><Link href="/catalogue" className="hover:text-blue-400 transition-colors">Product Catalogue</Link></li>
                            <li><Link href="/before-after" className="hover:text-blue-400 transition-colors">Before & After</Link></li>
                            <li><Link href="/testimonials" className="hover:text-blue-400 transition-colors">Testimonials</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact us</Link></li>
                        </ul>
                    </div>

                    {/* More Info */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-4">More Info</h4>
                        <ul className="space-y-2">
                            <li><Link href="/events" className="hover:text-blue-400 transition-colors">Events Calendar</Link></li>
                            <li><Link href="/training" className="hover:text-blue-400 transition-colors">Workshops</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">Mobile Clinic</Link></li>
                            <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Support</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-4">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                                <span className="text-sm">38 Balaji Colony Samneghat, Near BHU Trauma Center, Varanasi - 221005</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                                <a href="tel:+919151161267" className="text-sm hover:text-blue-400 transition-colors">
                                    +91-9151161267
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                                <a href="mailto:kindwaybiorezens@gmail.com" className="text-sm hover:text-blue-400 transition-colors">
                                    kindwaybiorezens@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-center md:text-left">
                            © 2026 Kindway BioReZens. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
                            <Link href="/about" className="hover:text-blue-400 transition-colors">Careers</Link>
                            <Link href="/about" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
                            <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

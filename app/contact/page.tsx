'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        website: '',
        message: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
        alert('Thank you for your message! We will get back to you soon.')
        setFormData({ name: '', email: '', subject: '', website: '', message: '' })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="mt-20">
            {/* Hero */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl max-w-3xl mx-auto opacity-90">
                        Get in touch with our team - we're here to help
                    </p>
                </div>
            </section>

            {/* Contact Form & Image */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="title-subhny">Send a Message</span>
                        <h2 className="title-w3l mt-2">Contact Us</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                            <img src="/assets/images/contact.jpg" alt="Contact" className="w-full h-full object-cover" />
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name*"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email*"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject*"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                />
                                <input
                                    type="url"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    placeholder="Website URL"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                />
                            </div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Type your message here*"
                                required
                                rows={6}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            />
                            <button type="submit" className="btn-primary w-full md:w-auto">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Address Info */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="title-subhny">Find Us</span>
                        <h2 className="title-w3l mt-2">Address Info</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <MapPin className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Office Location</h3>
                            <p className="text-gray-600">
                                38 Balaji Colony Samneghat, Near BHU Trauma Center Lanka Varanasi, Uttar Pradesh - 221005
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <Phone className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Call & WhatsApp Us</h3>
                            <a href="tel:+919151161267" className="text-blue-600 hover:underline">
                                +91-9151161267
                            </a>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <Mail className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                            <a href="mailto:kindwaybiorezens@gmail.com" className="text-blue-600 hover:underline">
                                kindwaybiorezens@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="rounded-xl overflow-hidden shadow-xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d230902.6167335294!2d83.000262!3d25.275517!3m2!1i1024!2i768!4f13.1!2m1!1s38%20Balaji%20Colony%20Samneghat%2C%20%20Near%20BHU%20Trauma%20Center%20Lanka%20Varanasi%2C%20Uttar%20Pradesh%20-%20221005!5e0!3m2!1sen!2sus!4v1749452500539!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

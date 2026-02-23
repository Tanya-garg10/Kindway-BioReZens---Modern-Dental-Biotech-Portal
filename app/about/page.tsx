import Image from 'next/image'
import type { Metadata } from 'next'
import TeamCarousel from '@/components/TeamCarousel'

export const metadata: Metadata = {
    title: 'About Us - Kindway BioReZens',
    description: 'Learn about Kindway BioReZens mission, vision, and team. Leading dental manufacturing startup committed to innovation and excellence.',
}

const teamMembers = [
    { name: 'Dr. Rajesh Bansal', role: 'Founder Director (MDS, PhD)', image: '/assets/images/t1.jpg' },
    { name: 'Prof. D. D. N. Singh', role: 'M.Sc, PhD', image: '/assets/images/t6.jpg' },
    { name: 'Prof. Vakil Singh', role: 'M.Sc, PhD', image: '/assets/images/t7.jpg' },
    { name: 'Prof. Monika Bansal', role: 'MDS, PhD (Periodontist)', image: '/assets/images/t8.jpg' },
    { name: 'Mr. Dinesh Kumar', role: 'Founder and Charter Accountant', image: '/assets/images/t2.jpg' },
    { name: 'Mr. P. Vishwakarma', role: 'CNC Operator', image: '/assets/images/t3.jpg' },
    { name: 'Mr. Anshu Pandey', role: 'Assistant and CNC Operator', image: '/assets/images/t4.jpg' },
    { name: 'Dr. Robin Kr. Chaube', role: 'Dental Officer', image: '/assets/images/robin.jpg' },
    { name: 'Dr. Sourav Kr. Vishwakarma', role: 'Graft. R&D Officer', image: '/assets/images/sourav.jpg' },
]

export default function AboutPage() {
    return (
        <div className="mt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Kindway BioReZens</h1>
                    <p className="text-xl max-w-3xl mx-auto opacity-90">
                        Transforming dentistry through innovation, accessibility, and compassionate care
                    </p>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="title-subhny">Why Choose</span>
                            <h2 className="title-w3l mt-2 mb-6">Kindway Biorezens</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                At Kindway Biorezens, we are driven by a mission to reshape the future of dentistry through innovation, accessibility, and compassionate care. As a pioneering startup in dental manufacturing and healthcare services, we design and produce advanced, reliable, and affordable dental implants, biomaterials, and devices that meet global standards of safety and performance.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Alongside manufacturing excellence, we are committed to delivering world-class dental treatment at accessible and ethical pricing, ensuring every patient receives the highest level of care without compromise.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Through comprehensive training programs, live clinical workshops, and hands-on surgical sessions, we empower dental professionals at every stage — from foundational learners to advanced clinicians.
                            </p>
                        </div>
                        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                            <Image src="/assets/images/b3.jpg" alt="About Kindway" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                            <Image src="/assets/images/b1.jpg" alt="Our Story" fill className="object-cover" />
                        </div>
                        <div>
                            <span className="title-subhny">Our Story</span>
                            <h2 className="title-w3l mt-2 mb-6">Kindway BioRezens</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Kindway BioRezens was founded with a simple yet powerful belief — dentistry deserves innovation that is both cutting-edge and accessible. We are more than a company; we are a mission-driven team dedicated to advancing dental care through precision engineering, quality manufacturing, and meaningful innovation.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                As a growing dental-technology startup, we are committed to revolutionizing the industry by creating patient-focused, affordable, and high-performance solutions.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                From advanced implants and biomaterials to reliable dental devices, every product we design reflects our unwavering commitment to safety, performance, and long-term reliability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section-padding bg-gray-50 dark:bg-slate-800">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="title-subhny">Our Team</span>
                        <h2 className="title-w3l mt-2">Executive Team & Advisors</h2>
                    </div>
                    <TeamCarousel members={teamMembers} />
                </div>
            </section>
        </div>
    )
}



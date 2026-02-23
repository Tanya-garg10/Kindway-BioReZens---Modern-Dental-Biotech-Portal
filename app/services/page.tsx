import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Services - Mobile Dental Clinic & Outreach | Kindway BioReZens',
    description: 'Mobile dental clinic services and outreach programs for underserved communities. Bringing quality dental care to remote areas.',
    keywords: 'mobile dental clinic, dental outreach, community dental services, dental camps',
}

export default function ServicesPage() {
    return (
        <div className="mt-20">
            {/* Hero */}
            <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl max-w-3xl mx-auto opacity-90">
                        Bringing quality dental care to communities in need
                    </p>
                </div>
            </section>

            {/* Mobile Dental Clinic */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="title-subhny">Kindway Biorezen</span>
                            <h2 className="title-w3l mt-2 mb-6">Outreach Dental Camp</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                These are outreach services provided to the poor, weak, marginalized and those residing in remote areas. We have fully equipped mobile dental clinic for this purpose.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Our mobile dental clinic brings comprehensive dental care directly to underserved communities, ensuring that quality oral healthcare is accessible to everyone, regardless of their location or economic status.
                            </p>
                            <Link href="/contact" className="btn-primary">
                                Learn More
                            </Link>
                        </div>
                        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                            <Image src="/assets/images/bg3.jpg" alt="Mobile Clinic" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Camp Gallery */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="title-w3l">Workshop Gallery</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="relative h-64 rounded-lg overflow-hidden shadow-md card-hover">
                                <Image
                                    src={`/assets/images/cam${i}.jpg`}
                                    alt={`Camp ${i}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Camp Info */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                            <Image src="/assets/images/camp1.jpg" alt="Dental Camp" fill className="object-cover" />
                        </div>
                        <div>
                            <span className="title-subhny">Kindway BioRezens</span>
                            <h2 className="title-w3l mt-2 mb-6">Free Dental Camp</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Team of Doctors: Prof. Rajesh Bansal, Prof. Monika Bansal, Dr. Robin Chaube, Dr. Smriti Singh, Dr. Omkar, Dr. Ritesh, Dr. Saurabh, Anshu Pandey, Pushpraj Vishwakarma, Himanshu
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Our dental camps provide free screening, consultation, and basic dental treatments to communities that lack access to regular dental care.
                            </p>
                            <Link href="/contact" className="btn-primary">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-emerald-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Partner With Us for Community Outreach
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Join us in bringing quality dental care to underserved communities
                    </p>
                    <Link href="/contact" className="btn-accent text-lg px-8 py-4">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    )
}

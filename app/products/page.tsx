import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Products - Dental Implants & Biomaterials | Kindway BioReZens',
    description: 'Explore our range of dental implants, bone graft materials, and advanced dental devices. High-quality, affordable solutions for modern dental practice.',
    keywords: 'dental implants, bone graft, biomaterials, dental devices, implant systems',
}

export default function ProductsPage() {
    return (
        <div className="mt-20">
            {/* Hero */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Products</h1>
                    <p className="text-xl max-w-3xl mx-auto opacity-90">
                        Pioneering dental solutions engineered for excellence
                    </p>
                </div>
            </section>

            {/* Pioneering Products */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                            <Image src="/assets/images/bg2.jpg" alt="Products" fill className="object-cover" />
                        </div>
                        <div>
                            <span className="title-subhny">What Sets us Apart</span>
                            <h2 className="title-w3l mt-2 mb-6">Pioneering Products</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                At Kindway Biorezens, innovation is at the heart of everything we create. Our product development approach blends cutting-edge technology, scientific precision, and deep clinical insight to deliver solutions that elevate the standard of dental care.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                We engineer and manufacture high-performance dental implants, biomaterials, and advanced chairside solutions designed to offer superior functionality, reliability, and patient comfort — all at attainable prices.
                            </p>
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span className="text-gray-700">Comprehensive Range of Dental Implants</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span className="text-gray-700">Affordable Bone Grafting Solutions</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span className="text-gray-700">Customized Patient-Specific Implants</span>
                                </div>
                            </div>
                            <Link href="/contact" className="btn-primary">
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Gallery */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="title-subhny">Product Gallery</span>
                        <h2 className="title-w3l mt-2">Our Product Range</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="relative h-64 rounded-lg overflow-hidden shadow-md card-hover">
                                <Image
                                    src={`/assets/images/team${i}.jpg`}
                                    alt={`Product ${i}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-blue-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Interested in Our Products?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Contact our sales team to learn more about our product range and pricing
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-accent text-lg px-8 py-4">
                            Contact Sales
                        </Link>
                        <Link href="/training" className="btn-secondary bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8 py-4">
                            Book Training
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Download, ShoppingCart, Phone } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Product Catalogue - Dental Implants & Biomaterials | Kindway BioReZens',
    description: 'Browse our complete catalogue of dental implants, bone graft materials, surgical instruments, and dental devices.',
    keywords: 'dental implant catalogue, bone graft products, dental instruments, implant systems',
}

const productCategories = [
    {
        id: 1,
        name: 'Dental Implant Systems',
        description: 'Complete range of dental implants for all clinical situations',
        products: [
            {
                name: 'QuadHelixx Implant System',
                code: 'QH-001',
                description: 'Premium titanium implants with advanced surface treatment',
                sizes: '3.5mm - 5.0mm diameter, 8mm - 14mm length',
                features: ['Self-tapping design', 'High primary stability', 'Bioactive surface'],
                image: '/assets/images/team1.jpg',
            },
            {
                name: 'Mini Implants',
                code: 'QH-002',
                description: 'Small diameter implants for narrow ridges',
                sizes: '2.5mm - 3.0mm diameter, 10mm - 14mm length',
                features: ['One-piece design', 'Immediate loading', 'Cost-effective'],
                image: '/assets/images/team2.jpg',
            },
        ],
    },
    {
        id: 2,
        name: 'Bone Graft Materials',
        description: 'High-quality bone grafting solutions for augmentation procedures',
        products: [
            {
                name: 'Xenograft Bone Substitute',
                code: 'BG-001',
                description: 'Bovine-derived bone graft material',
                sizes: '0.5cc, 1.0cc, 2.0cc vials',
                features: ['Excellent osteoconduction', 'Slow resorption', 'Natural porosity'],
                image: '/assets/images/team3.jpg',
            },
            {
                name: 'Collagen Membrane',
                code: 'BG-002',
                description: 'Resorbable barrier membrane for GBR',
                sizes: '15x20mm, 20x30mm, 30x40mm',
                features: ['Porcine collagen', 'Dual layer', 'Extended resorption'],
                image: '/assets/images/team4.jpg',
            },
        ],
    },
    {
        id: 3,
        name: 'Surgical Instruments',
        description: 'Precision instruments for implant surgery',
        products: [
            {
                name: 'Implant Surgical Kit',
                code: 'SI-001',
                description: 'Complete surgical kit for implant placement',
                sizes: 'Standard set',
                features: ['German stainless steel', 'Autoclavable', 'Lifetime warranty'],
                image: '/assets/images/team5.jpg',
            },
            {
                name: 'Bone Grafting Instruments',
                code: 'SI-002',
                description: 'Specialized instruments for bone grafting',
                sizes: 'Standard set',
                features: ['Ergonomic design', 'Precision tips', 'Corrosion resistant'],
                image: '/assets/images/team6.jpg',
            },
        ],
    },
    {
        id: 4,
        name: 'Prosthetic Components',
        description: 'Abutments, screws, and prosthetic accessories',
        products: [
            {
                name: 'Titanium Abutments',
                code: 'PR-001',
                description: 'Stock and custom abutments',
                sizes: 'Various angulations and heights',
                features: ['Precision machined', 'Anti-rotational', 'Compatible'],
                image: '/assets/images/team7.jpg',
            },
            {
                name: 'Healing Abutments',
                code: 'PR-002',
                description: 'Soft tissue conditioning components',
                sizes: '3mm - 6mm heights',
                features: ['Smooth surface', 'Easy placement', 'Multiple diameters'],
                image: '/assets/images/team8.jpg',
            },
        ],
    },
]

export default function CataloguePage() {
    return (
        <div className="mt-20">
            {/* Hero */}
            <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Product Catalogue</h1>
                    <p className="text-xl max-w-3xl mx-auto opacity-90 mb-8">
                        Comprehensive range of dental implants, biomaterials, and surgical instruments
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="btn-accent text-lg px-8 py-4 flex items-center justify-center gap-2">
                            <Download className="w-5 h-5" />
                            Download Full Catalogue (PDF)
                        </button>
                        <Link href="/contact" className="btn-secondary bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8 py-4 flex items-center justify-center gap-2">
                            <Phone className="w-5 h-5" />
                            Request Price List
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="bg-gray-50 py-8">
                <div className="container-custom">
                    <div className="flex flex-wrap justify-center gap-4">
                        {productCategories.map((category) => (
                            <a
                                key={category.id}
                                href={`#category-${category.id}`}
                                className="px-6 py-2 rounded-full bg-white text-gray-700 hover:bg-red-600 hover:text-white transition-colors shadow-md"
                            >
                                {category.name}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            {productCategories.map((category) => (
                <section key={category.id} id={`category-${category.id}`} className="section-padding">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="title-w3l mb-4">{category.name}</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {category.products.map((product, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                                    <div className="md:flex">
                                        <div className="md:w-1/3 relative h-64 md:h-auto">
                                            <Image src={product.image} alt={product.name} fill className="object-cover" />
                                        </div>
                                        <div className="md:w-2/3 p-6">
                                            <div className="flex items-start justify-between mb-2">
                                                <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                                                <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
                                                    {product.code}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 mb-4">{product.description}</p>
                                            <div className="mb-4">
                                                <p className="text-sm font-semibold text-gray-700 mb-1">Available Sizes:</p>
                                                <p className="text-sm text-gray-600">{product.sizes}</p>
                                            </div>
                                            <div className="mb-6">
                                                <p className="text-sm font-semibold text-gray-700 mb-2">Key Features:</p>
                                                <ul className="space-y-1">
                                                    {product.features.map((feature, i) => (
                                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="flex flex-wrap gap-3">
                                                <Link href="/contact" className="btn-primary text-sm flex items-center gap-2">
                                                    <ShoppingCart className="w-4 h-4" />
                                                    Request Quote
                                                </Link>
                                                <button className="btn-secondary text-sm">
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Certifications */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="title-w3l mb-4">Quality Certifications</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            All our products meet international quality standards
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {['ISO 13485', 'CE Marked', 'FDA Approved', 'GMP Certified'].map((cert) => (
                            <div key={cert} className="bg-white rounded-xl shadow-md p-6 text-center">
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-red-600">✓</span>
                                </div>
                                <p className="font-semibold text-gray-900">{cert}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bulk Orders */}
            <section className="section-padding bg-red-600 text-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Bulk Orders & Dealer Inquiries
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Special pricing available for bulk orders and authorized dealers. Contact our sales team for customized solutions.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white/10 rounded-lg p-6">
                                <p className="text-3xl font-bold mb-2">20%</p>
                                <p className="text-sm">Discount on Bulk Orders</p>
                            </div>
                            <div className="bg-white/10 rounded-lg p-6">
                                <p className="text-3xl font-bold mb-2">24/7</p>
                                <p className="text-sm">Customer Support</p>
                            </div>
                            <div className="bg-white/10 rounded-lg p-6">
                                <p className="text-3xl font-bold mb-2">Fast</p>
                                <p className="text-sm">Delivery Across India</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-accent text-lg px-8 py-4">
                                Contact Sales Team
                            </Link>
                            <a href="tel:+919151161267" className="btn-secondary bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8 py-4">
                                Call: +91-9151161267
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}



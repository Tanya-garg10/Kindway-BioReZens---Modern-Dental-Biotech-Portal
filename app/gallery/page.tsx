import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Gallery - Photos & Events | Kindway BioReZens',
    description: 'View our gallery of dental products, training workshops, and community outreach programs.',
}

const productImages = [1, 2, 3, 4, 5, 6, 7, 8].map(i => `/assets/images/team${i}.jpg`)
const photoImages = [1, 2, 3, 4, 5, 6, 7, 8].map(i => `/assets/images/cam${i}.jpg`)
const eventImages = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6'].map(i => `/assets/images/${i}.jpg`)

export default function GalleryPage() {
    return (
        <div className="mt-20">
            {/* Hero */}
            <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Gallery</h1>
                    <p className="text-xl max-w-3xl mx-auto opacity-90">
                        Step into a world of healthy smiles and exquisite dental artistry
                    </p>
                </div>
            </section>

            {/* Product Gallery */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="title-subhny">Product Gallery</span>
                        <h2 className="title-w3l mt-2">Our Products</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {productImages.map((img, index) => (
                            <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md card-hover">
                                <Image src={img} alt={`Product ${index + 1}`} fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="title-subhny">Photo Gallery</span>
                        <h2 className="title-w3l mt-2">Training & Workshops</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {photoImages.map((img, index) => (
                            <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md card-hover">
                                <Image src={img} alt={`Workshop ${index + 1}`} fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Event Gallery */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="title-subhny">Event Gallery</span>
                        <h2 className="title-w3l mt-2">Recent Events</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {eventImages.map((img, index) => (
                            <div key={index} className="relative h-80 rounded-lg overflow-hidden shadow-md card-hover">
                                <Image src={img} alt={`Event ${index + 1}`} fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

import Image from 'next/image'
import Link from 'next/link'

export default function WhyChooseUs() {
    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <span className="title-subhny">Why Choose</span>
                        <h2 className="title-w3l mt-2 mb-6">Kindway Biorezens</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            At Kindway Biorezens, we are driven by a mission to reshape the future of dentistry through innovation, accessibility, and compassionate care. As a pioneering startup in dental manufacturing and healthcare services, we design and produce advanced, reliable, and affordable dental implants, biomaterials, and devices that meet global standards of safety and performance.
                        </p>
                        <Link href="/about" className="btn-primary">
                            Read More
                        </Link>
                    </div>
                    <div className="order-1 lg:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                        <Image
                            src="/assets/images/b3.jpg"
                            alt="Why Choose Kindway"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

import Link from 'next/link'

export default function CTASection() {
    return (
        <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <div className="container-custom text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Ready to Transform Your Dental Practice?
                </h2>
                <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                    Join hundreds of dental professionals who trust Kindway BioReZens for innovative solutions, quality products, and expert training.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/training" className="btn-accent text-lg px-8 py-4">
                        Register for Workshop
                    </Link>
                    <Link href="/products" className="btn-secondary bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8 py-4">
                        View Product Catalogue
                    </Link>
                    <Link href="/contact" className="btn-secondary bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8 py-4">
                        Contact Sales
                    </Link>
                </div>
            </div>
        </section>
    )
}

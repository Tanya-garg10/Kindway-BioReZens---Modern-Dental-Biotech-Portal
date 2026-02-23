import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Before & After Gallery - Clinical Results | Kindway BioReZens',
    description: 'View real clinical results from dental implant procedures, bone grafting, and full arch rehabilitation cases.',
    keywords: 'dental implant results, before after implants, bone graft results, clinical cases',
}

const cases = [
    {
        id: 1,
        title: 'Single Tooth Implant Replacement',
        category: 'Dental Implants',
        description: 'Successful single tooth replacement with immediate loading protocol. Patient regained full function and aesthetics.',
        before: '/assets/images/b1.jpg',
        after: '/assets/images/b2.jpg',
        duration: '3 months',
        procedure: 'Single implant with immediate temporary crown',
    },
    {
        id: 2,
        title: 'Full Arch Rehabilitation',
        category: 'Full Arch',
        description: 'Complete upper arch rehabilitation using 6 implants with fixed prosthesis. Life-changing results for the patient.',
        before: '/assets/images/b3.jpg',
        after: '/assets/images/b4.jpg',
        duration: '6 months',
        procedure: 'All-on-6 with immediate loading',
    },
    {
        id: 3,
        title: 'Bone Grafting & Implant Placement',
        category: 'Bone Grafting',
        description: 'Severe bone loss treated with guided bone regeneration followed by implant placement.',
        before: '/assets/images/b5.jpg',
        after: '/assets/images/b6.jpg',
        duration: '9 months',
        procedure: 'GBR with xenograft + implant placement',
    },
    {
        id: 4,
        title: 'Anterior Aesthetic Zone Implant',
        category: 'Aesthetic Implants',
        description: 'Front tooth replacement with emphasis on soft tissue management and natural aesthetics.',
        before: '/assets/images/ex1.jpg',
        after: '/assets/images/ex2.jpg',
        duration: '4 months',
        procedure: 'Immediate implant with soft tissue graft',
    },
    {
        id: 5,
        title: 'Multiple Missing Teeth Restoration',
        category: 'Multiple Implants',
        description: 'Three adjacent missing teeth restored with two implants and a bridge. Cost-effective solution.',
        before: '/assets/images/ex3.jpg',
        after: '/assets/images/bg.jpg',
        duration: '5 months',
        procedure: '2 implants with 3-unit bridge',
    },
    {
        id: 6,
        title: 'Sinus Lift with Implant Placement',
        category: 'Bone Grafting',
        description: 'Insufficient bone height in posterior maxilla treated with sinus lift procedure.',
        before: '/assets/images/bg1.jpg',
        after: '/assets/images/bg2.jpg',
        duration: '8 months',
        procedure: 'Lateral window sinus lift + delayed implant',
    },
]

export default function BeforeAfterPage() {
    return (
        <div className="mt-20">
            {/* Hero */}
            <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Before & After Gallery</h1>
                    <p className="text-xl max-w-3xl mx-auto opacity-90">
                        Real clinical results showcasing the transformative power of dental implants
                    </p>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <div className="container-custom">
                    <p className="text-sm text-gray-700">
                        <strong>Disclaimer:</strong> Results may vary from patient to patient. These cases represent actual clinical outcomes but individual results depend on various factors including bone quality, oral hygiene, and overall health. Consult with a qualified dental professional for personalized treatment planning.
                    </p>
                </div>
            </section>

            {/* Filter Categories */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {['All Cases', 'Dental Implants', 'Bone Grafting', 'Full Arch', 'Aesthetic Implants'].map((category) => (
                            <button
                                key={category}
                                className="px-6 py-2 rounded-full bg-white text-gray-700 hover:bg-emerald-600 hover:text-white transition-colors shadow-md"
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Cases Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {cases.map((caseItem) => (
                            <div key={caseItem.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full font-medium">
                                            {caseItem.category}
                                        </span>
                                        <span className="text-sm text-gray-600">Duration: {caseItem.duration}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{caseItem.title}</h2>
                                    <p className="text-gray-600 mb-4">{caseItem.description}</p>
                                    <p className="text-sm text-gray-700 mb-6">
                                        <strong>Procedure:</strong> {caseItem.procedure}
                                    </p>

                                    {/* Before & After Images */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-700 mb-2 text-center">BEFORE</p>
                                            <div className="relative h-64 rounded-lg overflow-hidden border-4 border-red-200">
                                                <Image src={caseItem.before} alt="Before treatment" fill className="object-cover" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-700 mb-2 text-center">AFTER</p>
                                            <div className="relative h-64 rounded-lg overflow-hidden border-4 border-green-200">
                                                <Image src={caseItem.after} alt="After treatment" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-emerald-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Transform Your Smile?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Schedule a consultation to discuss your treatment options and expected outcomes
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="btn-accent text-lg px-8 py-4">
                            Book Consultation
                        </a>
                        <a href="/training" className="btn-secondary bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8 py-4">
                            Learn These Techniques
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}



import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Calendar, Download, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Training & Workshops - Dental Implant Courses | Kindway BioReZens',
    description: 'Professional dental implant training, tissue augmentation workshops, and hands-on surgical courses for dentists. Expert-led programs with live demonstrations.',
    keywords: 'dental implant training, implant workshop, tissue augmentation course, dental education, surgical training',
}

export default function TrainingPage() {
    return (
        <div className="mt-20">
            {/* Hero */}
            <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Training & Workshops</h1>
                    <p className="text-xl max-w-3xl mx-auto opacity-90">
                        Elevate your expertise with hands-on learning and expert guidance
                    </p>
                </div>
            </section>

            {/* Main Workshop Info */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="title-subhny">Kindway BioRezens</span>
                            <h2 className="title-w3l mt-2 mb-6">Workshop on Dental Implantology</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Dental implants are today's gold standard for replacing missing teeth. However, many clinicians hesitate to integrate implantology into their routine practice due to lack of exposure to proper diagnosis, treatment planning, and surgical execution.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                This intensive workshop will provide participants with a comprehensive understanding of implantology—from fundamentals to live surgical demonstration—enabling them to confidently incorporate implants into their clinical practice.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center space-x-3">
                                    <Users className="w-6 h-6 text-red-600" />
                                    <span className="text-gray-700">Expert Faculty</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Award className="w-6 h-6 text-red-600" />
                                    <span className="text-gray-700">Certification</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Calendar className="w-6 h-6 text-red-600" />
                                    <span className="text-gray-700">Flexible Dates</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Download className="w-6 h-6 text-red-600" />
                                    <span className="text-gray-700">Course Materials</span>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfn-3ipARVcitwERkEnyy-zjfuojuprZM9u7cQS1U98Ow4V0w/viewform"
                                    target="_blank"
                                    className="btn-primary"
                                >
                                    Register Now
                                </Link>
                                <Link href="/assets/doc/dentalbrochure.pdf" target="_blank" className="btn-secondary">
                                    Download Brochure
                                </Link>
                                <Link href="/assets/doc/syllabus.pdf" target="_blank" className="btn-secondary">
                                    View Syllabus
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                            <Image src="/assets/images/training.jpg" alt="Training" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Training Features */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                            <Image src="/assets/images/ex2.jpg" alt="Training" fill className="object-cover" />
                        </div>
                        <div>
                            <span className="title-subhny">What Sets us Apart</span>
                            <h2 className="title-w3l mt-2 mb-6">Training and Education</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                At Kindway Biorezens, we believe that excellence in dentistry is built on continuous learning. Our commitment goes beyond manufacturing products — we invest in the growth of dental professionals by offering advanced, practice-oriented training tailored to real-world clinical needs.
                            </p>
                            <h3 className="text-2xl font-semibold mb-4">Comprehensive Learning Experience</h3>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                                    <span className="text-gray-700">Expert-led lectures to build strong theoretical understanding</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                                    <span className="text-gray-700">Live clinical demonstrations and case discussions</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                                    <span className="text-gray-700">Hands-on practice sessions on models and typodonts</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                                    <span className="text-gray-700">Opportunities to observe live patient treatments</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration QR */}
            <section className="section-padding">
                <div className="container-custom text-center">
                    <h2 className="title-w3l mb-8">Quick Registration</h2>
                    <p className="text-xl text-gray-600 mb-8">Scan the QR code below to register for our upcoming workshop</p>
                    <div className="inline-block p-8 bg-white rounded-xl shadow-lg">
                        <Image
                            src="/assets/images/qrform.jpeg"
                            alt="Registration QR Code"
                            width={300}
                            height={300}
                            className="mx-auto"
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-purple-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Advance Your Skills?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Join our next workshop and transform your dental practice
                    </p>
                    <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfn-3ipARVcitwERkEnyy-zjfuojuprZM9u7cQS1U98Ow4V0w/viewform"
                        target="_blank"
                        className="btn-accent text-lg px-8 py-4"
                    >
                        Register Now
                    </Link>
                </div>
            </section>
        </div>
    )
}



import Image from 'next/image'
import type { Metadata } from 'next'
import { Star, Quote } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Testimonials & Reviews | Kindway BioReZens',
    description: 'Read reviews from dentists who attended our workshops and patients who received treatment. Real experiences and success stories.',
    keywords: 'dental implant reviews, workshop testimonials, patient reviews, dentist feedback',
}

const dentistTestimonials = [
    {
        id: 1,
        name: 'Dr. Amit Sharma',
        designation: 'BDS, MDS (Prosthodontics)',
        location: 'Delhi',
        image: '/assets/images/t1.jpg',
        rating: 5,
        text: 'The implant training workshop at Kindway was exceptional. The hands-on practice and live surgery demonstrations gave me the confidence to start placing implants in my practice. Dr. Rajesh Bansal is an excellent teacher.',
        course: 'Dental Implant Training Workshop',
        date: 'January 2026',
    },
    {
        id: 2,
        name: 'Dr. Priya Patel',
        designation: 'BDS, MDS (Periodontics)',
        location: 'Mumbai',
        image: '/assets/images/t2.jpg',
        rating: 5,
        text: 'Outstanding bone grafting course! The faculty explained complex procedures in a simple manner. The quality of training materials and the small batch size ensured personalized attention. Highly recommended!',
        course: 'Advanced Bone Grafting Techniques',
        date: 'December 2025',
    },
    {
        id: 3,
        name: 'Dr. Rahul Verma',
        designation: 'BDS',
        location: 'Lucknow',
        image: '/assets/images/t3.jpg',
        rating: 5,
        text: 'As a general dentist, I was hesitant about implant dentistry. This workshop changed everything. The step-by-step approach and continuous mentorship support have been invaluable. I have successfully placed 15 implants since the course.',
        course: 'Dental Implant Training Workshop',
        date: 'November 2025',
    },
    {
        id: 4,
        name: 'Dr. Sneha Reddy',
        designation: 'BDS, MDS (Oral Surgery)',
        location: 'Bangalore',
        image: '/assets/images/t4.jpg',
        rating: 5,
        text: 'The tissue augmentation workshop was incredibly detailed. Prof. Monika Bansal shared practical tips that you won\'t find in textbooks. The live patient procedures were the highlight. Worth every penny!',
        course: 'Tissue Augmentation Workshop',
        date: 'October 2025',
    },
    {
        id: 5,
        name: 'Dr. Vikram Singh',
        designation: 'BDS, MDS (Prosthodontics)',
        location: 'Jaipur',
        image: '/assets/images/t5.jpg',
        rating: 5,
        text: 'Best investment in my career! The full arch rehabilitation course covered everything from diagnosis to final prosthesis. The faculty\'s clinical experience and teaching methodology are top-notch.',
        course: 'Full Arch Rehabilitation Course',
        date: 'September 2025',
    },
    {
        id: 6,
        name: 'Dr. Anjali Gupta',
        designation: 'BDS',
        location: 'Pune',
        image: '/assets/images/t6.jpg',
        rating: 5,
        text: 'Kindway\'s training programs are well-structured and practical. The post-course support and mentorship have been extremely helpful. I feel confident handling complex cases now.',
        course: 'Dental Implant Training Workshop',
        date: 'August 2025',
    },
]

const patientTestimonials = [
    {
        id: 1,
        name: 'Mr. Rajesh Kumar',
        age: 52,
        location: 'Varanasi',
        image: '/assets/images/team1.jpg',
        rating: 5,
        text: 'I was missing several teeth and couldn\'t eat properly. Dr. Rajesh Bansal placed dental implants and now I can eat anything! The treatment was painless and the results are amazing. Thank you Kindway team!',
        treatment: 'Multiple Dental Implants',
        date: 'December 2025',
    },
    {
        id: 2,
        name: 'Mrs. Sunita Devi',
        age: 48,
        location: 'Varanasi',
        image: '/assets/images/team2.jpg',
        rating: 5,
        text: 'I received treatment at the mobile dental clinic camp. The doctors were very caring and professional. They provided free dental care and educated us about oral hygiene. Grateful for this service!',
        treatment: 'Dental Camp - Free Treatment',
        date: 'January 2026',
    },
    {
        id: 3,
        name: 'Mr. Anil Sharma',
        age: 60,
        location: 'Varanasi',
        image: '/assets/images/team3.jpg',
        rating: 5,
        text: 'After losing all my upper teeth, I got full arch implants. The transformation is incredible! I look younger and can smile confidently again. The entire team was supportive throughout the treatment.',
        treatment: 'Full Arch Rehabilitation',
        date: 'November 2025',
    },
]

export default function TestimonialsPage() {
    return (
        <div className="mt-20">
            {/* Hero */}
            <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Testimonials & Reviews</h1>
                    <p className="text-xl max-w-3xl mx-auto opacity-90">
                        Real experiences from dentists and patients who trust Kindway BioReZens
                    </p>
                </div>
            </section>

            {/* Overall Rating */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto text-center">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-5xl font-bold text-gray-900 mb-2">4.9/5.0</p>
                        <p className="text-xl text-gray-600 mb-4">Based on 150+ reviews</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            <div>
                                <p className="text-3xl font-bold text-red-600">95%</p>
                                <p className="text-gray-600">Would Recommend</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-red-600">1160+</p>
                                <p className="text-gray-600">Students Trained</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-red-600">98%</p>
                                <p className="text-gray-600">Satisfaction Rate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dentist Testimonials */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="title-subhny">What Dentists Say</span>
                        <h2 className="title-w3l mt-2">Workshop & Training Reviews</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {dentistTestimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6 card-hover relative">
                                <Quote className="absolute top-4 right-4 w-12 h-12 text-red-100" />
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                        <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                                        <p className="text-sm text-gray-600">{testimonial.designation}</p>
                                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>
                                <div className="border-t pt-4">
                                    <p className="text-sm font-medium text-red-600">{testimonial.course}</p>
                                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Patient Testimonials */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="title-subhny">Patient Stories</span>
                        <h2 className="title-w3l mt-2">Life-Changing Results</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {patientTestimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6 card-hover">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                        <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                                        <p className="text-sm text-gray-600">Age: {testimonial.age}</p>
                                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>
                                <div className="border-t pt-4">
                                    <p className="text-sm font-medium text-emerald-600">{testimonial.treatment}</p>
                                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Testimonials */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="title-subhny">Video Reviews</span>
                        <h2 className="title-w3l mt-2">Hear From Our Students</h2>
                    </div>
                    <div className="bg-gray-100 rounded-xl p-12 text-center">
                        <p className="text-xl text-gray-600 mb-4">Video testimonials coming soon!</p>
                        <p className="text-gray-500">We're collecting video reviews from our workshop participants.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-red-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Join Our Success Stories
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Be part of our growing community of skilled dental professionals
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/training" className="btn-accent text-lg px-8 py-4">
                            Register for Workshop
                        </a>
                        <a href="/contact" className="btn-secondary bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8 py-4">
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}



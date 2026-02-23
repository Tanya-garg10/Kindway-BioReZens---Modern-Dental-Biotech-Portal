import Link from 'next/link'
import type { Metadata } from 'next'
import { Calendar, MapPin, Users, Clock, Download } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Events Calendar - Upcoming Workshops | Kindway BioReZens',
    description: 'View upcoming dental implant workshops, training courses, and outreach programs. Register for hands-on surgical training and educational events.',
    keywords: 'dental workshop calendar, implant training dates, upcoming courses, dental events',
}

const upcomingEvents = [
    {
        id: 1,
        title: 'Dental Implant Training Workshop - Basic Level',
        date: 'March 15-17, 2026',
        time: '9:00 AM - 5:00 PM',
        location: 'Kindway Training Center, Varanasi',
        seats: '20 seats available',
        price: '₹45,000',
        type: 'Workshop',
        level: 'Beginner',
        description: 'Comprehensive 3-day workshop covering fundamentals of dental implantology with hands-on practice and live surgery demonstrations.',
        highlights: [
            'Live surgical demonstrations',
            'Hands-on practice on models',
            'Case planning sessions',
            'Certificate of completion',
        ],
    },
    {
        id: 2,
        title: 'Advanced Bone Grafting Techniques',
        date: 'March 22-23, 2026',
        time: '9:00 AM - 6:00 PM',
        location: 'Kindway Training Center, Varanasi',
        seats: '15 seats available',
        price: '₹35,000',
        type: 'Workshop',
        level: 'Advanced',
        description: 'Advanced course on bone augmentation procedures including GBR, sinus lift, and ridge augmentation techniques.',
        highlights: [
            'Advanced surgical techniques',
            'Live patient procedures',
            'Biomaterial selection',
            'Complication management',
        ],
    },
    {
        id: 3,
        title: 'Tissue Augmentation & Soft Tissue Management',
        date: 'April 5-6, 2026',
        time: '9:00 AM - 5:00 PM',
        location: 'Kindway Training Center, Varanasi',
        seats: '18 seats available',
        price: '₹30,000',
        type: 'Workshop',
        level: 'Intermediate',
        description: 'Master soft tissue grafting techniques for optimal aesthetic outcomes in implant dentistry.',
        highlights: [
            'Soft tissue grafting',
            'Aesthetic zone management',
            'Suturing techniques',
            'Clinical case discussions',
        ],
    },
    {
        id: 4,
        title: 'Full Arch Rehabilitation Course',
        date: 'April 19-21, 2026',
        time: '9:00 AM - 6:00 PM',
        location: 'Kindway Training Center, Varanasi',
        seats: '12 seats available',
        price: '₹55,000',
        type: 'Course',
        level: 'Advanced',
        description: 'Comprehensive course on full arch implant rehabilitation including All-on-4 and All-on-6 concepts.',
        highlights: [
            'Full arch concepts',
            'Immediate loading protocols',
            'Prosthetic considerations',
            'Live surgery observation',
        ],
    },
    {
        id: 5,
        title: 'Mobile Dental Clinic Outreach - Rural Health Camp',
        date: 'April 28, 2026',
        time: '8:00 AM - 4:00 PM',
        location: 'Rural Villages, Varanasi District',
        seats: 'Volunteers needed',
        price: 'Free (Volunteer)',
        type: 'Outreach',
        level: 'All Levels',
        description: 'Join our mobile dental clinic team to provide free dental care to underserved communities.',
        highlights: [
            'Community service',
            'Free dental screenings',
            'Basic treatments',
            'Health education',
        ],
    },
    {
        id: 6,
        title: 'Digital Dentistry in Implantology',
        date: 'May 10-11, 2026',
        time: '9:00 AM - 5:00 PM',
        location: 'Kindway Training Center, Varanasi',
        seats: '20 seats available',
        price: '₹32,000',
        type: 'Workshop',
        level: 'Intermediate',
        description: 'Learn to integrate digital tools in implant planning and execution including CBCT and guided surgery.',
        highlights: [
            'CBCT interpretation',
            'Digital planning software',
            'Guided surgery protocols',
            'CAD/CAM integration',
        ],
    },
]

export default function EventsPage() {
    return (
        <div className="mt-20">
            {/* Hero */}
            <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Events Calendar</h1>
                    <p className="text-xl max-w-3xl mx-auto opacity-90">
                        Upcoming workshops, training courses, and community outreach programs
                    </p>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="bg-gray-50 py-8">
                <div className="container-custom">
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-6 py-2 rounded-full bg-purple-600 text-white shadow-md">
                            All Events
                        </button>
                        <button className="px-6 py-2 rounded-full bg-white text-gray-700 hover:bg-purple-600 hover:text-white transition-colors shadow-md">
                            Workshops
                        </button>
                        <button className="px-6 py-2 rounded-full bg-white text-gray-700 hover:bg-purple-600 hover:text-white transition-colors shadow-md">
                            Courses
                        </button>
                        <button className="px-6 py-2 rounded-full bg-white text-gray-700 hover:bg-purple-600 hover:text-white transition-colors shadow-md">
                            Outreach Programs
                        </button>
                    </div>
                </div>
            </section>

            {/* Events List */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="space-y-8">
                        {upcomingEvents.map((event) => (
                            <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="md:flex">
                                    {/* Date Badge */}
                                    <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-8 md:w-64 flex flex-col items-center justify-center">
                                        <Calendar className="w-12 h-12 mb-4" />
                                        <div className="text-center">
                                            <p className="text-2xl font-bold">{event.date.split(',')[0]}</p>
                                            <p className="text-lg opacity-90">{event.date.split(',')[1]}</p>
                                        </div>
                                        <div className="mt-4 px-4 py-2 bg-white/20 rounded-full text-sm">
                                            {event.type}
                                        </div>
                                    </div>

                                    {/* Event Details */}
                                    <div className="flex-1 p-8">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h2 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h2>
                                                <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
                                                    {event.level}
                                                </span>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-3xl font-bold text-purple-600">{event.price}</p>
                                                <p className="text-sm text-gray-600">{event.seats}</p>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-4">{event.description}</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div className="flex items-center gap-2 text-gray-700">
                                                <Clock className="w-5 h-5 text-purple-600" />
                                                <span>{event.time}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-700">
                                                <MapPin className="w-5 h-5 text-purple-600" />
                                                <span>{event.location}</span>
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <h3 className="font-semibold text-gray-900 mb-2">Highlights:</h3>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                {event.highlights.map((highlight, index) => (
                                                    <li key={index} className="flex items-center gap-2 text-gray-600">
                                                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex flex-wrap gap-4">
                                            <Link
                                                href="https://docs.google.com/forms/d/e/1FAIpQLSfn-3ipARVcitwERkEnyy-zjfuojuprZM9u7cQS1U98Ow4V0w/viewform"
                                                target="_blank"
                                                className="btn-primary"
                                            >
                                                Register Now
                                            </Link>
                                            <Link href="/assets/doc/dentalbrochure.pdf" target="_blank" className="btn-secondary">
                                                <Download className="w-5 h-5 mr-2" />
                                                Download Brochure
                                            </Link>
                                            <Link href="/contact" className="btn-secondary">
                                                Contact for Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-purple-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Can't Find What You're Looking For?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Contact us to discuss custom training programs or group bookings
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-accent text-lg px-8 py-4">
                            Contact Us
                        </Link>
                        <Link href="/training" className="btn-secondary bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8 py-4">
                            View All Training Programs
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}



import Image from 'next/image'
import Link from 'next/link'

const activities = [
    {
        date: 'Dec 22, 2024',
        title: 'Dental Implant Training/Workshop-Only for Dentist',
        description: 'Join our exclusive Dental Implant Training/Workshop, tailored solely for Dentists. Elevate your expertise with hands-on learning, expert guidance, and cutting-edge techniques.',
        image: '/assets/images/b1.jpg',
    },
    {
        date: 'Jan 16-22, 2024',
        title: 'Tissue Augmentation Training Course',
        description: 'Enroll in our Tissue Augmentation Training/Workshop/Course designed for dental professionals. Explore advanced techniques, hands-on practice, and expert insights.',
        image: '/assets/images/b3.jpg',
    },
    {
        date: 'Dec 22, 2024',
        title: 'Outreach programs - Camps for general public',
        description: 'Join us for informative sessions, screenings, and interactive activities focused on oral health education. Empower yourself with valuable knowledge.',
        image: '/assets/images/b6.jpg',
    },
]

export default function RecentActivities() {
    return (
        <section className="section-padding">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <span className="title-subhny">Kindway</span>
                    <h2 className="title-w3l mt-2">Recent Activities</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {activities.map((activity, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                            <div className="relative h-64">
                                <Image
                                    src={activity.image}
                                    alt={activity.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <p className="text-sm text-blue-600 font-semibold mb-2">{activity.date}</p>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">{activity.title}</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">{activity.description}</p>
                                <Link href="/training" className="btn-primary text-sm">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

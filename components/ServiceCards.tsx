import { Users, Shield, Globe } from 'lucide-react'

const services = [
    {
        icon: Users,
        title: 'Training and Education',
        description: 'We offer training, workshops, and educational resources to empower dental professionals with the latest techniques and best practices.',
    },
    {
        icon: Shield,
        title: 'Dental Camp',
        description: 'We understand the challenges you face, and we are here to offer solutions and support to the dental problems.',
    },
    {
        icon: Globe,
        title: 'Global Reach',
        description: 'We proudly serve dental practitioners around the world, ensuring that our products and services are accessible to all.',
    },
]

export default function ServiceCards() {
    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <service.icon className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Blog - Dental Education & Insights | Kindway BioReZens',
    description: 'Educational articles about dental implants, bone grafts, surgical techniques, and best practices in implantology.',
    keywords: 'dental implants training, bone graft materials, implant surgery planning, dental education, case studies',
}

const blogPosts = [
    {
        id: 1,
        title: 'How Dental Implants Work: A Complete Guide',
        excerpt: 'Understanding the science behind dental implants and why they are the gold standard for tooth replacement. Learn about osseointegration, implant materials, and success rates.',
        image: '/assets/images/b1.jpg',
        author: 'Dr. Rajesh Bansal',
        date: 'February 15, 2026',
        category: 'Implantology',
        readTime: '8 min read',
    },
    {
        id: 2,
        title: 'Importance of Bone Grafts in Implant Success',
        excerpt: 'Bone grafting is crucial for successful implant placement. Discover different types of bone graft materials, when they are needed, and how they improve implant outcomes.',
        image: '/assets/images/b3.jpg',
        author: 'Prof. Monika Bansal',
        date: 'February 10, 2026',
        category: 'Bone Grafting',
        readTime: '10 min read',
    },
    {
        id: 3,
        title: 'Tips for Implant Surgery Planning',
        excerpt: 'Proper planning is essential for implant success. Learn about diagnostic tools, treatment planning software, and surgical protocols that ensure predictable results.',
        image: '/assets/images/b2.jpg',
        author: 'Dr. Robin Kr. Chaube',
        date: 'February 5, 2026',
        category: 'Surgical Planning',
        readTime: '12 min read',
    },
    {
        id: 4,
        title: 'Case Study: Full Arch Rehabilitation',
        excerpt: 'A detailed case study of full arch rehabilitation using dental implants. Follow the journey from diagnosis to final restoration with clinical photos and insights.',
        image: '/assets/images/b4.jpg',
        author: 'Dr. Rajesh Bansal',
        date: 'January 28, 2026',
        category: 'Case Studies',
        readTime: '15 min read',
    },
    {
        id: 5,
        title: 'Tissue Augmentation Techniques',
        excerpt: 'Advanced soft tissue management techniques for optimal aesthetic outcomes. Learn about grafting materials, surgical approaches, and healing protocols.',
        image: '/assets/images/b5.jpg',
        author: 'Prof. Monika Bansal',
        date: 'January 20, 2026',
        category: 'Soft Tissue',
        readTime: '9 min read',
    },
    {
        id: 6,
        title: 'Workshop Highlights: Hands-On Implant Training',
        excerpt: 'Recap of our recent implant workshop with live surgery demonstrations, hands-on practice sessions, and participant feedback. See what makes our training unique.',
        image: '/assets/images/b6.jpg',
        author: 'Kindway Team',
        date: 'January 15, 2026',
        category: 'Workshops',
        readTime: '6 min read',
    },
    {
        id: 7,
        title: 'Immediate Loading Protocols',
        excerpt: 'When can implants be loaded immediately? Understand the criteria, benefits, and risks of immediate loading protocols in modern implant dentistry.',
        image: '/assets/images/ex1.jpg',
        author: 'Dr. Sourav Kr. Vishwakarma',
        date: 'January 10, 2026',
        category: 'Implantology',
        readTime: '11 min read',
    },
    {
        id: 8,
        title: 'Managing Implant Complications',
        excerpt: 'Prevention and management of common implant complications. Learn to identify early warning signs and implement effective treatment strategies.',
        image: '/assets/images/ex2.jpg',
        author: 'Dr. Rajesh Bansal',
        date: 'January 5, 2026',
        category: 'Clinical Practice',
        readTime: '13 min read',
    },
    {
        id: 9,
        title: 'Digital Dentistry in Implantology',
        excerpt: 'How digital tools are revolutionizing implant dentistry. Explore CBCT imaging, digital planning software, and guided surgery systems.',
        image: '/assets/images/ex3.jpg',
        author: 'Dr. Robin Kr. Chaube',
        date: 'December 28, 2025',
        category: 'Technology',
        readTime: '10 min read',
    },
]

const categories = ['All', 'Implantology', 'Bone Grafting', 'Surgical Planning', 'Case Studies', 'Workshops', 'Technology']

export default function BlogPage() {
    return (
        <div className="mt-20">
            {/* Hero */}
            <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Educational Blog</h1>
                    <p className="text-xl max-w-3xl mx-auto opacity-90">
                        Expert insights, case studies, and educational content for dental professionals
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className="px-6 py-2 rounded-full bg-white text-gray-700 hover:bg-red-600 hover:text-white transition-colors shadow-md"
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                                <div className="relative h-64">
                                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-red-600 text-white text-sm rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{post.date}</span>
                                        </div>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h2 className="text-xl font-semibold mb-3 text-gray-900 hover:text-red-600 transition-colors">
                                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                                    </h2>
                                    <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <User className="w-4 h-4" />
                                            <span>{post.author}</span>
                                        </div>
                                        <Link
                                            href={`/blog/${post.id}`}
                                            className="text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
                                        >
                                            Read More <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="section-padding bg-red-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Subscribe to Our Newsletter
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Get the latest articles, case studies, and workshop updates delivered to your inbox
                    </p>
                    <form className="max-w-md mx-auto flex gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-3 rounded-lg text-gray-900"
                            required
                        />
                        <button type="submit" className="btn-accent px-8 py-3">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}




import Image from 'next/image'

export default function MissionVision() {
    return (
        <section className="section-padding">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="title-subhny">Kindway BioReZens</span>
                        <h2 className="title-w3l mt-2 mb-6">Mission</h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            At Kindway Biorezenes Medical Manufacturing, we envision a future where healthcare products and technologies are not only cutting-edge but also inherently sustainable. Our commitment is to lead the medical manufacturing industry in developing and producing innovative, biorenewable solutions that contribute to a healthier planet.
                        </p>
                        <h2 className="title-w3l mb-6">Vision</h2>
                        <p className="text-gray-600 leading-relaxed">
                            At Kindway Biorezens, our vision is to be at the forefront of transformative biorenewable technologies that not only redefine industries but also contribute to a kinder and more sustainable world. We aspire to lead in creating innovative solutions that seamlessly integrate with nature, fostering a harmonious balance between human progress and environmental well-being.
                        </p>
                    </div>
                    <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                        <Image
                            src="/assets/images/sirji.jpg"
                            alt="Kindway BioReZens Leadership"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface TeamMember {
    name: string
    role: string
    image: string
}

interface TeamCarouselProps {
    members: TeamMember[]
}

export default function TeamCarousel({ members }: TeamCarouselProps) {
    return (
        <div className="team-carousel-wrapper">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                className="team-swiper"
            >
                {members.map((member, index) => (
                    <SwiperSlide key={index}>
                        <div className="text-center pb-12">
                            <div className="relative h-56 mb-4 rounded-xl overflow-hidden shadow-md group">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{member.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
                .team-carousel-wrapper {
                    position: relative;
                    padding: 0 40px;
                }

                .team-swiper {
                    padding-bottom: 50px;
                }

                .team-swiper .swiper-button-next,
                .team-swiper .swiper-button-prev {
                    color: #F42A2A;
                    background: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
                }

                .team-swiper .swiper-button-next:after,
                .team-swiper .swiper-button-prev:after {
                    font-size: 18px;
                    font-weight: bold;
                }

                .team-swiper .swiper-button-next:hover,
                .team-swiper .swiper-button-prev:hover {
                    background: #F42A2A;
                    color: white;
                }

                .team-swiper .swiper-pagination-bullet {
                    background: #cbd5e1;
                    opacity: 1;
                }

                .team-swiper .swiper-pagination-bullet-active {
                    background: #F42A2A;
                }

                @media (max-width: 640px) {
                    .team-carousel-wrapper {
                        padding: 0 20px;
                    }
                }
            `}</style>
        </div>
    )
}

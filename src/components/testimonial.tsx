'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export function Testimonials() {
    const testimonials = [
        {
            quote:
                "I had NextSunPower clean my solar panels and It turned out to be the best decision. They were polite, professional, and went above and beyond to ensure all of my panels were clean. Output on my system increased significantly after maintenance. I commend them on their professionalism and would use them again without hesitation.",
            name: "David Thompson",
            title: "Phoenix, AZ",
            image: "/avatar/girl-1.avif",
        },
        {
            quote:
                "From the consultation to the final installation, NextSunPower's personnel was transparent and courteous. They walked me through everything and kept me in the loop throughout. The installation itself moved very fast, and the system has been running perfectly since then. Their customer support is unbeatable.",
            name: "Linda Garcia ",
            title: "Orlando, FL",
            image: "/avatar/boy-1.avif",
        },
        {
            quote:
                "I have had NextSunPower's solar panels for over a year now and their cleaning and maintenance services are really great. Booking an appointment is not that much of a hassle, and the team is always punctual. They monitor the system performance and ensure everything runs smoothly.",
            name: "Vinni Maxwell",
            title: "Delaware",
            image: "/avatar/girl-2.avif",
        },
        {
            quote:
                "NextSunPower made the switch to solar incredibly easy for my family. The installation team arrived on time, explained every step, and finished the job efficiently. They even cleaned up thoroughly after themselves, leaving our property spotless. I’m already seeing savings on my energy bill and couldn’t be happier with the process.",
            name: "Jessica Miller",
            title: "Austin, TX",
            image: "/avatar/boy-2.jpeg",
        },
    ];

    return (
        <section className="bg-white dark:bg-gray-900 py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                    What our <span className="text-primary">clients</span> say
                </h2>

                <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
                    Here’s what students and professionals have to say about their experience with Nextsunpower.
                </p>

                <div className="mt-10">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8 h-full flex flex-col justify-between">
                                    <p className="text-gray-500 dark:text-gray-300 mb-6 line-clamp-4">
                                        “{testimonial.quote}”
                                    </p>
                                    <div className="flex items-center mt-auto">
                                        <img
                                            className="object-cover rounded-full w-14 h-14"
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                        />
                                        <div className="mx-4">
                                            <h3 className="font-semibold text-primary">{testimonial.name}</h3>
                                            <span className="text-sm text-gray-500 dark:text-gray-300">{testimonial.title}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Separator } from '../ui/separator';


export const blogs = [
    { id: 1, main: 'How to legally resolve family disputes easily', img: '/blog1.jpeg', date: '15-02-2025' },
    { id: 2, main: 'How to legally resolve family disputes easily', img: '/blog2.png', date: '15-02-2025' },
    { id: 3, main: 'How to legally resolve family disputes easily', img: '/blog3.jpeg', date: '15-02-2025' },
    { id: 4, main: 'How to legally resolve family disputes easily', img: '/blog4.jpeg', date: '15-02-2025' },
    { id: 5, main: 'How to legally resolve family disputes easily', img: '/blog5.jpeg', date: '15-02-2025' },
]

const Carousel = () => {

    const content = (
        <>
            {blogs.map((blog, i) => (
                <SwiperSlide key={i}>
                    <div className={`flex gap-x-3 items-center cursor-pointer relative group`} >
                        <img src={`/blogs/${blog.img}`} className='h-full min-h-60 filter grayscale group-hover:filter-none' alt="" />
                        <div className="absolute px-4 py-3 -bottom-4 group-hover:bottom-4 right-4 left-4 bg-white z-10 transition-all duration-500 opacity-0 group-hover:opacity-100">
                            <div className="flex flex-col">
                                <p className='text-lg modern'>{blog.date}</p>
                                <p className="text-xl modern">{blog.main} <span className='text-primary'>{blog.main}</span></p>
                            </div>
                            <div className="absolute bg-primary flex items-center justify-center h-12 w-12 rounded-full -bottom-4 -right-4 hover:-rotate-45 transition-all duration-500">
                                <FaLongArrowAltRight />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </>
    );

    return (
        <section className="py-20 paddingx">
            <div className="flex-col flex gap-y-4 text-center modern">
                <div className="text-primary font-semibold text-xl flex gap-x-2 items-center justify-center whitespace-nowrap">
                    <Separator className='sm:w-20 w-10 h-[2px]' />
                    Every success has a Story
                    <Separator className='sm:w-20 w-10 h-[2px]' />
                </div>
                <p className='text-4xl font-semibold'>Turning your goals into {''}
                    <span className="text-primary">
                        Accomplishments
                    </span>
                </p>
            </div>
            <div className="mx-auto px-4 py-10 sm:px-0">
                <Swiper
                    slidesPerView={1}
                    modules={[Autoplay]}
                    spaceBetween={20}
                    breakpoints={{
                        500: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1100: { slidesPerView: 3 },
                        1600: { slidesPerView: 4 },
                    }}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    id="blogsswiper"
                    className="swiperblog"
                >
                    {content}
                </Swiper>
            </div>
        </section>
    );
};

export default Carousel
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const categories = [
    { id: 1, img: '/category1.jpeg', name: 'Empowering Justice through ', name2: 'intelligent solutions', text: 'Fusce Taciti Varius In Nascetur Accumsan Pellentesque Tempor Mi Ipsum Finibus Etiam Cras Viverra Nisi Nisl Tempus Convallis Curae Ipsum Imperdiet Viverra Mattis Vel Auctor Posuere Lorem Enim Morbi Ante Curabitur Mollis Commodo', title1: 'Turning Legal Challenges', title2: ' Into Opportunities', title3: ' With Expert Legal Support' },
    { id: 2, img: '/category2.jpg', name: 'Empowering Justice through ', name2: 'intelligent solutions', text: 'Fusce Taciti Varius In Nascetur Accumsan Pellentesque Tempor Mi Ipsum Finibus Etiam Cras Viverra Nisi Nisl Tempus Convallis Curae Ipsum Imperdiet Viverra Mattis Vel Auctor Posuere Lorem Enim Morbi Ante Curabitur Mollis Commodo', title1: 'Turning Legal Challenges', title2: ' Into Opportunities', title3: ' With Expert Legal Support' },
    { id: 3, img: '/category3.jpg', name: 'Empowering Justice through ', name2: 'intelligent solutions', text: 'Fusce Taciti Varius In Nascetur Accumsan Pellentesque Tempor Mi Ipsum Finibus Etiam Cras Viverra Nisi Nisl Tempus Convallis Curae Ipsum Imperdiet Viverra Mattis Vel Auctor Posuere Lorem Enim Morbi Ante Curabitur Mollis Commodo', title1: 'Turning Legal Challenges', title2: ' Into Opportunities', title3: ' With Expert Legal Support' },
    { id: 4, img: '/category1.jpeg', name: 'Empowering Justice through ', name2: 'intelligent solutions', text: 'Fusce Taciti Varius In Nascetur Accumsan Pellentesque Tempor Mi Ipsum Finibus Etiam Cras Viverra Nisi Nisl Tempus Convallis Curae Ipsum Imperdiet Viverra Mattis Vel Auctor Posuere Lorem Enim Morbi Ante Curabitur Mollis Commodo', title1: 'Turning Legal Challenges', title2: ' Into Opportunities', title3: ' With Expert Legal Support' },
]

const CategorySwiper = ({onChange}) => {

    const content = (
        <>
            {categories.map((category, i) => (
                <SwiperSlide key={i}>
                    <div className={`flex gap-x-3 items-center cursor-pointer`} onClick={()=>onChange(category.id)}>
                        <div className="border-primary border-4 rounded-full">
                            <img src={`/categories/${category.img}`} className='h-16 w-26 rounded-full' alt="" />
                        </div>
                        <p className="text-2xl md:text-3xl modern">{category.name} <span className='text-primary'>{category.name2}</span></p>
                    </div>
                </SwiperSlide>
            ))}
        </>
    );

    return (
        <section className="">
            <div className="mx-auto px-4 sm:px-0">
                <Swiper
                    slidesPerView={1}
                    modules={[Autoplay]}
                    spaceBetween={20}
                    breakpoints={{
                        500: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
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

export default CategorySwiper
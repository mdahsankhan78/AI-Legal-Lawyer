import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const categories = [
    { id: 1,main:'Al in Real Estate Consulting ', img: '/category1.jpeg',img2:'/categories1.jpg', name: 'Empowering Justice through ', name2: 'intelligent solutions', text: 'Tools are increasingly being used in property consulting to analyze market trends, predict property values, and assess risks. ', title1: 'Turning Legal Challenges', title2: ' Into Opportunities', title3: ' With Expert Legal Support' },
    { id: 2,main:'Al in Traffic Violations ', img: '/category2.jpg',img2:'/categories2.jpg', name: 'Empowering Justice through ', name2: 'intelligent solutions', text: "Understanding traffic laws and how to address violations can save you time and money. You're seeking advice on resolving tickets. ", title1: 'Turning Legal Challenges', title2: ' Into Opportunities', title3: ' With Expert Legal Support' },
    { id: 3,main:'Al in Criminal Law ', img: '/category3.jpg',img2:'/categories3.jpg', name: 'Empowering Justice through ', name2: 'intelligent solutions', text: 'Understanding your rights in criminal cases is crucial. Get guidance on defense preparation and support for bail procedures. ', title1: 'Turning Legal Challenges', title2: ' Into Opportunities', title3: ' With Expert Legal Support' },
    { id: 4,main:'Al in Family Law ', img: '/category1.jpeg',img2:'/categories4.jpg', name: 'Empowering Justice through ', name2: 'intelligent solutions', text: 'Get help with divorce, custody, alimony, and adoption procedures. Navigate family law with expert guidance.', title1: 'Turning Legal Challenges', title2: ' Into Opportunities', title3: ' With Expert Legal Support'  },
    { id: 5,main:'Al in Tax law ', img: '/category1.jpeg',img2:'/categories3.jpg', name: 'Empowering Justice through ', name2: 'intelligent solutions', text: 'Al is revolutionizing tax law by automating processes, streamlining tax filings, and offering smarter tax planning solutions.', title1: 'Turning Legal Challenges', title2: ' Into Opportunities', title3: ' With Expert Legal Support' },
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
        <section className=" backdrop-blur-md py-4 paddingx">
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
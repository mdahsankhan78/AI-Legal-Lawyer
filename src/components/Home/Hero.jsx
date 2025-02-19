import React, { useEffect, useState } from 'react'
import { Separator } from './../ui/separator'
import CustomButton from './../Reusable/CustomButton'
import CategorySwiper, { categories } from './CategorySwiper'
import { useSwipeable } from 'react-swipeable'

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(1)
    const [category, setCategory] = useState()
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            const category = categories.find(cat => cat.id === activeIndex)
            setCategory(category)
        }, 200);
    }, [activeIndex])

    const handleImageLoad = () => {
        setImageLoaded(true)
    }

    const onChange = (id) => {
        setImageLoaded(false)
        setTimeout(() => {
            setImageLoaded(true);
        }, 200);
        setActiveIndex(id)
    }

    const handlers = useSwipeable({
        onSwipedRight: () => {
            const index = activeIndex === 1 ? 5 : activeIndex - 1
            onChange(index)
        },
        onSwipedLeft: () => {
            const index = activeIndex === categories.length ? 1 : activeIndex + 1
            onChange(index)
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <>
            {category &&
                <div
                    {...handlers}
                    className={`bg-cover bg-center min-h-screen transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'} cursor-grab`}
                    style={{ backgroundImage: `url(/categories/${category.img})` }}
                    onLoad={handleImageLoad}
                >
                    <div className="relative isolate text-white">
                        <div className="md:w-1/2 lg:py-40 flex flex-col justify-center min-h-screen paddingx">
                            <div data-aos='fade-right' data-aos-duration='300' className="hidden mb-4 sm:flex">
                                <div className="py-1 text-sm/6 flex gap-x-2 items-center whitespace-nowrap">
                                    <Separator className='w-20' />
                                    EXPERT GUIDANCE FOR EVERY LEGAL JOURNEY
                                    <Separator className='w-20' />
                                </div>
                            </div>
                            <h1 data-aos='fade-right' data-aos-duration='450' className="text-3xl tracking-tight text-balance sm:text-5xl modern">{category.title1} <span className="text-primary">{category.title2}</span> {category.title3} </h1>
                            <p data-aos='fade-right' data-aos-duration='600' className="mt-4 text-lg font-normal text-pretty sm:text-">
                                {category.text}
                            </p>

                            <div className="mt-8">
                                <CustomButton to={'/register'} text={'GET CONSULATION'} bg={'primary'} px={'px-10'} />
                            </div>
                        </div>

                        <CategorySwiper onChange={onChange} />
                    </div>
                </div>
            }
        </>
    )
}

export default Hero

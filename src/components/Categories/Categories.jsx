import React, { useState } from 'react'
import { Separator } from './../ui/separator'
import { categories } from './../Home/CategorySwiper'
import { FaArrowDown } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Categories = () => {
    const [isHover, setIsHover] = useState()

    return (
        <div className="flex flex-col gap-y-8 paddingx py-20 items-center" id='categories'>
            <div className="flex-col flex gap-y-4 text-center max-w-2xl modern">
                <div className="text-primary font-semibold text-xl flex gap-x-2 items-center justify-center whitespace-nowrap">
                    <Separator className='sm:w-20 w-10 h-[2px]' />
                    Where Justice Meets Strategy
                    <Separator className='sm:w-20 w-10 h-[2px]' />
                </div>
                <p className='text-4xl font-semibold'>Our practice areas of {''}
                    <span className="text-primary">
                        Specialization
                    </span> according the law
                </p>
            </div>

            <div className="flex flex-col gap-y-4 w-full">
                {categories.map((category, i) => (
                    <div key={i} className={`bg-cover bg-center flex md:flex-row flex-col justify-between items-center gap-8 p-8 min-h-60 transition-all relative group`} onMouseEnter={() => setIsHover(category.id)} onMouseLeave={() => setIsHover()} style={{ backgroundImage: `url(/categories/${category.img2})` }}>
                        <div className="absolute bg-black/50 inset-0"></div>
                        <div className="flex flex-col gap-y-2 items-center text-center">
                            <p className='text-5xl z-10 font-bold modern text-primary'>0{category.id}</p>
                            <p className='text-3xl z-10 font-semibold modern text-white'>{category.main}</p>
                        </div>

                        <div className='flex items-center gap-x-4 z-10 opacity-0 translate-x-10 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100'>
                            <Separator orientation='vertical' className='h-20 bg-primary w-[3px]' />
                            <p className='text-xl text-white max-w-lg'>{category.text}</p>
                        </div>

                        <div className="w-16 z-10 h-20 text-xl bg-gray-300 rounded-full flex items-center justify-center transition-all duration-500 group-hover:rotate-90 group-hover:bg-gray-600 group-hover:border-white">
                            <FaArrowDown className='group-hover:-rotate-180 transition-all duration-500 group-hover:text-white' />
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Categories
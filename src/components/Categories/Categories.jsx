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
                    <Separator className='w-20 h-[2px]' />
                    Where Justice Meets Strategy
                    <Separator className='w-20 h-[2px]' />
                </div>
                <p className='text-3xl font-semibold'>Our practice areas of {''}
                    <span className="text-primary">
                        Specialization
                    </span> according the law
                </p>
            </div>

            <div className="flex flex-col gap-y-4 w-full">
                {categories.map((category, i) => (
                    <div key={i} className={`flex justify-between items-center modern min-h-60 transition-all relative group`} onMouseEnter={() => setIsHover(category.id)} onMouseLeave={() => setIsHover()}>
                        <div className="flex items-center gap-x-8">
                            {
                                isHover === category.id ?
                                    <>
                                        <motion.img
                                            layoutId={`img-${category.id}`}
                                            src={`/categories/categories1.jpg`}
                                            className='h-60 w-full absolute object-cover'
                                            alt=""
                                        />
                                        <div className="absolute bg-black/50 inset-0"></div>
                                        <motion.span
                                            layoutId={`text-${category.id}`}
                                            className='text-white z-10 flex flex-col justify-end px-8'>
                                            <p className='text-3xl z-10 font-semibold'>{category.main}</p>
                                            <p className='text-2xl z-10'>{category.text}</p>
                                        </motion.span>
                                    </>
                                    :
                                    <>
                                        <motion.img
                                            layoutId={`img-${category.id}`}
                                            src={`/categories/${category.img2}`}
                                            className='h-60 w-96'
                                            alt=""
                                        />
                                        <motion.span
                                            layoutId={`text-${category.id}`}>
                                            <p className='text-3xl z-10 font-semibold'>{category.main}</p>
                                            <p className='text-2xl z-10'>{category.text}</p>
                                        </motion.span>
                                    </>
                            }
                        </div>

                        <div className="w-16 h-20 text-xl bg-gray-300 rounded-full flex items-center justify-center transition-all duration-500 group-hover:rotate-90 group-hover:bg-gray-600 group-hover:border-white group-hover:-translate-x-8">
                            <FaArrowDown className='group-hover:-rotate-180 transition-all duration-500 group-hover:text-white' />
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Categories
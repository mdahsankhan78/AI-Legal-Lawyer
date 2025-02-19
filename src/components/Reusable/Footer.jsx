import React from 'react'
import { FaFacebookF, FaYoutube } from 'react-icons/fa'
import { FaThreads, FaXTwitter } from 'react-icons/fa6'
import Links from './Links'

const Footer = () => {
    return (
        <div className='paddingx py-20 bg-[url(/categories/category1.jpeg)] text-white text-xl modern bg-center bg-cover relative bg-no-repeat'>
            <div className='absolute inset-0 bg-black/70'></div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center relative z-10'>
                <div className="col-span-1 flex flex-col gap-y-8 items-start">
                    <img src="/logo.svg" className='h-16' alt="" />
                    <p>Get in touch with us we're here to help!</p>

                    <div>
                        <p>Social Media</p>
                        <div className="flex items-center gap-x-2">
                            <div className="flex items-center justify-center bg-primary rounded-full h-6 w-6">
                                <FaYoutube />
                            </div>
                            <div className="flex items-center justify-center bg-primary rounded-full h-6 w-6">
                                <FaFacebookF />
                            </div>
                            <div className="flex items-center justify-center bg-primary rounded-full h-6 w-6">
                                <FaXTwitter />
                            </div>
                            <div className="flex items-center justify-center bg-primary rounded-full h-6 w-6">
                                <FaThreads />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col gap-y-8 items-start">
                    <p className='text-3xl text-primary'>Quick Links</p>

                    <Links className={'flex-col gap-4 text-xl font-normal'} />
                </div>
                <div className="col-span-1 flex flex-col gap-y-8 items-start">
                    <p className='text-3xl text-primary'>Our Expertise </p>

                    <Links className={'flex-col gap-4 text-xl font-normal'} type={'category'}/>
                </div>
            </div>
        </div>
    )
}

export default Footer
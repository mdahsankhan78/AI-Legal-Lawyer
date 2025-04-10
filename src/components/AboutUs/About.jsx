import React, { useState } from 'react'
import { Separator } from './../ui/separator'
import AboutTabs from './Tabs'
import { FaPlay } from 'react-icons/fa'
import Video from './Video'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

const About = () => {
    return (
        <div className='paddingx py-20 grid grid-cols-1 md:grid-cols-2 gap-x-8' id='about-us'>
            <div className="col-span-1 relative">
                <img
                    src="/about/aboutus.jpg"
                    className='rounded-xl h-full w-full'
                    alt="About Image"
                />

                <Dialog>
                    <DialogTrigger>
                        <div className="absolute left-[45%] sm:-right-8 top-[45%] bg-primary rounded-full flex items-center justify-center h-16 w-16">
                            <FaPlay />
                        </div>
                    </DialogTrigger>
                    <DialogContent className='p-0 rounded-none'>
                        <Video />
                    </DialogContent>
                </Dialog>
            </div>

            <div className="col-span-1 flex flex-col gap-y-4 modern md:items-start items-center">
                <div className="text-primary font-semibold text-xl flex gap-x-2 items-center whitespace-nowrap">
                    <Separator className='lg:w-20 w-8 h-[2px]' />
                    Welcome to AI-Legal Lawyer
                    <Separator className='lg:w-20 w-8 h-[2px]' />
                </div>
                <p className=''></p>
                <p className='text-4xl font-semibold'>We Integrate AI to <span className="text-primary">Strengthen</span> your battle for Justice</p>
                <p className='text-xl'>far, far away, beyond the data streams, lies a realm where AI shapes the future. </p>

                <AboutTabs />
            </div>
        </div>
    )
}

export default About
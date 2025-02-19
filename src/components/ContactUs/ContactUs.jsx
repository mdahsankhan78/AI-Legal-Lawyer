import React from 'react'
import { Separator } from '../ui/separator'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import CustomButton from '../Reusable/CustomButton'
// import CustomButton from './../Reusable/CustomButton'

const ContactUs = () => {
    return (
        <div className='paddingx relative' id='contact-us'>
            <video
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="https://wedesignthemes.s3.us-east-1.amazonaws.com/lawhere/lawyer.mp4" type="video/mp4" />
            </video>
            <div className="absolute bg-black/70 backdrop-blur-sm inset-0"></div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 '>
                <div className="relative flex justify-center my-20">
                    <img src="/contact/contact1.jpeg" cl alt="" />
                    <div className="absolute bg-white px-4 py-3 bottom-8 right-8 left-8 text-center text-lg">
                        <p className='font-semibold text-xl'>What Occurs Once I Submit My Form?</p>
                        <p>1. Efficient AI-driven solutions for  seamless Integration.</p>
                        <p>2. Timely updates  and optimized  performance  for better results.</p>
                        <p>3. Streamlined support to  enhance user experience and outcomes.</p>
                    </div>
                </div>
                <div className="col-span-1 border-l-2 border-white py-20 relative px-4">
                    <div className="absolute h-40 w-3 bg-primary -left-2 top-0"></div>

                    <div className="flex-col flex gap-y-4 max-w-2xl modern">
                        <div className="text-white font-semibold text-xl flex gap-x-2 items-center whitespace-nowrap">
                            <Separator className='sm:w-20 w-10 h-[2px]' />
                            Strategy, Plan, Execute
                            <Separator className='sm:w-20 w-10 h-[2px]' />
                        </div>
                        <p className='text-5xl font-normal text-white'>
                            Get Expert <span className="text-primary">Insights</span>
                        </p>
                    </div>

                    <form className='flex flex-col gap-y-8 py-4'>
                        <Input placeholder='Enter name' type='text'
                            className='placeholder:text-gray-300 text-white' />
                        <Input placeholder='Enter email' type='mail'
                            className='placeholder:text-gray-300 text-white' />
                        <Input placeholder='Enter phone' type='tel'
                            className='placeholder:text-gray-300 text-white' />
                        <Textarea placeholder='Enter message' rows='5'></Textarea>

                        <CustomButton text={'Submit'} color={'white'} bg={'primary'} px={'px-10'} />
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ContactUs
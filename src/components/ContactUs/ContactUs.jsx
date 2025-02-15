import React from 'react'
import { Separator } from '../ui/separator'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
// import CustomButton from './../Reusable/CustomButton'

const ContactUs = () => {
    return (
        <div className=' bg-[url(/contact/contact2.png)] bg-contain bg-center bg-no-repeat paddingx relative bg-black/70'>
            <div className='absolute inset-0 bg-white opacity-50'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 '>
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

                    <div className="flex-col flex gap-y-4 text-center max-w-2xl modern">
                        <div className="text-white font-semibold text-xl flex gap-x-2 items-center justify-center whitespace-nowrap">
                            <Separator className='w-20 h-[2px]' />
                            Strategy, Plan, Execute
                            <Separator className='w-20 h-[2px]' />
                        </div>
                        <p className='text-4xl font-semibold'>Get Expert Insights
                        </p>
                    </div>

                    <form className='flex flex-col gap-y-8 py-8'>
                        <Input placeholder='Enter name' type='text' />
                        <Input placeholder='Enter email' type='mail' />
                        <Input placeholder='Enter phone' type='tel' />
                        <Textarea placeholder='Enter message' rows='5'></Textarea>
                        {/* <CustomButton text={'GET CONSULATION'} bg={'primary'} px={'px-10'} /> */}
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ContactUs
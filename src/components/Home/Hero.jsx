import React from 'react'
import { Separator } from '../ui/Separator'
import CustomButton from '../reusable/CustomButton'

const Hero = () => {
    return (
        <>
            <div className="bg-[url(/home/herobg.jpeg)] bg-cover bg-center min-h-screen">
                <div className="relative isolate paddingx text-white">
                    <div className="md:w-1/2 lg:py-40 flex flex-col justify-center min-h-screen">
                        <div className="hidden mb-4 sm:flex">
                            <div className="py-1 text-sm/6 flex gap-x-2 items-center whitespace-nowrap">
                                <Separator className='w-20' />
                                EXPERT GUIDANCE FOR EVERY LEGAL JOURNEY
                                <Separator className='w-20' />
                            </div>
                        </div>
                        <h1 className="text-4xl tracking-tight text-balance sm:text-6xl modern">Turning Legal Challenges <span className="text-primary">Into Opportunities</span> With Expert Legal Support </h1>
                        <p className="mt-8 text-lg font-medium text-pretty sm:text-xl/8">
                            Fusce Taciti Varius In Nascetur Accumsan Pellentesque Tempor Mi Ipsum Finibus Etiam Cras Viverra Nisi Nisl Tempus Convallis Curae Ipsum Imperdiet Viverra Mattis Vel Auctor Posuere Lorem Enim Morbi Ante Curabitur Mollis Commodo
                        </p>

                        <div className="mt-10">
                            <CustomButton text={'GET CONSULATION'} bg={'primary'} px={'px-10'} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero
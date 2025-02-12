import React from 'react'
import { Separator } from '../ui/Separator'

export const features = [
    { img: '/features1.jpg', title: 'Lease Agreements', text: 'Document analysis for title deeds and lease agreements' },
    { img: '/features2.jpg', title: 'Lease Agreements', text: 'Document analysis for title deeds and lease agreements' },
    { img: '/features3.jpg', title: 'Lease Agreements', text: 'Document analysis for title deeds and lease agreements' },
    { img: '/features4.jpg', title: 'Lease Agreements', text: 'Document analysis for title deeds and lease agreements' },
    { img: '/features1.jpg', title: 'Lease Agreements', text: 'Document analysis for title deeds and lease agreements' },
]

const Features = () => {
    return (
        <div className="flex flex-col gap-y-4 paddingx py-20 items-center" id='features'>
            <div className="flex-col flex gap-y-4 text-center max-w-2xl">
                <div className="text-primary font-semibold text-xl flex gap-x-2 items-center justify-center whitespace-nowrap">
                    <Separator className='w-20 h-[2px]' />
                    Guidance, Adovance, Results
                    <Separator className='w-20 h-[2px]' />
                </div>
                <p className='text-3xl font-semibold'>Expert {''}
                    <span className="text-primary">
                        Legal Solutions
                    </span> Tailored To Your Specific Needs
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {features.map((feature, i) => (
                    <div className={`${i === 3 ? 'col-span-2' : 'col-span-1'} bg-cover bg-center flex flex-col justify-end px-4 py-3 text-white modern max-h-60 h-full w-full shadow-feature transition-all relative`} style={{backgroundImage:`url(/features${feature.img})`,aspectRatio:'16/9'}}>
                        <div className="absolute bg-black/50 inset-0"></div>
                        <p className='text-3xl z-10'>{feature.title}</p>
                        <p className='text-2xl z-10'>{feature.text}</p>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Features
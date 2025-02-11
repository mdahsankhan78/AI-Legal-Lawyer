import React from 'react'
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaThreads, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Separator } from '../ui/separator';

const TopNav = () => {
    return (
        <div className='flex items-center justify-between py-2 px-6 lg:px-8'>
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

            <div className="flex items-center gap-x-3">
                <div className="flex items-center gap-x-2">
                    <div className="flex items-center justify-center bg-black/50 border-primary border text-primary rounded-full h-6 w-6">
                        <FaPhone />
                    </div>
                    <span className="text-white">
                        Call us: +00-123-456789
                    </span>
                </div>
                <Separator orientation='vertical' className='h-4 bg-primary' />
                <div className="flex items-center gap-x-2">
                    <div className="flex items-center justify-center bg-black/50 border-primary border text-primary rounded-full h-6 w-6">
                        <MdEmail />
                    </div>
                    <span className="text-white">
                        Email: info@lawhere.com
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TopNav
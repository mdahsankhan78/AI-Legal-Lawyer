import React, { useEffect, useState } from 'react'
import { Separator } from './../ui/separator'
import TopNav from './TopNav'
import CustomButton from './CustomButton'
import Links from './Links'
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom'
import useEncryptedLocalStorage from '../../api/EncryptedStorage'

export const navlinks = [
    { title: 'Home', path: '#' },
    { title: 'About Us', path: '#about-us' },
    { title: 'Features', path: '#features' },
    { title: 'Categories', path: '#categories' },
    { title: 'Contact Us', path: '#contact-us' },
]

const Navbar = () => {
    const token = localStorage.getItem('token')
    const [showAside, setShowAside] = useState(false);
    const [header, setHeader] = useState(false);

    useEffect(() => {
        const scrollYPos = window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });

        return () => window.removeEventListener("scroll", scrollYPos);
    }, []);

    return (
        <>
            <header className={`${header ? 'sticky top-0 shadow-md' : 'absolute inset-x-0 top-0 '} z-50`}>
                {header ? '' : <TopNav />}
                <nav className={`${header ? 'bg-[#121519]' : 'bg-black/50'} flex items-center justify-between px-6 py-4 lg:px-8 border-t border-b border-primary`} aria-label="Global">
                    <div className="flex items-center gap-x-8">
                        <a href="#" className="">
                            <span className="sr-only">Your Company</span>
                            <img className="h-12 w-auto" src="/logo.svg" alt="" />
                        </a>
                        {/* <div className="h-full w-2 bg-white"></div> */}
                        <Separator orientation='vertical' className='h-10 bg-primary hidden md:block' />
                        <Links className={'hidden lg:flex ml-16 gap-12 font-semibold'} />
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <CustomButton to={token?'/chat':'/register'} text={'Get Started'} color={'white'} bg={'primary'} px={'px-10'} />
                    </div>

                    {/* mobile menu icon */}
                    <div class="flex lg:hidden" onClick={() => setShowAside(true)}>
                        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
                            <span class="sr-only">Open main menu</span>
                            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
                <AnimatePresence>
                    {showAside && (
                        <motion.div
                            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#121519] px-6 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            <div className="flex items-center justify-between py-4">
                                <a href="#" className="">
                                    <span className="sr-only">Your Company</span>
                                    <img className="h-12 w-auto" src="/logo.svg" alt="" />
                                </a>
                                <button
                                    type="button"
                                    class="-m-2.5 rounded-md p-2.5 text-white"
                                    onClick={() => setShowAside(false)}
                                >
                                    <span class="sr-only">Close menu</span>
                                    <svg
                                        class="size-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        data-slot="icon"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div class="mt-6 flow-root">
                                <div class="my-6 " onClick={() => setShowAside(false)}>
                                    <Links className={'gap-y-4  flex flex-col '} linksStyles={'border-b border-primary flex pb-4'} />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    )
}

export default Navbar
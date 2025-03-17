import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getChatHistory } from '../../api/apis'
import Loading from '../ui/loading'

const menu = [
    { title: 'Case Analysis', path: '/chat' },
    { title: 'Generate FIR', path: '/generate_fir' },
]

const Sidebar = ({ isOpen, trigger }) => {
    const [chats, setChats] = useState()
    const location = useLocation()

    const fetchChatHistory = async () => {
        const response = await getChatHistory();
        if (response.histories.length > 0) {
            setChats(response.histories);
        }
        else {
            setChats([]);
        }
    };

    useEffect(() => {
        fetchChatHistory()
    }, [trigger])

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div id="hs-application-sidebar"
                        class={`hs-overlay [--auto-close:lg] transform top-0 start-0 bottom-0 z-[60] h-screen bg-destructive border-e border-primary lg:end-auto lg:bottom-0 transition-all duration-500 w-80 absolute lg:relative`}
                        role="dialog" tabindex="-1" aria-label="Sidebar">
                        <nav class="size-full flex flex-col">
                            <div class="flex items-center pt-4 pe-4 ps-7">
                                {/* <!-- Logo --> */}
                                <a class="flex-none focus:outline-none focus:opacity-80" aria-label="Preline">
                                    <img src="/logo.svg" alt="" />
                                </a>
                                {/* <!-- End Logo --> */}
                            </div>

                            <div className="flex flex-col h-full overflow-y-auto [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-destructive [&::-webkit-scrollbar-thumb]:bg-primary">
                                {chats ?
                                    chats.length > 0 ?
                                        <div class="h-full">
                                            {/* <!-- List --> */}
                                            <p className='px-7 pt-8 text-primary modern text-3xl'>History</p>
                                            <ul class="space-y-1.5 p-4">
                                                {chats.map((chat, i) => (
                                                    <li key={i} className='relative'>
                                                        <Link class="flex items-center gap-x-3 py-2 px-3 text-sm focus:outline-none  text-white hover:text-primary" to={`/chat/${chat._id}`}>
                                                            <span className="text-ellipsis capitalize overflow-hidden whitespace-nowrap" style={{ maxWidth: '200px' }}>
                                                                {chat.chatName ? chat.chatName : 'New Chat'}
                                                            </span>
                                                        </Link>
                                                        {location.pathname === `/chat/${chat._id}` && <motion.div layoutId='menu' className="absolute w-[2px] h-6 bg-primary top-1.5 "></motion.div>}
                                                    </li>
                                                ))}
                                            </ul>
                                            {/* <!-- End List --> */}
                                        </div>
                                        :
                                        <div class="py-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                                            {/* <!-- List --> */}
                                            <ul class="p-4">
                                                <li>
                                                    <p class="flex items-center gap-x-3 py-2 px-3 text-sm focus:outline-none  text-white hover:text-primary">
                                                        <span className="text-ellipsis overflow-hidden whitespace-nowrap" style={{ maxWidth: '200px' }}>
                                                            No chat history
                                                        </span>
                                                    </p>
                                                </li>
                                            </ul>
                                            {/* <!-- End List --> */}
                                        </div>
                                    :
                                    <div className="h-60 flex items-center justify-center">
                                        <Loading />
                                    </div>
                                }

                                <div class="h-full">
                                    {/* <!-- List --> */}
                                    <p className='px-7 text-primary modern text-3xl'>Menu</p>
                                    <ul class="space-y-1.5 p-4">
                                        {menu.map((link, i) => (
                                            <li key={i} className='relative'>
                                                <Link to={link.path} class="flex items-center gap-x-3 py-2 px-3 text-sm focus:outline-none  text-white hover:text-primary" href="#">
                                                    <span className="text-ellipsis overflow-hidden whitespace-nowrap" style={{ maxWidth: '200px' }}>
                                                        {link.title}
                                                    </span>
                                                </Link>
                                                {location.pathname === link.path && <motion.div layoutId='menu' className="absolute w-[2px] h-6 bg-primary top-1.5 "></motion.div>}
                                            </li>
                                        ))}
                                    </ul>
                                    {/* <!-- End List --> */}
                                </div>
                            </div>

                            {/* <!-- Footer --> */}
                            <div class="mt-auto">
                                <div class="p-4 border-t border-gray-200">
                                    <a class="flex justify-between items-center gap-x-3 py-2 px-3 text-sm  rounded-lg focus:outline-none  text-white hover:text-primary" href="#">
                                        Sign in
                                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" x2="3" y1="12" y2="12" /></svg>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- End Footer --> */}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence >
            {/* <!-- End Sidebar --> */}

        </>
    )
}

export default Sidebar
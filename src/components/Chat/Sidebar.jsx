import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { deleteChatHistory, getChatHistory } from '../../api/apis'
import Loading from './../ui/Loading'
import { IoLogOutOutline } from "react-icons/io5";
import useEncryptedLocalStorage from '../../api/EncryptedStorage'
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";

const Sidebar = ({ isOpen, query, onDelete }) => {
    const { getEncryptedItem, removeEncryptedItem } = useEncryptedLocalStorage();
    const [chats, setChats] = useState()
    const location = useLocation()
    const navigate = useNavigate()
    const [user, setUser] = useState();

    useEffect(() => {
        const user = getEncryptedItem('user');
        setUser(user)
    }, [chats])

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
    }, [query])

    const logout = () => {
        removeEncryptedItem('user')
        localStorage.removeItem('token')
        navigate('/')
    }

    const DeleteChat = async (id) => {
        const res = await deleteChatHistory(id)
        if (res) {
            onDelete()
            fetchChatHistory()
        }
    }

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

                            {user && user.role === 'User' ? (
                                <div className="flex flex-col h-full overflow-y-auto [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-destructive [&::-webkit-scrollbar-thumb]:bg-primary">
                                    <div>
                                        {chats ?
                                            chats.length > 0 ?
                                                <div>
                                                    {/* <!-- List --> */}
                                                    <p className='px-7 pt-8 text-primary modern text-3xl'>History</p>
                                                    <ul class="space-y-1.5 p-4">
                                                        {chats.map((chat, i) => (
                                                            <li key={i} className='relative group'>
                                                                <Link class={`flex items-center gap-x-3 py-2 px-3 text-sm focus:outline-none  hover:text-primary ${location.pathname === `/chat/${chat._id}` ? 'text-primary' : 'text-white'}`} to={`/chat/${chat._id}`}>
                                                                    <span className="text-ellipsis capitalize overflow-hidden whitespace-nowrap" style={{ maxWidth: '200px' }}>
                                                                        {chat.chatName ? chat.chatName : 'New Chat'}
                                                                    </span>
                                                                </Link>
                                                                {location.pathname === `/chat/${chat._id}` && <motion.div layoutId='menu' className="absolute w-[2px] h-6 bg-primary top-1.5 "></motion.div>}
                                                                <FaRegTrashAlt className='text-white hidden group-hover:block cursor-pointer absolute right-0 top-2 hover:text-primary' onClick={() => DeleteChat(chat._id)} />
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    {/* <!-- End List --> */}
                                                </div>
                                                :
                                                <div class="py-4">
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

                                        <div>
                                            {/* <!-- List --> */}
                                            <p className='px-7 text-primary modern text-3xl'>Menu</p>
                                            <ul class="space-y-1.5 p-4">

                                                <li className='relative'>
                                                    <Link to={'/chat'} class={`flex items-center gap-x-3 py-2 px-3 text-sm focus:outline-none hover:text-primary ${location.pathname === `/chat` ? 'text-primary' : 'text-white'}`}>
                                                        <span className="text-ellipsis overflow-hidden whitespace-nowrap" style={{ maxWidth: '200px' }}>
                                                            Case Analysis
                                                        </span>
                                                    </Link>
                                                    {location.pathname === '/chat' && <motion.div layoutId='menu' className="absolute w-[2px] h-6 bg-primary top-1.5 "></motion.div>}
                                                </li>

                                                <li className='relative'>
                                                    <Link to={'/laws'} class={`flex items-center gap-x-3 py-2 px-3 text-sm focus:outline-none hover:text-primary ${location.pathname === `/laws` ? 'text-primary' : 'text-white'}`}>
                                                        <span className="text-ellipsis overflow-hidden whitespace-nowrap" style={{ maxWidth: '200px' }}>
                                                            Search Laws
                                                        </span>
                                                    </Link>
                                                    {location.pathname === '/laws' && <motion.div layoutId='menu' className="absolute w-[2px] h-6 bg-primary top-1.5 "></motion.div>}
                                                </li>

                                                <li className='relative'>
                                                    <Link to={'/generate_fir'} class={`flex items-center gap-x-3 py-2 px-3 text-sm focus:outline-none hover:text-primary ${location.pathname === `/generate_fir` ? 'text-primary' : 'text-white'}`}>
                                                        <span className="text-ellipsis overflow-hidden whitespace-nowrap" style={{ maxWidth: '200px' }}>
                                                            Generate FIR
                                                        </span>
                                                    </Link>
                                                    {location.pathname === '/generate_fir' && <motion.div layoutId='menu' className="absolute w-[2px] h-6 bg-primary top-1.5 "></motion.div>}
                                                </li>
                                            </ul>
                                            {/* <!-- End List --> */}
                                        </div>
                                    </div>
                                </div>
                            )
                                : user && user.role === 'Lawyer' ? (
                                    <div className="flex flex-col h-full overflow-y-auto [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-destructive [&::-webkit-scrollbar-thumb]:bg-primary">
                                        <div>
                                            {/* <!-- List --> */}
                                            <p className='px-7 text-primary modern text-3xl mt-8'>Menu</p>
                                            <ul class="space-y-1.5 p-4">
                                                <li className='relative'>
                                                    <Link to={'/upload_laws'} class={`flex items-center gap-x-3 py-2 px-3 text-sm focus:outline-none hover:text-primary ${location.pathname === `/upload_laws` ? 'text-primary' : 'text-white'}`}>
                                                        <span className="text-ellipsis overflow-hidden whitespace-nowrap" style={{ maxWidth: '200px' }}>
                                                            Upload Laws
                                                        </span>
                                                    </Link>
                                                    {location.pathname === '/upload_laws' && <motion.div layoutId='menu' className="absolute w-[2px] h-6 bg-primary top-1.5 "></motion.div>}
                                                </li>
                                            </ul>
                                            {/* <!-- End List --> */}
                                        </div>
                                    </div>
                                )
                                    :
                                    (
                                        <div className="flex flex-col h-full overflow-y-auto [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-destructive [&::-webkit-scrollbar-thumb]:bg-primary">
                                            <div>
                                                {/* <!-- List --> */}
                                                <p className='px-7 text-primary modern text-3xl mt-8'>Menu</p>
                                                <ul class="space-y-1.5 p-4">
                                                    <li className='relative'>
                                                        <Link to={'/users'} class={`flex items-center gap-x-3 py-2 px-3 text-sm focus:outline-none hover:text-primary ${location.pathname === `/users` ? 'text-primary' : 'text-white'}`}>
                                                            <span className="text-ellipsis overflow-hidden whitespace-nowrap" style={{ maxWidth: '200px' }}>
                                                                Manage Users
                                                            </span>
                                                        </Link>
                                                        {location.pathname === '/users' && <motion.div layoutId='menu' className="absolute w-[2px] h-6 bg-primary top-1.5 "></motion.div>}
                                                    </li>
                                                </ul>
                                                {/* <!-- End List --> */}
                                            </div>
                                        </div>
                                    )
                            }

                            {/* <!-- Footer --> */}
                            <div class="mt-auto whitespace-nowrap">
                                <div class="p-4 border-t border-gray-200">
                                    <a class="flex justify-between items-center gap-x-3 py-2 text-sm rounded-lg focus:outline-none  text-white hover:text-white" href="#">
                                        <span class="shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
                                            <span class="text-sm font-medium text-white leading-none">
                                                {user ? user.name.split(' ').slice(0, 2).map(part => part.charAt(0).toUpperCase()).join("") : 'A'}
                                            </span>
                                        </span>
                                        <div className="flex flex-col">
                                            <p>{user ? user.name : 'Guest'}</p>
                                            <p className='font-normal'>{user ? user.email : 'guest@gmail.com'}</p>
                                        </div>
                                        <IoLogOutOutline onClick={logout} className='font-semibold text-lg hover:text-primary' />
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
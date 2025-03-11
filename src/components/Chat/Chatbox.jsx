import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import useEncryptedLocalStorage from "./../../api/EncryptedStorage";
import { legalQuery } from '../../api/apis';

const Chatbox = () => {
    const { setEncryptedItem, getEncryptedItem } = useEncryptedLocalStorage();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [user, setUser] = useState();
    const [data, setData] = useState({ question: '', answer: '',context:'' });
    const [loading, setLoading] = useState(false);

    const handleInput = async (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    };


    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const user = getEncryptedItem('user');
        setUser(user)
    }, [])

    const handleQuery = async (e) => {
        e.preventDefault();
        setLoading(true)
        const res = await legalQuery(data.question, data.context);
        if (res) {
            setLoading(false)
            console.log(res);
            
        }
    };

    return (
        <div className='flex'>
            <Sidebar isOpen={isSidebarOpen} />

            {/* <!-- Content --> */}
            <div onClick={isSidebarOpen && toggleSidebar} class="relative h-screen w-full overflow-y-auto bg-destructive-foreground text-white">
                <div className="sticky left-4 top-4 pl-4 flex items-center gap-x-4">

                    {/* toggle sidebar button */}
                    <svg onClick={toggleSidebar} class="shrink-0 size-5 hover:text-primary cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>

                    {/* new chat button */}
                    <svg class="shrink-0 size-5 hover:text-primary cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                </div>

                <div class="py-10 lg:py-14">
                    {/* <!-- Title --> */}
                    <div class="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto text-center">
                        <h1 class="text-3xl font-bold sm:text-4xl modern">
                            Welcome to AI Legal Lawyer
                        </h1>
                        <p class="mt-3">
                            Your AI-powered copilot for the web
                        </p>
                    </div>
                    {/* <!-- End Title --> */}

                    <ul class="mt-16 space-y-5">
                        {/* <!-- Chat Bubble --> */}
                        <li class="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
                            <svg class="shrink-0 size-[38px] rounded-full" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="38" height="38" rx="6" fill="#a69d84" />
                                <path d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25" stroke="white" stroke-width="1.5" />
                                <path d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25" stroke="white" stroke-width="1.5" />
                                <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white" />
                            </svg>

                            <div class="space-y-3">
                                <h2 class="font-medium ">
                                    How can we help?
                                </h2>
                                <div class="space-y-1.5">
                                    <p class="mb-1.5 text-sm ">
                                        You can ask questions like:
                                    </p>
                                    <ul class="list-disc list-outside space-y-1.5 ps-3.5">
                                        <li class="text-sm">
                                            What's Preline UI?
                                        </li>

                                        <li class="text-sm ">
                                            How many Starter Pages & Examples are there?
                                        </li>

                                        <li class="text-sm ">
                                            Is there a PRO version?
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        {/* <!-- End Chat Bubble --> */}

                        {/* <!-- Chat Bubble --> */}
                        <li class="py-2 sm:py-4">
                            <div class="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
                                <div class="max-w-2xl flex gap-x-2 sm:gap-x-4">
                                    <span class="shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
                                        <span class="text-sm font-medium text-white leading-none">
                                            {user ? user.name.split(' ').slice(0, 2).map(part => part.charAt(0).toUpperCase()).join("") : 'A'}
                                        </span>
                                    </span>

                                    <div class="grow mt-2 space-y-3">
                                        <p>
                                            what's preline ui?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* <!-- End Chat Bubble --> */}
                    </ul>
                </div>

                {/* <!-- Textarea --> */}
                <div class="max-w-4xl mx-auto sticky bottom-0 z-10 p-3 sm:py-6">
                    <div class="lg:hidden flex justify-end mb-2 sm:mb-3">
                        <div class="lg:hidden me-2">
                            {/* <!-- Templates Dropdown --> */}
                            <div class="hs-dropdown  relative  [--auto-close:inside] inline-flex">
                                <button id="hs-dropdown-preview-sidebar" type="button" class="hs-dropdown-toggle  group relative flex justify-center items-center size-8 text-xs text-gray-800 bg-primary disabled:opacity-50 disabled:pointer-events-none focus:outline-none" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                    <span class="">
                                        <svg class=" size-4 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Input --> */}
                    <form onSubmit={handleQuery} class="relative">
                        <textarea onChange={handleInput} class="p-4 pb-12 block w-full bg-destructive-foreground border border-primary text-sm focus:outline-none max-h-24 min-h-24" placeholder="Ask me anything..." required></textarea>

                        {/* <!-- Toolbar --> */}
                        <div class="absolute bottom-px inset-x-px p-2 rounded-b-lg bg-transparent">
                            <div class="flex justify-between items-center">
                                {/* <!-- Button Group --> */}
                                <div class="flex items-center">

                                    {/* <!-- Attach Button --> */}
                                    <button type="button" class="inline-flex shrink-0 justify-center items-center size-8 focus:z-10 focus:outline-none  hover:text-primary">
                                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                                    </button>
                                    {/* <!-- End Attach Button --> */}
                                </div>
                                {/* <!-- End Button Group --> */}

                                {/* <!-- Button Group --> */}
                                <div class="flex items-center gap-x-1">
                                    {/* <!-- Send Button --> */}
                                    <button type="submit" class="inline-flex shrink-0 justify-center items-center size-8  text-white bg-primary focus:z-10 focus:outline-none">
                                        <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                        </svg>
                                    </button>
                                    {/* <!-- End Send Button --> */}
                                </div>
                                {/* <!-- End Button Group --> */}
                            </div>
                        </div>
                        {/* <!-- End Toolbar --> */}
                    </form>
                    {/* <!-- End Input --> */}
                </div>
                {/* <!-- End Textarea --> */}
            </div>
            {/* <!-- End Content --> */}
        </div>
    )
}

export default Chatbox
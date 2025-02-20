import React from 'react'
import Sidebar from './Sidebar'

const Chatbox = () => {
    return (
        <div className='flex'>
         <Sidebar/>

            {/* <!-- Content --> */}
            <div class="relative h-screen w-full overflow-y-auto bg-destructive-foreground text-white">
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
                                        <span class="text-sm font-medium text-white leading-none">AZ</span>
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
                                <button id="hs-dropdown-preview-sidebar" type="button" class="hs-dropdown-toggle  group relative flex justify-center items-center size-8 text-xs rounded-lg text-gray-800 hover:bg-gray-100 focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                    <span class="">
                                        <svg class="rotate-180 size-4 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </span>

                                    <span class="absolute -top-0.5 -end-0.5">
                                        <span class="relative flex">
                                            <span class="animate-ping absolute inline-flex size-full rounded-full bg-red-400 opacity-75"></span>
                                            <span class="relative inline-flex size-2 bg-red-500 rounded-full"></span>
                                            <span class="sr-only">Notification</span>
                                        </span>
                                    </span>
                                </button>

                                {/* <!-- Dropdown --> */}
                                <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-full md:w-[450px] transition-[opacity,margin] duration opacity-0 hidden z-30 overflow-hidden border border-gray-200 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)]" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-preview-sidebar">
                                    {/* <!-- Tab --> */}
                                    <div class="p-3 pb-0 flex flex-wrap justify-between items-center gap-3 border-b border-gray-200">
                                        {/* <!-- Nav Tab --> */}
                                        <nav class="flex  gap-x-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                                            <button type="button" class="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2 text-nowrap  hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2 after:z-10 after:h-0.5 after:pointer-events-none  " id="hs-pms-item-pro" aria-selected="false" data-hs-tab="#hs-pms-pro" aria-controls="hs-pms-pro" role="tab" >
                                                Pro
                                            </button>
                                            <button type="button" class="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2 text-nowrap  hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2 after:z-10 after:h-0.5 after:pointer-events-none active " id="hs-pms-item-free" aria-selected="true" data-hs-tab="#hs-pms-free" aria-controls="hs-pms-free" role="tab" >
                                                Free
                                            </button>
                                        </nav>
                                        {/* <!-- End Nav Tab --> */}
                                    </div>
                                    {/* <!-- End Tab --> */}

                                    {/* <!-- Tab Content --> */}
                                    <div id="hs-pms-pro" class="hidden" role="tabpanel" aria-labelledby="hs-pms-item-pro">
                                        {/* <!-- Header --> */}
                                        <div class="p-3 flex flex-wrap justify-between items-center gap-3">
                                            <span class="block font-semibold text-sm text-gray-800">Templates (12)</span>

                                            <div class="ms-auto">
                                                <a class="group py-2 px-2.5 rounded-md flex items-center gap-x-1 text-[13px] bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-900" href="../pro/pricing.html">
                                                    Purchase
                                                    <svg class="hidden md:inline-block shrink-0 size-3.5 group-hover:translate-x-0.5 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path class="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition" d="M5 12h14" /><path class="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition" d="m12 5 7 7-7 7" /></svg>
                                                </a>
                                            </div>
                                        </div>
                                        {/* <!-- End Header --> */}

                                        {/* <!-- Body --> */}
                                        <div class="p-3 max-h-[25rem] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                                            {/* <!-- Grid --> */}
                                            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                                {/* <!-- Link --> */}
                                                <a class="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100  transition" href="../pro/dashboard/index.html">
                                                    <img class=" w-28 rounded-lg shadow" src="../assets/img/demo-previews/img1.jpg" alt="Main Page" />
                                                    <img class="hidden w-28 rounded-lg shadow" src="../assets/img/demo-previews-dark/img1.jpg" alt="Main Page" />

                                                    <p class="text-sm text-gray-800">
                                                        Dashboard
                                                    </p>
                                                </a>
                                                {/* <!-- End Link --> */}

                                                {/* <!-- Link --> */}
                                                <a class="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100  transition" href="../pro/shop/index.html">
                                                    <img class=" w-28 rounded-lg shadow" src="../assets/img/demo-previews/img21.jpg" alt="Main Page" />
                                                    <img class="hidden w-28 rounded-lg shadow" src="../assets/img/demo-previews-dark/img21.jpg" alt="Main Page" />

                                                    <p class="text-sm text-gray-800">
                                                        Shop
                                                    </p>
                                                </a>
                                                {/* <!-- End Link --> */}

                                                {/* <!-- Link --> */}
                                                <a class="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100  transition" href="../pro/chat/index.html">
                                                    <img class=" w-28 rounded-lg shadow" src="../assets/img/demo-previews/img16.jpg" alt="Main Page" />
                                                    <img class="hidden w-28 rounded-lg shadow" src="../assets/img/demo-previews-dark/img16.jpg" alt="Main Page" />

                                                    <p class="text-sm text-gray-800">
                                                        Chat
                                                    </p>

                                                    <div class="absolute -top-px end-[3px]">
                                                        <span class="py-0.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full">+4</span>
                                                    </div>
                                                </a>
                                                {/* <!-- End Link --> */}

                                                {/* <!-- Link --> */}
                                                <a class="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100  transition" href="../pro/inbox/index.html">
                                                    <img class=" w-28 rounded-lg shadow" src="../assets/img/demo-previews/img26.jpg" alt="Main Page" />
                                                    <img class="hidden w-28 rounded-lg shadow" src="../assets/img/demo-previews-dark/img26.jpg" alt="Main Page" />

                                                    <p class="text-sm text-gray-800">
                                                        Inbox
                                                    </p>
                                                </a>
                                                {/* <!-- End Link --> */}

                                                {/* <!-- Link --> */}
                                                <a class="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100  transition" href="../pro/payment/index.html">
                                                    <img class=" w-28 rounded-lg shadow" src="../assets/img/demo-previews/img8.jpg" alt="Main Page" />
                                                    <img class="hidden w-28 rounded-lg shadow" src="../assets/img/demo-previews-dark/img8.jpg" alt="Main Page" />

                                                    <p class="text-sm text-gray-800">
                                                        Payment
                                                    </p>
                                                </a>
                                                {/* <!-- End Link --> */}

                                                {/* <!-- Link --> */}
                                                <a class="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100  transition" href="../pro/ecommerce/index.html">
                                                    <img class=" w-28 rounded-lg shadow" src="../assets/img/demo-previews/img4.jpg" alt="Main Page" />
                                                    <img class="hidden w-28 rounded-lg shadow" src="../assets/img/demo-previews-dark/img4.jpg" alt="Main Page" />

                                                    <p class="text-sm text-gray-800">
                                                        E-Commerce
                                                    </p>
                                                </a>
                                                {/* <!-- End Link --> */}

                                                {/* <!-- Link --> */}
                                                <a class="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100  transition" href="../pro/calendars/day.html">
                                                    <img class=" w-28 rounded-lg shadow" src="../assets/img/demo-previews/img14.jpg" alt="Main Page" />
                                                    <img class="hidden w-28 rounded-lg shadow" src="../assets/img/demo-previews-dark/img14.jpg" alt="Main Page" />

                                                    <p class="text-sm text-gray-800">
                                                        Calendars
                                                    </p>
                                                </a>
                                                {/* <!-- End Link --> */}

                                                {/* <!-- Link --> */}
                                                <a class="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100  transition" href="../pro/workspace/index.html">
                                                    <img class=" w-28 rounded-lg shadow" src="../assets/img/demo-previews/img18.jpg" alt="Main Page" />
                                                    <img class="hidden w-28 rounded-lg shadow" src="../assets/img/demo-previews-dark/img18.jpg" alt="Main Page" />

                                                    <p class="text-sm text-gray-800">
                                                        Workspace
                                                    </p>
                                                </a>
                                                {/* <!-- End Link --> */}

                                                {/* <!-- Link --> */}
                                                <a class="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100  transition" href="../pro/analytics/index.html">
                                                    <img class=" w-28 rounded-lg shadow" src="../assets/img/demo-previews/img9.jpg" alt="Main Page" />
                                                    <img class="hidden w-28 rounded-lg shadow" src="../assets/img/demo-previews-dark/img9.jpg" alt="Main Page" />

                                                    <p class="text-sm text-gray-800">
                                                        Analytics
                                                    </p>
                                                </a>
                                                {/* <!-- End Link --> */}

                                                {/* <!-- Link --> */}
                                                <a class="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100  transition" href="../pro/project/index.html">
                                                    <img class=" w-28 rounded-lg shadow" src="../assets/img/demo-previews/img10.jpg" alt="Main Page" />
                                                    <img class="hidden w-28 rounded-lg shadow" src="../assets/img/demo-previews-dark/img10.jpg" alt="Main Page" />

                                                    <p class="text-sm text-gray-800">
                                                        Project
                                                    </p>
                                                </a>
                                                {/* <!-- End Link --> */}

                                                {/* <!-- Link --> */}
                                                <a class="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100  transition" href="../pro/saas/index.html">
                                                    <img class=" w-28 rounded-lg shadow" src="../assets/img/demo-previews/img11.jpg" alt="Main Page" />
                                                    <img class="hidden w-28 rounded-lg shadow" src="../assets/img/demo-previews-dark/img11.jpg" alt="Main Page" />

                                                    <p class="text-sm text-gray-800">
                                                        SaaS
                                                    </p>
                                                </a>
                                                {/* <!-- End Link --> */}

                                                {/* <!-- Link --> */}
                                                <a class="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100  transition" href="../pro/files/index.html">
                                                    <img class=" w-28 rounded-lg shadow" src="../assets/img/demo-previews/img12.jpg" alt="Main Page" />
                                                    <img class="hidden w-28 rounded-lg shadow" src="../assets/img/demo-previews-dark/img12.jpg" alt="Main Page" />

                                                    <p class="text-sm text-gray-800">
                                                        Files
                                                    </p>
                                                </a>
                                                {/* <!-- End Link --> */}
                                            </div>
                                            {/* <!-- End Grid --> */}
                                        </div>
                                        {/* <!-- Body --> */}

                                        {/* <!-- Footer --> */}
                                        <div class="p-3 flex flex-wrap justify-center items-center gap-0.5">
                                            <div class="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2">
                                                <a class="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" href="../pro/index.html">
                                                    Main page
                                                    <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path class="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition" d="M5 12h14" /><path class="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition" d="m12 5 7 7-7 7" /></svg>
                                                </a>
                                            </div>
                                            <div class="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2">
                                                <a class="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" href="../pro/examples.html">
                                                    Examples (600+)
                                                    <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path class="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition" d="M5 12h14" /><path class="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition" d="m12 5 7 7-7 7" /></svg>
                                                </a>
                                            </div>
                                            <div class="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2">
                                                <a class="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" href="../pro/templates.html">
                                                    Templates (12)
                                                    <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path class="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition" d="M5 12h14" /><path class="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition" d="m12 5 7 7-7 7" /></svg>
                                                </a>
                                            </div>
                                        </div>
                                        {/* <!-- End Footer --> */}
                                    </div>
                                    {/* <!-- End Tab Content --> */}

                                    {/* <!-- Tab Content --> */}
                                    <div id="hs-pms-free" class="" role="tabpanel" aria-labelledby="hs-pms-item-free">
                                        {/* <!-- Header --> */}
                                        <div class="p-3 flex flex-wrap justify-between items-center gap-3">
                                            <span class="block font-semibold text-sm text-gray-800">Templates (5)</span>

                                            <div class="ms-auto">
                                                <a class="group py-2 px-2.5 rounded-md flex items-center gap-x-1 text-[13px] bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-900" href="../templates.html">
                                                    Free download
                                                    <svg class="hidden md:inline-block shrink-0 size-3.5 group-hover:translate-x-0.5 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path class="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition" d="M5 12h14" /><path class="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition" d="m12 5 7 7-7 7" /></svg>
                                                </a>
                                            </div>
                                        </div>
                                        {/* <!-- End Header --> */}

                                        {/* <!-- Body --> */}
                                        <div class="p-3 max-h-[25rem] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                                            {/* <!-- Grid --> */}
                                            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                                {/* <!-- Link --> */}
                                                <a class="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100  transition" href="../templates/agency/index.html">
                                                    <img class=" w-28 rounded-lg shadow" src="../assets/img/template-previews/img1.jpg" alt="Main Page" />
                                                    <img class="hidden w-28 rounded-lg shadow" src="../assets/img/template-previews-dark/img1.jpg" alt="Main Page" />

                                                    <p class="text-sm text-gray-800">
                                                        Agency
                                                    </p>
                                                </a>
                                                {/* <!-- End Link --> */}

                                                {/* <!-- Link --> */}
                                                <a class="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100  transition" href="../templates/personal/index.html">
                                                    <img class=" w-28 rounded-lg shadow" src="../assets/img/template-previews/img3.jpg" alt="Main Page" />
                                                    <img class="hidden w-28 rounded-lg shadow" src="../assets/img/template-previews-dark/img3.jpg" alt="Main Page" />

                                                    <p class="text-sm text-gray-800">
                                                        Personal
                                                    </p>
                                                </a>
                                                {/* <!-- End Link --> */}

                                                {/* <!-- Link --> */}
                                                <a class="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100  transition" href="../templates/admin/index.html">
                                                    <img class=" w-28 rounded-lg shadow" src="../assets/img/template-previews/img7.jpg" alt="Main Page" />
                                                    <img class="hidden w-28 rounded-lg shadow" src="../assets/img/template-previews-dark/img7.jpg" alt="Main Page" />

                                                    <p class="text-sm text-gray-800">
                                                        Admin
                                                    </p>
                                                </a>
                                                {/* <!-- End Link --> */}

                                                {/* <!-- Link --> */}
                                                <a class="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100  transition" href="../templates/creative-agency/index.html">
                                                    <img class=" w-28 rounded-lg shadow" src="../assets/img/template-previews/img2.jpg" alt="Main Page" />
                                                    <img class="hidden w-28 rounded-lg shadow" src="../assets/img/template-previews-dark/img2.jpg" alt="Main Page" />

                                                    <p class="text-sm text-gray-800">
                                                        Creative Agency
                                                    </p>
                                                </a>
                                                {/* <!-- End Link --> */}

                                                {/* <!-- Link --> */}
                                                <a class="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 bg-gray-100 transition" href="../templates/ai-prompt/ai-with-sidebar.html">
                                                    <img class=" w-28 rounded-lg shadow" src="../assets/img/template-previews/img4.jpg" alt="Main Page" />
                                                    <img class="hidden w-28 rounded-lg shadow" src="../assets/img/template-previews-dark/img4.jpg" alt="Main Page" />

                                                    <p class="text-sm text-gray-800">
                                                        AI Prompt
                                                    </p>
                                                </a>
                                                {/* <!-- End Link --> */}
                                            </div>
                                            {/* <!-- End Grid --> */}
                                        </div>
                                        {/* <!-- Body --> */}

                                        {/* <!-- Footer --> */}
                                        <div class="p-3 flex flex-wrap justify-center items-center gap-0.5">
                                            <div class="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2">
                                                <a class="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" href="../index.html">
                                                    Main page
                                                    <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path class="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition" d="M5 12h14" /><path class="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition" d="m12 5 7 7-7 7" /></svg>
                                                </a>
                                            </div>
                                            <div class="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2">
                                                <a class="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" href="../examples.html">
                                                    Examples (200+)
                                                    <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path class="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition" d="M5 12h14" /><path class="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition" d="m12 5 7 7-7 7" /></svg>
                                                </a>
                                            </div>
                                            <div class="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2">
                                                <a class="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" href="../templates.html">
                                                    Templates (5)
                                                    <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path class="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition" d="M5 12h14" /><path class="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition" d="m12 5 7 7-7 7" /></svg>
                                                </a>
                                            </div>
                                        </div>
                                        {/* <!-- End Footer --> */}
                                    </div>
                                    {/* <!-- End Tab Content --> */}
                                </div>
                                {/* <!-- End Dropdown --> */}
                            </div>
                            {/* <!-- End Templates Dropdown --> */}
                        </div>

                        {/* <!-- Sidebar Toggle --> */}
                        <button type="button" class="p-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-application-sidebar" aria-label="Toggle navigation" data-hs-overlay="#hs-application-sidebar">
                            <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                            <span>Sidebar</span>
                        </button>
                        {/* <!-- End Sidebar Toggle --> */}
                    </div>

                    {/* <!-- Input --> */}
                    <div class="relative">
                        <textarea class="p-4 pb-12 block w-full bg-destructive-foreground border border-primary text-sm focus:outline-none" placeholder="Ask me anything..."></textarea>

                        {/* <!-- Toolbar --> */}
                        <div class="absolute bottom-px inset-x-px p-2 rounded-b-lg bg-transparent">
                            <div class="flex justify-between items-center">
                                {/* <!-- Button Group --> */}
                                <div class="flex items-center">
                                    {/* <!-- Mic Button --> */}
                                    <button type="button" class="inline-flex shrink-0 justify-center items-center size-8 hover:bg-white focus:z-10 focus:outline-none focus:bg-white">
                                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><line x1="9" x2="15" y1="15" y2="9" /></svg>
                                    </button>
                                    {/* <!-- End Mic Button --> */}

                                    {/* <!-- Attach Button --> */}
                                    <button type="button" class="inline-flex shrink-0 justify-center items-center size-8 hover:bg-white focus:z-10 focus:outline-none focus:bg-white">
                                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                                    </button>
                                    {/* <!-- End Attach Button --> */}
                                </div>
                                {/* <!-- End Button Group --> */}

                                {/* <!-- Button Group --> */}
                                <div class="flex items-center gap-x-1">
                                    {/* <!-- Mic Button --> */}
                                    <button type="button" class="inline-flex shrink-0 justify-center items-center size-8 hover:bg-white focus:z-10 focus:outline-none focus:bg-white">
                                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>
                                    </button>
                                    {/* <!-- End Mic Button --> */}

                                    {/* <!-- Send Button --> */}
                                    <button type="button" class="inline-flex shrink-0 justify-center items-center size-8  text-white bg-primary focus:z-10 focus:outline-none">
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
                    </div>
                    {/* <!-- End Input --> */}
                </div>
                {/* <!-- End Textarea --> */}
            </div>
            {/* <!-- End Content --> */}
        </div>
    )
}

export default Chatbox
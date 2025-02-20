import React from 'react'

const Sidebar = () => {
    return (
        <>
            {/* <!-- Sidebar --> */}
            <div id="hs-application-sidebar" class="hs-overlay [--auto-close:lg]
            hs-overlay-open:translate-x-0 -translate-x-full duration-300 transform
            hidden
             top-0 start-0 bottom-0 z-[60]
            w-80 h-screen
            bg-destructive border-e border-primary
            lg:block lg:translate-x-0 lg:end-auto lg:bottom-0" role="dialog" tabindex="-1" aria-label="Sidebar">
                <nav class="size-full flex flex-col">
                    <div class="flex items-center pt-4 pe-4 ps-7">
                        {/* <!-- Logo --> */}
                        <a class="flex-none focus:outline-none focus:opacity-80" href="../templates.html" aria-label="Preline">
                           <img src="/logo.svg" alt="" />
                        </a>
                        {/* <!-- End Logo --> */}

                        <div class="hidden lg:block lg:ms-2">
                            {/* <!-- Templates Dropdown --> */}
                            <div class="hs-dropdown  relative  [--auto-close:inside] inline-flex">
                                <button id="hs-dropdown-preview-navbar" type="button" class="hs-dropdown-toggle  group relative flex justify-center items-center size-8 text-xs rounded-full  text-white focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                    <span class="">
                                        <svg class=" size-4 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
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
                                <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-full md:w-[450px] transition-[opacity,margin] duration opacity-0 hidden z-30 overflow-hidden border border-gray-200 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)]" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-preview-navbar">
                                    {/* <!-- Tab --> */}
                                    <div class="p-3 pb-0 flex flex-wrap justify-between items-center gap-3 border-b border-gray-200">
                                        {/* <!-- Nav Tab --> */}
                                        <nav class="flex  gap-x-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                                            <button type="button" class="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2 text-nowrap  hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2 after:z-10 after:h-0.5 after:pointer-events-none  " id="hs-pmn-item-pro" aria-selected="false" data-hs-tab="#hs-pmn-pro" aria-controls="hs-pmn-pro" role="tab" >
                                                Pro
                                            </button>
                                            <button type="button" class="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2 text-nowrap  hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2 after:z-10 after:h-0.5 after:pointer-events-none active " id="hs-pmn-item-free" aria-selected="true" data-hs-tab="#hs-pmn-free" aria-controls="hs-pmn-free" role="tab" >
                                                Free
                                            </button>
                                        </nav>
                                        {/* <!-- End Nav Tab --> */}
                                    </div>
                                    {/* <!-- End Tab --> */}

                                    {/* <!-- Tab Content --> */}
                                    <div id="hs-pmn-pro" class="hidden" role="tabpanel" aria-labelledby="hs-pmn-item-pro">
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
                                                {/* // <!-- End Link --> */}

                                                {/* // <!-- Link --> */}
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
                                    <div id="hs-pmn-free" class="" role="tabpanel" aria-labelledby="hs-pmn-item-free">
                                        {/* <!-- Header --> */}
                                        <div class="p-3 flex flex-wrap justify-between items-center gap-3">
                                            <span class="block font-semibold text-sm text-gray-800">Templates (5)</span>

                                            <div class="ms-auto">
                                                <a class="group py-2 px-2.5 rounded-md flex items-center gap-x-1 text-[13px] bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-900" href="../templates.html">
                                                    Free download
                                                    <svg class="hidden md:inline-block shrink-0 size-3.5 group-hover:translate-x-0.5 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path class="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition" d="M5 12h14" /><path class="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition" d="m12 5 7 7-7 7" />
                                                    </svg>
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
                    </div>

                    <div class="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                        {/* <!-- List --> */}
                        <ul class="space-y-1.5 p-4">
                            <li>
                                <a class="flex items-center gap-x-3 py-2 px-3 text-sm  rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 text-white hover:text-primary" href="#">
                                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                    New chat
                                </a>
                            </li>
                            <li>
                                <a class="flex items-center gap-x-3 py-2 px-3 text-sm  rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100  text-white hover:text-primary" href="#">
                                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                                    </svg>
                                    Preline AI Discord
                                </a>
                            </li>
                            <li>
                                <a class="flex items-center gap-x-3 py-2 px-3 text-sm  rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100  text-white hover:text-primary" href="#">
                                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                                    Save conversation
                                </a>
                            </li>
                            <li>
                                <a class="flex items-center gap-x-3 py-2 px-3 text-sm  rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100  text-white hover:text-primary" href="#">
                                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                                    Updates & FAQ
                                </a>
                            </li>
                        </ul>
                        {/* <!-- End List --> */}
                    </div>

                    {/* <!-- Footer --> */}
                    <div class="mt-auto">

                        <div class="p-4 border-t border-gray-200">
                            <a class="flex justify-between items-center gap-x-3 py-2 px-3 text-sm  rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 text-white hover:text-primary" href="#">
                                Sign in
                                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" x2="3" y1="12" y2="12" /></svg>
                            </a>
                        </div>
                    </div>
                    {/* <!-- End Footer --> */}
                </nav>
            </div>
            {/* <!-- End Sidebar --> */}
        </>
    )
}

export default Sidebar
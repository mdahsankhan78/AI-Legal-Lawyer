import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './Sidebar'
import useEncryptedLocalStorage from "./../../api/EncryptedStorage";
import { analyzeDocument, legalQuery } from '../../api/apis';
import Loading from '../ui/loading';
import { toast } from 'react-toastify';

export const formatResponse = (text) => {
    // Split the text by lines
    const lines = text.split('\n');

    // Process each line
    return lines.map((line, index) => {
        const boldRegex = /\*\*(.*?)\*\*/g;
        if (boldRegex.test(line)) {
            // Replace bold text with <strong> tags
            const formattedLine = line.replace(boldRegex, '<strong>$1</strong>');
            return (
                <React.Fragment key={index}>
                    {/* <br /> */}
                    <span dangerouslySetInnerHTML={{ __html: formattedLine }} />
                    <br />
                </React.Fragment>
            );
        } else if (line.match(/^\d+\./)) {
            // Ensure listed items are displayed with line breaks
            return (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            );
        }
    });
};

const Chatbox = () => {
    const { setEncryptedItem, getEncryptedItem } = useEncryptedLocalStorage();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [user, setUser] = useState();
    const [query, setQuery] = useState([])
    const [question, setQuestion] = useState('')
    const [document, setDocument] = useState(null)
    const [loading, setLoading] = useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false);
    const chatContainerRef = useRef(null);

    const handleInput = async (e) => {
        setQuestion(e.target.value);
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setDocument(file);
    };

    const handleDeleteDocument = () => {
        setDocument(null);
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
        if (!document) {
            setQuery(prevQuery => [
                ...prevQuery,
                { question: question, answer: '' }
            ]);
            setQuestion('')
            const res = await legalQuery(question);
            if (res) {
                console.log("Response: ", res.response);
                setQuery(prevQuery => prevQuery.map((q, i) => {
                    if (q.question === question && q.answer === '') {
                        if (res.response) {
                            return { ...q, answer: res.response };
                        }
                        else {
                            return { ...q, answer: 'Something went wrong, check your internet' };
                        }
                    }
                    return q;
                }));
            }
        }
        else {
            setQuery(prevQuery => [
                ...prevQuery,
                { question: document.name, answer: '' }
            ]);
            setDocument(null)
            const res = await analyzeDocument(document);
            if (res) {
                console.log("Response: ", res);
                setQuery(prevQuery => prevQuery.map((q, i) => {
                    if (q.document === document && q.answer === '') {
                        return { ...q, answer: res };
                    }
                    return q;
                }));
            }
        }
    }

    // Automatically scroll to bottom when new responses are added
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [query]);

    // Show/hide the "Go to Bottom" button based on scroll position
    const handleScroll = () => {
        if (chatContainerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
            const isAtBottom = scrollHeight - (scrollTop + clientHeight) < 50; // 50px threshold
            setShowScrollButton(!isAtBottom);
        }
    };

    // Scroll to bottom when the "Go to Bottom" button is clicked
    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='flex'>
            <Sidebar isOpen={isSidebarOpen} />

            {/* <!-- Content --> */}
            <div onClick={isSidebarOpen && toggleSidebar}
                ref={chatContainerRef} onScroll={handleScroll} class={`relative h-screen w-full overflow-y-auto bg-destructive-foreground text-white flex flex-col`}>
                <div className="sticky left-4 top-4 pl-4 flex items-center gap-x-4">

                    {/* toggle sidebar button */}
                    <svg onClick={toggleSidebar} class="shrink-0 size-5 hover:text-primary cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>

                    {/* new chat button */}
                    {/* <svg class="shrink-0 size-5 hover:text-primary cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg> */}
                </div>

                <div class="py-10 lg:py-14">
                    {query.length > 0 ?

                        <ul class="space-y-2">
                            {query.map((q, i) => (
                                <div key={i}>
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
                                                        {q.question}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* <!-- End Chat Bubble --> */}

                                    {/* <!-- Chat Bubble --> */}
                                    <li class="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-5">
                                        <svg class="shrink-0 size-[38px] rounded-full" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="38" height="38" rx="6" fill="#a69d84" />
                                            <path d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25" stroke="white" stroke-width="1.5" />
                                            <path d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25" stroke="white" stroke-width="1.5" />
                                            <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white" />
                                        </svg>

                                        <div>
                                            <h2 >
                                                {q.answer !== '' ?
                                                    <span ><span>{formatResponse(q.answer)}</span></span>
                                                    : <Loading className={'mx-2 my-4'} />
                                                }
                                            </h2>
                                        </div>
                                    </li>
                                    {/* <!-- End Chat Bubble --> */}

                                </div>
                            ))}
                        </ul>
                        :

                        <div class="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto text-center h-[50vh] flex flex-col justify-center">
                            <h1 class="text-3xl font-bold sm:text-4xl modern">
                                Welcome to AI Legal Lawyer
                            </h1>
                            <p class="mt-3 text-2xl text-primary modern">
                                How can I help you today?
                            </p>
                        </div>
                    }
                </div>

                {/* <!-- Textarea --> */}
                <div class={`max-w-4xl w-full sticky mx-auto bottom-0 z-10 p-3 sm:py-6 mt-auto`}>
                    {showScrollButton && (
                        <div class="flex justify-end mb-2 sm:mb-3">
                            <div class="me-2">
                                {/* <!-- Templates Dropdown --> */}
                                <div class="hs-dropdown  relative  [--auto-close:inside] inline-flex">
                                    <button onClick={scrollToBottom} id="hs-dropdown-preview-sidebar" type="button" class="hs-dropdown-toggle  group relative flex justify-center items-center size-8 text-xs text-gray-800 bg-primary disabled:opacity-50 disabled:pointer-events-none focus:outline-none" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                        <span class="">
                                            <svg class=" size-4 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* File Preview */}
                    {document && (
                        <div class="mb-2 p-2 bg-primary rounded-lg flex justify-between items-center">
                            <span class="text-sm text-white">{document.name}</span>
                            <button onClick={handleDeleteDocument} class="text-white hover:text-red-500">
                                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            </button>
                        </div>
                    )}

                    {/* <!-- Input --> */}
                    <form onSubmit={handleQuery} class="relative">
                        <textarea onChange={handleInput} value={question} class="p-4 pb-12 block w-full bg-destructive-foreground border border-primary text-sm focus:outline-none max-h-24 min-h-24" placeholder="Ask me anything..." required={!document}></textarea>

                        {/* <!-- Toolbar --> */}
                        <div class="absolute bottom-px inset-x-px p-2 rounded-b-lg bg-transparent">
                            <div class="flex justify-between items-center">
                                {/* <!-- Button Group --> */}
                                <div class="flex items-center">

                                    {/* <!-- Attach Button --> */}
                                    <div class="file-upload">
                                        <input type="file" id="file-input" onChange={handleFileUpload} />
                                        <label for="file-input" class="custom-file-input">
                                            <svg class="shrink-0 size-4 hover:text-primary cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                                        </label>
                                    </div>
                                    {/* <!-- End Attach Button --> */}
                                </div>
                                {/* <!-- End Button Group --> */}

                                {/* <!-- Button Group --> */}
                                <div class="flex items-center gap-x-1">
                                    {/* <!-- Send Button --> */}
                                    <button
                                        disabled={!document && question === '' || query.some(q => q.answer === '')} type="submit" class="inline-flex shrink-0 justify-center items-center size-8  text-white bg-primary focus:z-10 focus:outline-none">
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
            <style>
                {`
                #file-input {
                display: none;
                }
                `}
            </style>
            {/* <!-- End Content --> */}
        </div>
    )
}

export default Chatbox
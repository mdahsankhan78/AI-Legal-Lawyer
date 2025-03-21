import React, { useEffect, useRef, useState } from 'react'
import Chatbox from '../components/Chat/Chatbox'
import Sidebar from '../components/Chat/Sidebar'
import { useLocation, useNavigate } from 'react-router-dom';
import useEncryptedLocalStorage from '../api/EncryptedStorage';
import { isUserLoggedIn } from '../api/apis';

const Chat = ({ children, query, setShowScrollButton, scroll, query2, onDelete }) => {
  const { getEncryptedItem } = useEncryptedLocalStorage();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const user = getEncryptedItem('user')
  const location = useLocation()
  const chatContainerRef = useRef(null);

  // Automatically scroll to bottom when new responses are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
    scrollToBottom()
  }, [query2, scroll]);

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

  useEffect(() => {
    if (isUserLoggedIn()) {
      if (user === 'User not logged in') {
        navigate('/login')
      }
    }
    else {
      navigate('/login')
    }
  }, [location])

  // Function to check if the screen size is lg (1024px) or above
  const isLgScreen = () => window.matchMedia('(min-width: 1024px)').matches;
  const toggleSidebar = () => {
    if (!isLgScreen()) {
      if (isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    }
  };

  const handleNavigate = () => {
    if (query) {
      query([])
    }
    navigate('/chat')
  }

  return (
    <div className='bg-destructive-foreground'>
      <div className='flex'>
        <Sidebar isOpen={isSidebarOpen} query={query2} onDelete={onDelete}/>
        {/* <!-- Content --> */}
        <div onClick={toggleSidebar} onScroll={handleScroll} ref={chatContainerRef} class={`relative h-screen w-full overflow-y-auto bg-destructive-foreground text-white flex flex-col`}>

          <div className="sticky left-4 top-4 pl-4 flex items-center gap-x-4">

            {/* toggle sidebar button */}
            <svg onClick={() => setIsSidebarOpen(!isSidebarOpen)} class="shrink-0 size-5 hover:text-primary cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>

            {user && user.role === 'User' &&
              (
                < p onClick={handleNavigate} className='text-white'>
                  <svg class="shrink-0 size-5 hover:text-primary cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                </p>
              )}

          </div>

          {children}
        </div>
        {/* <!-- End Content --> */}
      </div>
    </div >
  )
}

export default Chat
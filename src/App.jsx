import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import Index from "./pages/Index"
import Lottie from "react-lottie";
import animationData from "./../public/loading.json";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from "react";
import Auth from "./pages/Auth";
import Chat from "./pages/Chat";
import GoToTop from "./components/Reusable/GoToTop";
import { getCurrentUser } from "./api/apis";
import useEncryptedLocalStorage from "./api/EncryptedStorage";
import GenerateFIR from "./pages/GenerateFIR";

function App() {
  const { setEncryptedItem, getEncryptedItem } = useEncryptedLocalStorage();
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [animate, setAnimate] = useState(true);
  const [user, setUser] = useState();
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out' });

  }, []);

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowGoToTop(true);
    } else {
      setShowGoToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      // debugger
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const currentUser = await getCurrentUser(token);
          if (currentUser === 'User not logged in') {
            navigate('/');
            setAnimate(false);
          } else if (currentUser) {
            setAnimate(false)
            setUser(currentUser);
            setEncryptedItem('user', currentUser)
          }
        } catch (error) {
          console.error("Error fetching user:", error);
          setAnimate(false);
          navigate('/');
        }
      } else {
        navigate('/');
        setAnimate(false);
      }
    }
    fetchUser()
  }, []);

  return (
    <div className="relative">
      {animate ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-destructive">
          <Lottie options={lottieOptions} height={400} width={400} />
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/register" element={<Auth />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/generate_fir" element={<GenerateFIR />} />
          </Routes>
          {showGoToTop && <GoToTop />}
        </>
      )}
    </div>
  )
}

export default App

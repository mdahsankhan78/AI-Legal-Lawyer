import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import Lottie from "react-lottie";
import animationData from "./../public/loading.json";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from "react";
import Auth from "./pages/Auth";

function App() {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out' });

    const timer = setTimeout(() => {
      setAnimate(false); 
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const lottieOptions = {
    loop: true, 
    autoplay: true, 
    animationData: animationData, 
  };

  return (
    <>
      {animate ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-destructive">
          <Lottie options={lottieOptions} height={400} width={400} />
        </div>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/register" element={<Auth />} />
          </Routes>
        </Router>
      )}
    </>
  )
}

export default App

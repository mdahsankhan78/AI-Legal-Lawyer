import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import Navbar from "./components/Reusable/Navbar"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out' });
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import Navbar from "./components/Reusable/Navbar"

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Index/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

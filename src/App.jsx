import './App.css'
import Home from "./pages/Home"
import Destination from "./pages/Destination"
import Technology from "./pages/Technology"
import Page404 from "./pages/Page404"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/Nav"
import MobileNav from "./components/MobileNav"
import Crew from './pages/Crew'




function App() {

  return (
    <>
      <BrowserRouter>
        <div className="d-block d-md-none">
          <MobileNav />
        </div>
        <NavBar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/destination/:planetId" element={<Destination />} />
          <Route path="/technology/:technologyId" element={<Technology />} />
          <Route path="/crew/:crewId" element={<Crew />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

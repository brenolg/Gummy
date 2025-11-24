import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Checkout from './Pages/Checkout'
import TrackOrderPage from './Pages/TrackOrderPage'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Power-Gummy" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/track" element={<TrackOrderPage />} />
      </Routes>
    </BrowserRouter>
  )
}

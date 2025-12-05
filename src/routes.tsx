import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Checkout from './Pages/Checkout'
import TrackOrderPage from './Pages/TrackOrderPage'
import PrivacyPolicy from './Pages/TermsAndPrivacy/PrivacyPolicy'
import Terms from './Pages/TermsAndPrivacy/Terms'
import LoginPage from './Pages/LoginPage'
import Sales from './Pages/Sales'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/track" element={<TrackOrderPage />} />
        <Route path="/admin" element={<LoginPage />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>
    </BrowserRouter>
  )
}

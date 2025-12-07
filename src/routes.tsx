import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Checkout from './Pages/Checkout'
import TrackOrderPage from './Pages/TrackOrderPage'
import PrivacyPolicy from './Pages/TermsAndPrivacy/PrivacyPolicy'
import Terms from './Pages/TermsAndPrivacy/Terms'
import LoginPage from './Pages/LoginPage'
import Cupons from './Pages/Cupons'
import Clients from './Pages/Clientes'
import Dashboard from './Pages/Dashboard'
import Banners from './Pages/Banners'
import AdminLayout from './layouts/AdminLayout'

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

        {/* ÁREA ADMIN COM SIDEBAR */}
        <Route path="/" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="clientes" element={<Clients />} />
          <Route path="cupons" element={<Cupons />} />
          <Route path="banners" element={<Banners />} />
        </Route>

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

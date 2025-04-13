import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import { FoodProvider } from './contexts/FoodContext';
import { PointsProvider } from './contexts/PointsContext';

// Import pages
import Home from './pages/Home';
import DonatePage from './pages/DonatePage';
import RequestPage from './pages/RequestPage';
import DonorDashboard from './pages/DonorDashboard';
import PartnerDashboard from './pages/PartnerDashboard';
import Community from './pages/Community';
import AllDonationsPage from './pages/AllDonationsPage';
import AllClaimsPage from './pages/AllClaimsPage';
import About from './pages/About';
import RedeemRewards from './pages/RedeemRewards';

const App = () => {
  return (
    <PointsProvider>
      <FoodProvider>
        <Router basename="/Ahaar-Setu">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/request" element={<RequestPage />} />
            <Route path="/donor-dashboard" element={<DonorDashboard />} />
            <Route path="/partner-dashboard" element={<PartnerDashboard />} />
            <Route path="/community" element={<Community />} />
            <Route path="/all-donations" element={<AllDonationsPage />} />
            <Route path="/all-claims" element={<AllClaimsPage />} />
            <Route path="/rewards" element={<RedeemRewards />} />
            <Route path="/redeem-rewards" element={<RedeemRewards />} />
          </Routes>
          <Toaster />
        </Router>
      </FoodProvider>
    </PointsProvider>
  );
};

export default App;

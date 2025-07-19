import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TripPlannerPage from './pages/TripPlannerPage';
import TripDatePage from './pages/TripDatePage';
import PointOfInterestPage from './pages/PointOfInterestPage';
import WelcomePage from './pages/WelcomePage';
import Loader from './components/Loader';
import Layout from './components/Layout';
import PlanTripPage from './pages/PlanTripPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HowItWorksPage from './pages/HowItWorksPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ScrollToTop from './ScrollToTop';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';

const AppWithLoader = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('userData');
    return saved ? JSON.parse(saved) : [];
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const [tripDates, setTripDates] = useState(() => {
    const saved = localStorage.getItem("tripDates");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tripDates", JSON.stringify(tripDates));
    localStorage.setItem("userData", JSON.stringify(data));
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [tripDates, data, isLoggedIn]);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  function handleLogOut() {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      setIsLoggedIn(false);
      localStorage.removeItem('isLoggedIn');
      setSubMenu(false);
    }
  }

  const [activeNav, setActiveNav] = useState('home');

  const getHeaderChoiceFromPath = (path) => {
    if (path === '/' || path === '/#/' || path === '#/') return 'home';
    if (path.includes('about')) return 'about';
    if (path.includes('privacy')) return 'privacy';
    if (path.includes('contact')) return 'contact';
    if (path.includes('terms')) return 'terms';
    if (path.includes('how-it-works')) return 'how-it-works';
    if (path.includes('plan-trip-page')) return 'plan-trip-page'
    return 'home';
  };

  useEffect(() => {
    const newChoice = getHeaderChoiceFromPath(
      location.pathname.toLowerCase() + location.hash.toLowerCase()
    );
    setActiveNav(newChoice);
    localStorage.setItem('activeNav', newChoice);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <Routes>
        <Route
          index
          element={
            isLoggedIn ? (
              <Navigate to="/home" replace />
            ) : (
              <WelcomePage setIsLoggedIn={setIsLoggedIn} data={data} setData={setData} />
            )
          }
        />
        {/* ✅ Protected pages */}
        <Route
          path="/trip_planner_page"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <TripPlannerPage tripDates={tripDates} setTripDates={setTripDates} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trip_date_page"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <TripDatePage tripDates={tripDates} setTripDates={setTripDates} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/point_of_interest_page"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <PointOfInterestPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/plan-trip-page"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <PlanTripPage tripDates={tripDates} setIsLoggedIn={setIsLoggedIn} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />

        {/* ✅ Protected layout + children routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Layout
                isLoggedIn={isLoggedIn}
                handleLogOut={handleLogOut}
                activeNav={activeNav}
                subMenu={subMenu}
                setSubMenu={setSubMenu}
              />
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
        </Route>
      </Routes>
    </>
  );
};

const App = () => (
  <HashRouter>
    <ScrollToTop />
    <AppWithLoader />
  </HashRouter>
);

export default App;

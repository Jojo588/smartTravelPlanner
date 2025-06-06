import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import TripPlannerPage from './pages/TripPlannerPage';
import TripDatePage from './pages/TripDatePage';
import PointOfInterestPage from './pages/PointOfInterestPage';
import WelcomePage from './pages/WelcomePage';
import Loader from './components/Loader';

// Wrapper component to track route changes and show loader
const AppWithLoader = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

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
    const timeout = setTimeout(() => setLoading(false), 400); // Show loader for 400ms on route change
    return () => clearTimeout(timeout);
  }, [location.pathname]);

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
        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <Home tripDates={tripDates} setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/trip_planner_page"
          element={<TripPlannerPage tripDates={tripDates} setTripDates={setTripDates} />}
        />
        <Route
          path="/trip_date_page"
          element={<TripDatePage tripDates={tripDates} setTripDates={setTripDates} />}
        />
        <Route path="/point_of_interest_page" element={<PointOfInterestPage />} />
      </Routes>
    </>
  );
};

const App = () => (
  <HashRouter>
    <AppWithLoader />
  </HashRouter>
);

export default App;

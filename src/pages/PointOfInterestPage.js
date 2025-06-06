import React, { useEffect, useState } from 'react';
import PointsOfInterestSection from '../components/PointsOfInterestSection';
import pOIBG from '../images/wallpaperflare.com_wallpaper.jpg';

const PointOfInterestPage = () => {
  const [cityName, setCityName] = useState('');
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const storedCity = localStorage.getItem("cityName");
    const storedPoints = localStorage.getItem("points");

    if (storedCity) setCityName(storedCity);
    if (storedPoints) setPoints(JSON.parse(storedPoints));
  }, []);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-8 relative"
      style={{ backgroundImage: `url(${pOIBG})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-amber-900 opacity-80 z-0" />

      {/* Foreground card */}
      <div className="relative z-10 w-full max-w-4xl bg-white opacity-85  backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-10">
        <h1 className="text-2xl md:text-4xl font-bold capitalize mb-6 text-center ">
          {cityName ? `Points of Interest in ${cityName}` : "Points of Interest"}
        </h1>

        <PointsOfInterestSection points={points} />
      </div>
    </div>
  );
};

export default PointOfInterestPage;

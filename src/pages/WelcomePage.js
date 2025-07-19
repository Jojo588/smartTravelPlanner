import React, { useEffect, useState } from 'react';
import Login from '../components/Login';
import bg from '../images/Christ-the-Redeemer.jpg';
import List from '../components/List';
import List2 from '../components/List2';

const WelcomePage = ({ data, setData, setIsLoggedIn }) => {
  const [shiftWindow, setShiftWindow] = useState(true);
  const [currentMessage, setCurrentMessage] = useState(List[0].name);
  const [currentSecondMessage, setCurrentSecondMessage] = useState(List2[0].name);
  const [fadeFirst, setFadeFirst] = useState(true);
  const [fadeSecond, setFadeSecond] = useState(true);

  // Auto-collapse search after 10s
  useEffect(() => {
    const timeout = setTimeout(() => setShiftWindow(false), 10000);
    return () => clearTimeout(timeout);
  }, []);

  // Handle window click for small screens
  useEffect(() => {
    function handleWindowClick() {
      if (window.innerWidth <= 768) {
        setShiftWindow(false);
      }
    }
    window.addEventListener('click', handleWindowClick);
    return () => window.removeEventListener('click', handleWindowClick);
  }, []);

  // Animating both messages at intervals, second delayed by 0.7s
  useEffect(() => {
    const interval = setInterval(() => {
      // Animate first message
      setFadeFirst(false);
      setTimeout(() => {
        const random1 = List[Math.floor(Math.random() * List.length)].name;
        setCurrentMessage(random1);
        setFadeFirst(true);
      }, 300);
      
      // Animate second message after 0.7s
      setTimeout(() => {
        setFadeSecond(false);
        setTimeout(() => {
          const random2 = List2[Math.floor(Math.random() * List2.length)].name;
          setCurrentSecondMessage(random2);
          setFadeSecond(true);
        }, 300);
      }, 700);
    }, 3000);
      return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen">
      <div
        className={`relative w-3/5 min-h-screen bg-cover bg-center flex items-center justify-center px-4 ${
          shiftWindow ? 'max-md:w-full' : 'max-md:hidden'
        }`}
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-white px-10 text-center max-md:w-full">
          <h3 className="text-2xl font-semibold mb-2 drop-shadow-md">Welcome to</h3>

          <h1 className="text-6xl font-extrabold mb-6 max-md:text-4xl drop-shadow-lg tracking-wide">
            <span className="underline decoration-wavy decoration-yellow-400">Wa</span>nder Wise
          </h1>

          <h2
            className={`text-2xl font-semibold mb-4 transition-opacity duration-500 drop-shadow-md ${
              fadeSecond ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {currentSecondMessage}
          </h2>

          <h2
            className={`text-lg font-medium transition-opacity duration-500 drop-shadow-sm ${
              fadeFirst ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {currentMessage}
          </h2>
        </div>
      </div>
      <div
        className={`w-2/5 flex justify-center items-center ${
          shiftWindow ? 'max-md:hidden' : 'max-md:w-full'
        } bg-gradient-to-br from-black via-gray-900 to-amber-900`}
      >
        <Login data={data} setData={setData} setIsLoggedIn={setIsLoggedIn} />
      </div>
    </div>
  );
};

export default WelcomePage;

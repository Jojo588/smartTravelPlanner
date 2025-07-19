import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Weather from '../components/Weather';
import TripDate from '../components/TripDate';
import CityMap from '../components/CityMap';
import PointsOfInterest from '../components/PointsOfInterest';
import TripPlanner from '../components/TripPlanner';
import beach from '../images/dfa2f38369e7cfc93bc96b3da85ecb5c.jpg';
import SearchSection from '../components/SearchSection';

const PlanTripPage = ({ tripDates }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState('');
  const [mapLink, setMapLink] = useState(null);
  const [points, setPoints] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [displaySearch, setDisplaySearch]= useState(false);

  const WeatherApiKey = 'ce118444b00513991cf24927ad85f653';
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${WeatherApiKey}`;
  const PoiApiKey = process.env.REACT_APP_FOURSQUARE_API_KEY;

  // Load from localStorage on mount
  useEffect(() => {
    const storedCity = localStorage.getItem('cityName');
    if (storedCity) {
      const storedWeather = JSON.parse(localStorage.getItem('weatherData'));
      const storedMap = localStorage.getItem('mapLink');
      const storedPoints = JSON.parse(localStorage.getItem('points'));

      setCityName(storedCity);
      setWeatherData(storedWeather);
      setMapLink(storedMap);
      setPoints(storedPoints || []);
    }


  }, []);

  // Save data to localStorage
  const cacheData = (weather, map, pointsList) => {
    localStorage.setItem('cityName', cityName);
    localStorage.setItem('weatherData', JSON.stringify(weather));
    localStorage.setItem('mapLink', map);
    localStorage.setItem('points', JSON.stringify(pointsList));
  };

  // Clear previous cache
  const clearCache = () => {
    localStorage.removeItem('cityName');
    localStorage.removeItem('weatherData');
    localStorage.removeItem('mapLink');
    localStorage.removeItem('points');
  };

  // Fetch POI
  const fetchPoints = async () => {
    try {
      const response = await fetch(
        `https://api.foursquare.com/v3/places/search?near=${cityName}&limit=10`,
        {
          headers: {
            Accept: 'application/json',
            Authorization: PoiApiKey,
          },
        }
      );

      const data = await response.json();
      return data.results ? data.results.map(place => place.name) : [];
    } catch (error) {
      console.error('Error fetching points of interest:', error);
      return [];
    }
  };

  // Handle click to fetch weather/map/POI
  async function handleClick() {
    setIsLoading(true);
    clearCache(); // Clears old data

    try {
      const res = await fetch(forecastUrl);
      const data = await res.json();

      const newWeather = {
        city: data.city.name,
        temp:
          (data.list[0].main.temp +
            data.list[1].main.temp +
            data.list[2].main.temp +
            data.list[3].main.temp +
            data.list[4].main.temp +
            data.list[5].main.temp +
            data.list[6].main.temp +
            data.list[7].main.temp) /
          8,
        day2Temp:
          (data.list[8].main.temp +
            data.list[9].main.temp +
            data.list[10].main.temp +
            data.list[11].main.temp +
            data.list[12].main.temp +
            data.list[13].main.temp +
            data.list[14].main.temp +
            data.list[15].main.temp) /
          8,
        day3Temp:
          (data.list[16].main.temp +
            data.list[17].main.temp +
            data.list[18].main.temp +
            data.list[19].main.temp +
            data.list[20].main.temp +
            data.list[21].main.temp +
            data.list[22].main.temp +
            data.list[23].main.temp) /
          8,
        day4Temp:
          (data.list[24].main.temp +
            data.list[25].main.temp +
            data.list[26].main.temp +
            data.list[27].main.temp +
            data.list[28].main.temp +
            data.list[29].main.temp +
            data.list[30].main.temp +
            data.list[31].main.temp) /
          8,
        day5Temp:
          (data.list[32].main.temp +
            data.list[33].main.temp +
            data.list[34].main.temp +
            data.list[35].main.temp +
            data.list[36].main.temp +
            data.list[37].main.temp +
            data.list[38].main.temp +
            data.list[39].main.temp) /
          8,
        description: data.list[0].weather[0].description,
        description2: data.list[8].weather[0].description,
        description3: data.list[16].weather[0].description,
        description4: data.list[24].weather[0].description,
        description5: data.list[32].weather[0].description
      };

      const newMapLink = `https://www.google.com/maps?q=${cityName}&output=embed`;
      const newPoints = await fetchPoints();

      // Save to state
      setWeatherData(newWeather);
      setMapLink(newMapLink);
      setPoints(newPoints);

      // Cache in localStorage
      cacheData(newWeather, newMapLink, newPoints);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setIsLoading(false);
    }
  }

const timerRef = useRef(null);

// Starts a 10s timer that hides the mobile search bar
const startInactivityTimer = () => {
  clearTimeout(timerRef.current);
  timerRef.current = setTimeout(() => {
    setDisplaySearch(false);
  }, 10000);
};

// Called on each keystroke to reset the timer
const stopInactivityTimer = () => {
  clearTimeout(timerRef.current);
  startInactivityTimer();
};

  return (
    <div className='relative'>
      <div
        className="w-full min-h-screen bg-cover bg-center p-4 relative"
        style={{ backgroundImage: `url(${beach})` }}
      >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-amber-900 opacity-80 z-0"></div>

          <div className="relative z-10 backdrop-blur-sm pb-4 rounded-md">
            {/* all your inner content goes here */}
            <Header
            handleClick={handleClick}
            setCityName={setCityName}
            cityName={cityName}
            setDisplaySearch={setDisplaySearch}
            startInactivityTimer={startInactivityTimer}
            stopInactivityTimer={stopInactivityTimer}
            // handleLogOut={handleLogOut}
            />
            {displaySearch ?
            <div className='sm:hidden mb-8 mt-2 ml-3 mr-3 duration-700'>
            <SearchSection handleClick={handleClick} setCityName={setCityName} cityName={cityName}  onUserInput={stopInactivityTimer}/>
            </div> : <div className='mb-8'/>
            }

            <div className="grid grid-cols-4 gap-6 ml-7 mr-7 max-lg:grid-cols-3 max-md:grid-cols-4 max-sm:grid-cols-2 max-sm:ml-2 max-sm:mr-2">
              <div className="bg-white opacity-85 col-span-3 p-4 rounded-md max-md:col-span-4 max-sm:col-span-2">
                <Weather
                isLoading={isLoading}
                {...weatherData}
                />
              </div>
              <div className="bg-white opacity-85 p-3 rounded-md max-md:col-span-2 max-sm:col-span-2">
                <TripDate
                tripDates={tripDates}
                />
              </div>
              <div className="bg-white opacity-85 col-span-2 p-3 rounded-md max-sm:col-span-1 max-sm:h-fit">
                <CityMap
                isLoading={isLoading}
                mapLink={mapLink}
                />
              </div>
              <div className="bg-white opacity-85 p-3 rounded-md max-lg:col-span-2 max-sm:col-span-1 max-sm:h-fit md-sm:bg-red-400">
                <PointsOfInterest
                isLoading={isLoading}
                cityName={cityName}
                points={points}
                />
              </div>
              <div className="bg-white opacity-85 p-3 rounded-md max-md:col-span-2">
                <TripPlanner />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default PlanTripPage;

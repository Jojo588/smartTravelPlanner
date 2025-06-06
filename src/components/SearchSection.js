import React, { useEffect } from 'react';
import search from '../images/icons8-search-50.png';

const SearchSection = ({ handleClick, setCityName, cityName, onUserInput }) => {
  function handleChange(event) {
    setCityName(event.target.value);
    if (onUserInput) onUserInput(); // restart inactivity timer
  }

  useEffect(() => {
    if (cityName) {
      localStorage.setItem('storedCityName', JSON.stringify(cityName));
    }
  }, [cityName]);




  function handleSubmit(e) {
    e.preventDefault();
    handleClick();
    }


  return (
    <form className='flex gap-1 border pl-1 border-gray-400 rounded-md bg-white' onSubmit={handleSubmit}>
            <button
        type="submit"
        className="duration-300 hover:scale-90 mt-1 "
        title='check weather forecast for city' 
      >
        <img
          src={search}
          alt="search"
          className="w-4 h-4 object-contain"
        />
      </button>
      <input
        onChange={handleChange}
        value={cityName}
        type='search'
        placeholder='search city here...'
        className="p-1 rounded focus:ring-blue-300 max-sm:w-full focus:outline-none"
      />

    </form>
  );
};

export default SearchSection;

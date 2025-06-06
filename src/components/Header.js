import React from 'react';
import exit from '../images/icons8-log-out-100.png';
import SearchSection from './SearchSection';

const Header = ({
  handleClick,
  setCityName,
  cityName,
  setDisplaySearch,
  startInactivityTimer,
  stopInactivityTimer,
  handleLogOut
}) => {
  function removeSearch() {
    setDisplaySearch(prev=>{
      return !prev;
    });
    startInactivityTimer(); // start countdown only when input is shown
  }

  return (
    <div className='flex justify-between p-2 pl-8 pr-8 bg-white opacity-90 rounded-tl-xl rounded-tr-xl sm:mb-8 max-sm:pl-3 max-sm:pr-3 items-center'>
      <div>
        <h1 className='font-bold text-3xl capitalize max-sm:text-2xl'>WanderWise</h1>
      </div>

      <div className='flex justify-between gap-2'>
        <div className='max-sm:hidden'>
          <SearchSection
            handleClick={handleClick}
            setCityName={setCityName}
            cityName={cityName}
            onUserInput={stopInactivityTimer}
          />
        </div>

        <div className='flex justify-between gap-2 items-center'>
          <div
              onClick={removeSearch}
              title='search city'
              alt='search icon'
              className='sm:hidden cursor-pointer duration-300 text-white bg-blue-500 p-1 pl-3 pr-3 rounded-md capitalize hover:bg-blue-700'
            >search
          </div>
          <div>
<button
  className="bg-red-500 p-1 pl-3 pr-3 rounded-md  duration-300 hover:scale-90"
  onClick={handleLogOut}
>
  <img
    src={exit}
    title="exit"
    alt="exit icon"
    className="w-6 h-6 object-contain"
  />
</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

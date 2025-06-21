import React from 'react';
import { useLocation } from 'react-router-dom';

const TripDateSection = ({ cityName, startDate, endDate, onDelete }) => {
  const location = useLocation();
  const isTripDatePage = location.pathname === '/trip_date_page';

  return (
    <div>
      {/* Section of the created trip dates */}
      <div className='flex justify-between bg-gradient-to-r from-purple-700 to-blue-400 p-4 mb-4 items-center rounded-lg shadow-md'>
        <div>
          <h1 className='font-bold text-2xl text-white capitalize'>{cityName}</h1>
          <p className='text-white text-sm'>{startDate} - {endDate}</p>
        </div>

        {isTripDatePage && (
          <div className='flex items-center'>
            <button
              className="bg-white text-red-500 border border-red-500 px-4 py-2 rounded-md font-medium transition-all duration-300 hover:bg-red-500 hover:text-white max-sm:px-2 max-sm:py-1"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripDateSection;

import React from 'react';
import TripDateSection from './TripDateSection'
import { Link } from 'react-router-dom'
const TripDate = ({tripDates}) => {


const showTripDate = tripDates.length;
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold capitalize'>
            trip dates
        </h1>
        {showTripDate!==0 &&
        <button className='text-white bg-blue-500 p-1 pl-3 pr-3 rounded-md capitalize duration-300 hover:bg-blue-700 hover:text-white'>
          <Link 
          to={"/trip_date_page"}>full view </Link> </button>
        }
        </div><br/>
        <div className='capitalize'>
        {showTripDate===0? 'you have not planned any trip at the moment \n check the trip planner to plan a trip':

        <div className='grid grid-cols-1 bg-slate-300 p-2 rounded-md overflow-hidden h-44 max-lg:h-52'>
          {tripDates.map((trip, index)=>(
        <TripDateSection
        key= {index}
        cityName={trip.cityName}
        startDate={trip.startDate}
        endDate={trip.endDate}
        />

      ))}

        </div>
        }

        </div>
    </div>
  )
}

export default TripDate
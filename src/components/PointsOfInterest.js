import React from 'react'
import PointsOfInterestSection from './PointsOfInterestSection'
import {Link} from 'react-router-dom'
const PointsOfInterest = ({isLoading, points, cityName}) => {
    if (isLoading) {
    return (
      <div className="h-48 flex items-center justify-center">
        <div className="flex items-center gap-2 text-lg font-medium">
          <div className="w-5 h-5 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span>Loading points of interest...</span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className='flex justify-between items-center mb-2'>
        <h1 className='text-2xl font-bold capitalize max-sm:text-lg max-sm:font-extrabold max-sm:mb-5 max-sm:hidden'>
            points of interest
        </h1>
         <h1 className='text-2xl font-bold capitalize max-sm:text-lg max-sm:font-extrabold sm:hidden'>
            P.O.I
        </h1>
        <button className='text-white bg-blue-500 p-1 pl-3 pr-3 max-sm:pl-1 max-sm:pr-1 rounded-md capitalize duration-300 max-md:text-base hover:bg-blue-700 hover:text-white max-sm:text-sm'>
          <Link 
          to={"/point_of_interest_page"}>
            view
          </Link>
        </button>
        </div>
        <div className='w-full h-32 rounded-md overflow-hidden max-md:h-56 max-lg:h-36 max-sm:h-52'>
            <PointsOfInterestSection
            points={points}
            cityName={cityName} />
        </div>
    </div>
  )
}

export default PointsOfInterest
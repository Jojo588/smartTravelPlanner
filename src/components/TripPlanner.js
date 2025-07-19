import React from 'react'
import { Link } from 'react-router-dom'

const TripPlanner = () => {
  return (
    <div >
      
      <h1 className='text-2xl font-bold capitalize max-md:text-2xl'>
        trip planner
      </h1>
      <br/>
      <div className='text-center'>
        <p className='capitalize mb-8 text-lg max-md:text-xl max-md:pt-3 max-md:mb-20'>
          choose dates for your exclusive trips here
        </p>
        <Link to='/trip_planner_page'>
          <button className='capitalize text-white bg-blue-500 p-2 pl-4 pr-4 font-bold rounded-md duration-300 hover:bg-blue-700 hover:text-white max-md:text-xl max-md:mb-2'>
              start
          </button>
        </Link>
      </div>
    </div>
  )
}

export default TripPlanner
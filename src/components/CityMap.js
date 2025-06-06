import React from 'react'

const CityMap = ({mapLink, isLoading}) => {
  if (isLoading) {
    return (
  <div className="h-48 flex items-center justify-center">
    <div className="flex items-center gap-2 text-lg font-medium">
      <div className="w-5 h-5 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <span>Loading city map...</span>
    </div>
  </div>
    );
  }


// check if mapLink is provided
  if (!mapLink) {
    return (
      <div className="h-40 flex items-center justify-center max-sm:h-60">
        <p className="text-xl font-medium ">No map available</p>
      </div>
    );
  }


  return (
    <div>
        <h1 className='text-2xl font-bold capitalize mb-2 max-sm:text-lg max-sm:font-extrabold '>
            City map
        </h1>
        <div className='w-full h-40 rounded-md max-lg:h-56 max-sm:h-fit'>
<iframe
  width="100%"
  height="fit-content"
  loading="lazy"
  allowFullScreen
  src={mapLink}
  referrerPolicy="no-referrer-when-downgrade"
  title="City Map View"
  className='rounded-md max-md:h-56 max-lg:h-56 max-sm:h-52'>
</iframe>

        </div>
    </div>
  )
}

export default CityMap
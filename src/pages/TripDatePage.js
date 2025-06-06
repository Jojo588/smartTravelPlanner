import React from 'react';
import TripDateSection from '../components/TripDateSection';
import tripDatePageBg from '../images/photo-1506973035872-a4ec16b8e8d9.jpg';

const TripDatePage = ({ tripDates, setTripDates }) => {
  function handleDelete(indexToDelete) {
    const updated = tripDates.filter((_, index) => index !== indexToDelete);
    setTripDates(updated);
  }

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center p-4 relative"
      style={{ backgroundImage: `url(${tripDatePageBg})` }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-amber-900 opacity-80 z-0" />

      {/* Foreground content */}
      <div className="relative z-10 backdrop-blur-md bg-white opacity-85  rounded-lg p-6 shadow-lg m-4">
        <h1 className="capitalize font-bold text-3xl text-center mb-6">
          Trip Dates
        </h1>
        <div className="space-y-4">
          {tripDates.map((trip, index) => (
            <TripDateSection
              key={index}
              cityName={trip.cityName}
              startDate={trip.startDate}
              endDate={trip.endDate}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripDatePage;

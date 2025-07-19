import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from '../images/antigua-arquitectura-coliseum-roma-wallpaper-447cd4e8ad19f23964a344990931822d.jpg';

const TripPlannerPage = ({ tripDates, setTripDates }) => {
  const [tripEntries, setTripEntries] = useState({
    cityName: "",
    startDate: "",
    endDate: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setTripEntries((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
// handle submit function that checks for valid entry dates and saves entries to setTripEntries
  function handleSubmit(e) {
    e.preventDefault();

    if (new Date(tripEntries.endDate) < new Date(tripEntries.startDate)) {
      alert("End date cannot be earlier than start date.");
      return;
    }

    setTripDates([...tripDates, tripEntries]);
    setTripEntries({ cityName: "", startDate: "", endDate: "" });

    navigate("/home");
  }

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-amber-900 opacity-80 z-0" />

        <div className="relative z-10 w-full max-w-2xl bg-white opacity-85 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center ">
            Trip Planner
          </h1>
          {/* form that handles trip planner entries */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="cityName" className="block mb-1 text-lg font-medium ">
                City Name
              </label>
              <input
                type="text"
                name="cityName"
                value={tripEntries.cityName}
                onChange={handleChange}
                placeholder="Enter city here..."
                className="w-full px-4 py-2 rounded-md bg-white/20 border-black border focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="startDate" className="block mb-1 text-lg font-medium ">
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={tripEntries.startDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-white/20  border border-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="endDate" className="block mb-1 text-lg font-medium ">
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={tripEntries.endDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-white/20  border border-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>
            <div className="text-center">
              <input
                type="submit"
                value="Add Trip"
                disabled={
                  !tripEntries.cityName ||
                  !tripEntries.startDate ||
                  !tripEntries.endDate
                }
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-semibold transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </form>
        </div>
      </div>
  );
};

export default TripPlannerPage;
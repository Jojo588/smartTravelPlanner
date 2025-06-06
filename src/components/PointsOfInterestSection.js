import React from 'react';

const PointsOfInterestSection = ({ points = [] }) => {

  return (
    <div className="p-4">
      {points.length > 0 ? (
        <ul className="list-disc ml-6 text-lg capitalize max-sm:ml-2">
          {points.map((point, index) => (
            <li key={index} className="mb-2">{point}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No points of interest found.</p>
      )}
    </div>
  );
};
export default PointsOfInterestSection;
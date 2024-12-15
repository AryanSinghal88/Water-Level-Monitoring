import React from 'react';

function DataDisplay({ latestReading, monthlyAverage }) {
  return (
      
    <div className="my-6">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
        <h3 className="text-xl font-semibold mb-2">Latest Reading</h3>
        <p className="text-3xl font-bold text-blue-600">{latestReading} m</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2">Monthly Average</h3>
        <p className="text-3xl font-bold text-green-600">{monthlyAverage} m</p>
      </div>
    </div>
  );
}

export default DataDisplay;

import React from 'react';

function DataCard({ height, timestamp }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">Water Height</h3>
      <p className="text-4xl text-blue-500 font-bold mb-4">{height} m</p>
      <p className="text-gray-600">Timestamp: {new Date(timestamp).toLocaleString()}</p>
    </div>
  );
}

export default DataCard;

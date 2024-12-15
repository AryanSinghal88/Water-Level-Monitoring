// import React from 'react';

// const DataTable = ({ dataPoints, dataType }) => {
//   return (
//     <div className="mt-6 bg-white p-8 shadow-md max-w-4xl  mx-auto rounded-md">
//       <h2 className="text-xl font-bold mb-4 text-center">Data Points</h2>
//       <table className="w-full table-auto border border-gray-700 ">
//         <thead>
//           <tr className="bg-gray-700 text-white">
//             <th className="border px-4 py-2">S.No</th>
//             <th className="border px-4 py-2">{dataType.charAt(0).toUpperCase() + dataType.slice(1)}</th>
//             <th className="border px-4 py-2">Datetime</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dataPoints.map((point, index) => (
//             <tr key={index} className="odd:bg-gray-100 even:bg-white">
//               <td className="border px-4 py-2 text-center">{index + 1}</td>
//               <td className="border px-4 py-2 text-center">{point.value} m</td>
//               <td className="border px-4 py-2 text-center">{point.datetime}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataTable;


// Perplexity

// import React from 'react';

// const DataTable = ({ dataPoints, dataType }) => {
//     const unit = {
//         Temperature: '°C',
//         Pressure: 'atm',
//         Height: 'm',
//         Conductivity: 'µS/cm',
//         DissolvedOxygen: 'mg/L'
//     }[dataType];

//     return (
//         <div className="mt-6 bg-white p-8 shadow-md max-w-4xl mx-auto rounded-md">
//             <h2 className="text-xl font-bold mb-4 text-center">Data Points</h2>
//             <table className="w-full table-auto border border-gray-700">
//                 <thead>
//                     <tr className="bg-gray-700 text-white">
//                         <th className="border px-4 py-2">S.No</th>
//                         <th className="border px-4 py-2">{dataType.charAt(0).toUpperCase() + dataType.slice(1)} ({unit})</th>
//                         <th className="border px-4 py-2">Datetime</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {dataPoints.map((point, index) => (
//                         <tr key={index} className="odd:bg-gray-100 even:bg-white">
//                             <td className="border px-4 py-2 text-center">{index + 1}</td>
//                             <td className="border px-4 py-2 text-center">{point[dataType]} {unit}</td>
//                             <td className="border px-4 py-2 text-center">{point.timestamp}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default DataTable;
import React from 'react';

const DataTable = ({ dataPoints, dataType }) => {
    const unit = {
        Temperature: '°C',
        Pressure: 'atm',
        Height: 'm',
        Conductivity: 'µS/cm',
        DissolvedOxygen: 'mg/L'
    }[dataType];

    // Sort data points by timestamp in descending order
    const sortedDataPoints = [...dataPoints].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    return (
        <div className="mt-6 bg-white p-8 shadow-md max-w-4xl mx-auto rounded-md">
            <h2 className="text-xl font-bold mb-4 text-center">Data Points</h2>
            <table className="w-full table-auto border border-gray-700">
                <thead>
                    <tr className="bg-gray-700 text-white">
                        <th className="border px-4 py-2">S.No</th>
                        <th className="border px-4 py-2">{dataType.charAt(0).toUpperCase() + dataType.slice(1)} ({unit})</th>
                        <th className="border px-4 py-2">Datetime</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedDataPoints.map((point, index) => (
                        <tr key={index} className="odd:bg-gray-100 even:bg-white">
                            <td className="border px-4 py-2 text-center">{index + 1}</td>
                            <td className="border px-4 py-2 text-center">{point[dataType]} {unit}</td>
                            <td className="border px-4 py-2 text-center">{point.timestamp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
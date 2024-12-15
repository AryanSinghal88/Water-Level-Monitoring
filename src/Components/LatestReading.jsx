// import React from 'react';

// const LatestReading = ({ latestReading, monthlyAverage, lat, lng, dataType }) => {
//   return (
//     <div className="flex flex-col lg:flex-row justify-start space-y-4 lg:space-y-0 lg:space-x-4 px-6 py-4 bg-gray-700">
//       {/* Latest Reading */}
//       <div className='bg-blue-200 p-8 shadow-md w-full lg:w-1/3'>
//         <h2 className="text-2xl font-bold">Latest {dataType} Reading: {latestReading} m</h2>
//       </div>

//       {/* Monthly Average */}
//       <div className='bg-green-200 p-8 shadow-md w-full lg:w-1/3'>
//         <h2 className="text-2xl font-bold">Monthly Average {dataType}: {monthlyAverage} m</h2>
//       </div>

//       {/* Longitude & Latitude */}
//       <div className='bg-red-200 p-8 shadow-md w-full lg:w-1/3'>
//         <h2 className="text-2xl font-bold">Location</h2>
//         <p>Longitude: {lng}</p>
//         <p>Latitude: {lat}</p>
//       </div>
//     </div>
//   );
// };

// export default LatestReading;



// Original 
// import React from 'react';

// const LatestReading = ({ latestReading, monthlyAverage, location, dataType }) => {
//   return (
    // <div className="flex flex-col lg:flex-row justify-start space-y-4 lg:space-y-0 lg:space-x-4 px-6 py-4 "> {/* Added margin from top */}
    //   <div className='bg-slate-50 p-8 shadow-md rounded-md w-full lg:w-1/2'>
    //     <h2 className="text-3xl font-bold text-cyan-500">{latestReading} m</h2>
    //     <h6 className="text-xl pt-5 font-bold text-slate-500">Latest {dataType} Reading</h6>
    //   </div>

    //   <div className='bg-slate-50 p-8 shadow-md rounded-md w-full lg:w-1/2'>
    //     <h3 className="text-3xl font-bold text-cyan-500">{monthlyAverage} m</h3>
    //     <h3 className="text-xl pt-5 font-bold text-slate-500">Monthly Average {dataType}</h3>
    //   </div>

    //   {/* <div className='bg-gray-700 p-8 shadow-md w-full lg:w-1/3'> */}
    //     {/* <h3 className="text-2xl font-bold text-white">Location: {location?.lat}, {location?.lng}</h3> Showing values directly */}
    //   {/* </div> */}
    // </div>
//     <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 px-6 py-4"> {/* Added justify-between */}
//     <div className="bg-slate-50 p-6 shadow-md rounded-md w-full lg:w-[40%] ml-20"> {/* Further reduced width */}
//       <h2 className="text-3xl font-bold text-cyan-500">{latestReading} m</h2>
//       <h6 className="text-xl pt-5 font-bold text-slate-500">Latest {dataType} Reading</h6>
//     </div>
  
//     <div className="bg-slate-50 p-6 shadow-md rounded-md w-full lg:w-[40%] mr-20"> {/* Same width for equal margin */}
//       <h3 className="text-3xl font-bold text-cyan-500">{monthlyAverage} m</h3>
//       <h3 className="text-xl pt-5 font-bold text-slate-500">Monthly Average {dataType}</h3>
//     </div>
//   </div>
  

//   );
// };

// export default LatestReading;


// Perplexity

// import React from 'react';

// const LatestReading = ({ latestReading, monthlyAverage, location, dataType }) => {
//     const units = {
//         Temperature: '°C',
//         Pressure: 'atm',
//         Height: 'm',
//         Conductivity: 'µS/cm',
//         DissolvedOxygen: 'mg/L'
//     };

//     return (
//         <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 px-6 py-4">
//             <div className="bg-slate-50 p-6 shadow-md rounded-md w-full lg:w-[40%] ml-20">
//                 <h2 className="text-3xl font-bold text-cyan-500">{latestReading} {units[dataType]}</h2>
//                 <h6 className="text-xl pt-5 font-bold text-slate-500">Latest {dataType} Reading</h6>
//             </div>
//             <div className="bg-slate-50 p-6 shadow-md rounded-md w-full lg:w-[40%] mr-20">
//                 <h3 className="text-3xl font-bold text-cyan-500">{monthlyAverage} {units[dataType]}</h3>
//                 <h3 className="text-xl pt-5 font-bold text-slate-500">Monthly Average {dataType}</h3>
//             </div>
//         </div>
//     );
// };

// export default LatestReading;

import React from 'react';

const LatestReading = ({ latestReading, monthlyAverage, location, dataType }) => {
    const units = {
        Temperature: '°C',
        Pressure: 'atm',
        Height: 'm',
        Conductivity: 'µS/cm',
        DissolvedOxygen: 'mg/L'
    };

    return (
        <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 px-6 py-4">
            <div className="bg-slate-50 p-6 shadow-md rounded-md w-full lg:w-[40%] ml-20">
                <h2 className="text-3xl font-bold text-cyan-500">{latestReading} {units[dataType]}</h2>
                <h6 className="text-xl pt-5 font-bold text-slate-500">Latest {dataType} Reading</h6>
            </div>
            <div className="bg-slate-50 p-6 shadow-md rounded-md w-full lg:w-[40%] mr-20">
                <h3 className="text-3xl font-bold text-cyan-500">{monthlyAverage} {units[dataType]}</h3>
                <h3 className="text-xl pt-5 font-bold text-slate-500">Monthly Average {dataType}</h3>
            </div>
        </div>
    );
};

export default LatestReading;
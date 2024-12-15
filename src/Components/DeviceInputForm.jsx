// DeviceInputForm.jsx
// import React, { useState } from 'react';

// const DeviceInputForm = ({ onSubmit }) => {
//   const [deviceId, setDeviceId] = useState('');
//   const [dataType, setDataType] = useState('height');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(deviceId, dataType);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-8 shadow-md">
//       <div>
//         <label className="block text-lg font-medium">Enter Device ID:</label>
//         <input
//           type="text"
//           value={deviceId}
//           onChange={(e) => setDeviceId(e.target.value)}
//           className="w-full p-2 border rounded"
//           placeholder="e.g. device1"
//         />
//       </div>
//       <div>
//         <label className="block text-lg font-medium">Select Data Type:</label>
//         <select
//           value={dataType}
//           onChange={(e) => setDataType(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="height">Height</option>
//           <option value="pressure">Pressure</option>
//         </select>
//       </div>
//       <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
//         Fetch Data
//       </button>
//     </form>
//   );
// };

// export default DeviceInputForm;
// import React, { useState } from 'react';

// const DeviceInputForm = ({ onSubmit, devices }) => {
//   const [deviceId, setDeviceId] = useState(devices.length > 0 ? devices[0].deviceId : ''); // Safe check to avoid undefined

//   const [dataType, setDataType] = useState('height');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(deviceId, dataType);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-8 shadow-md">
//       <div>
//         <label className="block text-lg font-medium">Select Device ID:</label>
//         <select
//           value={deviceId}
//           onChange={(e) => setDeviceId(e.target.value)}
//           className="w-full p-2 border rounded"
//           disabled={devices.length === 0} // Disable if no devices are available
//         >
//           {devices.length > 0 ? (
//             devices.map((device) => (
//               <option key={device.deviceId} value={device.deviceId}>
//                 {device.deviceId}
//               </option>
//             ))
//           ) : (
//             <option>No devices available</option>
//           )}
//         </select>
//       </div>

//       <div>
//         <label className="block text-lg font-medium">Select Data Type:</label>
//         <select
//           value={dataType}
//           onChange={(e) => setDataType(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="height">Height</option>
//           <option value="pressure">Pressure</option>
//         </select>
//       </div>

//       <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded" disabled={devices.length === 0}>
//         Fetch Data
//       </button>
//     </form>
//   );
// };

// export default DeviceInputForm;
// DeviceInputForm.jsx

// import React, { useState } from 'react';

// const DeviceInputForm = ({ onSubmit, devices }) => {
//   const [selectedDeviceId, setSelectedDeviceId] = useState('');
//   const [selectedDataType, setSelectedDataType] = useState('height');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(selectedDeviceId, selectedDataType);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-8 p-4 bg-white shadow-md rounded-lg">
//       <div className="mb-4">
//         <label htmlFor="deviceId" className="block text-gray-700 font-semibold mb-2">Select Device ID:</label>
//         <select
//           id="deviceId"
//           value={selectedDeviceId}
//           onChange={(e) => setSelectedDeviceId(e.target.value)}
//           required
//           className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
//         >
//           <option value="" disabled>Select a device</option>
//           {devices.map((deviceId) => (
//             <option key={deviceId} value={deviceId}>
//               {deviceId}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="mb-4">
//         <label htmlFor="dataType" className="block text-gray-700 font-semibold mb-2">Select Data Type:</label>
//         <select
//           id="dataType"
//           value={selectedDataType}
//           onChange={(e) => setSelectedDataType(e.target.value)}
//           required
//           className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
//         >
//           <option value="height">Height</option>
//           <option value="pressure">Pressure</option>
//         </select>
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default DeviceInputForm;

// import React, { useState } from 'react';

// const DeviceInputForm = ({ onSubmit, devices }) => {
//   const [selectedDeviceId, setSelectedDeviceId] = useState('');
//   const [selectedDataType, setSelectedDataType] = useState('height');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(selectedDeviceId, selectedDataType);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-lg shadow-md w-96"
//       >
//         <h2 className="text-xl font-bold mb-4 text-center">Device Input</h2>
//         <div className="mb-4">
//           <label htmlFor="deviceId" className="block mb-2">Select Device ID: </label>
//           <select
//             id="deviceId"
//             value={selectedDeviceId}
//             onChange={(e) => setSelectedDeviceId(e.target.value)}
//             required
//             className="w-full p-2 border border-gray-300 rounded"
//           >
//             <option value="" disabled>Select a device</option>
//             {devices.map((deviceId) => (
//               <option key={deviceId} value={deviceId}>
//                 {deviceId}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="dataType" className="block mb-2">Select Data Type: </label>
//           <select
//             id="dataType"
//             value={selectedDataType}
//             onChange={(e) => setSelectedDataType(e.target.value)}
//             required
//             className="w-full p-2 border border-gray-300 rounded"
//           >
//             <option value="height">Height</option>
//             <option value="pressure">Pressure</option>
//           </select>
//         </div>

//         <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default DeviceInputForm;

// import React, { useState } from 'react';

// const DeviceInputForm = ({ onSubmit, devices }) => {
//   const [selectedDeviceId, setSelectedDeviceId] = useState('');
//   const [selectedDataType, setSelectedDataType] = useState('height');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(selectedDeviceId, selectedDataType);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-6">
//       <div>
//         <label htmlFor="deviceId" className="block text-lg font-medium mb-2">Select Device ID:</label>
//         <select
//           id="deviceId"
//           value={selectedDeviceId}
//           onChange={(e) => setSelectedDeviceId(e.target.value)}
//           required
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="" disabled>Select a device</option>
//           {devices.map((deviceId) => (
//             <option key={deviceId} value={deviceId}>
//               {deviceId}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div>
//         <label htmlFor="dataType" className="block text-lg font-medium mb-2">Select Data Type:</label>
//         <select
//           id="dataType"
//           value={selectedDataType}
//           onChange={(e) => setSelectedDataType(e.target.value)}
//           required
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="height">Height</option>
//           <option value="pressure">Pressure</option>
//         </select>
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white font-medium py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default DeviceInputForm;


// Original

// import React, { useState } from 'react';

// const DeviceInputForm = ({ onSubmit, devices }) => {
//   const [selectedDeviceId, setSelectedDeviceId] = useState('');
//   const [selectedDataType, setSelectedDataType] = useState('height');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(selectedDeviceId, selectedDataType);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto m-5 p-8 my-10 bg-white shadow-md rounded-lg">
//       <div className="mb-4">
//         <label htmlFor="deviceId" className="block text-gray-700 font-semibold mb-2">Select Device ID:</label>
//         <select
//           id="deviceId"
//           value={selectedDeviceId}
//           onChange={(e) => setSelectedDeviceId(e.target.value)}
//           required
//           className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
//         >
//           <option value="" disabled>Select a device</option>
//           {devices.map((deviceId) => (
//             <option key={deviceId} value={deviceId}>
//               {deviceId}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="mb-4">
//         <label htmlFor="dataType" className="block text-gray-700 font-semibold mb-2">Select Data Type:</label>
//         <select
//           id="dataType"
//           value={selectedDataType}
//           onChange={(e) => setSelectedDataType(e.target.value)}
//           required
//           className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
//         >
//           <option value="height">Height</option>
//           <option value="pressure">Pressure</option>
//         </select>
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-gray-700 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default DeviceInputForm;

// Perplexity

// import React, { useState } from 'react';

// const DeviceInputForm = ({ onSubmit, devices }) => {
//     const [selectedDeviceId, setSelectedDeviceId] = useState('');
//     const [selectedDataType, setSelectedDataType] = useState('Height');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSubmit(selectedDeviceId, selectedDataType);
//     };

//     return (
//         <form onSubmit={handleSubmit} className="max-w-lg mx-auto m-5 p-8 my-10 bg-white shadow-md rounded-lg">
//             <div className="mb-4">
//                 <label htmlFor="deviceId" className="block text-gray-700 font-semibold mb-2">Select Device ID:</label>
//                 <select id="deviceId" value={selectedDeviceId} onChange={(e) => setSelectedDeviceId(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500">
//                     <option value="" disabled>Select a device</option>
//                     {devices.map((deviceId) => (
//                         <option key={deviceId} value={deviceId}>{deviceId}</option>
//                     ))}
//                 </select>
//             </div>
//             <div className="mb-4">
//                 <label htmlFor="dataType" className="block text-gray-700 font-semibold mb-2">Select Data Type:</label>
//                 <select id="dataType" value={selectedDataType} onChange={(e) => setSelectedDataType(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500">
//                     <option value="Height">Height</option>
//                     <option value="Pressure">Pressure</option>
//                     <option value="DissolvedOxygen">Dissolved Oxygen</option>
//                     <option value="Conductivity">Conductivity</option>
//                     <option value="Temperature">Temperature</option>
//                 </select>
//             </div>
//             <button type="submit" className="w-full bg-gray-700 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300">Submit</button>
//         </form>
//     );
// };

// export default DeviceInputForm;


import React, { useState } from 'react';

const DeviceInputForm = ({ onSubmit, devices }) => {
    const [selectedDeviceId, setSelectedDeviceId] = useState('');
    const [selectedDataType, setSelectedDataType] = useState('Height');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(selectedDeviceId, selectedDataType);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto m-5 p-8 my-10 bg-white shadow-md rounded-lg">
            <div className="mb-4">
                <label htmlFor="deviceId" className="block text-gray-700 font-semibold mb-2">Select Device ID:</label>
                <select id="deviceId" value={selectedDeviceId} onChange={(e) => setSelectedDeviceId(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500">
                    <option value="" disabled>Select a device</option>
                    {devices.map((deviceId) => (
                        <option key={deviceId} value={deviceId}>{deviceId}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="dataType" className="block text-gray-700 font-semibold mb-2">Select Data Type:</label>
                <select id="dataType" value={selectedDataType} onChange={(e) => setSelectedDataType(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500">
                    <option value="Height">Height</option>
                    <option value="Pressure">Pressure</option>
                    <option value="DissolvedOxygen">Dissolved Oxygen</option>
                    <option value="Conductivity">Conductivity</option>
                    <option value="Temperature">Temperature</option>
                </select>
            </div>
            <button type="submit" className="w-full bg-gray-700 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300">Submit</button>
        </form>
    );
};

export default DeviceInputForm;
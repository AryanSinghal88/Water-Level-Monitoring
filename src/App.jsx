// // App.jsx
// import React, { useState, useEffect } from 'react';
// import WaterLevelHeader from './Components/WaterLevelHeader';
// import DeviceInputForm from './Components/DeviceInputForm';
// import LatestReading from './Components/LatestReading';
// import DataTable from './Components/DataTable';
// import Graph from './Components/Graph';
// import DeviceMap from './Components/DeviceMap';

// // Mock data for 7 devices with readings for pressure/height
// const mockData = {
//   "1200": {
//     "location": { "lat": 29.152, "lng": 80.384 },
//     "latestReading": { "pressure": 1.3, "height": 1.2 },
//     "monthlyAverage": { "pressure": 1.35, "height": 1.1 },
//     "dataPoints": [
//       { "value": 1.3, "lat": 29.152, "lng": 80.384, "datetime": "2024-07-01T10:00" },
//       { "value": 1.2, "lat": 29.152, "lng": 80.384, "datetime": "2024-07-02T12:00" },
//       { "value": 1.1, "lat": 29.152, "lng": 80.384, "datetime": "2024-07-02T12:00" },
//       { "value": 1.17, "lat": 29.152, "lng": 80.384, "datetime": "2024-07-02T12:00" },
//       { "value": 1.05, "lat": 29.152, "lng": 80.384, "datetime": "2024-07-02T12:00" },

//     ]
//   },
//   "1201": {
//     "location": { "lat": 29.152, "lng": 80.384 },
//     "latestReading": { "pressure": 1.3, "height": 1.2 },
//     "monthlyAverage": { "pressure": 1.35, "height": 1.1 },
//     "dataPoints": [
//       { "value": 1.3, "lat": 29.152, "lng": 80.384, "datetime": "2024-07-01T10:00" },
//       { "value": 1.2, "lat": 29.152, "lng": 80.384, "datetime": "2024-07-02T12:00" },
//       { "value": 1.1, "lat": 29.152, "lng": 80.384, "datetime": "2024-07-02T12:00" },
//       { "value": 1.17, "lat": 29.152, "lng": 80.384, "datetime": "2024-07-02T12:00" },
//       { "value": 1.05, "lat": 29.152, "lng": 80.384, "datetime": "2024-07-02T12:00" },

//     ]
//   },
//   "1202": {
//     "location": { "lat": 29.152, "lng": 80.384 },
//     "latestReading": { "pressure": 1.3, "height": 1.2 },
//     "monthlyAverage": { "pressure": 1.35, "height": 1.1 },
//     "dataPoints": [
//       { "value": 1.3, "lat": 29.152, "lng": 80.384, "datetime": "2024-07-01T10:00" },
//       { "value": 1.2, "lat": 29.152, "lng": 80.384, "datetime": "2024-07-02T12:00" },
//       { "value": 1.1, "lat": 29.152, "lng": 80.384, "datetime": "2024-07-02T12:00" },
//       { "value": 1.17, "lat": 29.152, "lng": 80.384, "datetime": "2024-07-02T12:00" },
//       { "value": 1.05, "lat": 29.152, "lng": 80.384, "datetime": "2024-07-02T12:00" },

//     ]
//   },

// };

// const App = () => {
//   const [deviceId, setDeviceId] = useState('');
//   const [dataType, setDataType] = useState('height');
//   const [latestReading, setLatestReading] = useState(null);
//   const [monthlyAverage, setMonthlyAverage] = useState(null);
//   const [dataPoints, setDataPoints] = useState([]);
//   const [devices, setDevices] = useState([]);

//   useEffect(() => {
//     if (deviceId) {
//       const deviceData = mockData[deviceId];
//       if (deviceData) {
//         setLatestReading(deviceData.latestReading[dataType]);
//         setMonthlyAverage(deviceData.monthlyAverage[dataType]);
//         setDataPoints(deviceData.dataPoints);
//         setDevices(Object.values(mockData).map(device => ({
//           deviceId,
//           lat: device.location.lat,
//           lng: device.location.lng,
//           latestReading: device.latestReading
//         })));
//       }
//     }
//   }, [deviceId, dataType]);

//   const handleSubmit = (deviceId, dataType) => {
//     setDeviceId(deviceId);
//     setDataType(dataType);
//   };

//   return (
//     <div >
//       <WaterLevelHeader />
//       <DeviceInputForm onSubmit={handleSubmit} devices={devices.deviceId} />
//       <LatestReading latestReading={latestReading} monthlyAverage={monthlyAverage} dataType={dataType} />
//       <DataTable dataPoints={dataPoints} dataType={dataType} />
//       <Graph dataPoints={dataPoints} dataType={dataType} />
//       <DeviceMap devices={devices} dataType={dataType} />
//     </div>
//   );
// };

// export default App;


// Original

// import React, { useState, useEffect } from 'react';
// import WaterLevelHeader from './Components/WaterLevelHeader';
// import DeviceInputForm from './Components/DeviceInputForm';
// import LatestReading from './Components/LatestReading';
// import DataTable from './Components/DataTable';
// import Graph from './Components/Graph';
// import DeviceMap from './Components/DeviceMap';
// import MonthYearSelector from './Components/MonthYearSelector'
// import Footer from './Components/Footer'

// // Mock data for 7 devices with readings for pressure/height
// const mockData = {
//   "1200": {
//     "location": { "lat": 29.152, "lng": 80.384 },
//     "latestReading": { "pressure": 1.3, "height": 1.2 },
//     "monthlyAverage": { "pressure": 1.35, "height": 1.1 },
//     "dataPoints": [
//       { "value": 1.28, "lat": 29.152, "lng": 80.384, "datetime": "2024-08-01T10:00" },
//       { "value": 1.27, "lat": 29.152, "lng": 80.384, "datetime": "2024-08-08T11:00" },
//       { "value": 1.23, "lat": 29.152, "lng": 80.384, "datetime": "2024-08-15T12:00" },
//       { "value": 1.26, "lat": 29.152, "lng": 80.384, "datetime": "2024-08-20T14:00" },
//       { "value": 1.285, "lat": 29.152, "lng": 80.384, "datetime": "2024-08-28T16:00" },
//       { "value": 1.27, "lat": 29.152, "lng": 80.384, "datetime": "2024-09-01T10:00" },
//       { "value": 1.24, "lat": 29.152, "lng": 80.384, "datetime": "2024-09-08T12:00" },
//       { "value": 1.26, "lat": 29.152, "lng": 80.384, "datetime": "2024-09-12T14:00" },
//       { "value": 1.3, "lat": 29.152, "lng": 80.384, "datetime": "2024-09-20T14:00" },
//       { "value": 1.28, "lat": 29.152, "lng": 80.384, "datetime": "2024-09-28T16:00" }
//     ]
//   },
//   "1201": {
//     "location": { "lat": 29.156, "lng": 80.390 },
//     "latestReading": { "pressure": 1.4, "height": 1.3 },
//     "monthlyAverage": { "pressure": 1.42, "height": 1.2 },
//     "dataPoints": [
//       { "value": 1.4, "lat": 29.156, "lng": 80.390, "datetime": "2024-08-02T10:00" },
//       { "value": 1.35, "lat": 29.156, "lng": 80.390, "datetime": "2024-08-08T12:00" },
//       { "value": 1.3, "lat": 29.156, "lng": 80.390, "datetime": "2024-08-15T12:00" },
//       { "value": 1.2, "lat": 29.156, "lng": 80.390, "datetime": "2024-08-21T15:00" },
//       { "value": 1.1, "lat": 29.156, "lng": 80.390, "datetime": "2024-08-28T16:00" },
//       { "value": 1.25, "lat": 29.156, "lng": 80.390, "datetime": "2024-09-03T10:00" },
//       { "value": 1.22, "lat": 29.156, "lng": 80.390, "datetime": "2024-09-09T11:30" },
//       { "value": 1.18, "lat": 29.156, "lng": 80.390, "datetime": "2024-09-13T12:00" },
//       { "value": 1.1, "lat": 29.156, "lng": 80.390, "datetime": "2024-09-21T15:00" },
//       { "value": 1.05, "lat": 29.156, "lng": 80.390, "datetime": "2024-09-26T16:30" }
//     ]
//   },
//   "1202": {
//     "location": { "lat": 29.160, "lng": 80.395 },
//     "latestReading": { "pressure": 1.5, "height": 1.4 },
//     "monthlyAverage": { "pressure": 1.46, "height": 1.3 },
//     "dataPoints": [
//       { "value": 1.5, "lat": 29.160, "lng": 80.395, "datetime": "2024-08-04T09:00" },
//       { "value": 1.45, "lat": 29.160, "lng": 80.395, "datetime": "2024-08-10T11:00" },
//       { "value": 1.4, "lat": 29.160, "lng": 80.395, "datetime": "2024-08-16T13:00" },
//       { "value": 1.3, "lat": 29.160, "lng": 80.395, "datetime": "2024-08-22T14:30" },
//       { "value": 1.2, "lat": 29.160, "lng": 80.395, "datetime": "2024-08-29T15:00" },
//       { "value": 1.35, "lat": 29.160, "lng": 80.395, "datetime": "2024-09-05T09:30" },
//       { "value": 1.3, "lat": 29.160, "lng": 80.395, "datetime": "2024-09-10T11:00" },
//       { "value": 1.25, "lat": 29.160, "lng": 80.395, "datetime": "2024-09-15T13:00" },
//       { "value": 1.2, "lat": 29.160, "lng": 80.395, "datetime": "2024-09-21T15:00" },
//       { "value": 1.15, "lat": 29.160, "lng": 80.395, "datetime": "2024-09-27T16:30" }
//     ]
//   }
// };



// const App = () => {
//   const [deviceId, setDeviceId] = useState('');
//   const [dataType, setDataType] = useState('height');
//   const [latestReading, setLatestReading] = useState(null);
//   const [monthlyAverage, setMonthlyAverage] = useState(null);
//   const [dataPoints, setDataPoints] = useState([]);
//   const [devices, setDevices] = useState([]);
//   const [location, setLocation] = useState(null);
//   const [selectedMonthYear, setSelectedMonthYear] = useState({ month: '08', year: '2024' });

  
//   useEffect(() => {
//     setDevices(Object.keys(mockData));

//     if (deviceId) {
//       const deviceData = mockData[deviceId];
//       if (deviceData) {
//         setLatestReading(deviceData.latestReading[dataType]);
//         setMonthlyAverage(deviceData.monthlyAverage[dataType]);
//         setLocation(deviceData.location);
//         const filteredDataPoints = deviceData.dataPoints.filter((point) =>
//           point.datetime.startsWith(`${selectedMonthYear.year}-${selectedMonthYear.month}`)
//         );
        
//         setDataPoints(filteredDataPoints);
//       }
//     }
//   }, [deviceId, dataType, selectedMonthYear]);

  

//   const handleSubmit = (deviceId, dataType) => {
//     setDeviceId(deviceId);
//     setDataType(dataType);
//   };

//   return (
//     <div className='bg-slate-100'>
//       <WaterLevelHeader />
//       <DeviceInputForm onSubmit={handleSubmit} devices={devices} />
//       <LatestReading latestReading={latestReading} monthlyAverage={monthlyAverage} location={location} dataType={dataType} />
//       <MonthYearSelector selectedMonthYear={selectedMonthYear} setSelectedMonthYear={setSelectedMonthYear} />
//       <DataTable dataPoints={dataPoints} dataType={dataType} />
//       <Graph dataPoints={dataPoints} dataType={dataType} />
//       <DeviceMap devices={devices.map(deviceId => ({
//     deviceId,
//     lat: mockData[deviceId]?.location?.lat || 0, // Fallback to 0 if no location is found
//     lng: mockData[deviceId]?.location?.lng || 0, // Fallback to 0 if no location is found
//     latestReading: mockData[deviceId]?.latestReading // Include latest reading
// })).filter(device => device.lat && device.lng)} />
//     <Footer></Footer>
//     </div>
//   );
// };

// export default App;


// Perplexity

// import React, { useState, useEffect } from 'react';
// import WaterLevelHeader from './Components/WaterLevelHeader';
// import DeviceInputForm from './Components/DeviceInputForm';
// import LatestReading from './Components/LatestReading';
// import DataTable from './Components/DataTable';
// import Graph from './Components/Graph';
// import DeviceMap from './Components/DeviceMap';
// import MonthYearSelector from './Components/MonthYearSelector';
// import Footer from './Components/Footer';

// const App = () => {
//     const [deviceId, setDeviceId] = useState('');
//     const [dataType, setDataType] = useState('Height');
//     const [latestReading, setLatestReading] = useState(null);
//     const [monthlyAverage, setMonthlyAverage] = useState(null);
//     const [dataPoints, setDataPoints] = useState([]);
//     const [devices, setDevices] = useState([]);
//     const [location, setLocation] = useState(null);
//     const [selectedMonthYear, setSelectedMonthYear] = useState({ month: '11', year: '2024' });

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch(`https://e54i3hbona.execute-api.eu-north-1.amazonaws.com/developed/Info?UID=1`);
//             const result = await response.json();

//             // Process the result to update state
//             if (result.length > 0) {
//                 setDevices([...new Set(result.map(item => item.UID))]); // Get unique device IDs
//                 if (deviceId) {
//                     // Filter data for selected device
//                     const filteredData = result.filter(item => item.UID === deviceId);
                    
//                     if (filteredData.length > 0) {
//                         // Get latest reading based on timestamp
//                         const latestPoint = filteredData.reduce((prev, current) => (new Date(prev.timestamp) > new Date(current.timestamp)) ? prev : current);
//                         setLatestReading(latestPoint[dataType]);
                        
//                         // Calculate monthly average
//                         const monthlyPoints = filteredData.filter(point => point.timestamp.startsWith(`${selectedMonthYear.month}/${selectedMonthYear.year}`));
//                         if (monthlyPoints.length > 0) {
//                             const averageValue = monthlyPoints.reduce((sum, point) => sum + parseFloat(point[dataType]), 0) / monthlyPoints.length;
//                             setMonthlyAverage(averageValue.toFixed(2)); // Two decimal places
//                         }

//                         // Set location for map display
//                         // setLocation({ lat: 29.152, lng: 80.384 }); // Example location based on UID
                        
//                         // Set data points for graph and table display
//                         setDataPoints(filteredData);
//                     }
//                 }
//             }
//         };

//         fetchData();
        
//     }, [deviceId, dataType, selectedMonthYear]);

//     const handleSubmit = (deviceIdParam, dataTypeParam) => {
//         setDeviceId(deviceIdParam);
//         setDataType(dataTypeParam);
//     };

//     return (
//         <div className='bg-slate-100'>
//             <WaterLevelHeader />
//             <DeviceInputForm onSubmit={handleSubmit} devices={devices} />
//             <LatestReading latestReading={latestReading} monthlyAverage={monthlyAverage} location={location} dataType={dataType} />
//             <MonthYearSelector selectedMonthYear={selectedMonthYear} setSelectedMonthYear={setSelectedMonthYear} />
//             <DataTable dataPoints={dataPoints} dataType={dataType} />
//             <Graph dataPoints={dataPoints} dataType={dataType} />
//             {/* Assuming DeviceMap is still needed */}
//             {/* Add DeviceMap component here if required */}
//             {/* Add Footer component here if required */}
//             <Footer />
//         </div>
//     );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import WaterLevelHeader from './Components/WaterLevelHeader';
import DeviceInputForm from './Components/DeviceInputForm';
import LatestReading from './Components/LatestReading';
import DataTable from './Components/DataTable';
import Graph from './Components/Graph';
import MonthYearSelector from './Components/MonthYearSelector';
import Footer from './Components/Footer';

const App = () => {
    const [deviceId, setDeviceId] = useState('');
    const [dataType, setDataType] = useState('Height');
    const [latestReading, setLatestReading] = useState(null);
    const [monthlyAverage, setMonthlyAverage] = useState(null);
    const [dataPoints, setDataPoints] = useState([]);
    const [devices, setDevices] = useState([]);
    const [selectedMonthYear, setSelectedMonthYear] = useState({ month: '11', year: '2024' });

    useEffect(() => {
        const fetchDevices = async () => {

            setDevices(['1', '2']);
        };

        fetchDevices();
        
        if (deviceId) {
            const fetchData = async () => {
                const response = await fetch(`https://e54i3hbona.execute-api.eu-north-1.amazonaws.com/developed/Info?UID=${deviceId}`);
                const result = await response.json();

                if (result.length > 0) {

                    const latestPoint = result.reduce((prev, current) => (new Date(prev.timestamp) > new Date(current.timestamp)) ? prev : current);
                    setLatestReading(latestPoint[dataType]);
                    

                    const monthlyPoints = result.filter(point => point.timestamp.startsWith(`${selectedMonthYear.month}/${selectedMonthYear.year}`));
                    if (monthlyPoints.length > 0) {
                        const averageValue = monthlyPoints.reduce((sum, point) => sum + parseFloat(point[dataType]), 0) / monthlyPoints.length;
                        setMonthlyAverage(averageValue.toFixed(2)); 
                    }


                    setDataPoints(result);
                }
            };

            fetchData();
        }
        
    }, [deviceId, dataType, selectedMonthYear]);

    const handleSubmit = (deviceIdParam, dataTypeParam) => {
        setDeviceId(deviceIdParam);
        setDataType(dataTypeParam);
    };

    return (
        <div className='bg-slate-100'>
            <WaterLevelHeader />
            <DeviceInputForm onSubmit={handleSubmit} devices={devices} />
            <LatestReading latestReading={latestReading} monthlyAverage={monthlyAverage} dataType={dataType} />
            <MonthYearSelector selectedMonthYear={selectedMonthYear} setSelectedMonthYear={setSelectedMonthYear} />
            <DataTable dataPoints={dataPoints} dataType={dataType} />
            <Graph dataPoints={dataPoints} dataType={dataType} />
            <Footer />
        </div>
    );
};

export default App;
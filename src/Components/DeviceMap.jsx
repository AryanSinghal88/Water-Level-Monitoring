// AIzaSyB5ugy_RFd-VpbWYPjncWwrqknFkGDOGlc

// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const DeviceMap = ({ devices }) => {
//   const [center, setCenter] = useState({ lat: 0, lng: 0 });
//   const [bounds, setBounds] = useState(null);

//   useEffect(() => {
//     if (devices.length > 0) {
//       const avgLat = devices.reduce((sum, device) => sum + device.lat, 0) / devices.length;
//       const avgLng = devices.reduce((sum, device) => sum + device.lng, 0) / devices.length;
//       setCenter({ lat: avgLat, lng: avgLng });

//       const newBounds = new window.google.maps.LatLngBounds();
//       devices.forEach((device) => {
//         newBounds.extend(new window.google.maps.LatLng(device.lat, device.lng));
//       });
//       setBounds(newBounds);
//     }
//   }, [devices]);

//   const mapStyles = {
//     height: "600px",
//     width: "800px",
//     margin: "30px auto",
//     borderRadius: "8px",
//   };

//   return (
//     <div className="bg-white p-6 shadow-md max-w-4xl mx-auto my-8">
//       <h2 className="text-xl font-bold mb-4 text-center">Device Locations in Terai Region</h2>
//       <LoadScript googleMapsApiKey="AIzaSyB5ugy_RFd-VpbWYPjncWwrqknFkGDOGlc">
//         <GoogleMap
//           mapContainerStyle={mapStyles}
//           center={center}
//           zoom={9}
//           onLoad={(map) => bounds && map.fitBounds(bounds)}
//         >
//           {devices.map((device) => (
//             <Marker
//               key={device.deviceId}
//               position={{ lat: device.lat, lng: device.lng }}
//               label={{ text: `Device ${device.deviceId}`, color: "blue", fontSize: "12px" }}
//               icon={{ url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }}
//             />
//           ))}
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };

// export default DeviceMap;
// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const DeviceMap = ({ devices }) => {
//   const [center, setCenter] = useState({ lat: 0, lng: 0 });
//   const [bounds, setBounds] = useState(null);

//   useEffect(() => {
//     if (devices.length > 0) {
//       const avgLat = devices.reduce((sum, device) => sum + device.lat, 0) / devices.length;
//       const avgLng = devices.reduce((sum, device) => sum + device.lng, 0) / devices.length;
//       setCenter({ lat: avgLat, lng: avgLng });

//       const newBounds = new window.google.maps.LatLngBounds();
//       devices.forEach((device) => {
//         newBounds.extend(new window.google.maps.LatLng(device.lat, device.lng));
//       });
//       setBounds(newBounds);
//     }
//   }, [devices]);

//   const mapStyles = {
//     height: "600px",
//     width: "800px",
//     margin: "30px auto",
//     borderRadius: "8px",
//   };

//   return (
//     <div className="bg-white p-6 shadow-md max-w-4xl mx-auto my-8">
//       <h2 className="text-xl font-bold mb-4 text-center">Device Locations in Terai Region</h2>

//       <LoadScript googleMapsApiKey="AIzaSyB5ugy_RFd-VpbWYPjncWwrqknFkGDOGlc">
//         <GoogleMap
//           mapContainerStyle={mapStyles}
//           center={center}
//           zoom={9}
//           onLoad={(map) => bounds && map.fitBounds(bounds)} // Fit bounds once to show all devices
//         >
//           {devices.map((device) => (
//             <Marker
//               key={device.deviceId} // Ensures only one marker per device
//               position={{ lat: device.lat, lng: device.lng }}
//               label={{
//                 text: `Device ${device.deviceId}`,
//                 color: "blue",
//                 fontSize: "12px",
//               }}
//               icon={{ url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }}
//             />
//           ))}
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };

// export default DeviceMap;


// import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const DeviceMap = ({ devices, dataType }) => {
//   // Set the coordinates to focus on the Terai region
//   const teraiCenter = { lat: 28.8, lng: 81.5 }; // Coordinates for the center of the Terai region
//   const mapZoom = 9; // Adjust the zoom level to show the Terai region

//   // Google Map container style
//   const mapStyles = {
//     height: "400px",
//     width: "800px",
//     margin: "30px auto", // Center the map with margin on all sides
//     borderRadius: "8px"
//   };

//   return (
//     <div className="bg-white p-6 max-w-4xl mx-auto my-8">
//       <h2 className="text-2xl font-bold mb-4 text-center">Device Locations in Terai Region</h2>

//       {/* Load Google Maps */}
//       <LoadScript googleMapsApiKey="AIzaSyB5ugy_RFd-VpbWYPjncWwrqknFkGDOGlc">
//         <GoogleMap
//           mapContainerStyle={mapStyles}
//           center={teraiCenter}
//           zoom={mapZoom}
//         >
//           {/* Markers for each device */}
//           {devices.map((device) => (
//             <Marker
//               key={device.deviceId}
//               position={{ lat: device.lat, lng: device.lng }}
//               label={{
//                 text: `Device ${device.deviceId}`,
//                 color: "blue",
//                 fontSize: "12px",
//               }}
//               icon={{
//                 url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Blue marker
//               }}
//             />
//           ))}
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };

// export default DeviceMap;
// import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const DeviceMap = ({ devices }) => {
//   // Center the map on the Terai region
//   const defaultCenter = { lat: 28.8, lng: 81.5 };
//   const defaultZoom = 9;
//   // Styles for the map container
//   const mapStyles = {
//     height: "400px",
//     width: "800px",
//     margin: "30px auto", // Center the map container
//     borderRadius: "8px"
//   };

//   return (
//     <div className="bg-white p-6 max-w-4xl mx-auto my-8">
//       <h2 className="text-2xl font-bold mb-4 text-center">Device Locations in Terai Region</h2>

//       <LoadScript googleMapsApiKey="AIzaSyB5ugy_RFd-VpbWYPjncWwrqknFkGDOGlc"> {/* Replace with your actual Google Maps API key */}
//         <GoogleMap
//           mapContainerStyle={mapStyles}
//           center={defaultCenter}
//           zoom={defaultZoom}
//         >
//           {/* Render markers for each device */}
//           {console.log(devices.map((device)=>{
//             console.log(device.lat);
//           }))}
          
//           {devices.map((device) => (
//             device.lat && device.lng ? ( // Only render if valid coordinates
//               <Marker
//                 key={device.deviceId}
//                 position={{ lat: device.lat, lng: device.lng }}
//                 label={`Device ${device.deviceId}`}
//                 icon={{
//                   url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Use a blue marker
//                 }}
//               />
//             ) : null
//           ))}
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };

// export default DeviceMap;
import React, { useEffect } from 'react';

const DeviceMap = ({ devices }) => {
  useEffect(() => {
    if (!window.google || !devices.length) return;

    // Initialize the map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 29.152, lng: 80.384 }, // Default center point
      zoom: 10,
    });

    // Iterate over devices and create AdvancedMarkerElements for each
    devices.forEach((device) => {
      const marker = new window.google.maps.marker.AdvancedMarkerElement({
        position: { lat: device.lat, lng: device.lng },
        map,
        title: `Device: ${device.deviceId}`, // Optional title for the marker
      });

      // Optionally add event listeners (like click events)
      marker.addListener('click', () => {
        alert(`Device ${device.deviceId} clicked!`);
      });
    });
  }, [devices]);

  return (
    <div id="map" style={{ width: '100%', height: '500px' }}></div>
  );
};

export default DeviceMap;



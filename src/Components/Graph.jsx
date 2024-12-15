// import React, { useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const Graph = ({ dataPoints, dataType }) => {
//   const [selectedMonth, setSelectedMonth] = useState('07');
//   const [selectedYear, setSelectedYear] = useState('2024');

//   const chartData = {
//     labels: dataPoints.map((point) => point.datetime),
//     datasets: [
//       {
//         label: `${dataType} over time (${selectedMonth}-${selectedYear})`,
//         data: dataPoints.map((point) => point.value),
//         fill: false,
//         backgroundColor: 'rgba(75,192,192,0.2)',
//         borderColor: 'rgba(75,192,192,1)',
//         tension: 0.1,
//       },
//     ],
//   };

//   return (
//     <div className="flex flex-col items-center my-8">
//       <div className="flex space-x-4 mb-4">
//         <select
//           value={selectedMonth}
//           onChange={(e) => setSelectedMonth(e.target.value)}
//           className="border border-gray-400 p-2 rounded-md"
//         >
//           {['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'].map(month => (
//             <option key={month} value={month}>{month}</option>
//           ))}
//         </select>
//         <select
//           value={selectedYear}
//           onChange={(e) => setSelectedYear(e.target.value)}
//           className="border border-gray-400 p-2 rounded-md"
//         >
//           {['2023', '2024'].map(year => (
//             <option key={year} value={year}>{year}</option>
//           ))}
//         </select>
//       </div>

//       <div className="w-full max-w-4xl bg-white shadow-md rounded-md p-6">
//         <Line key={dataType} data={chartData} />
//       </div>
//     </div>
//   );
// };

// export default Graph;

// Perplexity

// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

// const Graph = ({ dataPoints, dataType }) => {
//     const chartData = {
//         labels: dataPoints.map((point) => point.timestamp),
//         datasets: [
//             {
//                 label: `${dataType}`,
//                 data: dataPoints.map((point) => point[dataType]),
//                 fill: false,
//                 backgroundColor: 'rgba(75,192,192,0.2)',
//                 borderColor: 'rgba(75,192,192,1)',
//                 tension: 0.1,
//             },
//         ],
//     };

//     return (
//         <div className="flex flex-col items-center my-8">
//             <div className="w-full max-w-4xl bg-white shadow-md rounded-md p-6">
//                 <Line key={dataType} data={chartData} />
//             </div>
//         </div>
//     );
// };

// export default Graph;

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const Graph = ({ dataPoints, dataType }) => {
    const chartData = {
        labels: dataPoints.map((point) => point.timestamp),
        datasets: [
            {
                label: `${dataType}`,
                data: dataPoints.map((point) => point[dataType]),
                fill: true,
                backgroundColor: 'rgba(75,192,192,0.3)',
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.3,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    return (
        <div className="flex flex-col items-center my-8">
            <div className="w-full max-w-4xl bg-white shadow-md rounded-md p-6">
                <Line key={dataType} data={chartData} options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            labels: {
                                fontColor: '#333',
                                fontSize: 16,
                            }
                        },
                        tooltip: {
                            backgroundColor: '#fff',
                            titleColor: '#333',
                            bodyColor: '#333',
                        }
                    },
                    scales: {
                        x: {
                            ticks: {
                                color: '#333',
                            },
                            grid: {
                                color: '#e0e0e0',
                            }
                        },
                        y: {
                            ticks: {
                                color: '#333',
                            },
                            grid: {
                                color: '#e0e0e0',
                            }
                        }
                    }
                }} />
            </div>
        </div>
    );
};

export default Graph;
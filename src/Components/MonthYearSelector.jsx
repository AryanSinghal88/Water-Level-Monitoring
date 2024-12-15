// const MonthYearSelector = ({ selectedMonthYear, setSelectedMonthYear }) => {
//   const handleMonthChange = (e) => {
//     setSelectedMonthYear({ ...selectedMonthYear, month: e.target.value });
//   };

//   const handleYearChange = (e) => {
//     setSelectedMonthYear({ ...selectedMonthYear, year: e.target.value });
//   };

//   return (
//     <div className="flex justify-center my-4">
//       <select
//         className="mr-4 p-2 border border-gray-300 rounded-md"
//         value={selectedMonthYear.month}
//         onChange={handleMonthChange}
//       >
//         <option value="08">August</option>
//         <option value="09">September</option>
//       </select>

//       <select
//         className="p-2 border border-gray-300 rounded-md"
//         value={selectedMonthYear.year}
//         onChange={handleYearChange}
//       >
//         <option value="2024">2024</option>
//       </select>
//     </div>
//   );
// };
// export default MonthYearSelector;

import React from 'react';

const MonthYearSelector = ({ selectedMonthYear, onChange }) => {
  const months = ['November'];
  const years = [2024]; // Example years

  return (
    <div className="flex justify-center mt-6 "> {/* Added margin from top and bottom */}
      <select value={selectedMonthYear.month} onChange={(e) => onChange('month', e.target.value)} className="mx-2 p-2 border border-gray-300 rounded-md">
        {months.map((month, idx) => (
          <option key={idx} value={month}>{month}</option>
        ))}
      </select>
      <select value={selectedMonthYear.year} onChange={(e) => onChange('year', e.target.value)} className="mx-2 p-2 border border-gray-300 rounded-md">
        {years.map((year, idx) => (
          <option key={idx} value={year}>{year}</option>
        ))}
      </select>
    </div>
  );
};

export default MonthYearSelector;

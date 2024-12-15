// WaterLevelHeader.jsx
import React from 'react';

const WaterLevelHeader = () => {
  return (
    <header className=" flex bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-center">
        <div className="text-center pl-20">
          <h1 className="text-3xl font-bold">Water Level Monitoring</h1>
          <p className="text-lg mt-2">Autoflow Wells Tracking System</p>
        </div>
      </div>

      {/* user profile */}
      <div className="flex items-center justify-end space-x-4 pr-7">
        <img
          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
          className="w-10 h-10 rounded-full border-2 border-white shadow-md"
          alt="Admin Profile"
        />
        <div className="hidden md:block">
          <span className="block text-sm font-semibold">Aryan Singhal</span>
          <span className="block text-xs text-gray-200">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default WaterLevelHeader;

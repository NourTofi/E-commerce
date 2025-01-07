import React from "react";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4 shadow-md z-10">
      {/* Left Section */}
      <div className="text-xl font-bold">E-Commerce</div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 rounded bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="cursor-pointer hover:text-gray-400">Profile</div>
        <div className="cursor-pointer hover:text-gray-400">Logout</div>
      </div>
    </div>
  );
};

export default TopBar;

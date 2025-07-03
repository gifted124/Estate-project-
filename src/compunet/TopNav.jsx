import React from "react";
import { RiAlarmWarningFill } from "react-icons/ri";

const TopNav = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-[24px] font-bold text-blue-900 ">invoices</h1>
      <div className="flex items-center gap-4">
        <button className="bg-white border rounded px-4 py-2 shadow text-sm">
          Show Yearly ⌄
        </button>
        <div className="flex items-center gap-2">
  <div className="w-10 h-10 rounded-full bg-gray-300" />
  <div>
    <p className="font-bold text-gray-700">Sammy John</p>
    <p className="text-gray-500 text-xs">Sammyjohn@gmail.com</p>
  </div>
  <div className="relative w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
    <RiAlarmWarningFill className="text-blue-900 text-lg w-6 h-6" />
    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
  </div>
</div>

      </div>
    </div>
  );
};

export default TopNav;

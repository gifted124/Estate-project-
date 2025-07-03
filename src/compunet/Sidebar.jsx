import React from "react";
import { FaTasks, FaUsers, FaMoneyBill, FaUserTie, FaBoxOpen } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-6 min-h-screen ">
     <h2 className="text-[29px] font-bold text-blue-900 mb-10 font-sans flex items-center ">
  Sart
  <span className="relative inline-block text-blue-900 font-bold text-[33px] pb-1 ">
    o
    <span className="absolute inset-0 flex items-center justify-center text-green-600 text-[20px] font-extrabold">
      +
    </span>
  </span>
  <b className=" text-[32px] pb-1">r</b>
  <button className="text-[13px] ml-[13px] mt-[5px] bg-amber-50 pt-1 pb-1 pl-3 pr-3">Super-Admin</button>
</h2>

      <nav className="space-y-4">
        <a href="#" className="flex items-center gap-3 font-semibold text-blue-900 bg-blue-100 p-3 rounded-lg">
          <div className="text-xl">🏠</div> Overview
        </a>
        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
          <FaTasks /> Task Manager
        </a>
        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
          <FaUsers /> Employees
        </a>
        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
          <FaMoneyBill /> LPOs
        </a>
        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
          <FaUserTie /> Leads
        </a>
        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
          <FaBoxOpen /> Products
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;

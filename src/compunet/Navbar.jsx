// src/components/Navbar.js
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-50">
      {/* Left Section */}
      <div className="flex items-center space-x-6">
        <a href="/" className="font-bold text-[24px]">Be</a>
        <div className="hidden md:flex space-x-6">
          <a href="/explore" className="hover:text-blue-600 font-bold text-[18px]">Explore</a>
          <a href="/jobs" className="hover:text-blue-600">Find Jobs</a>
          <a href="/freelancers" className="hover:text-blue-600">Hire Freelancers</a>
          <a href="#" className="pt-[8px]"><IoIosArrowDown/></a>
          <a href="/careers" className="hover:text-blue-600">Career Resources</a>
           <a href="#" className="pt-[8px]"><IoIosArrowDown/></a>
        </div>
      </div>

      {/* Right Section */}
     {/* Right Section */}
<div className="flex items-center space-x-4">
  {/* Search Icon with round background */}
  <div className="bg-amber-50 p-2 rounded-full cursor-pointer hover:bg-amber-200 transition">
    <IoSearch className="text-[20px]" />
  </div>

  {/* Start Free Trial Button */}
  <a
    href="/free-trial"
    className="bg-gradient-to-r from-blue-400 to-blue-700 text-white px-4 py-2 rounded-full hover:opacity-90 transition duration-300"
  >
    Start Free Trial
  </a>

  {/* Sign In Button */}
  <a
    href="/signin"
    className="px-4 py-2 border border-gray-300 rounded-full text-blue-700 hover:bg-blue-200 transition duration-200"
  >
    Sign In
  </a>

  {/* Profile image */}
  <a href="https://adobe.com" className="font-bold hover:text-blue-600">
    <img
      src="https://mir-s3-cdn-cf.behance.net/user/100/8a306b1958289049.67dbe690b434c.jpg"
      className="w-[30px] rounded-full"
      alt=""
    />
  </a>
</div>

    </nav>
  );
};

export default Navbar;


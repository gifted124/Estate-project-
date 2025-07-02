// src/components/Navbar.js
import React, { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCareerDropdown, setShowCareerDropdown] = useState(false);
  const dropdownTimeout = useRef(null);
  const careerDropdownTimeout = useRef(null);

  return (
    <nav className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-50">
      {/* Left Section */}
      <div className="flex items-center space-x-6">
        <a href="/" className="font-bold text-[24px]">Be</a>
        <div className="hidden md:flex space-x-6">
          <a href="/explore" className="hover:text-blue-600 font-bold text-[18px]">Explore</a>
          <a href="/jobs" className="hover:text-blue-600">Find Jobs</a>

          {/* Hire Freelancers Dropdown */}
          <div
            className="relative inline-block"
            onMouseEnter={() => {
              clearTimeout(dropdownTimeout.current);
              setShowDropdown(true);
            }}
            onMouseLeave={() => {
              dropdownTimeout.current = setTimeout(() => {
                setShowDropdown(false);
              }, 150);
            }}
          >
            <a href="/freelancers" className="hover:text-blue-600 font-semibold">
              Hire Freelancers
            </a>

            {showDropdown && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg p-4 z-50">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="hover:text-blue-600 cursor-pointer">My Freelance Projects</li>
                  <li className="hover:text-blue-600 cursor-pointer">Find Creatives</li>
                  <li className="hover:text-blue-600 cursor-pointer">Hiring on Behance</li>
                  <li className="hover:text-blue-600 cursor-pointer">New Freelance Project</li>
                  <li className="hover:text-blue-600 cursor-pointer">Logo Designers</li>
                  <li className="hover:text-blue-600 cursor-pointer">Brand Designers</li>
                  <li className="hover:text-blue-600 cursor-pointer">Website Designers</li>
                  <li className="hover:text-blue-600 cursor-pointer">Illustrators</li>
                  <li className="hover:text-blue-600 cursor-pointer">Social Media Designers</li>
                </ul>
              </div>
            )}
          </div>

          <a href="#" className="pt-[8px]"><IoIosArrowDown/></a>

          {/* Career Resources Dropdown */}
          <div
            className="relative inline-block"
            onMouseEnter={() => {
              clearTimeout(careerDropdownTimeout.current);
              setShowCareerDropdown(true);
            }}
            onMouseLeave={() => {
              careerDropdownTimeout.current = setTimeout(() => {
                setShowCareerDropdown(false);
              }, 150);
            }}
          >
            <a href="/careers" className="hover:text-blue-600">Career Resources</a>

            {showCareerDropdown && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg p-4 z-50">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="hover:text-blue-600 cursor-pointer">Overview</li>
                  <li className="hover:text-blue-600 cursor-pointer">Career Guides</li>
                  <li className="hover:text-blue-600 cursor-pointer">Commissioned Projects</li>
                  <li className="hover:text-blue-600 cursor-pointer">Creative Apprenticeship</li>
                </ul>
              </div>
            )}
          </div>

          <a href="#" className="pt-[8px]"><IoIosArrowDown/></a>
        </div>
      </div>

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
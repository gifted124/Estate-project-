// src/pages/ProjectPage.js
import React, { useState, useRef, useEffect } from "react";
import { AiFillGoogleCircle, AiFillLike } from "react-icons/ai";
import { FaFacebook, FaFolderOpen, FaLine, FaLink, FaRegFolderOpen } from "react-icons/fa";
import { IoIosMail, IoLogoApple } from "react-icons/io";
import { LiaEyeSolid } from "react-icons/lia";
import { MdLocationPin } from "react-icons/md";
import { TiMessage } from "react-icons/ti";

const ProjectPage = () => {
  const images = [
    {
      url: "https://mir-s3-cdn-cf.behance.net/projects/max_808/994f28225524699.Y3JvcCwyNDI0LDE4OTYsMCww.png",
      likes: 24,
      comments: 5,
    },

    // Add more items as needed
    {
      url: "https://mir-s3-cdn-cf.behance.net/projects/max_808/994f28225524699.Y3JvcCwyNDI0LDE4OTYsMCww.png",
      likes: 24,
      comments: 5,
    },

    // Add more items as needed
    {
      url: "https://mir-s3-cdn-cf.behance.net/projects/max_808/994f28225524699.Y3JvcCwyNDI0LDE4OTYsMCww.png",
      likes: 24,
      comments: 5,
    },
    {
      url: "https://mir-s3-cdn-cf.behance.net/projects/max_808/d28614225717235.Y3JvcCw5MjA1LDcyMDAsMjA1LDA.png",
      likes: 42,
      comments: 13,
    },
    // Add more items as needed
  ];
  const [showProfilePopup, setShowProfilePopup] = useState(true);
  const [showXDCard, setShowXDCard] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [isProfileCardVisible, setIsProfileCardVisible] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null); // 'header' or 'sidebar'
  const profileCardRef = useRef(null);
  const profileImageHeaderRef = useRef(null);
  const profileImageSidebarRef = useRef(null);

  // Close card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileCardRef.current &&
        !profileCardRef.current.contains(event.target) &&
        profileImageHeaderRef.current &&
        !profileImageHeaderRef.current.contains(event.target) &&
        profileImageSidebarRef.current &&
        !profileImageSidebarRef.current.contains(event.target)
      ) {
        setIsProfileCardVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="font-sans bg-white flex">
      <main>
        {/* Project-specific content */}
        <h1 className="text-3xl p-4 flex items-center ml-[134px] ">
          <div
            ref={profileImageHeaderRef}
            className="relative w-[40px] h-[40px] rounded-full overflow-hidden cursor-pointer mr-4"
            onMouseEnter={() => {
              setIsProfileCardVisible(true);
              setHoveredElement("header");
            }}
          >
            <img
              src="https://mir-s3-cdn-cf.behance.net/user/100/6b05591628706871.67ad2a7389d1d.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
            {/* Hover overlay effect */}
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-200 ${
                isProfileCardVisible && hoveredElement === "header"
                  ? "opacity-30"
                  : "opacity-0"
              }`}
            ></div>
          </div>
          <div>
            <p className=" text-black text-lg font-bold text-[18px]">
              {" "}
              Luxury Real Estate Project
            </p>
            <div className="flex">
              <p className="text-[13px] hover:underline cursor-pointer">
                DevPixel Lab <b className="px-2">•</b>
              </p>

              <p className="text-[13px] hover:underline cursor-pointer">
                Follow
              </p>
            </div>
          </div>
        </h1>

        <div className="relative group w-[970px] ml-[150px]">
          {/* Main Image */}
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/56946a225524699.681e6a50ead48.png"
            alt=""
            className="w-full h-[730px] object-cover rounded-lg"
          />

          {/* Hover Overlay with Action Buttons */}
          <div className="absolute inset-0 bg-black/0 transition-all duration-300 flex items-end justify-start p-6 opacity-0 group-hover:opacity-100 mb-160">
            <div className="flex items-center gap-2   px-6 py-3 ">
              <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-black group-hover:bg-black/50  px-4 py-2 rounded-full transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <span>More Like This</span>
              </button>

              <div className="h-6 w-px bg-gray-300"></div>

              <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-black group-hover:bg-black/50  px-4 py-2 rounded-full transition-all">
                <FaRegFolderOpen />
                <span>Save</span>
              </button>

              <div className="h-6 w-px bg-gray-300"></div>

              <button className="flex items-center  text-sm font-medium text-gray-700 hover:text-blue-600 py-2 rounded-full transition-all">
                 <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-black group-hover:bg-black/50  px-4 py-2 rounded-full transition-all">
                <FaLink/>
                <span>Permalink</span>
              </button>
              </button>
            </div>
          </div>
        </div>

        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/2f93fa226659893.68324a5e2389a.png"
          className="w-[970px] justify-center ml-[150px] mt-6"
          alt=""
        />

        <div className="flex justify-center items-center mt-1 ">
          <div className="bg-white shadow-2xl  p-10 w-[980px] ml-36 text-center text-black">
            <p className="text-xl  mb-2 font-bold text-[28px]">Let's Contact</p>
            <div className="group inline-block relative cursor-pointer">
              <p className="mb-2 text-blue-700 text-[28px]">
                devpixel.lab1@gmail.com
              </p>
              <div className="h-[2px] w-0 bg-blue-700 transition-all duration-300 group-hover:w-full"></div>
            </div>

            <p className="mb-2 text-[20px] mt-2">Get in touch</p>
            <div className="group inline-block relative cursor-pointer">
              <p className="mb-2 text-blue-700 text-[28px]">
                WhatsApp | Telegram
              </p>
              <div className="h-[2px] w-0 bg-blue-700 transition-all duration-300 group-hover:w-full"></div>
            </div>
          </div>
        </div>

        {/* Behance-style image slider */}

        <div className="bg-black text-white p-6 w-[980px] ml-36  h-70">
          <div className="flex flex-col items-center mb-4">
            <div className="bg-blue-700 w-20 h-20 flex items-center justify-center rounded-full mb-2">
              <AiFillLike className="text-xl text-[30px]" />
            </div>
            <span>Luxury Real Estate Website</span>

            <div className="flex  text-sm text-gray-300 w-full text-center justify-center gap-2 mt-3">
              <span className="text-[20px]">
                <AiFillLike />
              </span>
              <span>164</span>
              <span className="text-[20px]">
                <LiaEyeSolid />
              </span>
              <span>1.1K</span>
              <span className="text-[20px]">
                <TiMessage />
              </span>
              <span>13</span>
            </div>
          </div>

          <p className="text-gray-400 text-xs text-center mt-8">
            Published: May 24th 2025
          </p>
        </div>

        <div className="relative w-[980px] ml-36 overflow-hidden mb-20">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 shadow   hover:bg-gray-100"
            onClick={() => {
              const container = document.getElementById("slider-container");
              container.scrollLeft -= 300;
            }}
          >
            &#8592;
          </button>

          
         <div id="slider-container" className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar h-[368px]">
  {images.map((item, index) => (
    <div key={index} className="min-w-[470px] relative overflow-hidden rounded-lg">
      <img
        src={item.url}
        alt={`Project ${index}`}
        className="w-full h-[368px] object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white px-4 py-2 flex justify-between text-sm">
        <span className="flex items-center gap-1">
          <AiFillLike /> {item.likes}
        </span>
        <span className="flex items-center gap-1">
          <TiMessage /> {item.comments}
        </span>
      </div>
    </div>
  ))}
</div>
{/* /gallery/225524699/Elevate-your-lifestyle-E-Commerce-Website/modules/1289291753
https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/56946a225524699.681e6a50ead48.png */}


         {/* <button
  onClick={() => {
    const container = document.getElementById("slider-container");
    container.scrollLeft -= container.offsetWidth;
  }}
>
  &#8592;
</button>
... */}
{/* <button
  onClick={() => {
    const container = document.getElementById("slider-container");
    container.scrollLeft += container.offsetWidth;
  }}
>
  &#8594;
</button> */}





        </div>
        {/* Big Card Section Below Image */}
<div className="w-[960px] ml-[150px] bg-white rounded-lg shadow-lg p-8  flex">
  {/* Sign Up Section */}
 <div>
   <div className="mb-8 pb-6 border-b border-gray-200">
    <h3 className="text-[30px] font-bold mb-2">Sign up to join the conversation</h3>
    <p className="text-gray-600 mb-4 text-[13px]">
     Add your feedback for DevPixel Lab’s project by signing in or signing up.
    </p>
  <div className="flex gap-3">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition">
      Sign Up With Email 
    </button>
    <p className=" pt-2">or</p>
   <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center hover:bg-gray-200 transition duration-300 cursor-pointer mt-2">
  <IoLogoApple className="text-6 text-black " />
</div>
  <FaFacebook className="w-8 h-8 mt-1"/>
  <AiFillGoogleCircle className="w-7 h-7 mt-2"/>
  </div>
  </div>

  {/* Comments Section */}
  <div className="mb-8">
    
    <div className="space-y-6">
      {/* Comment 1 */}
      <div className="flex items-start gap-4">
        <img 
          src="https://randomuser.me/api/portraits/women/44.jpg" 
          className="w-12 h-12 rounded-full object-cover"
          alt="Yeasmin Emu"
        />
        <div>
          <div className="flex items-center gap-3">
            <span className="font-medium">Yeasmin Emu</span>
            <span className="text-gray-500 text-sm">18 hours ago</span>
          </div>
          <p className="text-gray-800 mt-1">Great work!</p>
        </div>
      </div>

      {/* Comment 2 */}
      <div className="flex items-start gap-4">
        <img 
          src="https://randomuser.me/api/portraits/men/32.jpg" 
          className="w-12 h-12 rounded-full object-cover"
          alt="MD: Abu Musa"
        />
        <div>
          <div className="flex items-center gap-3">
            <span className="font-medium">MD: Abu Musa</span>
            <span className="text-gray-500 text-sm">5 days ago</span>
          </div>
          <p className="text-gray-800 mt-1">Great work, well done!</p>
        </div>
      </div>

      {/* Comment 3 */}
      <div className="flex items-start gap-4">
        <img 
          src="https://randomuser.me/api/portraits/men/22.jpg" 
          className="w-12 h-12 rounded-full object-cover"
          alt="Falyaz Bin Noor"
        />
        <div>
          <div className="flex items-center gap-3">
            <span className="font-medium">Falyaz Bin Noor</span>
            <span className="text-gray-500 text-sm">6 days ago</span>
          </div>
          <p className="text-gray-800 mt-1">Your effort shows—amazing work!</p>
        </div>
      </div>

      {/* View More Button */}
     
    </div>
     <div className="space-y-6 mt-6">
      {/* Comment 1 */}
      <div className="flex items-start gap-4">
        <img 
          src="https://randomuser.me/api/portraits/women/44.jpg" 
          className="w-12 h-12 rounded-full object-cover"
          alt="Yeasmin Emu"
        />
        <div>
          <div className="flex items-center gap-3">
            <span className="font-medium">Yeasmin Emu</span>
            <span className="text-gray-500 text-sm">18 hours ago</span>
          </div>
          <p className="text-gray-800 mt-1">Great work!</p>
        </div>
      </div>

      {/* Comment 2 */}
      <div className="flex items-start gap-4">
        <img 
          src="https://randomuser.me/api/portraits/men/32.jpg" 
          className="w-12 h-12 rounded-full object-cover"
          alt="MD: Abu Musa"
        />
        <div>
          <div className="flex items-center gap-3">
            <span className="font-medium">MD: Abu Musa</span>
            <span className="text-gray-500 text-sm">5 days ago</span>
          </div>
          <p className="text-gray-800 mt-1">Great work, well done!</p>
        </div>
      </div>

      {/* Comment 3 */}
      <div className="flex items-start gap-4">
        <img 
          src="https://randomuser.me/api/portraits/men/22.jpg" 
          className="w-12 h-12 rounded-full object-cover"
          alt="Falyaz Bin Noor"
        />
        <div>
          <div className="flex items-center gap-3">
            <span className="font-medium">Falyaz Bin Noor</span>
            <span className="text-gray-500 text-sm">6 days ago</span>
          </div>
          <p className="text-gray-800 mt-1">Your effort shows—amazing work!</p>
        </div>
      </div>
    </div>
  </div>

  {/* Project Info Section */}
  <div className="grid grid-cols-2 gap-8">
    {/* Left Column */}
    <div>
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-500 mb-3">TOOLS</h4>
        <div className="flex flex-wrap gap-2">
          {['Xd', 'Photoshop', 'Stock', 'Figma'].map((tool, index) => (
            <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-500 mb-3">CREATIVE FIELDS</h4>
        <div className="flex flex-wrap gap-2">
          {['Web Design', 'UI/UX', 'Interaction Design', 'real estate', 'luxury website'].map((field, index) => (
            <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              {field}
            </span>
          ))}
        </div>
      </div>
    </div>

   
  
  </div>


 </div>

<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-[700px]">
  {/* Owner Section */}
  <div className="mb-6">
    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">OWNER</h4>
    <div className="flex items-center gap-4">
      <img 
        src="https://mir-s3-cdn-cf.behance.net/user/100/6b05591628706871.67ad2a7389d1d.png" 
        className="w-12 h-12 rounded-full object-cover border border-gray-200"
        alt="DevPixel Lab"
      />
      <div>
        <p className="font-medium">DevPixel Lab</p>
        <div className="flex items-center mt-1">
          <MdLocationPin className="mr-2"/>
          <span className="text-gray-600 text-sm">Bangladesh</span>
          <span className="mx-2 text-gray-400">•</span>
        </div>
      </div>
    </div>
    <div className="flex gap-3 mt-4 ">
      <button className="flex-1  bg-blue-600 hover:bg-gray-100 text-gray-800 py-2 rounded-md text-sm font-medium transition border border-gray-200">
        Follow
      </button>
    </div>
     <button className="flex-1 bg-gray-100 hover:bg-blue-200  py-2 p-2 rounded-md  pl-38 pr-38 mt-4 text-sm font-medium ">
        Hire
      </button>
  </div>

  {/* Project Title */}
 







 <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 max-w-[350px]">
  {/* Owner Section */}
 

  {/* Project Title - Reduced size */}
  <h3 className="text-base  text-[13px] font-bold mb-0.5 leading-tight">Elevate your lifestyle - E-Commee Website..</h3>
  <h4 className="text-[12px] text-gray-600 mb-3 leading-tight mt-4">Elevate your lifestyle - E-Commerce Website</h4>

  {/* Stats */}
  <div className="flex items-center gap-3 mb-3">
    <span className="flex items-center gap-1 text-gray-700 text-xs">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      128
    </span>
    <span className="flex items-center gap-1 text-gray-700 text-xs">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
      383
    </span>
    <span className="flex items-center gap-1 text-gray-700 text-xs">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
      7
    </span>
  </div>

  {/* Published Date */}
  <p className="text-gra text-xs mt-6">Published: May 9th 2025</p>

  {/* Tools Section */}
 
</div>



  {/* Published Date */}


  {/* Tools Section */}
 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-[340px]">
  {/* Tools Section */}
  <div className="mb-6">
    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">TOOLS</h4>
    <div className="grid  gap-3 justify-center">
      {/* XD Tool */}
      <div
  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg w-78 justify-center bg-cover bg-center text-white h-11"
  style={{
    backgroundImage:
      "url('https://a5.behance.net/892212496572661dd179f72501ae82f26297d323/img/creative_fields/bg/uiux.jpg')",
  }}
  
>
  <div className="bg-black bg-opacity-50 p-2 rounded-lg w-8 h-8">
    <img
      src="https://a5.behance.net/892212496572661dd179f72501ae82f26297d323/img/project/tools/1x/xd.png"
      className="w-6 h-6"
      alt="Stock"
    />
  </div>
  <div>
    <p className="font-medium">SD</p>
  </div>
</div>
      
      {/* Photoshop Tool */}
     <div
  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg w-78 justify-center bg-cover bg-center text-white h-11"
  style={{
    backgroundImage:
      "url('https://a5.behance.net/892212496572661dd179f72501ae82f26297d323/img/creative_fields/bg/uiux.jpg')",
  }}
  
>
  <div className="bg-black bg-opacity-50 p-2 rounded-lg w-8 h-8">
    <img
      src="https://a5.behance.net/892212496572661dd179f72501ae82f26297d323/img/project/tools/1x/photoshop.png"
      className="w-6 h-6"
      alt="Stock"
    />
  </div>
  <div>
    <p className="font-medium">Photoshop</p>
  </div>
</div>
      
      {/* Stock Tool */}
      <div
  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg w-78 justify-center bg-cover bg-center text-white h-11"
  style={{
    backgroundImage:
      "url('https://a5.behance.net/892212496572661dd179f72501ae82f26297d323/img/creative_fields/bg/productdesign.jpg')",
  }}
  
>
  <div className="bg-black bg-opacity-50 p-2 rounded-lg w-8 h-8">
    <img
      src="https://a5.behance.net/892212496572661dd179f72501ae82f26297d323/img/project/tools/1x/illustrator.png"
      className="w-6 h-6"
      alt="Stock"
    />
  </div>
  <div>
    <p className="font-medium">Illustrator

</p>
  </div>
</div>
<p>Figma</p>

      {/* Figma Tool */}
      
    </div>
  </div>

  {/* Creative Fields Section */}
  
</div>

 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-[340px]">
  {/* Tools Section */}
  <div className="mb-6">
    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Creative Fields</h4>
    <div className="grid  gap-3 justify-center">
      {/* XD Tool */}
      <div
  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg w-78 justify-center bg-cover bg-center text-white h-11"
  style={{
    backgroundImage:
      "url('https://a5.behance.net/892212496572661dd179f72501ae82f26297d323/img/creative_fields/bg/uiux.jpg')",
  }}
  
>
  <div className="bg-black bg-opacity-50 p-2 rounded-lg w-8 h-8">
    <img
      src="https://a5.behance.net/892212496572661dd179f72501ae82f26297d323/img/project/tools/1x/xd.png"
      className="w-6 h-6"
      alt="Stock"
    />
  </div>
  <div>
    <p className="font-medium">UI/UX</p>
  </div>
</div>
      
      {/* Photoshop Tool */}
     <div
  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg w-78 justify-center bg-cover bg-center text-white h-11"
  style={{
    backgroundImage:
      "url('https://a5.behance.net/892212496572661dd179f72501ae82f26297d323/img/creative_fields/bg/uiux.jpg')",
  }}
  
>
  <div className="bg-black bg-opacity-50 p-2 rounded-lg w-8 h-8">
    <img
      src="https://a5.behance.net/892212496572661dd179f72501ae82f26297d323/img/project/tools/1x/photoshop.png"
      className="w-6 h-6"
      alt="Stock"
    />
  </div>
  <div>
    <p className="font-medium">Web Design

</p>
  </div>
</div>
      
      {/* Stock Tool */}
      <div
  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg w-78 justify-center bg-cover bg-center text-white h-11"
  style={{
    backgroundImage:
      "url('https://a5.behance.net/892212496572661dd179f72501ae82f26297d323/img/creative_fields/bg/productdesign.jpg')",
  }}
  
>
  <div className="bg-black bg-opacity-50 p-2 rounded-lg w-8 h-8">
    <img
      src="https://a5.behance.net/892212496572661dd179f72501ae82f26297d323/img/project/tools/1x/illustrator.png"
      className="w-6 h-6"
      alt="Stock"
    />
  </div>
  <div>
    <p className="font-medium">Product Design

</p>
  </div>
</div>
    </div>
  </div>

  {/* Creative Fields Section */}
 
</div>
</div>

</div>



        
      </main>
    

      <div className="mt-[125px] ml-[19px]  relative">
        <div
          ref={profileImageSidebarRef}
          className="fixed top-[120px] ] flex flex-col items-center w-[70px] z-50 select-none left-[1140px] mt-13"
          style={{
            touchAction: "none",
            overscrollBehavior: "none",
            willChange: "transform",
          }}
          onMouseEnter={() => {
            setIsProfileCardVisible(true);
            setHoveredElement("sidebar");
          }}
        >
          <div className=" w-[55px] h-[55px] rounded-full overflow-hidden relative ">
            <img
              src="https://mir-s3-cdn-cf.behance.net/user/100/6b05591628706871.67ad2a7389d1d.png"
              alt="Profile"
              className="w-full h-full object-cover pointer-events-none"
              draggable="false"
            />
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-200 ${
                isProfileCardVisible && hoveredElement === "sidebar"
                  ? "opacity-30"
                  : "opacity-0"
              }`}
            />
            {/* Hover overlay effect */}
          </div>

          {/* Follow text below the image */}
          <p className="text-sm text-black mt-3 mb-8">Follow</p>

          {/* Mail icon below the text */}
          <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => setShowCard(true)}
            onMouseLeave={() => setShowCard(false)}
          >
            <IoIosMail className="mt-1 text-[30px] text-gray-700 cursor-pointer" />

            {showCard && (
              <div className="absolute top-[40px] right-7 w-[230px] bg-white shadow-xl rounded-xl border z-50 p-4 ">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-black"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 3.13V6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3.13a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" />
                      <path d="M8 11h8v10a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V11z" />
                    </svg>
                    <span className="text-sm font-medium">Full Time Job</span>
                  </div>
                  <span>✔️</span>
                </div>

                <div className="border-t my-2"></div>

                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-black"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 4h16v2H4zm0 4h16v2H4zm0 4h10v2H4z" />
                    </svg>
                    <div>
                      <span className="text-sm font-medium">
                        Freelance/Project
                      </span>
                      <p className="text-xs text-gray-500">Availability: Now</p>
                    </div>
                  </div>
                  <span>✔️</span>
                </div>
              </div>
            )}
          </div>

          <p className="text-sm text-black mt-3 mb-8">Hire</p>
          <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => setShowXDCard(true)}
            onMouseLeave={() => setShowXDCard(false)}
          >
            <img
              src="https://a5.behance.net/43202410d740f9023ef1e20833a582e64fa715d3/img/project/tools/1x/xd.png"
              className="mt-1 text-[30px] text-gray-700 cursor-pointer w-[24px]"
              alt="XD"
            />
            <p className="text-[13px] pt-10">Tools</p>
            {showXDCard && (
              <div className="absolute top-[40px] right-7 w-[230px] bg-white shadow-xl rounded-xl border z-50 p-4">
                <div className="flex items-center justify-between mb-2 ">
                  <div>
                    <div className="relative inline-block w-fit">
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/original/217fe2221535121.Y3JvcCw4MDgsNjMyLDAsMA.png"
                        alt=""
                        className="w-[200px] h-10 rounded-[10px]"
                      />

                      {/* Overlay content inside the image */}
                      <div className="absolute top-1 left-16 flex items-center gap-4 bg-opacity-80 px-3 py-1 rounded-md shadow mr-20">
                        <img
                          src="https://a5.behance.net/43202410d740f9023ef1e20833a582e64fa715d3/img/project/tools/1x/xd.png"
                          alt="XD"
                          className="w-6 h-6 "
                        />
                        <span className="text-sm font-medium ">XD</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="relative inline-block w-fit">
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/original/217fe2221535121.Y3JvcCw4MDgsNjMyLDAsMA.png"
                        alt=""
                        className="w-[200px] h-10 bg-black  rounded-[10px]"
                      />

                      {/* Overlay content inside the image */}
                      <div className="absolute top-1 left-10 flex items-center gap-8 bg-opacity-80 px-3 py-1 rounded-md shadow mr-20">
                        <img
                          src="https://a5.behance.net/8e71aa883721b8c84048057e5cf775ae9ce33730/img/project/tools/1x/photoshop.png"
                          alt="XD"
                          className="w-6 h-6  "
                        />
                        <span className="text-sm font-medium ">Photosop</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="relative inline-block w-fit">
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/original/217fe2221535121.Y3JvcCw4MDgsNjMyLDAsMA.png"
                        alt=""
                        className="w-[200px] h-10 bg-black  rounded-[10px]"
                      />

                      {/* Overlay content inside the image */}
                      <div className="absolute top-1 left-12 flex items-center gap-6 bg-opacity-80 px-3 py-1 rounded-md shadow mr-20">
                        <img
                          src="https://a5.behance.net/8e71aa883721b8c84048057e5cf775ae9ce33730/img/project/tools/1x/stock.png"
                          alt="XD"
                          className="w-6 h-6  "
                        />
                        <span className="text-sm font-medium ">Stocks</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500">Tool: Adobe XD</div>
              </div>
            )}
          </div>
          <FaFolderOpen className="text-[23px] mt-10 mb-7" />
          <p className="text-[12px]"> Save</p>
        </div>

        {/* Profile Card - Shows to the left of sidebar image when hovering */}
        {isProfileCardVisible && hoveredElement === "sidebar" && (
          <div
            ref={profileCardRef}
            className="absolute top-0 right-full mr-2 bg-white rounded-lg shadow-xl w-80 z-50 p-6"
            onMouseEnter={() => {
              setIsProfileCardVisible(true);
              setHoveredElement("sidebar");
            }}
            onMouseLeave={() => setIsProfileCardVisible(false)}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold">EMPOWER</h2>
                <h3 className="text-xl">D</h3>
                <p className="text-gray-600">DevPixel Lab</p>
                <p className="text-gray-600">Bangladesh</p>
              </div>
            </div>

            <div className="flex space-x-4 mb-6">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                Freelance
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                Full-Time
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <p className="font-bold">2.1K</p>
                <p className="text-sm text-gray-600">Appreciations</p>
              </div>
              <div className="text-center">
                <p className="font-bold">311</p>
                <p className="text-sm text-gray-600">Followers</p>
              </div>
              <div className="text-center">
                <p className="font-bold">18.8K</p>
                <p className="text-sm text-gray-600">Project Views</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-full flex-1 hover:bg-blue-700"
                onClick={() => console.log("Follow clicked")}
              >
                Follow
              </button>
              <button
                className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full flex-1 hover:bg-blue-50"
                onClick={() => console.log("Hire clicked")}
              >
                Hire
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Original Profile Card - Shows near header image when hovering */}
      {isProfileCardVisible && hoveredElement === "header" && (
        <div
          ref={profileCardRef}
          className="fixed top-20 left-8 bg-white rounded-lg shadow-xl w-80 z-50 p-6"
          onMouseEnter={() => {
            setIsProfileCardVisible(true);
            setHoveredElement("header");
          }}
          onMouseLeave={() => setIsProfileCardVisible(false)}
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold">EMPOWER</h2>
              <h3 className="text-xl">D</h3>
              <p className="text-gray-600">DevPixel Lab</p>
              <p className="text-gray-600">Bangladesh</p>
            </div>
          </div>

          <div className="flex space-x-4 mb-6">
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              Freelance
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              Full-Time
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <p className="font-bold">2.1K</p>
              <p className="text-sm text-gray-600">Appreciations</p>
            </div>
            <div className="text-center">
              <p className="font-bold">311</p>
              <p className="text-sm text-gray-600">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold">18.8K</p>
              <p className="text-sm text-gray-600">Project Views</p>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-full flex-1 hover:bg-blue-700"
              onClick={() => console.log("Follow clicked")}
            >
              Follow
            </button>
            <button
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full flex-1 hover:bg-blue-50"
              onClick={() => console.log("Hire clicked")}
            >
              Hire
            </button>
          </div>
        </div>
      )}
      {showProfilePopup && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img
                src="https://mir-s3-cdn-cf.behance.net/user/100/6b05591628706871.67ad2a7389d1d.png"
                className="w-12 h-12 rounded-full object-cover"
                alt="DevPixel Lab"
              />
              <div>
                <h3 className="font-bold">DevPixel Lab's profile</h3>
                <p className="text-gray-600">DevPixel is available for hire</p>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-green-600 text-sm flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Availability: Now
                  </span>
                  <span className="text-blue-600 text-sm flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Responds quickly
                  </span>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition">
                Hire DevPixel
              </button>
              <button
                onClick={() => setShowProfilePopup(false)}
                className="p-2 text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;

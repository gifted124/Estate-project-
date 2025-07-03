import React, { useEffect, useState } from "react";
import { BiDna } from "react-icons/bi";

const BiDnaLoading = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
          {/* Bouncing Icon */}
          <BiDna className="text-6xl text-blue-600 animate-bounce" />

          {/* Loading Line */}
          <div className="mt-4 w-48 h-1 bg-gray-300 relative overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-blue-600 animate-loading-bar"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default BiDnaLoading;

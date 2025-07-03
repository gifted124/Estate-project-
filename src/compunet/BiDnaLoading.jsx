import React, { useEffect, useState } from "react";
import { BiDna } from "react-icons/bi";


const BiDnaLoading = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <BiDna className="text-6xl text-blue-500 animate-bounce" />
        <div className="mt-4 w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="w-full h-full bg-blue-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default BiDnaLoading;

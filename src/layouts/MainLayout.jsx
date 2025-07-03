import React from "react";
import Sidebar from "../compunet/Sidebar";
import TopNav from "../compunet/TopNav";


const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <TopNav/>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;

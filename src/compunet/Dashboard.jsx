import React from "react";
import Sidebar from "../components/Sidebar"; // adjust path as needed

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        {/* Your header, stats cards, charts, etc... */}
        <h1 className="text-2xl font-bold text-blue-900 mb-6">Overview</h1>
        {/* ...rest of the dashboard UI here... */}
      </main>
    </div>
  );
};

export default Dashboard;

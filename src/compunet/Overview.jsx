import React from "react";
import MainLayout from "../layouts/MainLayout";
import ChartComponent from "../components/ChartComponent";

const Overview = () => (
  <MainLayout>
    <div className="p-6">
      <ChartComponent />
    </div>
  </MainLayout>
);

export default Overview;

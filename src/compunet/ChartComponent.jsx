// ChartComponent.jsx
import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register chart components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Looping tension',
    data: [65, 59, 80, 81, 26, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.4
  }]
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart - Cubic interpolation mode'
    },
  },
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true
      }
    },
    y: {
      display: true,
      title: {
        display: true,
        text: 'Value'
      },
      suggestedMin: -10,
      suggestedMax: 200
    }
  }
};

const ChartComponent = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Total Revenue</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;

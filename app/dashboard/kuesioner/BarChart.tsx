"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    title: {
      display: true,
      text: "Grouped Bar Chart - Kuesioner",
    },
  },
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: false,
      ticks: {
        maxRotation: 0, // Prevent label rotation
      },
    },
    y: {
      stacked: false,
    },
  },
};

const labels = [
  ["Product's", "Quality"],
  ["Delivery", "on", "Time"],
  ["Delivery", "in", "Accordance", "with", "Your", "Order"],
  ["Claim", "Handling"],
  ["Response", "on", "Your", "Requirements"],
  ["Our", "Attitude", "Toward", "You"],
  ["Cooperation", "to", "your", "cost", "reduction", "requirements"],
];

const data = {
  labels,
  datasets: [
    {
      label: "Very Good",
      data: labels.map(() => Math.floor(Math.random() * 100)),
      backgroundColor: "rgb(78,129,189)",
      stack: "Stack 0",
    },
    {
      label: "Good",
      data: labels.map(() => Math.floor(Math.random() * 80)),
      backgroundColor: "rgb(0,175,80)",
      stack: "Stack 1",
    },
    {
      label: "Enough",
      data: labels.map(() => Math.floor(Math.random() * 80)),
      backgroundColor: "rgb(153,217,248)",
      stack: "Stack 2",
    },
    {
      label: "Less",
      data: labels.map(() => Math.floor(Math.random() * 10)),
      backgroundColor: "rgb(228,108,11)",
      stack: "Stack 3",
    },
    {
      label: "Not Good",
      data: labels.map(() => Math.floor(Math.random() * 10)),
      backgroundColor: "rgb(255,0,0)",
      stack: "Stack 4",
    },
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart;

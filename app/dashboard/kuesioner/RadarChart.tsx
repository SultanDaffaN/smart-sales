"use client";

import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    title: {
      display: true,
      text: "Radar Chart - Kuesioner",
    },
  },
};

const labels = [
  "Product's Quality",
  "Delivery on Time",
  ["Delivery in", " Accordance with Your Order"],
  "Claim Handling",
  "Response on Your Requirements",
  "Our Attitude Toward You",
  ["Cooperation to your cost", "reduction requirements"],
];

export const data = {
  labels: labels,
  datasets: [
    {
      label: "Very Good",
      data: labels.map(() => Math.floor(Math.random() * 100)),
      backgroundColor: "rgb(78,129,189, 0.2)",
      borderColor: "rgb(78,129,189, 1)",
      borderWidth: 1,
    },
    {
      label: "Good",
      data: labels.map(() => Math.floor(Math.random() * 80)),
      backgroundColor: "rgb(0,175,80, 0.2)",
      borderColor: "rgb(0,175,80, 1)",
      borderWidth: 1,
    },
    {
      label: "Enough",
      data: labels.map(() => Math.floor(Math.random() * 80)),
      backgroundColor: "rgb(153,217,248, 0.2)",
      borderColor: "rgb(153,217,248, 1)",
      borderWidth: 1,
    },
    {
      label: "Less",
      data: labels.map(() => Math.floor(Math.random() * 10)),
      backgroundColor: "rgb(228,108,11,0.2)",
      borderColor: "rgb(228,108,11,1)",
      borderWidth: 1,
    },
    {
      label: "Not Good",
      data: labels.map(() => Math.floor(Math.random() * 10)),
      backgroundColor: "rgb(255,0,0,0.2)",
      borderColor: "rgb(255,0,0,1)",
      borderWidth: 1,
    },
  ],
};

export function RadarChart() {
  return (
    <div className="w-full h-full">
      <Radar options={options} data={data} />
    </div>
  );
}

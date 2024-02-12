"use client";

import BarChart from "./BarChart";
import { RadarChart } from "./RadarChart";
import Suggestions from "./Suggestions";
import Tabulation from "./Tabulation";

export default function DashboardSurvey() {
  return (
    <>
      <h1 className="text-3xl text-center font-bold text-black mb-8 mt-5">
        Dashboard Kuesioner
      </h1>
      <div className="md:hidden">
        Please switch to a larger screen to view the Dashboard Kuesioner{" "}
      </div>
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg  hidden md:block">
        {/* Grouped bar chart */}
        <div className="grid  md:grid-cols-5  gap-4 mb-4">
          <div className="col-span-3 flex items-center justify-center rounded bg-gray-50">
            <BarChart />
          </div>

          {/* Radar Chart */}
          <div className="col-span-2 flex items-center justify-center rounded bg-gray-50 ">
            <RadarChart />
          </div>
        </div>

        {/* Tabulation */}
        <div className="mb-4 rounded bg-gray-50">
          <Tabulation />
        </div>

        {/* Suggestions */}
        <div className="mb-4 rounded bg-gray-50">
          <Suggestions />
        </div>
      </div>
    </>
  );
}

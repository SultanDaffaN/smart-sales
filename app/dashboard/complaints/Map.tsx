import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import HighchartsExporting from "highcharts/modules/exporting";
import proj4 from "proj4";
import mapDataIE from "@highcharts/map-collection/countries/id/id-all.geo.json";
import { useRouter } from "next/navigation";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
  highchartsMap(Highcharts);
}

if (typeof window !== "undefined") {
  window.proj4 = window.proj4 || proj4;
}

export default function MapChart() {
  const router = useRouter();

  const mapOptions = {
    title: {
      text: "Customer Complaint Map",
    },
    credits: {
      enabled: false,
    },
    mapNavigation: {
      enabled: false,
    },
    tooltip: {
      useHTML: true,
      pointFormat:
        "<div class='mt-2'> <b>Customer:</b> {point.customer}<br/><b>Date:</b> {point.date}<br/><b>Serial Number:</b> {point.serialNumber} </div>",
      cursor: "pointer",
    },
    plotOptions: {
      mapbubble: {
        maxSize: 20,
      },
      series: {
        events: {
          click: function (e: any) {
            if (e.point && e.point.serialNumber) {
              router.push(`/complaint/${e.point.serialNumber}`);
            }
          },
        },
      },
    },
    series: [
      {
        // Use the gb-all map with no data as a basemap
        name: "Basemap",
        mapData: mapDataIE,
        borderColor: "#A0A0A0",
        nullColor: "rgba(47,104,68, 0.8)",
        showInLegend: false,
      },
      {
        // Specify points using lat/lon
        type: "mapbubble",
        name: "Balikpapan",
        color: "#ff0000",
        data: [
          {
            z: 0,
            keyword: "Galway",
            lat: 1.2379,
            lon: 116.8529,
            customer: "PT Sekawan Karsa",
            date: "18 February 2024",
            serialNumber: "6SV35-10486",
          },
        ],
        cursor: "pointer",
      },
      {
        // Specify points using lat/lon
        type: "mapbubble",
        name: "Bali",
        color: "#ff0000",
        data: [
          {
            z: 0,
            keyword: "Galway",
            lat: -8.409518,
            lon: 115.188919,
            customer: "PT Sekawan Karsa",
            date: "18 February 2024",
            serialNumber: "6SV35-10432",
          },
        ],
        cursor: "pointer",
      },
    ],
  };

  return (
    <>
      <div className="p-3  mt-16 ">
        <HighchartsReact
          constructorType={"mapChart"}
          highcharts={Highcharts}
          options={mapOptions}
        />
      </div>
    </>
  );
}

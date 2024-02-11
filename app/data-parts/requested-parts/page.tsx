"use client";

import { useState } from "react";
import { toast } from "react-toastify";

interface ArrowIconsState {
  [key: number]: boolean;
}

export default function RequestedPart() {
  const [arrowIcons, setArrowIcons] = useState<ArrowIconsState>({});
  const handleSubmit = () => {
    toast.success("Requested parts for customers have been completed!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  // Sample data, you can replace this with your actual data
  const requestedParts = [
    {
      id: 1,
      requestedDate: "01-Feb-2016",
      customer: "PT SENGGIGILANG",
      island: "JAVA",
      province: "SUMATERA",
      sector: "ROAD",
    },
    {
      id: 2,
      requestedDate: "01-Feb-2016",
      customer: "PT SENGGIGILANG",
      island: "JAVA",
      province: "SUMATERA",
      sector: "ROAD",
    },
    {
      id: 3,
      requestedDate: "01-Feb-2016",
      customer: "PT SENGGIGILANG",
      island: "JAVA",
      province: "SUMATERA",
      sector: "ROAD",
    },
    {
      id: 4,
      requestedDate: "01-Feb-2016",
      customer: "PT SENGGIGILANG",
      island: "JAVA",
      province: "SUMATERA",
      sector: "ROAD",
    },
    {
      id: 5,
      requestedDate: "01-Feb-2016",
      customer: "PT SENGGIGILANG",
      island: "JAVA",
      province: "SUMATERA",
      sector: "ROAD",
    },
    {
      id: 6,
      requestedDate: "01-Feb-2016",
      customer: "PT SENGGIGILANG",
      island: "JAVA",
      province: "SUMATERA",
      sector: "ROAD",
    },
    {
      id: 7,
      requestedDate: "01-Feb-2016",
      customer: "PT SENGGIGILANG",
      island: "JAVA",
      province: "SUMATERA",
      sector: "ROAD",
    },
    {
      id: 8,
      requestedDate: "01-Feb-2016",
      customer: "PT SENGGIGILANG",
      island: "JAVA",
      province: "SUMATERA",
      sector: "ROAD",
    },
    {
      id: 9,
      requestedDate: "01-Feb-2016",
      customer: "PT SENGGIGILANG",
      island: "JAVA",
      province: "SUMATERA",
      sector: "ROAD",
    },
    {
      id: 10,
      requestedDate: "01-Feb-2016",
      customer: "PT SENGGIGILANG",
      island: "JAVA",
      province: "SUMATERA",
      sector: "ROAD",
    },
  ];

  const toggleArrowIcon = (id: number) => {
    setArrowIcons((prevIcons) => ({
      ...prevIcons,
      [id]: !prevIcons[id],
    }));
  };

  return (
    <>
      <h1 className="text-3xl text-center font-bold text-black my-8">
        Requested Parts
      </h1>

      <div className="px-6">
        <div className="relative overflow-x-auto shadow-md sm:rounded-md">
          <table className="w-full text-sm text-left rtl:text-right text-white">
            <thead className="bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Requested Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3">
                  Island
                </th>
                <th scope="col" className="px-6 py-3">
                  Province
                </th>
                <th scope="col" className="px-6 py-3">
                  Sector
                </th>
              </tr>
            </thead>
            <tbody>
              {requestedParts.map((part) => (
                <>
                  <tr
                    key={part.id}
                    className="bg-white border-b  hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 text-gray-900 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        className={`h-4 mr-3 cursor-pointer  ${
                          arrowIcons[part.id] ? "rotate-90" : ""
                        }`}
                        onClick={() => toggleArrowIcon(part.id)}
                      >
                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                      </svg>
                      {part.requestedDate}
                    </td>
                    <td className="px-6 py-4 text-gray-900">{part.customer}</td>
                    <td className="px-6 py-4 text-gray-900">{part.island}</td>
                    <td className="px-6 py-4 text-gray-900">{part.province}</td>
                    <td className="px-6 py-4 text-gray-900">{part.sector}</td>
                  </tr>
                  {arrowIcons[part.id] && (
                    <tr>
                      <td colSpan={5}>
                        <div className="p-8 bg-gray-100">
                          <table className="w-full text-sm text-left rtl:text-right text-white">
                            <thead className="bg-gray-800">
                              <tr>
                                <th scope="col" className="px-6 py-3">
                                  No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                  Part Number
                                </th>
                                <th scope="col" className="px-6 py-3">
                                  Part Name
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                  Quantity
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="bg-white border-b  hover:bg-gray-50">
                                <th className="px-6 py-2 font-normal text-gray-900">
                                  1
                                </th>
                                <td className="px-6 py-2 text-gray-900">
                                  4032-64005-0
                                </td>
                                <td className="px-6 py-2 text-gray-900">
                                  Oil Filter Element
                                </td>
                                <td className="px-6 py-2 text-gray-900">2</td>
                              </tr>
                              <tr className="bg-white border-b  hover:bg-gray-50">
                                <th className="px-6 py-2 font-normal text-gray-900">
                                  2
                                </th>
                                <td className="px-6 py-2 text-gray-900">
                                  4032-64005-0
                                </td>
                                <td className="px-6 py-2 text-gray-900">
                                  Oil Filter Element
                                </td>
                                <td className="px-6 py-2 text-gray-900">3</td>
                              </tr>
                            </tbody>
                          </table>

                          <div className="mt-5 text-end">
                            <button
                              type="button"
                              className=" w-full lg:w-1/6 text-white text-center bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                              onClick={handleSubmit}
                            >
                              Done
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
          <nav
            className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 p-3"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500  mb-4 md:mb-0 block w-full md:inline md:w-auto">
              Showing <span className="font-semibold text-gray-900 ">1-10</span>{" "}
              of <span className="font-semibold text-gray-900 ">1000</span>
            </span>
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-black rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-black hover:bg-gray-100 hover:text-gray-700 "
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-black hover:bg-gray-100 hover:text-gray-700 "
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center px-3 h-8 text-white border border-gray-800 bg-gray-800 hover:bg-blue-100 hover:text-blue-700"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-black hover:bg-gray-100 hover:text-gray-700 "
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-black hover:bg-gray-100 hover:text-gray-700 "
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-black rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

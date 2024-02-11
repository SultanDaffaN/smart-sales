"use client";

import { toast } from "react-toastify";
import TotalPart from "./TotalPart";

export default function SparePart() {
  const handleSubmit = () => {
    toast.success("Berhasil melalukan Request Part!", {
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
  return (
    <>
      <h1 className="text-3xl text-center font-bold text-black my-8">
        Part List
      </h1>

      <div className="px-3 md:px-36">
        {/* Searching */}
        <div className="flex justify-end mb-5">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 ps-10 text-sm text-gray-900 border rounded-lg w-80 bg-gray-50 focus:border-gray-800 focus:ring-gray-800"
              placeholder="Search for Part Name"
            />
          </div>
        </div>

        {/* Table */}
        <div className="w-full md:mx-auto">
          <div className="relative overflow-x-auto shadow-md sm:rounded-md">
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
                  <th scope="col" className="px-6 py-3">
                    Add
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b  hover:bg-gray-50">
                  <th className="px-6 py-2 font-normal text-gray-900">1</th>
                  <td className="px-6 py-2 text-gray-900">4032-64005-0</td>
                  <td className="px-6 py-2 text-gray-900">
                    Oil Filter Element
                  </td>
                  <td className="px-6 py-2 text-gray-900">
                    <div className="flex items-center">
                      <button
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-black bg-white border border-black rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <div>
                        <input
                          type="number"
                          id="first_product"
                          className="bg-white w-14 border border-gray-800 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 "
                          placeholder="0"
                          required
                        />
                      </div>
                      <button
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-black bg-white border border-black rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-2 text-gray-900">
                    <button
                      type="button"
                      className="text-white text-end bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                      onClick={() => {}}
                    >
                      Tambah
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b  hover:bg-gray-50">
                  <th className="px-6 py-2 font-normal text-gray-900">2</th>
                  <td className="px-6 py-2 text-gray-900">4032-64005-0</td>
                  <td className="px-6 py-2 text-gray-900">
                    Oil Filter Element
                  </td>
                  <td className="px-6 py-2 text-gray-900">
                    <div className="flex items-center">
                      <button
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-black bg-white border border-black rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <div>
                        <input
                          type="number"
                          id="first_product"
                          className="bg-white w-14 border border-gray-800 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 "
                          placeholder="0"
                          required
                        />
                      </div>
                      <button
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-black bg-white border border-black rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-2 text-gray-900">
                    <button
                      type="button"
                      className="text-white text-end bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                      onClick={() => {}}
                    >
                      Tambah
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b  hover:bg-gray-50">
                  <th className="px-6 py-2 font-normal text-gray-900">3</th>
                  <td className="px-6 py-2 text-gray-900">4032-64005-0</td>
                  <td className="px-6 py-2 text-gray-900">
                    Oil Filter Element
                  </td>
                  <td className="px-6 py-2 text-gray-900">
                    <div className="flex items-center">
                      <button
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-black bg-white border border-black rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <div>
                        <input
                          type="number"
                          id="first_product"
                          className="bg-white w-14 border border-gray-800 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 "
                          placeholder="0"
                          required
                        />
                      </div>
                      <button
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-black bg-white border border-black rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-2 text-gray-900">
                    <button
                      type="button"
                      className="text-white text-end bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                      onClick={() => {}}
                    >
                      Tambah
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b  hover:bg-gray-50">
                  <th className="px-6 py-2 font-normal text-gray-900">4</th>
                  <td className="px-6 py-2 text-gray-900">4032-64005-0</td>
                  <td className="px-6 py-2 text-gray-900">
                    Oil Filter Element
                  </td>
                  <td className="px-6 py-2 text-gray-900">
                    <div className="flex items-center">
                      <button
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-black bg-white border border-black rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <div>
                        <input
                          type="number"
                          id="first_product"
                          className="bg-white w-14 border border-gray-800 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 "
                          placeholder="0"
                          required
                        />
                      </div>
                      <button
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-black bg-white border border-black rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-2 text-gray-900">
                    <button
                      type="button"
                      className="text-white text-end bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                      onClick={() => {}}
                    >
                      Tambah
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b  hover:bg-gray-50">
                  <th className="px-6 py-2 font-normal text-gray-900">5</th>
                  <td className="px-6 py-2 text-gray-900">4032-64005-0</td>
                  <td className="px-6 py-2 text-gray-900">
                    Oil Filter Element
                  </td>
                  <td className="px-6 py-2 text-gray-900">
                    <div className="flex items-center">
                      <button
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-black bg-white border border-black rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <div>
                        <input
                          type="number"
                          id="first_product"
                          className="bg-white w-14 border border-gray-800 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 "
                          placeholder="0"
                          required
                        />
                      </div>
                      <button
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-black bg-white border border-black rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-2 text-gray-900">
                    <button
                      type="button"
                      className="text-white text-end bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                      onClick={() => {}}
                    >
                      Tambah
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b  hover:bg-gray-50">
                  <th className="px-6 py-2 font-normal text-gray-900">6</th>
                  <td className="px-6 py-2 text-gray-900">4032-64005-0</td>
                  <td className="px-6 py-2 text-gray-900">
                    Oil Filter Element
                  </td>
                  <td className="px-6 py-2 text-gray-900">
                    <div className="flex items-center">
                      <button
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-black bg-white border border-black rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <div>
                        <input
                          type="number"
                          id="first_product"
                          className="bg-white w-14 border border-gray-800 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 "
                          placeholder="0"
                          required
                        />
                      </div>
                      <button
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-black bg-white border border-black rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-2 text-gray-900">
                    <button
                      type="button"
                      className="text-white text-end bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                      onClick={() => {}}
                    >
                      Tambah
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b  hover:bg-gray-50">
                  <th className="px-6 py-2 font-normal text-gray-900">7</th>
                  <td className="px-6 py-2 text-gray-900">4032-64005-0</td>
                  <td className="px-6 py-2 text-gray-900">
                    Oil Filter Element
                  </td>
                  <td className="px-6 py-2 text-gray-900">
                    <div className="flex items-center">
                      <button
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-black bg-white border border-black rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <div>
                        <input
                          type="number"
                          id="first_product"
                          className="bg-white w-14 border border-gray-800 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 "
                          placeholder="0"
                          required
                        />
                      </div>
                      <button
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-black bg-white border border-black rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-2 text-gray-900">
                    <button
                      type="button"
                      className="text-white text-end bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                      onClick={() => {}}
                    >
                      Tambah
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b  hover:bg-gray-50">
                  <th className="px-6 py-2 font-normal text-gray-900">8</th>
                  <td className="px-6 py-2 text-gray-900">4032-64005-0</td>
                  <td className="px-6 py-2 text-gray-900">
                    Oil Filter Element
                  </td>
                  <td className="px-6 py-2 text-gray-900">
                    <div className="flex items-center">
                      <button
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-black bg-white border border-black rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <div>
                        <input
                          type="number"
                          id="first_product"
                          className="bg-white w-14 border border-gray-800 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 "
                          placeholder="0"
                          required
                        />
                      </div>
                      <button
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-black bg-white border border-black rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-2 text-gray-900">
                    <button
                      type="button"
                      className="text-white text-end bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                      onClick={() => {}}
                    >
                      Tambah
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b  hover:bg-gray-50">
                  <th className="px-6 py-2 font-normal text-gray-900">9</th>
                  <td className="px-6 py-2 text-gray-900">4032-64005-0</td>
                  <td className="px-6 py-2 text-gray-900">
                    Oil Filter Element
                  </td>
                  <td className="px-6 py-2 text-gray-900">
                    <div className="flex items-center">
                      <button
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-black bg-white border border-black rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <div>
                        <input
                          type="number"
                          id="first_product"
                          className="bg-white w-14 border border-gray-800 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 "
                          placeholder="0"
                          required
                        />
                      </div>
                      <button
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-black bg-white border border-black rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-2 text-gray-900">
                    <button
                      type="button"
                      className="text-white text-end bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                      onClick={() => {}}
                    >
                      Tambah
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b  hover:bg-gray-50">
                  <th className="px-6 py-2 font-normal text-gray-900">10</th>
                  <td className="px-6 py-2 text-gray-900">4032-64005-0</td>
                  <td className="px-6 py-2 text-gray-900">
                    Oil Filter Element
                  </td>
                  <td className="px-6 py-2 text-gray-900">
                    <div className="flex items-center">
                      <button
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-black bg-white border border-black rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <div>
                        <input
                          type="number"
                          id="first_product"
                          className="bg-white w-14 border border-gray-800 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 "
                          placeholder="0"
                          required
                        />
                      </div>
                      <button
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-black bg-white border border-black rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-2 text-gray-900">
                    <button
                      type="button"
                      className="text-white text-end bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                      onClick={() => {}}
                    >
                      Tambah
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <nav
              className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 p-3"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500  mb-4 md:mb-0 block w-full md:inline md:w-auto">
                Showing{" "}
                <span className="font-semibold text-gray-900 ">1-10</span> of{" "}
                <span className="font-semibold text-gray-900 ">1000</span>
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

        {/* Total */}
        <div className="text-xl text-center font-bold mt-12 mb-5">
          Total Part Request
        </div>
        <TotalPart />
        <div className="text-end mt-8 w-full">
          <button
            type="button"
            className="w-full lg:w-1/6 text-white text-center bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
            onClick={handleSubmit}
          >
            Request
          </button>
        </div>
      </div>
    </>
  );
}

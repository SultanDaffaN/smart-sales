"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function FormComplaint() {
  const lokasi = "Balikpapan, Kalimantan Timur";
  const [serialNumber, setSerialNumber] = useState<boolean>(false);

  const handleSubmit = () => {
    toast.success("Sukses Mengirimkan Komplain!", {
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
      <div className="container mx-auto px-4 md:max-w-3xl">
        <h1 className="text-3xl text-center font-bold text-black mb-8 mt-10">
          Formulir Customer Complaint
        </h1>

        {/* Serial Number */}
        <div className="my-5">
          <label className="text-lg text-black font-medium">
            Lokasi Saat ini<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="base-input"
            value={lokasi}
            className=" mt-2 bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>

        {/* Serial Number */}
        <div className="my-5">
          <label className="text-lg text-black font-medium">
            Serial Number<span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col md:flex-row items-center md:space-x-5 justify-center">
            <input
              type="text"
              id="base-input"
              className=" mt-2 md:mt-0 bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
            <div className="w-full md:w-3/12 pt-5 md:py-0">
              <button
                type="button"
                className="text-white w-full  bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                onClick={() => setSerialNumber(true)}
              >
                CHECK
              </button>
            </div>
          </div>
        </div>

        {serialNumber ? (
          <>
            <div className="my-5">
              <h1 className="text-lg text-black font-medium">Model dan Tipe</h1>
              <h2 className="text-lg text-black">SV526D</h2>
            </div>

            {/* Engine Number */}
            <div className="my-5">
              <h1 className="text-lg text-black font-medium">Engine Number</h1>
              <h2 className="text-lg text-black">4BG1T-146882</h2>
            </div>

            {/* Customer Name */}
            <div className="my-5">
              <h1 className="text-lg text-black font-medium">Customer Name</h1>
              <h2 className="text-lg text-black">PT WASKITA KARYA</h2>
            </div>

            {/* Dealer */}
            <div className="my-5">
              <h1 className="text-lg text-black font-medium">Dealer</h1>
              <h2 className="text-lg text-black">EQUIPINDO PERKASA</h2>
            </div>

            {/* Distributor */}
            <div className="my-5">
              <h1 className="text-lg text-black font-medium">Distributor</h1>
              <h2 className="text-lg text-black">EP</h2>
            </div>
          </>
        ) : null}
        {/* Model dan Tipe */}

        {/* Hour Meter */}
        <div className="my-5">
          <label className="text-lg text-black font-medium">
            Hour Meter<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="base-input"
            className=" mt-2 bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>

        {/* Keluhan */}
        <div className="my-5">
          <label className="text-lg text-black font-medium">
            Keluhan<span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            className="block mt-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tulis keluhan Anda..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-end py-5">
          <button
            type="button"
            className="text-white w-full md:w-1/5  bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
}

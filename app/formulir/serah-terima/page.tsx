"use client";

import { toast } from "react-toastify";

export default function FormSerahTerima() {
  const models = ["SV526D", "SV526T", "SV526DF", "SV526TF", "TS206"];
  const island = [
    "Jawa",
    "Sumatera",
    "Kalimantan",
    "Sulawesi",
    "Papua",
    "Bangka",
    "Bali",
    "Lombok",
    "Sumbawa",
  ];

  const sector = ["Mining", "Road", "Plantation", "Rental"];

  const handleSubmit = () => {
    toast.success("Terima kasih telah mengisi Formulir Serah Terima!", {
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
          Formulir Serah Terima
        </h1>
        <p className="mb-5">
          Berita acara Serah Terima Dokumen Training dan Startup Unit
        </p>
        {/* Model dan Tipe */}
        <h3 className="text-lg text-black font-medium">
          Model dan Tipe<span className="text-red-500">*</span>
        </h3>
        <div className="mt-2 flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-8">
          {models.map((option, index) => (
            <label key={index} className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600 h-5 w-5"
                name="modelAndTipe" // Set the same name for all radio buttons
                value={option.toLowerCase().replace(/\s+/g, "-")}
              />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>

        {/* Serial Number */}
        <div className="my-5">
          <label className="text-lg text-black font-medium">
            Serial Number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="base-input"
            className=" mt-2 bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>

        {/* Engine Number */}
        <div className="my-5">
          <label className="text-lg text-black font-medium">
            Engine Number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="base-input"
            className=" mt-2 bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>

        {/* Distributor/Dealer */}
        <div className="my-5">
          <label className="text-lg text-black font-medium">
            Distributor/Dealer<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="base-input"
            className=" mt-2 bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>

        {/* Customer */}
        <div className="my-5">
          <label className="text-lg text-black font-medium">
            Customer<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="base-input"
            className=" mt-2 bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>

        {/* Island */}
        <h3 className="text-lg text-black font-medium">
          Island<span className="text-red-500">*</span>
        </h3>
        <div className="mt-3 flex flex-col space-y-3 md:space-y-0 md:flex-row md:flex-wrap">
          {island.map((option, index) => (
            <label key={index} className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600 h-5 w-5"
                name="island"
                value={option.toLowerCase().replace(/\s+/g, "-")}
              />
              <span className="ml-2 mr-5">{option}</span>
            </label>
          ))}
          {/* Additional option for custom island */}
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-indigo-600 h-5 w-5"
              name="island"
              value="other"
            />
            <span className="ml-2 flex items-center">
              <span className="mr-3">Other:</span>
              <input
                type="text"
                id="custom-island"
                className="mt-2 bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 "
              />
            </span>
          </label>
        </div>

        {/* Province */}
        <div className="my-5">
          <label className="text-lg text-black font-medium">
            Province<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="base-input"
            className=" mt-2 bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>

        {/* Sector */}
        <h3 className="text-lg text-black font-medium">
          Sector<span className="text-red-500">*</span>
        </h3>
        <div className="mt-3 flex flex-col space-y-3 md:space-y-0 md:flex-row md:flex-wrap">
          {sector.map((option, index) => (
            <label key={index} className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600 h-5 w-5"
                name="island"
                value={option.toLowerCase().replace(/\s+/g, "-")}
              />
              <span className="ml-2 mr-5">{option}</span>
            </label>
          ))}
          {/* Additional option for custom island */}
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-indigo-600 h-5 w-5"
              name="island"
              value="other"
            />
            <span className="ml-2 flex items-center">
              <span className="mr-3">Other:</span>
              <input
                type="text"
                id="custom-island"
                className=" bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 "
              />
            </span>
          </label>
        </div>

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

        {/* Mekanik */}
        <div className="my-5">
          <label className="text-lg text-black font-medium">Mekanik</label>
          <input
            type="text"
            id="base-input"
            className=" mt-2 bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>

        {/* Foto Unit */}
        <div className="my-5">
          <label className="text-lg text-black font-medium">Foto Unit</label>
          <input
            className="mt-2 block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none "
            id="default_size"
            type="file"
          />
        </div>

        {/* Submit Button */}
        <div className="text-end py-5">
          <button
            type="button"
            className="text-white text-end bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

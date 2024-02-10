"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import { toast } from "react-toastify";

interface DetailComplaintProps {
  params: { id: number };
}

const DetailComplaint: FC<DetailComplaintProps> = ({ params }) => {
  const id = params.id;
  const router = useRouter();
  const handleSubmit = () => {
    toast.success("Customer Complaint has been solved!", {
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
      <h1 className="text-3xl text-center font-bold text-black mt-5">
        Customer Complaint <br />#{id}
      </h1>
      <div className="p-4 mt-14  md:ml-14 lg:ml-20">
        <div className="grid md:grid-cols-4 gap-5 ">
          <div className="text-lg font-semibold">
            Model dan Tipe <br /> <span className="font-normal">SV526D</span>
          </div>
          <div className="text-lg font-semibold">
            Serial Number <br /> <span className="font-normal">{id}</span>
          </div>
          <div className="text-lg font-semibold">
            Engine Number <br />{" "}
            <span className="font-normal">4BG1-111302</span>
          </div>
          <div className="text-lg font-semibold">
            Customer <br /> <span className="font-normal">PT SENGGIGILANG</span>
          </div>
        </div>
      </div>
      <div className="p-4 md:mt-14 md:ml-14 lg:ml-20">
        <div className="grid md:grid-cols-4 gap-5 ">
          <div className="text-lg font-semibold">
            Distributor <br /> <span className="font-normal">EP</span>
          </div>
          <div className="text-lg font-semibold">
            Dealer <br /> <span className="font-normal">EQUIPINDO PERKASA</span>
          </div>
          <div className="text-lg font-semibold">
            Delivery Date <br />{" "}
            <span className="font-normal">12-Feb-2016</span>
          </div>
          <div className="text-lg font-semibold">
            Complaint Date <br />{" "}
            <span className="font-normal">12-Mar-2018</span>
          </div>
        </div>
      </div>
      <div className="p-4 md:mt-14 md:ml-14 lg:ml-20">
        <div className="grid md:grid-cols-4 gap-5 ">
          <div className="text-lg font-semibold">
            Island <br /> <span className="font-normal">Kalimantan</span>
          </div>
          <div className="text-lg font-semibold">
            Province <br />{" "}
            <span className="font-normal">Kalimantan Timur</span>
          </div>
          <div className="text-lg font-semibold">
            Sector <br /> <span className="font-normal">Road</span>
          </div>
        </div>
      </div>
      <div className="p-4 md:mt-14 md:ml-14 lg:ml-20 font-semibold">
        Complaint Detail <br />{" "}
        <span className="font-normal">
          Setiap kali menyalakan mesin, terdengar suara aneh terus menerus
          hingga mesin dimatikan kembali
        </span>
      </div>
      <div className="flex p-4 px-20 justify-end">
        <button
          type="button"
          className="text-white  bg-red-700 hover:bg-red-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
          onClick={() => router.back()}
        >
          BACK
        </button>
        <button
          type="button"
          className="text-white  bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
          onClick={handleSubmit}
        >
          SOLVED
        </button>
      </div>
    </>
  );
};

export default DetailComplaint;

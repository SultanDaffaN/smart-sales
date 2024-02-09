import QuestionWithOptions from "./QuetionOptions";

export default function FormKuesioner() {
  return (
    <>
      <div className="container mx-auto px-4 md:max-w-3xl">
        <h1 className="text-3xl text-center font-bold text-black mb-8 mt-12">
          Kuesioner Kepuasan Pelanggan
        </h1>
        <p>
          Kepada Pelanggan Yang Terhormat, Kami sampaikan kuisioner ini untuk
          mengukur sejauhmana tingkat kepuasan pelanggan dalam hal mutu produk,
          delivery dan pelayanan kami, serta informasi-informasi lain yang dapat
          kami jadikan masukan guna lebih memperbaiki kinerja kami.
        </p>
        <div className="border p-0 border-dashed rounded-lg border-gray-400 mt-5">
          <h2 className="rounded-t-lg text-xl font-semibold text-white mb-4 bg-gray-800 p-5 ">
            1. Produk
          </h2>
          <div className="space-y-4 px-5">
            <QuestionWithOptions
              question="1.1 Mutu Produk"
              options={["Baik Sekali", "Baik", "Cukup", "Kurang", "Tidak Baik"]}
            />
          </div>
          <h2 className="text-xl font-semibold text-white mb-4 bg-gray-800 p-5 mt-10">
            2. Delivery
          </h2>
          <div className="space-y-4  px-5">
            <QuestionWithOptions
              question="2.1 On Time Delivery"
              options={["Baik Sekali", "Baik", "Cukup", "Kurang", "Tidak Baik"]}
            />
            <QuestionWithOptions
              question="2.2 Kesesuaian Spare Part yang Dikirim"
              options={["Baik Sekali", "Baik", "Cukup", "Kurang", "Tidak Baik"]}
            />
          </div>
          <h2 className="text-xl font-semibold text-white mb-4 bg-gray-800 p-5 mt-10">
            3. Pelayanan
          </h2>
          <div className="space-y-4 px-5">
            <QuestionWithOptions
              question="3.1 Penanganan Klaim"
              options={["Baik Sekali", "Baik", "Cukup", "Kurang", "Tidak Baik"]}
            />
            <QuestionWithOptions
              question="3.2 Respon terhadap Persyaratan Pelanggan"
              options={["Baik Sekali", "Baik", "Cukup", "Kurang", "Tidak Baik"]}
            />
            <QuestionWithOptions
              question="3.3 Perilaku Teknis Lapangan kepada Pelanggan"
              options={["Baik Sekali", "Baik", "Cukup", "Kurang", "Tidak Baik"]}
            />
          </div>

          <div className="">
            <h2 className="text-xl font-semibold text-white mb-4 bg-gray-800 p-5 mt-10">
              Saran
            </h2>
            <h2 className="text-lg font-semibold text-black mt-5  mb-2 ml-4">
              Saran Anda kepada Kami
            </h2>
            <textarea
              id="message"
              rows={4}
              className="block ml-4 p-2.5 w-10/12 md:w-11/12 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tulis saran Anda..."
            ></textarea>

            <div className="text-end p-5">
              <button
                type="button"
                className="text-white text-end bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

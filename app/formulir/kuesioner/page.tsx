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
        <div className="p-4 border border-gray-200 rounded-lg dark:border-gray-700 my-8">
          <h2 className="text-xl font-semibold text-black mb-4">1. Produk</h2>
          <div className="space-y-4">
            <QuestionWithOptions
              question="1.1 Mutu Produk"
              options={["Baik Sekali", "Baik", "Cukup", "Kurang", "Tidak Baik"]}
            />
          </div>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg dark:border-gray-700 my-8">
          <h2 className="text-xl font-semibold text-black mb-4">2. Delivery</h2>
          <div className="space-y-4">
            <QuestionWithOptions
              question="2.1 On Time Delivery"
              options={["Baik Sekali", "Baik", "Cukup", "Kurang", "Tidak Baik"]}
            />
            <QuestionWithOptions
              question="2.2 Kesesuaian Spare Part yang Dikirim"
              options={["Baik Sekali", "Baik", "Cukup", "Kurang", "Tidak Baik"]}
            />
          </div>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg dark:border-gray-700 my-8">
          <h2 className="text-xl font-semibold text-black mb-4">
            3. Pelayanan
          </h2>
          <div className="space-y-4">
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
        </div>
      </div>
    </>
  );
}

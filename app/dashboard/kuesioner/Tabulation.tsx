export default function Tabulation() {
  return (
    <div className=" w-full">
      <div className="text-center text-lg font-semibold text-gray-800 mb-5 mt-3 pt-3">
        Tabulasi Data Kuesioner
      </div>
      <table className=" w-full table-auto overflow-scroll border-collapse border border-gray-800 text-sm">
        <thead>
          <tr className="bg-gray-800 text-white grid grid-cols-12 ">
            <th className="p-1 border border-black flex items-center justify-center">
              No.
            </th>
            <th className=" p-1 border border-black text-center">
              Kategori
              <br />
              <div className="italic">Category</div>
            </th>
            <th className="col-span-3 p-1 border border-black text-center">
              Deskripsi
              <br />
              <div className="italic">Description</div>
            </th>
            <th className="p-1 border border-black text-center">
              Baik Sekali
              <br />
              <div className="italic">Very Good</div>
            </th>
            <th className="p-1 border border-black text-center">
              Baik
              <br />
              <div className="italic">Good</div>
            </th>
            <th className="p-1 border border-black text-center">
              Cukup
              <br />
              <div className="italic">Enough</div>
            </th>
            <th className="p-1 border border-black text-center">
              Kurang
              <br />
              <div className="italic">Less</div>
            </th>
            <th className="p-1 border border-black text-center">
              Tidak Baik
              <br />
              <div className="italic">Not Good</div>
            </th>
            <th className="col-span-2 p-1 border border-black text-center">
              Jumlah Responden
              <br />
              <div className="italic">Total Respondents</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Produk */}
          <tr className="bg-gray-100 grid grid-cols-12 text-start">
            <td className="p-2 border border-gray-800 text-center">1</td>
            <td className="p-2 border border-gray-800 ">
              <span className="font-semibold">Produk</span>
              <br />
              <span className="italic">Product</span>
            </td>
            <td className="col-span-3 border border-gray-800 grid grid-cols-12 grid-rows-2 p-0">
              <span className="col-span-11 row-span-2 p-2">
                <span className="font-semibold">Mutu Produk</span>
                <br />
                <span className="italic">Product's Quality</span>
              </span>

              <span className="border-l-2 border-b-2 border-gray-800 flex justify-center items-center">
                Qty
              </span>
              <span className="border-l-2 border-gray-800 flex justify-center items-center">
                %
              </span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">3</span>
              <span className="p-2">60%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">1</span>
              <span className="p-2">20%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">1</span>
              <span className="p-2">20%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">0</span>
              <span className="p-2">0%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">0</span>
              <span className="p-2">0%</span>
            </td>
            <td className="col-span-2 border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">5</span>
              <span className="p-2">100%</span>
            </td>
          </tr>

          {/* Pengiriman */}
          <tr className="bg-gray-100 grid grid-cols-12 grid-rows-2 text-start">
            <td className="row-span-2 p-2 border border-gray-800 text-center">
              2
            </td>
            <td className="row-span-2 p-2 border border-gray-800 ">
              <span className="font-semibold">Pengiriman</span>
              <br />
              <span className="italic">Delivery</span>
            </td>

            {/* Pengiriman Tepat Waktu */}
            <td className="col-span-3 border border-gray-800 grid grid-cols-12 grid-rows-2 p-0">
              <span className="col-span-11 row-span-2 p-2">
                <span className="font-semibold">Pengiriman Tepat Waktu</span>
                <br />
                <span className="italic">Delivery On Time</span>
              </span>

              <span className="border-l-2 border-b-2 border-gray-800 flex justify-center items-center">
                Qty
              </span>
              <span className="border-l-2 border-gray-800 flex justify-center items-center">
                %
              </span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">3</span>
              <span className="p-2">60%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">1</span>
              <span className="p-2">20%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">1</span>
              <span className="p-2">20%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">0</span>
              <span className="p-2">0%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">0</span>
              <span className="p-2">0%</span>
            </td>
            <td className="col-span-2 border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">5</span>
              <span className="p-2">100%</span>
            </td>

            {/* Kesesuaian Spare Part */}
            <td className="col-span-3 border border-gray-800 grid grid-cols-12 grid-rows-2 p-0">
              <span className="col-span-11 row-span-2 p-2">
                <span className="font-semibold">
                  Kesesuain Spare Part yang Dikirim
                </span>
                <br />
                <span className="italic">
                  Delivery In Accordance to Your Order
                </span>
              </span>

              <span className="border-l-2 border-b-2 border-gray-800 flex justify-center items-center">
                Qty
              </span>
              <span className="border-l-2 border-gray-800 flex justify-center items-center">
                %
              </span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">3</span>
              <span className="p-2">60%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">1</span>
              <span className="p-2">20%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">1</span>
              <span className="p-2">20%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">0</span>
              <span className="p-2">0%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">0</span>
              <span className="p-2">0%</span>
            </td>
            <td className="col-span-2 border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">5</span>
              <span className="p-2">100%</span>
            </td>
          </tr>

          {/* Pelayanan */}
          <tr className="bg-gray-100 grid grid-cols-12 grid-rows-4 text-start">
            <td className="row-span-4 p-2 border border-gray-800 text-center">
              3
            </td>
            <td className="row-span-4 p-2 border border-gray-800 ">
              <span className="font-semibold">Pelayanan</span>
              <br />
              <span className="italic">Services</span>
            </td>

            {/* Penanganan Klaim */}
            <td className="col-span-3 border border-gray-800 grid grid-cols-12 grid-rows-2 p-0">
              <span className="col-span-11 row-span-2 p-2">
                <span className="font-semibold">Penanganan Klaim</span>
                <br />
                <span className="italic">Claim Handling</span>
              </span>

              <span className="border-l-2 border-b-2 border-gray-800 flex justify-center items-center">
                Qty
              </span>
              <span className="border-l-2 border-gray-800 flex justify-center items-center">
                %
              </span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">3</span>
              <span className="p-2">60%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">1</span>
              <span className="p-2">20%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">1</span>
              <span className="p-2">20%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">0</span>
              <span className="p-2">0%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">0</span>
              <span className="p-2">0%</span>
            </td>
            <td className="col-span-2 border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">5</span>
              <span className="p-2">100%</span>
            </td>

            {/* Respon terhadap persyaratan pelanggan */}
            <td className="col-span-3 border border-gray-800 grid grid-cols-12 grid-rows-2 p-0">
              <span className="col-span-11 row-span-2 p-2">
                <span className="font-semibold">
                  Respon terhadap Persyaratan Pelanggan
                </span>
                <br />
                <span className="italic">Response On Your Requirements</span>
              </span>

              <span className="border-l-2 border-b-2 border-gray-800 flex justify-center items-center">
                Qty
              </span>
              <span className="border-l-2 border-gray-800 flex justify-center items-center">
                %
              </span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">3</span>
              <span className="p-2">60%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">1</span>
              <span className="p-2">20%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">1</span>
              <span className="p-2">20%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">0</span>
              <span className="p-2">0%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">0</span>
              <span className="p-2">0%</span>
            </td>
            <td className="col-span-2 border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">5</span>
              <span className="p-2">100%</span>
            </td>

            {/* Perilaku teknisi lapangan */}
            <td className="col-span-3 border border-gray-800 grid grid-cols-12 grid-rows-2 p-0">
              <span className="col-span-11 row-span-2 p-2">
                <span className="font-semibold">
                  Perilaku Teknisi Lapangan kepada Pelanggan
                </span>
                <br />
                <span className="italic">On Attitude Towards You</span>
              </span>

              <span className="border-l-2 border-b-2 border-gray-800 flex justify-center items-center">
                Qty
              </span>
              <span className="border-l-2 border-gray-800 flex justify-center items-center">
                %
              </span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">3</span>
              <span className="p-2">60%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">1</span>
              <span className="p-2">20%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">1</span>
              <span className="p-2">20%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">0</span>
              <span className="p-2">0%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">0</span>
              <span className="p-2">0%</span>
            </td>
            <td className="col-span-2 border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">5</span>
              <span className="p-2">100%</span>
            </td>

            {/* Kerja sama pengurangan biaya */}
            <td className="col-span-3 border border-gray-800 grid grid-cols-12 grid-rows-2 p-0">
              <span className="col-span-11 row-span-2 p-2">
                <span className="font-semibold">
                  Kerja sama untuk Kebutuhan Pengurangan Biaya
                </span>
                <br />
                <span className="italic">
                  Cooperation to your cost reduction requirements
                </span>
              </span>

              <span className="border-l-2 border-b-2 border-gray-800 flex justify-center items-center">
                Qty
              </span>
              <span className="border-l-2 border-gray-800 flex justify-center items-center">
                %
              </span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">3</span>
              <span className="p-2">60%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">1</span>
              <span className="p-2">20%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">1</span>
              <span className="p-2">20%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">0</span>
              <span className="p-2">0%</span>
            </td>
            <td className="border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">0</span>
              <span className="p-2">0%</span>
            </td>
            <td className="col-span-2 border border-gray-800 grid grid-rows-2 p-0 text-center">
              <span className="p-2 border-b-2 border-gray-800">5</span>
              <span className="p-2">100%</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function Suggestions() {
  return (
    <>
      <div className="w-full md:mx-auto">
        <div className="text-center text-lg font-semibold text-gray-800 mb-5 mt-3 pt-3">
          Tabel Saran
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-md">
          <table className="w-full text-sm text-left rtl:text-right text-white">
            <thead className="bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 w-2">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Saran
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b  hover:bg-gray-50">
                <th className="px-6 py-2 font-normal text-gray-900">1</th>
                <td className="px-6 py-2 text-gray-900">
                  Tolong perhatankan kualitas produk dan layanan
                </td>
              </tr>
              <tr className="bg-white border-b  hover:bg-gray-50">
                <th className="px-6 py-2 font-normal text-gray-900">2</th>
                <td className="px-6 py-2 text-gray-900">
                  Tolong perhatankan kualitas produk dan layanan
                </td>
              </tr>
              <tr className="bg-white border-b  hover:bg-gray-50">
                <th className="px-6 py-2 font-normal text-gray-900">3</th>
                <td className="px-6 py-2 text-gray-900">
                  Tolong perhatankan kualitas produk dan layanan
                </td>
              </tr>
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

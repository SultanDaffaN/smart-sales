export default function DataUnit() {
  return (
    <>
      <h1 className="text-3xl text-center font-bold text-black my-8">
        Master Data Unit
      </h1>

      {/* Searching */}
      <div className="flex justify-end mb-5 px-6">
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
            placeholder="Search for serial number"
          />
        </div>
      </div>

      <div className="px-6">
        <div className="relative overflow-x-auto shadow-md sm:rounded-md">
          <table className="w-full text-sm text-left rtl:text-right text-white">
            <thead className="bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Model/Tipe
                </th>
                <th scope="col" className="px-6 py-3">
                  Serial Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Engine Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Distributor
                </th>
                <th scope="col" className="px-6 py-3">
                  Dealer
                </th>
                <th scope="col" className="px-6 py-3">
                  Delivery Date
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
              <tr className="bg-white border-b  hover:bg-gray-50">
                <th className="px-6 py-4 font-normal text-gray-900">SV526D</th>
                <td className="px-6 py-4 text-gray-900">6SV35-10481</td>
                <td className="px-6 py-4 text-gray-900">4BG1-111302</td>
                <td className="px-6 py-4 text-gray-900">EP</td>
                <td className="px-6 py-4 text-gray-900">EQUIPINDO PERKASA</td>
                <td className="px-6 py-4 text-gray-900">01-Feb-2016</td>
                <td className="px-6 py-4 text-gray-900">PT SENGGIGILANG</td>
                <td className="px-6 py-4 text-gray-900">JAVA</td>
                <td className="px-6 py-4 text-gray-900">SUMATERA</td>
                <td className="px-6 py-4 text-gray-900">ROAD</td>
              </tr>
              <tr className="bg-white border-b  hover:bg-gray-50">
                <th className="px-6 py-4 font-normal text-gray-900">SV526D</th>
                <td className="px-6 py-4 text-gray-900">6SV35-10481</td>
                <td className="px-6 py-4 text-gray-900">4BG1-111302</td>
                <td className="px-6 py-4 text-gray-900">EP</td>
                <td className="px-6 py-4 text-gray-900">EQUIPINDO PERKASA</td>
                <td className="px-6 py-4 text-gray-900">01-Feb-2016</td>
                <td className="px-6 py-4 text-gray-900">PT SENGGIGILANG</td>
                <td className="px-6 py-4 text-gray-900">JAVA</td>
                <td className="px-6 py-4 text-gray-900">SUMATERA</td>
                <td className="px-6 py-4 text-gray-900">ROAD</td>
              </tr>
              <tr className="bg-white border-b  hover:bg-gray-50">
                <th className="px-6 py-4 font-normal text-gray-900">SV526D</th>
                <td className="px-6 py-4 text-gray-900">6SV35-10481</td>
                <td className="px-6 py-4 text-gray-900">4BG1-111302</td>
                <td className="px-6 py-4 text-gray-900">EP</td>
                <td className="px-6 py-4 text-gray-900">EQUIPINDO PERKASA</td>
                <td className="px-6 py-4 text-gray-900">01-Feb-2016</td>
                <td className="px-6 py-4 text-gray-900">PT SENGGIGILANG</td>
                <td className="px-6 py-4 text-gray-900">JAVA</td>
                <td className="px-6 py-4 text-gray-900">SUMATERA</td>
                <td className="px-6 py-4 text-gray-900">ROAD</td>
              </tr>
              <tr className="bg-white border-b  hover:bg-gray-50">
                <th className="px-6 py-4 font-normal text-gray-900">SV526D</th>
                <td className="px-6 py-4 text-gray-900">6SV35-10481</td>
                <td className="px-6 py-4 text-gray-900">4BG1-111302</td>
                <td className="px-6 py-4 text-gray-900">EP</td>
                <td className="px-6 py-4 text-gray-900">EQUIPINDO PERKASA</td>
                <td className="px-6 py-4 text-gray-900">01-Feb-2016</td>
                <td className="px-6 py-4 text-gray-900">PT SENGGIGILANG</td>
                <td className="px-6 py-4 text-gray-900">JAVA</td>
                <td className="px-6 py-4 text-gray-900">SUMATERA</td>
                <td className="px-6 py-4 text-gray-900">ROAD</td>
              </tr>
              <tr className="bg-white border-b  hover:bg-gray-50">
                <th className="px-6 py-4 font-normal text-gray-900">SV526D</th>
                <td className="px-6 py-4 text-gray-900">6SV35-10481</td>
                <td className="px-6 py-4 text-gray-900">4BG1-111302</td>
                <td className="px-6 py-4 text-gray-900">EP</td>
                <td className="px-6 py-4 text-gray-900">EQUIPINDO PERKASA</td>
                <td className="px-6 py-4 text-gray-900">01-Feb-2016</td>
                <td className="px-6 py-4 text-gray-900">PT SENGGIGILANG</td>
                <td className="px-6 py-4 text-gray-900">JAVA</td>
                <td className="px-6 py-4 text-gray-900">SUMATERA</td>
                <td className="px-6 py-4 text-gray-900">ROAD</td>
              </tr>
              <tr className="bg-white border-b  hover:bg-gray-50">
                <th className="px-6 py-4 font-normal text-gray-900">SV526D</th>
                <td className="px-6 py-4 text-gray-900">6SV35-10481</td>
                <td className="px-6 py-4 text-gray-900">4BG1-111302</td>
                <td className="px-6 py-4 text-gray-900">EP</td>
                <td className="px-6 py-4 text-gray-900">EQUIPINDO PERKASA</td>
                <td className="px-6 py-4 text-gray-900">01-Feb-2016</td>
                <td className="px-6 py-4 text-gray-900">PT SENGGIGILANG</td>
                <td className="px-6 py-4 text-gray-900">JAVA</td>
                <td className="px-6 py-4 text-gray-900">SUMATERA</td>
                <td className="px-6 py-4 text-gray-900">ROAD</td>
              </tr>
              <tr className="bg-white border-b  hover:bg-gray-50">
                <th className="px-6 py-4 font-normal text-gray-900">SV526D</th>
                <td className="px-6 py-4 text-gray-900">6SV35-10481</td>
                <td className="px-6 py-4 text-gray-900">4BG1-111302</td>
                <td className="px-6 py-4 text-gray-900">EP</td>
                <td className="px-6 py-4 text-gray-900">EQUIPINDO PERKASA</td>
                <td className="px-6 py-4 text-gray-900">01-Feb-2016</td>
                <td className="px-6 py-4 text-gray-900">PT SENGGIGILANG</td>
                <td className="px-6 py-4 text-gray-900">JAVA</td>
                <td className="px-6 py-4 text-gray-900">SUMATERA</td>
                <td className="px-6 py-4 text-gray-900">ROAD</td>
              </tr>
              <tr className="bg-white border-b  hover:bg-gray-50">
                <th className="px-6 py-4 font-normal text-gray-900">SV526D</th>
                <td className="px-6 py-4 text-gray-900">6SV35-10481</td>
                <td className="px-6 py-4 text-gray-900">4BG1-111302</td>
                <td className="px-6 py-4 text-gray-900">EP</td>
                <td className="px-6 py-4 text-gray-900">EQUIPINDO PERKASA</td>
                <td className="px-6 py-4 text-gray-900">01-Feb-2016</td>
                <td className="px-6 py-4 text-gray-900">PT SENGGIGILANG</td>
                <td className="px-6 py-4 text-gray-900">JAVA</td>
                <td className="px-6 py-4 text-gray-900">SUMATERA</td>
                <td className="px-6 py-4 text-gray-900">ROAD</td>
              </tr>
              <tr className="bg-white border-b  hover:bg-gray-50">
                <th className="px-6 py-4 font-normal text-gray-900">SV526D</th>
                <td className="px-6 py-4 text-gray-900">6SV35-10481</td>
                <td className="px-6 py-4 text-gray-900">4BG1-111302</td>
                <td className="px-6 py-4 text-gray-900">EP</td>
                <td className="px-6 py-4 text-gray-900">EQUIPINDO PERKASA</td>
                <td className="px-6 py-4 text-gray-900">01-Feb-2016</td>
                <td className="px-6 py-4 text-gray-900">PT SENGGIGILANG</td>
                <td className="px-6 py-4 text-gray-900">JAVA</td>
                <td className="px-6 py-4 text-gray-900">SUMATERA</td>
                <td className="px-6 py-4 text-gray-900">ROAD</td>
              </tr>
              <tr className="bg-white border-b  hover:bg-gray-50">
                <th className="px-6 py-4 font-normal text-gray-900">SV526D</th>
                <td className="px-6 py-4 text-gray-900">6SV35-10481</td>
                <td className="px-6 py-4 text-gray-900">4BG1-111302</td>
                <td className="px-6 py-4 text-gray-900">EP</td>
                <td className="px-6 py-4 text-gray-900">EQUIPINDO PERKASA</td>
                <td className="px-6 py-4 text-gray-900">01-Feb-2016</td>
                <td className="px-6 py-4 text-gray-900">PT SENGGIGILANG</td>
                <td className="px-6 py-4 text-gray-900">JAVA</td>
                <td className="px-6 py-4 text-gray-900">SUMATERA</td>
                <td className="px-6 py-4 text-gray-900">ROAD</td>
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
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
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

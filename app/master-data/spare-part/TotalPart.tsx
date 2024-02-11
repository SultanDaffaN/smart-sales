export default function TotalPart() {
  return (
    <>
      <div className="w-full">
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
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b  hover:bg-gray-50">
                <th className="px-6 py-2 font-normal text-gray-900">1</th>
                <td className="px-6 py-2 text-gray-900">4032-64005-0</td>
                <td className="px-6 py-2 text-gray-900">Oil Filter Element</td>
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
              </tr>
              <tr className="bg-white border-b  hover:bg-gray-50">
                <th className="px-6 py-2 font-normal text-gray-900">2</th>
                <td className="px-6 py-2 text-gray-900">4032-64005-0</td>
                <td className="px-6 py-2 text-gray-900">Oil Filter Element</td>
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

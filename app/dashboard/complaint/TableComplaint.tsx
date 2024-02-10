import { useRouter } from "next/navigation";

export default function TableComplaint() {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center">
        <div className="md:px-10 mt-12 w-full md:w-4/5">
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
                    Customer
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Complaint Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Province
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Detail
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b  hover:bg-gray-50">
                  <th className="px-6 py-4 font-normal text-gray-900">
                    SV526D
                  </th>
                  <td className="px-6 py-4 text-gray-900">6SV35-10481</td>
                  <td className="px-6 py-4 text-gray-900">4BG1-111302</td>
                  <td className="px-6 py-4 text-gray-900">PT SENGGIGILANG</td>
                  <td className="px-6 py-4 text-gray-900">01-Feb-2016</td>
                  <td className="px-6 py-4 text-gray-900">SUMATERA</td>
                  <td className="px-6 py-4 pt-6 text-gray-900">
                    <button
                      type="button"
                      className="text-white  bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                      onClick={() => router.push("/complaint/6SV35-10486")}
                    >
                      VIEW
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b  hover:bg-gray-50">
                  <th className="px-6 py-4 font-normal text-gray-900">
                    SV526D
                  </th>
                  <td className="px-6 py-4 text-gray-900">6SV35-10481</td>
                  <td className="px-6 py-4 text-gray-900">4BG1-111302</td>
                  <td className="px-6 py-4 text-gray-900">PT SENGGIGILANG</td>
                  <td className="px-6 py-4 text-gray-900">01-Feb-2016</td>
                  <td className="px-6 py-4 text-gray-900">SUMATERA</td>
                  <td className="px-6 py-4 pt-6 text-gray-900">
                    <button
                      type="button"
                      className="text-white  bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                      onClick={() => router.push("/complaint/6SV35-10486")}
                    >
                      VIEW
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b  hover:bg-gray-50">
                  <th className="px-6 py-4 font-normal text-gray-900">
                    SV526D
                  </th>
                  <td className="px-6 py-4 text-gray-900">6SV35-10481</td>
                  <td className="px-6 py-4 text-gray-900">4BG1-111302</td>
                  <td className="px-6 py-4 text-gray-900">PT SENGGIGILANG</td>
                  <td className="px-6 py-4 text-gray-900">01-Feb-2016</td>
                  <td className="px-6 py-4 text-gray-900">SUMATERA</td>
                  <td className="px-6 py-4 pt-6 text-gray-900">
                    <button
                      type="button"
                      className="text-white  bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                      onClick={() => router.push("/complaint/6SV35-10486")}
                    >
                      VIEW
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b  hover:bg-gray-50">
                  <th className="px-6 py-4 font-normal text-gray-900">
                    SV526D
                  </th>
                  <td className="px-6 py-4 text-gray-900">6SV35-10481</td>
                  <td className="px-6 py-4 text-gray-900">4BG1-111302</td>
                  <td className="px-6 py-4 text-gray-900">PT SENGGIGILANG</td>
                  <td className="px-6 py-4 text-gray-900">01-Feb-2016</td>
                  <td className="px-6 py-4 text-gray-900">SUMATERA</td>
                  <td className="px-6 py-4 pt-6 text-gray-900">
                    <button
                      type="button"
                      className="text-white  bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                      onClick={() => router.push("/complaint/6SV35-10486")}
                    >
                      VIEW
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b  hover:bg-gray-50">
                  <th className="px-6 py-4 font-normal text-gray-900">
                    SV526D
                  </th>
                  <td className="px-6 py-4 text-gray-900">6SV35-10481</td>
                  <td className="px-6 py-4 text-gray-900">4BG1-111302</td>
                  <td className="px-6 py-4 text-gray-900">PT SENGGIGILANG</td>
                  <td className="px-6 py-4 text-gray-900">01-Feb-2016</td>
                  <td className="px-6 py-4 text-gray-900">SUMATERA</td>
                  <td className="px-6 py-4 pt-6 text-gray-900">
                    <button
                      type="button"
                      className="text-white  bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                      onClick={() => router.push("/complaint/6SV35-10486")}
                    >
                      VIEW
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b  hover:bg-gray-50">
                  <th className="px-6 py-4 font-normal text-gray-900">
                    SV526D
                  </th>
                  <td className="px-6 py-4 text-gray-900">6SV35-10481</td>
                  <td className="px-6 py-4 text-gray-900">4BG1-111302</td>
                  <td className="px-6 py-4 text-gray-900">PT SENGGIGILANG</td>
                  <td className="px-6 py-4 text-gray-900">01-Feb-2016</td>
                  <td className="px-6 py-4 text-gray-900">SUMATERA</td>
                  <td className="px-6 py-4 pt-6 text-gray-900">
                    <button
                      type="button"
                      className="text-white  bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                      onClick={() => router.push("/complaint/6SV35-10486")}
                    >
                      VIEW
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b  hover:bg-gray-50">
                  <th className="px-6 py-4 font-normal text-gray-900">
                    SV526D
                  </th>
                  <td className="px-6 py-4 text-gray-900">6SV35-10481</td>
                  <td className="px-6 py-4 text-gray-900">4BG1-111302</td>
                  <td className="px-6 py-4 text-gray-900">PT SENGGIGILANG</td>
                  <td className="px-6 py-4 text-gray-900">01-Feb-2016</td>
                  <td className="px-6 py-4 text-gray-900">SUMATERA</td>
                  <td className="px-6 py-4 pt-6 text-gray-900">
                    <button
                      type="button"
                      className="text-white  bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                      onClick={() => router.push("/complaint/6SV35-10486")}
                    >
                      VIEW
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b  hover:bg-gray-50">
                  <th className="px-6 py-4 font-normal text-gray-900">
                    SV526D
                  </th>
                  <td className="px-6 py-4 text-gray-900">6SV35-10481</td>
                  <td className="px-6 py-4 text-gray-900">4BG1-111302</td>
                  <td className="px-6 py-4 text-gray-900">PT SENGGIGILANG</td>
                  <td className="px-6 py-4 text-gray-900">01-Feb-2016</td>
                  <td className="px-6 py-4 text-gray-900">SUMATERA</td>
                  <td className="px-6 py-4 pt-6 text-gray-900">
                    <button
                      type="button"
                      className="text-white  bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                      onClick={() => router.push("/complaint/6SV35-10486")}
                    >
                      VIEW
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b  hover:bg-gray-50">
                  <th className="px-6 py-4 font-normal text-gray-900">
                    SV526D
                  </th>
                  <td className="px-6 py-4 text-gray-900">6SV35-10481</td>
                  <td className="px-6 py-4 text-gray-900">4BG1-111302</td>
                  <td className="px-6 py-4 text-gray-900">PT SENGGIGILANG</td>
                  <td className="px-6 py-4 text-gray-900">01-Feb-2016</td>
                  <td className="px-6 py-4 text-gray-900">SUMATERA</td>
                  <td className="px-6 py-4 pt-6 text-gray-900">
                    <button
                      type="button"
                      className="text-white  bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                      onClick={() => router.push("/complaint/6SV35-10486")}
                    >
                      VIEW
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b  hover:bg-gray-50">
                  <th className="px-6 py-4 font-normal text-gray-900">
                    SV526D
                  </th>
                  <td className="px-6 py-4 text-gray-900">6SV35-10481</td>
                  <td className="px-6 py-4 text-gray-900">4BG1-111302</td>
                  <td className="px-6 py-4 text-gray-900">PT SENGGIGILANG</td>
                  <td className="px-6 py-4 text-gray-900">01-Feb-2016</td>
                  <td className="px-6 py-4 text-gray-900">SUMATERA</td>
                  <td className="px-6 py-4 pt-6 text-gray-900">
                    <button
                      type="button"
                      className="text-white  bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                      onClick={() => router.push("/complaint/6SV35-10486")}
                    >
                      VIEW
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
      </div>
    </>
  );
}

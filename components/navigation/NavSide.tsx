"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "@/public/sakai_logo.svg";

export default function SideNav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setDropdownOpen4] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const closeUserMenu = () => {
    setUserMenuOpen(false);
  };

  const userMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        closeUserMenu();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-gray-800 border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm  rounded-lg  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                onClick={toggleSidebar}
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="/" className="flex ms-2 md:me-24">
                <Image src={logo} alt="Sakai Logo" className="h-9 w-9 me-3" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
                  Smart Sales
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3" ref={userMenuRef}>
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4  focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                    onClick={toggleUserMenu}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                {userMenuOpen && (
                  <div
                    className="absolute right-0 top-8 z-50 my-4 text-base list-none  divide-y rounded shadow bg-gray-700 divide-gray-600"
                    id="dropdown-user"
                  >
                    <div className="px-4 py-3" role="none">
                      <p className="text-sm  text-white" role="none">
                        Neil Sims
                      </p>
                      <p
                        className="text-sm font-medium  truncate text-gray-300"
                        role="none"
                      >
                        neil.sims@flowbite.com
                      </p>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm  text-gray-300 hover:bg-gray-600 hover:text-white"
                          role="menuitem"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm  text-gray-300 hover:bg-gray-600 hover:text-white"
                          role="menuitem"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm  text-gray-300 hover:bg-gray-600 hover:text-white"
                          role="menuitem"
                        >
                          Earnings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm  text-gray-300 hover:bg-gray-600 hover:text-white"
                          role="menuitem"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } border-r   bg-gray-800 border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base transition duration-75 rounded-lg group  text-white hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={() => setDropdownOpen2(!isDropdownOpen2)}
              >
                <svg
                  className="w-5 h-5 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Dashboard
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={`${isDropdownOpen2 ? "" : "hidden"} py-2 space-y-2`}
              >
                <li>
                  <a
                    href="/dashboard/complaint"
                    className="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group text-white hover:bg-gray-700"
                  >
                    Complaints
                  </a>
                </li>
                <li>
                  <a
                    href="/dashboard/kuesioner"
                    className="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group text-white hover:bg-gray-700"
                  >
                    Kuesioner
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base  transition duration-75 rounded-lg group text-white hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={() => setDropdownOpen1(!isDropdownOpen1)}
              >
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H8Zm2 0V2h7a2 2 0 0 1 2 2v.1a5 5 0 0 0-4.7 1.4l-6.7 6.6a3 3 0 0 0-.8 1.6l-.7 3.7a3 3 0 0 0 3.5 3.5l3.7-.7a3 3 0 0 0 1.5-.9l4.2-4.2V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M17.4 8a1 1 0 0 1 1.2.3 1 1 0 0 1 0 1.6l-.3.3-1.6-1.5.4-.4.3-.2Zm-2.1 2.1-4.6 4.7-.4 1.9 1.9-.4 4.6-4.7-1.5-1.5ZM17.9 6a3 3 0 0 0-2.2 1L9 13.5a1 1 0 0 0-.2.5L8 17.8a1 1 0 0 0 1.2 1.1l3.7-.7c.2 0 .4-.1.5-.3l6.6-6.6A3 3 0 0 0 18 6Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Formulir
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={`${isDropdownOpen1 ? "" : "hidden"} py-2 space-y-2`}
              >
                <li>
                  <a
                    href="/formulir/serah-terima"
                    className="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group  text-white hover:bg-gray-700"
                  >
                    Serah Terima
                  </a>
                </li>
                <li>
                  <a
                    href="/formulir/claim-complaint"
                    className="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group  text-white hover:bg-gray-700"
                  >
                    Claim Complaint
                  </a>
                </li>
                <li>
                  <a
                    href="/formulir/kuesioner"
                    className="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group  text-white hover:bg-gray-700"
                  >
                    Kuesioner
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base transition duration-75 rounded-lg group  text-white hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={() => setDropdownOpen3(!isDropdownOpen3)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 36 45"
                  x="0px"
                  y="0px"
                  className="h-7 w-6"
                  fill="#FFFFFF"
                >
                  <path d="M27.66667,22.83333H8.33333a4.83334,4.83334,0,0,0,0,9.66667H27.66667a4.83334,4.83334,0,0,0,0-9.66667Z" />
                  <path d="M30.08333,20.41667V10.75H26.86111v3.22222H20.88184L16.60311,3.50074V3.5H5.91667V20.41667H30.08333ZM9.13889,6.72222h5.29968l2.96243,7.25H9.13889Z" />
                </svg>

                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Data Units
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={`${isDropdownOpen3 ? "" : "hidden"} py-2 space-y-2`}
              >
                <li>
                  <a
                    href="/data-units/unit-list"
                    className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group  text-white hover:bg-gray-700"
                  >
                    Unit List
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base transition duration-75 rounded-lg group  text-white hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={() => setDropdownOpen4(!isDropdownOpen4)}
              >
                <svg
                  className="w-6 h-6  text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 7.2c4.4 0 8-1.2 8-2.6C20 3.2 16.4 2 12 2S4 3.2 4 4.6C4 6 7.6 7.2 12 7.2ZM12 22c5 0 8-1.7 8-2.6V15h-.2a7.8 7.8 0 0 1-1.3.7l-.2.1c-2 .7-4.2 1-6.3 1a19 19 0 0 1-6.3-1h-.2a10.1 10.1 0 0 1-1.3-.7L4 15v4.4c0 1 3 2.6 8 2.6Zm7-14c-.1.2-.3.2-.5.3l-.2.1c-2 .7-4.2 1-6.3 1a19 19 0 0 1-6.3-1h-.2a10.2 10.2 0 0 1-1.3-.7L4 7.6V12c0 1 3 2.6 8 2.6s8-1.7 8-2.6V7.6h-.2a7.8 7.8 0 0 1-.7.5Z" />
                </svg>

                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Data Parts
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={`${isDropdownOpen4 ? "" : "hidden"} py-2 space-y-2`}
              >
                <li>
                  <a
                    href="/data-parts/part-requests"
                    className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group  text-white hover:bg-gray-700"
                  >
                    Part Requests
                  </a>
                </li>
                <li>
                  <a
                    href="/data-parts/requested-parts"
                    className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group  text-white hover:bg-gray-700"
                  >
                    Requested Parts
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

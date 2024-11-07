import React from "react";
import { CiBellOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

function Navbar() {
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center">
              <img
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
            </a>
            <div className="flex items-center lg:order-2">
              <a
                href="#"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                <CiBellOn size={25} />
              </a>
              <a
                href="#"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                <CiUser size={25} />
              </a>
             
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;

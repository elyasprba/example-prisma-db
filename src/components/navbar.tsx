import Image from 'next/image';
import React from 'react';

export const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <svg
                className="h-8 w-8 text-brown-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 11H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h2V1h12v2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6zm10 6v-3H6v3h8z" />
              </svg>
              <span className="ml-2 font-semibold text-xl text-gray-800">
                Coffee Shop
              </span>
            </div>

            <div className="hidden sm:flex sm:items-center">
              <a
                href="#"
                className="px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="#"
                className="px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Product
              </a>
              <a
                href="#"
                className="px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Your Cart
              </a>
              <a
                href="#"
                className="px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                History
              </a>
            </div>

            <div className="flex items-center">
              <button className="p-1 text-gray-400 hover:text-gray-500">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>

              <button className="ml-4 p-1 text-gray-400 hover:text-gray-500 relative">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
              </button>

              <Image
                className="ml-4 h-8 w-8 rounded-full"
                src=""
                alt="User avatar"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

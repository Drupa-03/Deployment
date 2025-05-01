import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
              <nav className="py-3 flex px-4 items-center relative dark:bg-gray-900">
        <div className=" w-[200px] h-auto md:mx-20 my-5">
          <Image
            src="/image/logo.png"
            alt="Softwings Logo"
            width={200}
            height={60}
            className="object-contain"
          />
        </div>

        <button
          className="md:hidden ml-auto mr-5 text-gray-700 dark:text-white z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 -mt-11 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-2 ml-auto md:mr-20">
            <li>
              <Link href="/home" className="text-gray-500 text-sm p-4 font-bold hover:bg-gray-50">
                  Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-500 text-sm p-4 font-bold hover:bg-gray-50">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-500 text-sm p-4 font-bold hover:bg-gray-50">Service</Link>
            </li>
            <li>
              <a className="text-gray-500 text-sm p-4 font-bold hover:bg-gray-50">Team</a>
            </li>
            <li>
              <Link href="/contact" className="text-gray-500 text-sm p-4 font-bold hover:bg-gray-50">
                Contact
              </Link>
            </li>
            <li>
              <a
                style={{ backgroundColor: '#1B577E' }}
                className="text-white rounded-full text-sm px-4 py-2 font-bold"
              >
                Get Started
              </a>
            </li>
        </ul>

      </nav>

      {/* Mobile Dropdown Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/85 z-40 flex justify-end">
          <ul className="bg-white w-full h-[24rem] max-w-sm mt-15 mr-4 ml-4 rounded-lg shadow-lg p-4 space-y-4 z-50">
            <li><a className="block text-gray-500 text-sm  px-4 py-2 hover:bg-gray-100">Home</a></li>
            <li><a className="block text-gray-500 text-sm  px-4 py-2 hover:bg-gray-100">About</a></li>
            <li><a className="block text-gray-500 text-sm  px-4 py-2 hover:bg-gray-100">Service</a></li>
            <li><a className="block text-gray-500 text-sm  px-4 py-2 hover:bg-gray-100">Team</a></li>
            <li><a className="block text-gray-500 text-sm  px-4 py-2 hover:bg-gray-100">Contact</a></li>
            <li>
              <a
                style={{ backgroundColor: '#1B577E' }}
                className="block text-white text-sm font-bold text-center py-2 rounded-md"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
      
    </div>
  )
}

export default Header

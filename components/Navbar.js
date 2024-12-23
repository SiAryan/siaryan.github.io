"use client";

import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // To check if we're on the client
  const [isOnProjectsPage, setIsOnProjectsPage] = useState(false);

  // Ensure this runs only on the client side
  useEffect(() => {
    setIsClient(true);
    const currentPath = window.location.pathname;
    setIsOnProjectsPage(currentPath === '/projects'); // Check if we're on the projects page
  }, []);


  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950 bg-opacity-95 text-blue-500 px-4 py-4 shadow-md z-50">
      <div className="container font-light mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <i className="nes-jp-logo mr-2 mb-2"></i>
          <Link href="/#about" className="text-green-600">
            Aryan Singh
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/#experience" className="hover:text-gray-400">
            Experience
          </Link>
          <Link href={isOnProjectsPage ? '#projects' : '/projects'} className="hover:text-gray-400">
            Projects
          </Link>
          {isClient && (
            <Link 
              href='#contact' 
              className="hover:text-gray-400"
            >
              Contact
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4">
          <Link href="/#about" className="block py-2 hover:text-gray-400">
            About
          </Link>
          <Link href="/#experience" className="block py-2 hover:text-gray-400">
            Experience
          </Link>
          <Link href={isOnProjectsPage ? '#projects' : '/projects'} className="block py-2 hover:text-gray-400">
            Projects
          </Link>
          <Link href='#contact'className="block py-2 hover:text-gray-400">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

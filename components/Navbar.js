"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-green-900 px-4 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
            <i className="nes-jp-logo mr-2 mb-2"></i>
            <Link href="/" className="text-green-600">Aryan Singh</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400">Experience</Link>
          <Link href="/about" className="hover:text-gray-400">Projects</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
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
          <Link href="/" className="block py-2 hover:text-gray-400">Home</Link>
          <Link href="/about" className="block py-2 hover:text-gray-400">About</Link>
          <Link href="/services" className="block py-2 hover:text-gray-400">Services</Link>
          <Link href="/contact" className="block py-2 hover:text-gray-400">Contact</Link>
        </div>
      )}
    </nav>
  );
}

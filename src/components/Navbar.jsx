"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const navLinks = (
    <>
      <li>
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" className="hover:text-blue-600">
          About
        </Link>
      </li>
      <li>
        <a href="/service" className="hover:text-blue-600">
          Service
        </a>
      </li>
      <li>
        <a href="/blog" className="hover:text-blue-600">
          Blog
        </a>
      </li>
    </>
  );
  return (
    <nav className="bg-white shadow  w-full">
      <div className=" mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center space-x-2">
          <Image src="/assets/logo.svg" width={80} height={80} alt="Logo"  />
          
        </div>

        {/* Desktop Links */}
        <div className="  text-gray-700 font-medium">
          <ul className=" hidden md:flex space-x-6">{navLinks}</ul>
        </div>

        {/* Right Icons + Button */}
        <div className="hidden md:flex items-center space-x-4">
          <FiSearch className="text-xl cursor-pointer text-gray-600" />
          <FiShoppingCart className="text-xl cursor-pointer text-gray-600" />
          <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FiX className="text-2xl text-gray-700" />
            ) : (
              <FiMenu className="text-2xl text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col space-y-2 text-gray-700 font-medium">
            <ul className="space-y-2">{navLinks}</ul>
            <div className="flex items-center space-x-4 pt-2">
              <FiSearch className="text-xl text-gray-600" />
              <FiShoppingCart className="text-xl text-gray-600" />
              <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

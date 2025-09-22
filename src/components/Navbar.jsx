import React from 'react';
import lawLogo from "../assets/logo.JPG";

function Navbar() {
  return (
    <div className="navbar shadow-md px-6 bg-white">
      <div className="max-w-[1400px] mx-auto w-full flex justify-between items-center">
        
        {/* Left (Logo + Firm Name) */}
        <div className="navbar-start flex items-center">
          <a href="#hero">
            <img src={lawLogo} alt="Law Firm Logo" className="h-26 w-auto cursor-pointer" />
          </a>
        </div>

        {/* Center (Navigation Links - Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-blue-800 font-medium">
            <li><a href="#hero" className="hover:text-gray-200">Home</a></li>
            <li><a href="#practice-areas" className="hover:text-gray-200">Practice Areas</a></li>
            <li><a href="#profile" className="hover:text-gray-200">Attorneys</a></li>
            <li><a href="#location" className="hover:text-gray-200">Location</a></li>
            <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </div>

        {/* Right (CTA Button - Desktop) */}
        <div className="navbar-end hidden lg:flex">
          <a href="#cta">
            <button className="btn btn-outline text-blue-800 border-blue-800 hover:bg-yellow-600 hover:border-yellow-600 transition">
              Consultation
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost text-blue-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 text-gray-700"
            >
              <li><a href="#hero">Home</a></li>
              <li><a href="#practice-areas">Practice Areas</a></li>
              <li><a href="#profile">Attorneys</a></li>
              <li><a href="#location">Location</a></li>
              <li><a href="#contact">Contact</a></li>
              <li>
                <a href="#cta" className="font-semibold text-[rgb(41,32,99)]">Consultation</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
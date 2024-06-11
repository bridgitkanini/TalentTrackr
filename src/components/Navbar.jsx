import React from "react";
import Logo from "./../assets/logo.png";


const Navbar = () => {
  return (
    <header className="bg-white/80 shadow-lg">
      <div className="container">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-gray-800 font-bold text-3xl">
            <img src={Logo} alt="logo" className="h-10 inline mr-1" />
            Roots & Radiance
          </a>
          {/* Desktop Menu */}
          <div className="hidden sm:block">
            <ul className="flex items-center justify-center gap-4">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-4 py-4 inline-block select-none"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-4 py-4 inline-block select-none"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-4 py-4 inline-block select-none"
                >
                  Catalog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-4 py-4 inline-block select-none"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu */}
          <div></div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

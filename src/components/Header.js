import React, { useState } from "react";
import DarkModeToggle from "../../src/pages/Home/DarkModeToggle";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="p-4 opacity-97 bg-gradient-to-r from-slate-950 to-blue-950 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 drop-shadow-2xl fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center bg-opacity-50">
        {/* Logo Section */}
        <div className="max-tablet:w-[4rem] logo">
          <a href="#">
            <img className="logo" width="80px" src="logo.png" alt="dru1d" />
          </a>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="flex max-tablet:hidden desktop:flex space-x-8 gap-[4rem] relative text-white">
          <a href="#" className="hover:text-gray-300 text-lg font-medium">
            About
          </a>
          <a href="#" className="hover:text-gray-300 text-lg font-medium">
            Certificates
          </a>

          {/* Projects Dropdown */}
          <div className="group relative">
            <a
              href="#"
              className="hover:text-gray-300 text-lg font-medium flex items-center"
            >
              Projects
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>

            {/* Dropdown Content */}
            <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
              >
                Image Showcase
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
              >
                Live Project 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
              >
                Live Project 2
              </a>
            </div>
          </div>

          <a href="#" className="hover:text-gray-300 text-lg font-medium">
            Blog
          </a>
        </nav>

        {/* Dark Mode Toggle */}
        <DarkModeToggle />

        {/* Hamburger Menu for Mobile */}
        <div className="tablet:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-gradient-to-r from-slate-950 to-blue-950 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white flex flex-col space-y-4 items-center p-4 opacity-97">
              <a href="#" className="hover:text-gray-300 text-lg font-medium">
                About
              </a>
              <a href="#" className="hover:text-gray-300 text-lg font-medium">
                Certificates
              </a>
              {/* Projects Dropdown */}
              <div className="group relative">
                <a
                  href="#"
                  className="hover:text-gray-300 text-lg font-medium flex items-center"
                >
                  Projects
                  <svg
                    className="w-4 h-4 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>

                {/* Dropdown Content */}
                <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                  >
                    Image Showcase
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                  >
                    Live Project 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                  >
                    Live Project 2
                  </a>
                </div>
              </div>
              <a href="#" className="hover:text-gray-300 text-lg font-medium">
                Blog
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

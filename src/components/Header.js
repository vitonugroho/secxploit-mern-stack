import React, { useState, useEffect } from "react";
import DarkModeToggle from "../../src/pages/Home/DarkModeToggle";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect if the user has scrolled past a certain point
  const handleScroll = () => {
    if (window.scrollY > 50) {
      // Change 50 to the desired scroll threshold
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`p-4 opacity-97 ${
        scrolled
          ? "backdrop-blur-lg bg-slate-900/30 dark:bg-gray-800/30 drop-shadow-2xl rounded-md p-[1.2rem]"
          : "bg-transparent"
      } fixed w-full z-10 transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto flex justify-between items-center bg-opacity-50">
        {/* Logo Section */}
        <div className="max-tablet:w-[4rem] logo">
          <a href="#">
            <img className="logo" width="75px" src="logo.png" alt="dru1d" />
          </a>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="flex max-tablet:hidden desktop:flex space-x-8 gap-[4rem] relative text-white">
          <a href="#About" className="hover:text-gray-300 text-lg font-medium">
            About
          </a>
          <a
            href="#Certificates"
            className="hover:text-gray-300 text-lg font-medium"
          >
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
                href="#Projects"
                className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
              >
                Showcase
              </a>
              <a
                href="/Login"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
              >
                Login Form Demo
              </a>
              <a
                href="http://05tple001.secxploit.xyz/"
                target="_blank"
                className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
              >
                Live Project 1
              </a>
              <a
                href="https://ngopiatuh.secxploit.xyz/"
                target="_blank"
                className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
              >
                Live Project 2
              </a>
            </div>
          </div>

          <a
            href="/Blog"
            target="_blank"
            className="hover:text-gray-300 text-lg font-medium"
          >
            Blogs
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
              <a
                href="#About"
                className="hover:text-gray-300 text-lg font-medium"
              >
                About
              </a>
              <a
                href="#Certificates"
                className="hover:text-gray-300 text-lg font-medium"
              >
                Certificates
              </a>
              <a
                href="/Blogs"
                target="_blank"
                className="hover:text-gray-300 text-lg font-medium"
              >
                Blogs
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
                    href="#Projects"
                    className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                  >
                    Showcase
                  </a>
                  <a
                    href="/Login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                  >
                    Login Form Demo
                  </a>
                  <a
                    href="https://05tple001.secxploit.xyz"
                    target="_blank"
                    className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                  >
                    Live Project 1
                  </a>
                  <a
                    href="https://ngopiatuh.secxploit.xyz"
                    target="_blank"
                    className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                  >
                    Live Project 2
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

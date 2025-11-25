import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4">
      <div className="mx-auto max-w-6xl">
        <div className="bg-white/20 backdrop-blur-lg rounded-full shadow-lg px-6 py-3">
          <div className="flex items-center justify-between gap-6">
            
            {/* Logo */}
            <div className="text-2xl font-bold text-white flex items-center shrink-0">
              <Link href="/">
                <span className="flex items-center">
                  mem
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block mx-0.5"
                  >
                    <circle cx="12" cy="12" r="10" fill="url(#grad)" />
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#A465FF" />
                        <stop offset="100%" stopColor="#FF65A4" />
                      </linearGradient>
                    </defs>
                    <circle cx="9" cy="11" r="1" fill="white" />
                    <circle cx="15" cy="11" r="1" fill="white" />
                    <path
                      d="M9 14.5C9.82843 15.5 11.1716 15.5 12 15.5C12.8284 15.5 14.1716 15.5 15 14.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  rae
                </span>
              </Link>
            </div>

            {/* Menu */}
            <nav className="flex-1 overflow-hidden">
              <ul className="flex items-center justify-center gap-6 text-black whitespace-nowrap">
                <li>
                  <Link href="#" className="flex items-center hover:text-gray-300 transition-colors">
                    Home
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300 transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300 transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300 transition-colors">
                    FAQS
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Button */}
            <Link href="#" className="shrink-0">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap">
                Try for Free
              </span>
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

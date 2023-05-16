"use client";

import { useState } from "react";
import Link from "next/link";

const menuItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Collection",
    href: "/collection",
  },
];

export const Menu: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="backdrop-blur-md border-b border-b-gray-700 sticky top-0 py-6">
      <div className="flex items-center justify-between px-4 md:px-12">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-xl font-semibold text-white">
              Boardalicious
            </span>
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex divide-x-2">
            {menuItems.map(({ title, href }) => (
              <li key={title} className="px-4 first:pl-0 last:pr-0">
                <Link href={href}>
                  <span className="text-white hover:text-gray-200">
                    {title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={handleNavToggle}
            className="inline-flex items-center justify-center p-2 text-white transition duration-200 rounded hover:bg-gray-900"
            aria-label="Menu"
            aria-expanded={isNavOpen}
          >
            {isNavOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isNavOpen && (
        <div className="md:hidden">
          <ul className="mt-2 px-2">
            {menuItems.map(({ title, href }) => (
              <li key={title} onClick={() => setIsNavOpen(false)}>
                <Link href={href}>
                  <span className="block px-2 py-2 rounded-md hover:bg-gray-900">
                    {title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Menu;

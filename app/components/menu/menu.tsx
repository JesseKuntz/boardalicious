"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { routes, getHrefWithParams } from "~utils";
import { Button } from "..";

const menuItems = [
  {
    title: "Home",
    href: routes.home,
  },
  {
    title: "Feed Me",
    href: routes.feedMe,
  },
  {
    title: "Collection",
    href: routes.collection,
  },
];

export const Menu: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const searchParams = useSearchParams();

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="backdrop-blur-md border-b border-b-gray-700 sticky top-0 py-6 z-10">
      <div className="flex items-center justify-between px-4 md:px-12">
        <div className="flex items-center" onClick={() => setIsNavOpen(false)}>
          <Link href={getHrefWithParams(routes.home, searchParams)}>
            <span className="text-2xl font-semibold text-white">
              Boardalicious
            </span>
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex divide-x-2">
            {menuItems.map(({ title, href }) => (
              <li key={title} className="px-4 first:pl-0 last:pr-0">
                <Link href={getHrefWithParams(href, searchParams)}>
                  <span className="text-white hover:text-gray-200">
                    {title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <Button
            onClick={handleNavToggle}
            palette="tertiary"
            aria-label="Menu"
            aria-expanded={isNavOpen}
            icon
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
          </Button>
        </div>
      </div>
      {isNavOpen && (
        <div className="md:hidden">
          <ul className="mt-2 px-2">
            {menuItems.map(({ title, href }) => (
              <li key={title} onClick={() => setIsNavOpen(false)}>
                <Link href={getHrefWithParams(href, searchParams)}>
                  <Button
                    palette="tertiary"
                    classNameOverride="block w-full text-left"
                  >
                    {title}
                  </Button>
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

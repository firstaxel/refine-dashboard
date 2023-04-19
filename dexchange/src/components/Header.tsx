"use client";

import { useState, useEffect } from "react";
import { MobileNav} from "@material-tailwind/react";
import { navLinks } from "../utils/constant";
import Link from "next/link";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (

    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navLinks.map((link) => (
        <Link href={link.link} key={link.title}>
          {link.title}
        </Link>
      ))}
    </ul>
  );

  return (
    <nav className="mx-auto max-w-screen-xl ">
      <div className="py-2 px-4 lg:px-8 lg:py-4 container mx-auto flex items-center justify-between text-blue-gray-900">
        <img
          src="https://dexchange.trade/wp-content/uploads/2023/03/PNG.png"
          className="w-16 h-16"
          alt=""
        />

        <div className="hidden lg:block">{navList}</div>
        <button className="hidden lg:inline-flex lg:items-center lg:space-x-2 bg-gradient-to-r from-rose-500 to-orange-600 text-white shadow-md p-4 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span>Create GiftCard</span>
        </button>
        <button
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent outline-none active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <button className="flex items-center ripple-bg-red-500 mb-2 bg-gradient-to-r from-rose-500 to-orange-600 text-white shadow-md p-4 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span>Create GiftCard</span>
          </button>
        </div>
      </MobileNav>
    </nav>
  );
}

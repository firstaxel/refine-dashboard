"use client";

import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import Link from "next/link";
import { navLinks } from "@/utils/constant";
import Image from 'next/image'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-col px-2 py-4 fixed w-full top-0 ">
      <div className="w-5/6 mx-auto">

        <div className="flex items-center justify-between w-full transition-all duration-150">
          <div>
            <Image src='https://dexchange.trade/wp-content/uploads/2023/03/PNG.png' alt="Dexchange GiftCards"
            width={60}
            height={60}
            ></Image>
          </div>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <AiOutlineClose className="w-6 h-6 animation-spin duration-150" />
              ) : (
                <HiBars3 className="w-6 h-6" />
                )}
          </button>
        </div>
                </div>
    
      {isOpen ? (
        <nav>
          <ul className="flex flex-col space-y-6 bg-red-500 text-white  transition-all duration-150">
            {navLinks.map((link, i) => (
              <Link href={link.link} key={i}>
                {link.title}{" "}
              </Link>
            ))}
          </ul>
        </nav>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;

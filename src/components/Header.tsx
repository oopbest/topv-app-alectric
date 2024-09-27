import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; // Solid icons
import { useState } from "react";
import MainMenu from "./menu/menu";
import MobileMenu from "./menu/menu-mobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // handle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      id="header"
      className="sticky top-0 z-10 bg-white px-4 py-2 border-b lg:py-0 shadow-lg"
    >
      <section className="flex mx-auto container items-center">
        {/* Logo */}
        <div className="px-4 lg:order-first lg:basis-1/6 lg:p-0">
          <Link href="/" title="">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              className="w-3/4"
              width={20}
              height={20}
            />
          </Link>
        </div>

        {/* Menu */}
        <div className="order-first lg:flex-1">
          <button
            onClick={toggleMenu}
            id="hamburger-button"
            className={`${
              isOpen && "toggle-btn"
            } relative h-6 w-6 cursor-pointer text-3xl lg:hidden lg:pointer-events-none`}
          >
            {/* Hamburger icon */}
            <div className="absolute top-4 -mt-0.5 h-0.5 w-6 bg-theme-color transition-all duration-500 before:absolute before:h-0.5 before:w-6 before:-translate-x-3 before:-translate-y-2 before:bg-theme-color before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-6 after:-translate-x-3 after:translate-y-2 after:bg-theme-color after:transition-all after:duration-500 after:content-['']"></div>
          </button>
          <div className="hidden text-theme-color lg:flex space-x-6">
            <MainMenu />
          </div>
        </div>

        {/* Search */}
        <div className="sm:basis-10/12 lg:w-auto lg:basis-1/5">
          <div className="flex justify-center border border-gray-300 rounded-lg overflow-hidden">
            <span className="flex items-center justify-center px-3 text-gray-500">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <input
              type="text"
              placeholder="ค้นหาสินค้า..."
              className="flex-1 px-1 py-2 border-none outline-none focus:ring-0 text-sm"
            />
          </div>
        </div>
      </section>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} />
    </header>
  );
};

export default Header;

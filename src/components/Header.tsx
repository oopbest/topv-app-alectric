import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; // Solid icons
import {
  PRODUCTS_PATH,
  ABOUT_US_PATH,
  STORES_PATH,
  WARRANTY_PATH,
} from "@/const/route-paths.const";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white px-4 py-2 border-b lg:py-0 shadow-lg">
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
            id="hamburger-button"
            className="relative h-6 w-6 cursor-pointer text-3xl lg:hidden"
          >
            {/* Hamburger icon */}
            <div className="absolute top-4 -mt-0.5 h-0.5 w-6 bg-theme-color transition-all duration-500 before:absolute before:h-0.5 before:w-6 before:-translate-x-3 before:-translate-y-2 before:bg-theme-color before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-6 after:-translate-x-3 after:translate-y-2 after:bg-theme-color after:transition-all after:duration-500 after:content-['']"></div>
          </button>
          <div className="hidden text-theme-color lg:flex space-x-6">
            <Link href="/" className="hover:underline underline-offset-4">
              หน้าแรก
            </Link>
            <Link
              href={PRODUCTS_PATH}
              className="hover:underline underline-offset-4"
            >
              สินค้า
            </Link>
            <Link
              href={WARRANTY_PATH}
              className="hover:underline underline-offset-4"
            >
              การรับประกัน
            </Link>
            <Link
              href={STORES_PATH}
              className="hover:underline underline-offset-4"
            >
              สั่งซื้อสินค้า
            </Link>
            <Link
              href={ABOUT_US_PATH}
              className="hover:underline underline-offset-4"
            >
              เกี่ยวกับเรา
            </Link>
            <span>ติดต่อเรา 1277</span>
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
      <section
        id="mobile-menu"
        className="hidden flex-col bg-theme-color fixed w-full text-white left-0 h-full origin-top animate-open-menu"
      >
        <nav
          className="flex flex-col text-3xl items-center gap-10 text-white px-5 py-10"
          aria-label="mobile"
        >
          <Link href="#">สินค้า</Link>
          <Link href="#">การรับประกัน</Link>
          <Link href="#">สั่งซื้อสินค้า</Link>
          <Link href="#">เกี่ยวกับเรา</Link>
          <Link href="#">ติดต่อเรา 1277</Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;

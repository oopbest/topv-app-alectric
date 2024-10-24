import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MainMenu from "./menu/menu";
import MobileMenu from "./menu/menu-mobile";
import { usePathname } from "next/navigation";
import ProductSearch from "./products/product-search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLine,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  FOLLOW_FACEBOOK_ROUTE_PATH,
  FOLLOW_INSTAGRAM_ROUTE_PATH,
  FOLLOW_LINE_ROUTE_PATH,
  FOLLOW_TWITTER_ROUTE_PATH,
  FOLLOW_YOUTUBE_ROUTE_PATH,
} from "@/const/route-paths.const";
import { faEnvelope, faMobileScreen } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Collapse the menu whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      id="header"
      className="sticky top-0 z-10 bg-white border-b lg:py-0 shadow-lg"
    >
      <div className="bg-black text-white">
        <div className="flex px-4 py-2 justify-center sm:justify-between">
          <div className="hidden sm:flex space-x-4">
            <span>
              <FontAwesomeIcon icon={faMobileScreen} /> +(66)2-026-6225
            </span>
            <span>
              <FontAwesomeIcon icon={faEnvelope} /> Service@switchflex.com
            </span>
          </div>

          <ul className="flex space-x-4">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook Page"
                href={FOLLOW_FACEBOOK_ROUTE_PATH}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="Line"
                href={FOLLOW_LINE_ROUTE_PATH}
              >
                <FontAwesomeIcon icon={faLine} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="Youtube"
                href={FOLLOW_YOUTUBE_ROUTE_PATH}
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                href={FOLLOW_INSTAGRAM_ROUTE_PATH}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
                href={FOLLOW_TWITTER_ROUTE_PATH}
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section className="flex px-4 py-2 lg:py-0 mx-auto container items-center justify-between">
        {/* Logo */}
        <div className="lg:order-first lg:basis-1/6 lg:p-0">
          <Link href="/" title="">
            <Image
              width={80}
              height={20}
              src="/images/logo.svg"
              alt="Alectric Website Logo"
              className="w-24 h-auto md:w-32 lg:w-40"
              priority={false}
            />
          </Link>
        </div>

        {/* Menu */}
        <div className="order-first lg:flex-1">
          {/* Hamburger icon */}
          <button
            onClick={toggleMenu}
            id="hamburger-button"
            className={`${
              isOpen && "toggle-btn"
            } relative h-6 w-6 cursor-pointer lg:hidden lg:pointer-events-none`}
          >
            <div className="-mt-0.5 h-0.5 w-6 bg-theme-color transition-all duration-500 before:absolute before:h-0.5 before:w-6 before:-translate-x-3 before:-translate-y-2 before:bg-theme-color before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-6 after:-translate-x-3 after:translate-y-2 after:bg-theme-color after:transition-all after:duration-500 after:content-['']"></div>
          </button>
          <div className="hidden text-theme-color lg:flex space-x-6">
            <MainMenu />
          </div>
        </div>

        {/* Search */}
        <div className="sm:basis-10/12 lg:w-auto lg:basis-1/5">
          <ProductSearch />
        </div>
      </section>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} />
    </header>
  );
};

export default Header;

import {
  BRAND_ALTEC_ROUTE_PATH,
  BRAND_COCOGU_ROUTE_PATH,
  BRAND_FENNIX_ROUTE_PATH,
  BRAND_NAMIKO_ROUTE_PATH,
  BRAND_SCE_ROUTE_PATH,
} from "@/const/route-paths.const";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeBrands = () => {
  return (
    <>
      <h1 className="text-3xl pt-6 text-theme-secondary pb-6">
        SWITCHFLEX Brands
      </h1>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Image
            width={500}
            height={500}
            src="/images/brand-altec.jpg"
            alt=""
            className="max-w-full"
          />
          <Link
            href={BRAND_ALTEC_ROUTE_PATH}
            rel="noopener noreferrer"
            target="_blank"
            className="absolute bottom-4 left-1/2"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-white shadow rounded-full group">
              <Image
                src="/images/btn-arrow-green.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="transition-transform duration-300 transform group-hover:translate-x-1"
              />
            </div>
          </Link>
        </div>
        <div className="flex-1 relative">
          <Image
            width={500}
            height={500}
            src="/images/brand-alectric.jpg"
            alt=""
            className="max-w-full"
          />
          <Link href="/alectric" className="absolute bottom-4 left-1/2">
            <div className="flex items-center justify-center w-10 h-10 bg-white shadow rounded-full group">
              <Image
                src="/images/btn-arrow-green.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="transition-transform duration-300 transform group-hover:translate-x-1"
              />
            </div>
          </Link>
        </div>
        <div className="flex-1 relative">
          <Image
            width={500}
            height={500}
            src="/images/brand-namiko.jpg"
            alt=""
            className="max-w-full"
          />
          <Link
            href={BRAND_NAMIKO_ROUTE_PATH}
            rel="noopener noreferrer"
            target="_blank"
            className="absolute bottom-4 left-1/2"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-white shadow rounded-full group">
              <Image
                src="/images/btn-arrow-green.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="transition-transform duration-300 transform group-hover:translate-x-1"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="py-3 relative">
        <Image
          width={1248}
          height={382}
          src="/images/brand-fennix.jpg"
          alt="Fennix"
          className="w-full"
        />
        <Link
          href={BRAND_FENNIX_ROUTE_PATH}
          rel="noopener noreferrer"
          target="_blank"
          className="absolute bottom-8 left-1/2"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-white shadow rounded-full group">
            <Image
              src="/images/btn-arrow-green.svg"
              alt="Arrow"
              width={20}
              height={20}
              className="transition-transform duration-300 transform group-hover:translate-x-1"
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex-1 relative">
          <Image
            width={750}
            height={367}
            src="/images/brand-sce.png"
            alt="Sce"
            className="max-w-full"
          />
          <Link
            href={BRAND_SCE_ROUTE_PATH}
            rel="noopener noreferrer"
            target="_blank"
            className="absolute bottom-8 left-1/2"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-white shadow rounded-full group">
              <Image
                src="/images/btn-arrow-green.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="transition-transform duration-300 transform group-hover:translate-x-1"
              />
            </div>
          </Link>
        </div>
        <div className="flex-1 relative">
          <Image
            width={750}
            height={367}
            src="/images/brand-cocogu.png"
            alt="Cocogu"
            className="max-w-full"
          />
          <Link
            href={BRAND_COCOGU_ROUTE_PATH}
            rel="noopener noreferrer"
            target="_blank"
            className="absolute bottom-8 left-1/2"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-white shadow rounded-full group">
              <Image
                src="/images/btn-arrow-green.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="transition-transform duration-300 transform group-hover:translate-x-1"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeBrands;

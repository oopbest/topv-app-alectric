import Image from "next/image";
import React from "react";

const ProductNamiko = () => {
  return (
    <>
      {/* Product Namiko */}
      <div className="flex flex-col sm:flex-row items-center mt-10 bg-stone-100">
        <div className="flex-1 flex-col p-10">
          <a
            href="#"
            className="inline-block px-6 py-2 border leading-tight hover:border-theme-color hover:bg-theme-color hover:text-white transition duration-150 ease-in-out"
          >
            NAMIKO
          </a>
          <h3 className="text-2xl py-4">Namiko Modern ตู้วางทีวี</h3>
          <p>
            ตู้วางทีวีสามารถทำความสะอาดได้อย่างง่ายชั้นวางแข็งแรงทนทานรับ
            น้ำหนักได้ดี
          </p>
          <button className="flex items-center px-6 py-3 mt-3 bg-theme-color text-white rounded relative group transition">
            <span className="mr-2">ดูเพิ่มเติม</span>
            <span className="transform transition-transform duration-300 ease-in-out translate-x-0 group-hover:translate-x-1">
              <Image
                src="/images/btn-arrow-white.svg"
                alt="Arrow"
                width={20}
                height={20}
              />
            </span>
          </button>
        </div>
        <div className="flex-1 lg:flex-none">
          <Image
            width={683}
            height={303}
            src="/images/product-namiko.png"
            alt="Namiko Modern ตู้วางทีวี"
            className="max-w-full"
          />
        </div>
      </div>
    </>
  );
};

export default ProductNamiko;

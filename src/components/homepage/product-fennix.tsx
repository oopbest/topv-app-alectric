import Image from "next/image";
import React from "react";

type Props = {};

const ProductFennix = (props: Props) => {
  return (
    <>
      {/* Product FENNIX */}
      <div className="flex flex-col sm:flex-row items-center mt-10">
        <div className="flex-1 lg:flex-none">
          <Image
            width={683}
            height={303}
            src="/images/product-fennix.png"
            alt="Fennix Gaming Chair Feather Series รุ่น WB-8568-6"
            className="max-w-full"
          />
        </div>
        <div className="flex-1 flex-col text-center p-10">
          <a
            href="#"
            className="inline-block px-6 py-2 border leading-tight hover:border-theme-color hover:bg-theme-color hover:text-white transition duration-150 ease-in-out"
          >
            FENNIX
          </a>
          <h3 className="text-2xl py-5">
            Fennix Gaming Chair Feather Series รุ่น WB-8568-6
          </h3>
          <p>
            Feather Series เป็นการพัฒนาไปอีกขั้นของ Fennix Gaming Chair
            ที่ไม่ใช่แค่เพียงพลิกโฉมเปลี่ยนดีไซน์เพื่อให้ดูทันสมัยเท่านั้น
            แต่ยังคงเพิ่มความโดดเด่นด้วยการออกแบบมาตรฐานที่เป็นเอกลักษณ์
            เพื่อลดความเมื่อยล้าที่ไหล่และหลังของคุณ
          </p>
          <div className="inline-block">
            <button className="flex px-6 py-3 mt-3 border bg-theme-color text-white rounded group transition">
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
        </div>
      </div>
    </>
  );
};

export default ProductFennix;

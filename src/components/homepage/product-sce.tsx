import Image from "next/image";
import React from "react";

const ProductSce = () => {
  return (
    <>
      {/* Product SCE */}
      <div className="flex flex-col sm:flex-row items-center mt-10">
        <div className="flex-1 lg:flex-none">
          <Image
            width={683}
            height={303}
            src="/images/product-sce.jpg"
            alt="SCE เตาแม่เหล็กไฟฟ้า รุ่น IH1 - รับประกัน 1 ปี"
            className="max-w-full"
          />
        </div>
        <div className="flex-1 flex-col text-center p-10">
          <a
            href="#"
            className="inline-block px-6 py-2 border leading-tight hover:border-theme-color hover:bg-theme-color hover:text-white transition duration-150 ease-in-out"
          >
            SCE
          </a>
          <h3 className="text-2xl py-5">
            SCE เตาแม่เหล็กไฟฟ้า รุ่น IH1 - รับประกัน 1 ปี
          </h3>
          <p>
            มีฟังก์ชันการทำอาหารถึง 7 ฟังก์ชัน สามารถทำทั้งเมนู ต้ม ผัด เเกง ทอด
            หม้อไฟ เป็นต้น ปรับระดับความร้อนได้ 8 ระดับ
            ควบคุมการทำงานด้วยระบบสัมผัส ใช้งานง่ายสะดวก
            แผงควบคุมการทำงานแบบปุ่มรูปภาพ ทำให้ใช้งานง่าย
            ตั้งเวลาการทำอาหารได้ถึง 180 นาที
          </p>
          <div className="inline-block">
            <button className="flex px-6 py-3 mt-3 bg-theme-color text-white rounded group transition">
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

export default ProductSce;

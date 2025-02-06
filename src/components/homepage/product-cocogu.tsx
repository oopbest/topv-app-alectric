import Image from "next/image";
import React from "react";

const ProductCocogu = () => {
  return (
    <>
      {" "}
      {/* Product COCOGU */}
      <div className="flex flex-col sm:flex-row items-center mt-10">
        <div className="flex-1 flex-col p-10">
          <a
            href="#"
            className="inline-block px-6 py-2 border leading-tight hover:border-theme-color hover:bg-theme-color hover:text-white transition duration-150 ease-in-out"
          >
            COCOGU
          </a>
          <h3 className="text-2xl py-5">
            COCOGU ชุดช้อนส้อมสเตนเลสสไตล์โปรตุเกส
          </h3>
          <p>
            ในชุดประกอบด้วย ช้อนทานอาหาร 1 ชิ้น , ส้อมทานอาหาร 1 ชิ้น , มีด 1
            ชิ้น ช้อนกาแฟ 1 ชิ้น สี : ทองด้าน / เงิน วัสดุ : สเตนเลส น้ำหนัก
            (ก.ก.) : 0.38
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
        <div className="flex-1 lg:flex-none">
          <Image
            width={683}
            height={303}
            src="/images/product-cocogu.jpg"
            alt="COCOGU ชุดช้อนส้อมสเตนเลสสไตล์โปรตุเกส"
            className="max-w-full"
          />
        </div>
      </div>
    </>
  );
};

export default ProductCocogu;

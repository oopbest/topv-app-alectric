import Image from "next/image";
import React from "react";

const ProductRecommend = () => {
  return (
    <>
      {/* Products Recommend */}
      <h1 className="text-3xl uppercase py-10 text-theme-secondary">
        สินค้าแนะนำ
      </h1>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1 sm:pe-8">
          <h3 className="text-3xl">
            Fennix Ergonomic Desk โต๊ะปรับระดับอัตโนมัติด้วยระบบไฟฟ้า Size
            120*60cm. รับประกันศูนย์ไทย 3 ปี
          </h3>
          <p className="text-xl pt-10">
            โต๊ะปรับระดับเพื่อสุขภาพ โต๊ะทำงาน ปรับความสูงด้วยระบบไฟฟ้าอัตโนมัติ
            ได้ตั้งแต่ 75-115 ซม. พร้อมจอแสดงผลดิจิตอล ปรับทีละ 1 ซม.
            มีโปรแกรมบันทึกความสูง ใช้งานได้ถึง 3 ระดับ ปรับขึ้น-ลงอัตโนมัติ
            เพียงกดปุ่มเดียว หน้าโต๊ะทำจากไม้ หนา 1.8 ซม. เนื้อแข็ง
            ทนทานต่อการใช้งาน โครงสร้างขาเป็นเหล็ก (Steel) เกรดคุณภาพ แข็งแรง
            มั่นคง รองรับน้ำหนักได้มาก
          </p>
        </div>
        <div className="flex-1 lg:flex-initial">
          <Image
            width={570}
            height={590}
            src="/images/product-recommend.png"
            alt="Fennix Ergonomic Desk โต๊ะปรับระดับอัตโนมัติด้วยระบบไฟฟ้า Size 120*60cm. รับประกันศูนย์ไทย 3 ปี"
            className="max-w-full"
          />
        </div>
      </div>
    </>
  );
};

export default ProductRecommend;

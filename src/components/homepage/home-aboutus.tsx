import Image from "next/image";
import React from "react";

const HomeAboutUs = () => {
  return (
    <>
      {/* Aboutus */}
      <div className="flex flex-col items-center lg:flex-none lg:items-start  relative lg:mb-20 lg:mt-10">
        <Image
          width={750}
          height={500}
          src="/images/company-image.png"
          alt=""
          className="max-w-full"
        />
        <div className="mt-3 lg:w-1/2 lg:absolute lg:-bottom-10 lg:right-0 p-6 text-sm space-y-4 bg-white shadow-md">
          <p className="text-gray-500">เกี่ยวกับ</p>
          <h3 className="text-theme-secondary font-bold text-2xl">
            บริษัท อเล็กทริค จำกัด
          </h3>
          <p>
            ก่อตั้งขึ้นเมื่อปี 2005
            โดยกลุ่มวิศวกรที่มีความเชี่ยวชาญในงานเครื่องจักรโดยเฉพาะ
            และดำเนินธุรกิจนำเข้าและส่งออกเครื่องจักร
            ทั้งขนาดเล็กและขนาดใหญ่สำหรับงานอุตสาหกรรม จนกระทั่งในปี 2019
            คณะผู้ก่อตั้งบริษัท
            ได้เล็งเห็นถึงโอกาสในการนำเครื่องจักรและเทคโนโลยี
            มาพัฒนาต่อยอดเพื่อผลิตเป็นเครื่องใช้ไฟฟ้าในครัวเรือน
          </p>
          <button className="flex items-center px-6 py-3 mt-3 bg-theme-secondary text-white rounded relative group transition">
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
    </>
  );
};

export default HomeAboutUs;

import Image from "next/image";

// --- Font awesome Icons --- //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// -- Solid icons
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// -- Regular icons
// import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
// -- Brand icons
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLine } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      {/* Best Seller */}
      <section className="best-seller mx-auto container p-4">
        <h1 className="text-theme-color text-3xl text-center py-5">
          Best Seller
        </h1>
        <div className="flex flex-col justify-center gap-5 sm:flex-row">
          <div className="self-center">
            <Image
              width={330}
              height={330}
              src="/images/alectric-1-11-23-Banner-01-330x330.png"
              alt=""
              className="pb-5 object-cover"
            />
            <Image
              width={330}
              height={330}
              src="/images/alectric-1-11-23-Banner-02-330x330.png"
              alt=""
              className="object-cover"
            />
          </div>
          <div className="self-center">
            <Image
              width={684}
              height={684}
              src="/images/alectric-1-11-23-Banner-03-684x684.png"
              alt=""
              className="object-cover"
            />
          </div>
          <div className="self-center">
            <Image
              width={330}
              height={330}
              src="/images/alectric-1-11-23-Banner-04-330x330.png"
              alt=""
              className="pb-5 object-cover"
            />
            <Image
              width={330}
              height={330}
              src="/images/alectric-1-11-23-Banner-05-330x330.png"
              alt=""
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Full width Banner */}
      <div className="full-width-banner">
        <div>
          <Image
            width={1920}
            height={900}
            src="/images/alectric-1-11-23-Banner-06-3840x1801.png"
            alt=""
            className="object-cover"
          />
        </div>
        <div>
          <Image
            width={1920}
            height={900}
            src="/images/alectric-1-11-23-Banner-07-3840x1801.png"
            alt=""
            className="object-cover"
          />
        </div>
        <div>
          <Image
            width={1920}
            height={900}
            src="/images/alectric-1-11-23-Banner-08-3840x1801.png"
            alt=""
            className="object-cover"
          />
        </div>
      </div>

      {/* Standard */}
      <div className="bg-sky-100 px-4">
        <div className="our-standards mx-auto container pt-10 pb-20">
          <h1 className="text-theme-color font-bold text-3xl text-center pb-10">
            มาตรฐานของเรา
          </h1>
          <div className="flex flex-col text-center sm:flex-row gap-5">
            <div className="flex-1 bg-white p-10 rounded-3xl">
              <Image
                width={200}
                height={200}
                src="/images/switchflex-call-center-1920x1920.jpg"
                alt=""
                className="w-full"
              />
              <h3 className="font-bold py-3">Call Center</h3>
              <p className="text-slate-500">
                โทร 1277 หรือช่องทาง offical ของร้านค้า มีบริการดูแลหลังการขาย
                แนะนำและให้คำปรึกษาอย่างรวดเร็วที่สุด
              </p>
            </div>
            <div className="flex-1 bg-white p-10 rounded-3xl">
              <Image
                width={200}
                height={200}
                src="/images/switchflex-service-1920x1920.jpg"
                alt=""
                className="w-full"
              />
              <h3 className="font-bold py-3">Service Center</h3>
              <p className="text-slate-500">
                รับประกันสินค้าสูงสุด 3 ปี เปลี่ยนคืนสินค้าได้ภายใน 7 วัน
              </p>
            </div>
            <div className="flex-1 bg-white p-10 rounded-3xl">
              <Image
                width={200}
                height={200}
                src="/images/switchflex-warehouse-1920x1920.jpg"
                alt=""
                className="w-full"
              />
              <h3 className="font-bold py-3">Quality Control</h3>
              <p className="text-slate-500">
                สินค้าได้รับมาตรฐานมอก. ควบคุมและตรวจสอบคุณภาพสินค้าก่อนจัดส่ง
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Follow us */}
      <div className="contact-us mx-auto container p-4">
        <div className="flex flex-col justify-center items-center py-5 sm:flex-row lg:py-10">
          <h3 className="px-3 text-theme-color text-xl sm:border-r">
            ติดตามเรา
          </h3>
          <Image
            width={100}
            height={100}
            src="/images/logo.svg"
            alt="Logo Alectric"
            className="w-1/3 px-3 sm:w-1/4 lg:w-1/12"
          />

          {/* Social Media */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white bg-theme-color rounded-full w-12 h-12 flex justify-center items-center hover:bg-opacity-85"
            >
              <FontAwesomeIcon icon={faFacebook} className="fa-2x" />
            </a>
            <a
              href="#"
              className="text-white bg-theme-color rounded-full w-12 h-12 flex justify-center items-center hover:bg-opacity-85"
            >
              <FontAwesomeIcon icon={faLine} className="fa-2x" />
            </a>
            <a
              href="#"
              className="text-white bg-theme-color rounded-full w-12 h-12 flex justify-center items-center hover:bg-opacity-85"
            >
              <FontAwesomeIcon icon={faYoutube} className="fa-2x" />
            </a>
            <a
              href="#"
              className="text-white bg-theme-color rounded-full w-12 h-12 flex justify-center items-center hover:bg-opacity-85"
            >
              <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
            </a>
            <a
              href="#"
              className="text-white bg-theme-color rounded-full w-12 h-12 flex justify-center items-center hover:bg-opacity-85"
            >
              <FontAwesomeIcon icon={faTwitter} className="fa-2x" />
            </a>
          </div>
        </div>

        {/* Company detail */}
        <div className="flex flex-col pb-10 lg:flex-row">
          <div className="self-center lg:flex-1">
            <Image
              width={670}
              height={440}
              src="/images/switchflex-new-670x440.jpg"
              alt="Switchflex Company"
              className="object-cover"
            />
          </div>
          {/* Company desc */}
          <div className="p-4 text-sm text-slate-500 shadow-md lg:w-1/3">
            <p>เกี่ยวกับ</p>
            <h3 className="text-theme-color font-bold text-2xl pt-2 pb-5">
              บริษัท สวิทซ เฟลคซ จำกัด
            </h3>
            <div className="pb-5 mb-5 border-b">
              <p>
                ก่อตั้งขึ้นเมื่อปี 2005
                โดยกลุ่มวิศวกรที่มีความเชี่ยวชาญในงานเครื่องจักรโดยเฉพาะ
                และดำเนินธุรกิจนำเข้าและส่งออกเครื่องจักร
                ทั้งขนาดเล็กและขนาดใหญ่สำหรับงานอุตสาหกรรม จนกระทั่งในปี 2019
                คณะผู้ก่อตั้งบริษัท
                ได้เล็งเห็นถึงโอกาสในการนำเครื่องจักรและเทคโนโลยี
                มาพัฒนาต่อยอดเพื่อผลิตเป็นเครื่องใช้ไฟฟ้าในครัวเรือน
              </p>
              <button className="flex items-center px-6 py-3 mt-3 bg-theme-color text-white rounded-2xl relative group transition">
                <span className="mr-2">ดูเพิ่มเติม</span>
                <span className="transform transition-transform duration-300 ease-in-out translate-x-0 group-hover:translate-x-2">
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </button>
            </div>
            <div>
              <p>ไปยังเว็บไซต์</p>
              <div className="flex pt-3">
                <Image
                  width={106}
                  height={21}
                  src="/images/switchflex-logo.svg"
                  alt="Switchflex"
                  className="object-contain"
                />
                <a
                  href="#"
                  className="border p-3 rounded-full w-3 h-3 flex justify-center items-center text-theme-color border-theme-color relative group transition"
                >
                  <span className="transform transition-transform duration-300 ease-in-out translate-x-0 group-hover:translate-x-1">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

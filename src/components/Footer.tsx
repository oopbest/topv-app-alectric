import Image from "next/image";
// --- Font awesome Icons --- //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// -- Brand icons
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLine } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-theme-color text-sm lg:text-base text-white px-4 py-6 lg:pt-10">
      <section className="accordion mx-auto container flex flex-col justify-center gap-5 md:flex-row">
        {/* Contact */}
        <div className="accordion-item sm:basis-1/3 lg:basis-1/2">
          <h3 className="pb-2 border-b md:border-0 md:pb-4 font-bold accordion-header">
            <span>ติดต่อ</span>
            <span className="accordion-icon md:hidden">&#9660;</span>
          </h3>
          <div className="accordion-content max-h-0 opacity-0 md:max-h-none md:opacity-100 leading-9">
            <div className="p-4 md:p-0">
              <p>
                <i className="fa-solid fa-location-dot"></i>
                บริษัท สวิทซเฟลคซ จำกัด เลขที่ 30/119 หมู่ 1 ต.โคกขาม อ.เมือง
                จ.สมุทรสาคร 74000
              </p>
              <div className="pt-6">
                <p>
                  <i className="fa-solid fa-clock"></i> จันทร์ - เสาร์
                </p>
                <p>9:00 - 17:00,</p>
                <p>ปิดทำการวันอาทิตย์</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dealer */}
        <div className="accordion-item sm:basis-1/2 lg:basis-1/2">
          <h3 className="pb-2 border-b md:border-0 md:pb-4 font-bold accordion-header">
            <span>ตัวแทนจำหน่าย</span>
            <span className="accordion-icon md:hidden">&#9660;</span>
          </h3>
          <div className="accordion-content max-h-0 opacity-0 md:max-h-none md:opacity-100 leading-9">
            <p className="p-4 md:p-0">
              สนใจสั่งซื้อสินค้าเป็นจำนวนมาก หรือสมัครเป็นตัวแทนจำหน่ายได้ที่
              โทร. 1277 E-mail: Service@switchflex.com
            </p>
          </div>
        </div>

        {/* Social media */}
        <div className="accordion-item basis-1/4">
          <h3 className="pb-2 border-b md:border-0 md:pb-4 font-bold accordion-header">
            <span>ติดตาม</span>
            <span className="accordion-icon md:hidden">&#9660;</span>
          </h3>
          <div className="accordion-content max-h-0 opacity-0 md:max-h-none md:opacity-100 leading-9">
            <ul className="p-4 md:p-0">
              <li>
                <a title="Facebook Page" href="#">
                  <FontAwesomeIcon icon={faFacebook} className="pe-2" />{" "}
                  Facebook Page
                </a>
              </li>
              <li>
                <a title="Line" href="#">
                  <FontAwesomeIcon icon={faLine} className="pe-2" /> Line
                </a>
              </li>
              <li>
                <a title="Youtube" href="#">
                  <FontAwesomeIcon icon={faYoutube} className="pe-2" /> Youtube
                </a>
              </li>
              <li>
                <a title="Instagram" href="#">
                  <FontAwesomeIcon icon={faInstagram} className="pe-2" />{" "}
                  Instagram
                </a>
              </li>
              <li>
                <a title="Twitter" href="#">
                  <FontAwesomeIcon icon={faTwitter} className="pe-2" /> Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="accordion-item basis-1/4">
          <h3 className="pb-2 border-b md:border-0 md:pb-4 font-bold accordion-header">
            <span>สั่งซื้อ</span>
            <span className="accordion-icon md:hidden">&#9660;</span>
          </h3>
          <div className="accordion-content max-h-0 opacity-0 md:max-h-none md:opacity-100 leading-9">
            <ul className="p-4 md:p-0">
              <li className="flex">
                <Image
                  src="/images/site-topvalue.svg"
                  alt="Topvalue"
                  className="w-5 ms-2 me-3"
                  width={40}
                  height={40}
                />
                <a href="#">Topvalue</a>
              </li>
              <li className="flex">
                <Image
                  src="/images/site-shopee.svg"
                  alt="Shopee"
                  className="me-2"
                  width={40}
                  height={40}
                />
                <a href="#">Shopee</a>
              </li>
              <li className="flex">
                <Image
                  src="/images/site-lazada.svg"
                  alt="Lazada"
                  className="me-2"
                  width={40}
                  height={40}
                />
                <a href="#">Lazada</a>
              </li>
              <li className="flex">
                <Image
                  src="/images/site-jd.svg"
                  alt="JD Central"
                  className="me-2"
                  width={40}
                  height={40}
                />
                <a href="#">JD Central</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="container mx-auto text-center py-4 border-0 leading-10 relative md:border-t md:mt-10">
        <Image
          src="/images/logo-white.svg"
          alt="Logo"
          className="hidden sm:block w-1/6 absolute left-0 top-1/2 transform -translate-y-1/2"
          width={40}
          height={40}
        />
        <p>&copy; Topvalue 2024</p>
        <a href="#">เงื่อนไขการใช้งาน</a>
        <a href="#">นโยบายส่วนบุคคล</a>
      </div>
    </footer>
  );
};

export default Footer;

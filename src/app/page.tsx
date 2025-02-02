import YouTubeEmbed from "@/components/youtube-embed";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const video_id = "5_yygU9ecMQ?si=yAFYnNc7oisSlVUQ";
  return (
    <>
      <div className="mx-auto">
        <YouTubeEmbed videoId={video_id} />
      </div>
      <section className="mx-auto container p-4">
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
        <h1 className="text-3xl uppercase pt-6 text-theme-secondary pb-6">
          Switchflex Brands
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
            <Link href="#" className="absolute bottom-4 left-1/2">
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
            <Link href="#" className="absolute bottom-4 left-1/2">
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
          <Link href="#" className="absolute bottom-8 left-1/2">
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
            <Link href="#" className="absolute bottom-8 left-1/2">
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
            <Link href="#" className="absolute bottom-8 left-1/2">
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
              โต๊ะปรับระดับเพื่อสุขภาพ โต๊ะทำงาน
              ปรับความสูงด้วยระบบไฟฟ้าอัตโนมัติ ได้ตั้งแต่ 75-115 ซม.
              พร้อมจอแสดงผลดิจิตอล ปรับทีละ 1 ซม. มีโปรแกรมบันทึกความสูง
              ใช้งานได้ถึง 3 ระดับ ปรับขึ้น-ลงอัตโนมัติ เพียงกดปุ่มเดียว
              หน้าโต๊ะทำจากไม้ หนา 1.8 ซม. เนื้อแข็ง ทนทานต่อการใช้งาน
              โครงสร้างขาเป็นเหล็ก (Steel) เกรดคุณภาพ แข็งแรง มั่นคง
              รองรับน้ำหนักได้มาก
            </p>
          </div>
          <div className="flex-1">
            <Image
              width={570}
              height={590}
              src="/images/product-recommend.png"
              alt="Fennix Ergonomic Desk โต๊ะปรับระดับอัตโนมัติด้วยระบบไฟฟ้า Size 120*60cm. รับประกันศูนย์ไทย 3 ปี"
              className="max-w-full"
            />
          </div>
        </div>

        {/* Alectric Products */}
        <div className="flex flex-col sm:flex-row justify-between pt-6 gap-4">
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              <Image
                width={500}
                height={400}
                src="/images/alectric-product-1.jpg"
                alt="Alectric Pet Smart Cat Litter Box ห้องน้ำแมวอัจฉริยะ เชื่อมแอปฯได้
                พร้อมระบบฆ่าเชื้อ รุ่น LB1 - รับประกัน 3 ปี"
                className="max-w-full"
              />
              <h3 className="font-bold">
                Alectric Pet Smart Cat Litter Box ห้องน้ำแมวอัจฉริยะ
                เชื่อมแอปฯได้ พร้อมระบบฆ่าเชื้อ รุ่น LB1 - รับประกัน 3 ปี
              </h3>
              <p className="h-24 line-clamp-4 text-gray-500">
                ห้องน้ำแมวอัตโนมัติ Alectric Pet Smart Cat Litter Box
                พร้อมระบบฆ่าเชื้อ ลดกลิ่นที่ไม่พึงประสงค์ภายในบ้าน
                ทำให้บ้านสะอาด ช่วยประหยัดเวลา ให้คุณมีเวลามากขึ้น สามารถ
                เชื่อมต่อกับ Wi-Fi เชื่อมต่อแอปพลิเคชัน
                เพื่อตั้งค่าการทำงานพร้อมรับการแจ้งเตือนผ่านมือถือ
                เพื่อความปลอดภัยต่อน้องแมวด้วยเซ็นเซอร์ตรวจจับ
                เครื่องจะหยุดอัตโนมัติเมื่อแมวเข้าไปในเครื่อง
                มีไฟแสดงสกานะการทำงานของเครื่อง เครื่องทำงานเงียบ ไร้เสียงรบกวน
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              <Image
                width={500}
                height={400}
                src="/images/alectric-product-2.jpg"
                alt="Alectric Smart Pet Feeder เครื่องให้อาหารอัจฉริยะ มีกล้องพร้อมไมค์ เชื่อมแอพได้ 5L รุ่น Smart PF1 - รับประกัน 3 ปี"
                className="max-w-full"
              />
              <h3 className="font-bold">
                Alectric Smart Pet Feeder เครื่องให้อาหารอัจฉริยะ
                มีกล้องพร้อมไมค์ เชื่อมแอพได้ 5L รุ่น Smart PF1 - รับประกัน 3 ปี
              </h3>
              <p className="h-24 line-clamp-4 text-gray-500">
                เครื่องให้อาหารอัจฉริยะ
                สามารถเชื่อมต่อผ่านแอปพลิเคชันและใช้งานบนมือถือได้
                วางแผนการให้อาหารสัตว์เลี้ยง สามารถกำหนดแผนการให้อาหาร
                จำนวนอาหารสัตว์เลี้ยงได้
                สามารถดูบันทึกการให้อาหารในแต่ละวันเพื่อป้องกันการให้อาหารมากเกินไป
                มีฟังก์ชันบันทึกเสียง
                มีไมค์สื่อสารเรียกสัตว์เลี้ยงได้ในปุ่มเดียว
                มีกล้องบันทึกภาพดูการเคลื่อนไหวของสัตว์เลี้ยงได้ตลอดเวลา
                ความจุถังใส่อาหาร 5 ลิตร ลดการสัมผัส ฝาปิดซิลิโคนกันความชื้น
                สามารถกักเก็บอาหารไว้ได้นาน ไม่เน่าเสีย แหล่งจ่ายไฟแบบคู่
                หากไฟดับหรือเกิดเหตุฉุกเฉิน
                ผลิตภัณฑ์จะเปลี่ยนเป็นโหมดแบตเตอรี่โดยอัตโนมัติ
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              <Image
                width={500}
                height={400}
                src="/images/alectric-product-3.jpg"
                alt="Alectric Pet Smart Water Fountain น้ำพุสัตว์เลี้ยงอัตโนมัติ 1.5L รุ่น FT1 - รับประกัน 3 ปี"
                className="max-w-full"
              />
              <h3 className="font-bold">
                Alectric Pet Smart Water Fountain น้ำพุสัตว์เลี้ยงอัตโนมัติ 1.5L
                รุ่น FT1 - รับประกัน 3 ปี
              </h3>
              <p className="h-24 line-clamp-4 text-gray-500">
                น้ำพุสัตว์เลี้ยงอัตโนมัติ ความจุถังเก็บน้ำถึง 1.5 ลิตร
                เพียงพอสำหรับใช้เป็นน้ำดื่มให้กับแมวประมาณ 2-4 วัน วัสดุ ABS
                เกรด A ที่ใช้กับอาหารปลอดภัยและมีสุขภาพที่ดี
                ใส่ใจรายละเอียดในการดูแลสัตว์เลี้ยงที่รักของคุณมากยิ่ง
                ออกแบบการกรองถึง 3 ชั้น เพื่อความสะอาดของน้ำดื่ม
                ควรเปลี่ยนไส้กรองทุกๆ 2 เดือน เมื่อระดับน้ำต่ำกว่าระบ MIN
                เครื่องจะหยุดทำงาน และมีสัญญาณดังขึ้น
                เมื่อเติมน้ำเครื่องจะกลับมาทำงานอัตโนมัติ
              </p>
            </div>
          </div>
        </div>

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
              มีฟังก์ชันการทำอาหารถึง 7 ฟังก์ชัน สามารถทำทั้งเมนู ต้ม ผัด เเกง
              ทอด หม้อไฟ เป็นต้น ปรับระดับความร้อนได้ 8 ระดับ
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
      </section>
    </>
  );
}

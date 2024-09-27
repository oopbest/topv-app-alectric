import ProductImages from "@/components/products/ProductImages";
import { formatThaiBaht } from "@/utils/format-currency";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { productId: string };
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = params;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(productId);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetailPage({ params }: Props) {
  console.log("Details about product ", params.productId);
  return (
    <>
      <section className="flex mx-auto bg-theme-container py-4">
        <div className="container mx-auto bg-white p-4">
          {/* Product Info */}
          <div className="flex flex-col gap-4 lg:flex-row">
            {/* Product Images */}
            <div className="flex-shrink-0">
              <ProductImages />
            </div>
            {/* Product Short description */}
            <div className="">
              <h1 className="text-theme-color text-2xl font-bold">
                Alectric Smart Pet Feeder เครื่องให้อาหารอัจฉริยะ
                มีกล้องพร้อมไมค์ เชื่อมแอพได้ 5L รุ่น Smart PF1 - รับประกัน 3 ปี
              </h1>
              <p>SKU : 10001789</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates natus mollitia, dolorem tenetur magnam, alias nisi
                harum cum quaerat velit expedita voluptas facere molestias ea
                delectus enim reprehenderit quo dignissimos.
              </p>
              <div className="border-t border-b bg-theme-container">
                <h1 className="text-4xl py-10 text-center">
                  {formatThaiBaht(5999)}
                </h1>
              </div>
              <h3 className="font-bold">ตัวแทนจำหน่าย</h3>
              <div className="flex gap-3 justify-center">
                <Link
                  href="#"
                  className="bg-white w-1/6 border-theme-color border"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/images/shop-topvalue.svg"
                    alt=""
                    className="w-full"
                  />
                </Link>
                <Link
                  href="#"
                  className="bg-white w-1/6 border-theme-color border"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/images/shop-shopee.svg"
                    alt=""
                    className="w-full"
                  />
                </Link>
                <Link
                  href="#"
                  className="bg-white w-1/6 border-theme-color border"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/images/shop-lazada.svg"
                    alt=""
                    className="w-full"
                  />
                </Link>
                <Link
                  href="#"
                  className="bg-white w-1/6 border-theme-color border"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/images/shop-jd.svg"
                    alt=""
                    className="w-full"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Detail */}
          <div className="py-10">
            <h1 className="font-bold text-xl">รายละเอียด</h1>
            <div className="flex flex-col gap-4">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Magnam, ex! Quaerat accusantium perspiciatis dolores. Eaque
                nihil eos, magni earum natus soluta quidem alias aliquam enim
                tempora magnam, dolorum voluptates nam minus harum iste
                molestiae perspiciatis fugiat aspernatur ipsum rem atque. Cum,
                ipsa nesciunt corporis totam voluptas animi quae libero quis
                adipisci cumque ipsum, optio reprehenderit dignissimos nisi
                culpa fugit minus quidem! Reiciendis hic cupiditate veritatis
                repellendus dicta, ab et repellat fuga molestias facilis
                incidunt ullam quos voluptate voluptatum laboriosam amet!
                Dignissimos alias libero nostrum voluptate pariatur excepturi.
                Amet ipsum, porro et cumque a dolorum, voluptas recusandae quia
                consequuntur quae blanditiis!
              </p>

              {/* Feature */}
              <div>
                <h3 className="font-bold">คุณสมบัติ</h3>
                <ul className="list-disc list-inside">
                  <li>
                    เชื่อมต่อผ่านแอปพลิเคชัน Switchflex มีไมค์สื่อสาร และ
                    ฟังก์ชันบันทึกเสียง
                  </li>
                  <li>
                    มีกล้องบันทึกภาพดูการเคลื่อนไหวของสัตว์เลี้ยงได้ตลอดเวลา
                    ถังความจุใส่อาหารสัตว์ได้ถึง 5 ลิตร
                  </li>
                  <li>
                    ปุ่มล็อกถังอาหารด้านข้างแบบพิเศษ สามารถแยกถังอาหารออกได้
                    ฝาปิดซิลิโคนกันความชื้น แหล่งจ่ายไฟแบบคู่
                    ฐานด้านล่างตัดไฟอัตโนมัติ ป้องกันการเกิดเหตุขัดข้อง
                  </li>
                </ul>
              </div>

              {/* Warranty */}
              <div>
                <h3 className="font-bold">รับประกันสินค้า</h3>
                <ul className="list-disc list-inside">
                  <li>
                    ชื่อสินค้า : Alectric Smart Pet Feeder 5L รุ่น : Smart PF1
                  </li>
                  <li>
                    กำลังไฟฟ้า : 2W แรงดันไฟฟ้า : AC 110-240V กระแสไฟฟ้าออก : DC
                  </li>
                  <li>
                    5V แหล่งจ่ายไฟ : อะแดปเตอร์ DC5V/1A ความจุ : 5L น้ำหนักสุทธิ
                    :
                  </li>
                  <li>2.3kg น้ำหรักรวม : 2.64kg ขนาดสินค้า : 285x175x305mm</li>
                  <li>ขนาดบรรจุภัณฑ์ : 315x195x33mm ความยาวสายชาร์จ : 1.5m</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-center py-10 gap-4">
              <h3 className="font-bold">รูปภาพสินค้า</h3>
              <div className="flex flex-col items-center gap-4">
                <Image
                  width={800}
                  height={800}
                  src="/images/cms-detail-01.jpg"
                  alt=""
                  className="max-w-full"
                />
                <Image
                  width={800}
                  height={800}
                  src="/images/cms-detail-02.jpg"
                  alt=""
                  className="max-w-full"
                />
                <Image
                  width={800}
                  height={800}
                  src="/images/cms-detail-03.jpg"
                  alt=""
                  className="max-w-full"
                />
                <Image
                  width={800}
                  height={800}
                  src="/images/cms-detail-04.jpg"
                  alt=""
                  className="max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

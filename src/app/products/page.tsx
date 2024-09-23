import Image from "next/image";
// --- Font awesome Icons --- //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// -- Solid icons
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const ProductsPage = () => {
  return (
    <section className="flex mx-auto bg-theme-container">
      <div className="container mx-auto py-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {/* Item 1 */}
          <div className="bg-white rounded-2xl flex items-center justify-center">
            <div className="flex flex-col text-center gap-3">
              <Image
                width={350}
                height={400}
                src="https://picsum.photos/350/400"
                alt="Random Image from Picsum"
                className="w-full"
              />
              <p className="px-5 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                reprehenderit iste corrupti alias autem amet nesciunt illo omnis
                nulla ad necessitatibus velit, fugit sapiente? Adipisci qui
                necessitatibus ullam modi voluptatibus.
              </p>
              <p className="font-bold">9,999</p>
              <div>
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <span>5.0</span>
              </div>
              <a
                href="#"
                className="bg-theme-color px-5 py-3 rounded text-white mx-3"
              >
                เรียนรู้เพิ่มเติม
              </a>
              <a href="#" title="" className="py-4 text-theme-color">
                <FontAwesomeIcon icon={faLocationDot} className="pe-1" />
                <span>สถานที่จัดจำหน่าย</span>
              </a>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-white rounded-2xl flex items-center justify-center">
            <div className="flex flex-col text-center gap-3">
              <Image
                width={350}
                height={400}
                src="https://picsum.photos/350/400"
                alt="Random Image from Picsum"
                className="w-full"
              />
              <p className="px-5 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                reprehenderit iste corrupti alias autem amet nesciunt illo omnis
                nulla ad necessitatibus velit, fugit sapiente? Adipisci qui
                necessitatibus ullam modi voluptatibus.
              </p>
              <p className="font-bold">9,999</p>
              <div>
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <span>5.0</span>
              </div>
              <a
                href="#"
                className="bg-theme-color px-5 py-3 rounded text-white mx-3"
              >
                เรียนรู้เพิ่มเติม
              </a>
              <a href="#" title="" className="py-4 text-theme-color">
                <FontAwesomeIcon icon={faLocationDot} className="pe-1" />
                <span>สถานที่จัดจำหน่าย</span>
              </a>
            </div>
          </div>

          {/* Item 3 */}
          <div className="bg-white rounded-2xl flex items-center justify-center">
            <div className="flex flex-col text-center gap-3">
              <Image
                width={350}
                height={400}
                src="https://picsum.photos/350/400"
                alt="Random Image from Picsum"
                className="w-full"
              />
              <p className="px-5 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                reprehenderit iste corrupti alias autem amet nesciunt illo omnis
                nulla ad necessitatibus velit, fugit sapiente? Adipisci qui
                necessitatibus ullam modi voluptatibus.
              </p>
              <p className="font-bold">9,999</p>
              <div>
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <span>5.0</span>
              </div>
              <a
                href="#"
                className="bg-theme-color px-5 py-3 rounded text-white mx-3"
              >
                เรียนรู้เพิ่มเติม
              </a>
              <a href="#" title="" className="py-4 text-theme-color">
                <FontAwesomeIcon icon={faLocationDot} className="pe-1" />
                <span>สถานที่จัดจำหน่าย</span>
              </a>
            </div>
          </div>

          {/* Item 4 */}
          <div className="bg-white rounded-2xl flex items-center justify-center">
            <div className="flex flex-col text-center gap-3">
              <Image
                width={350}
                height={400}
                src="https://picsum.photos/350/400"
                alt="Random Image from Picsum"
                className="w-full"
              />
              <p className="px-5 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                reprehenderit iste corrupti alias autem amet nesciunt illo omnis
                nulla ad necessitatibus velit, fugit sapiente? Adipisci qui
                necessitatibus ullam modi voluptatibus.
              </p>
              <p className="font-bold">9,999</p>
              <div>
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <span>5.0</span>
              </div>
              <a
                href="#"
                className="bg-theme-color px-5 py-3 rounded text-white mx-3"
              >
                เรียนรู้เพิ่มเติม
              </a>
              <a href="#" title="" className="py-4 text-theme-color">
                <FontAwesomeIcon icon={faLocationDot} className="pe-1" />
                <span>สถานที่จัดจำหน่าย</span>
              </a>
            </div>
          </div>

          {/* Item 5 */}
          <div className="bg-white rounded-2xl flex items-center justify-center">
            <div className="flex flex-col text-center gap-3">
              <Image
                width={350}
                height={400}
                src="https://picsum.photos/350/400"
                alt="Random Image from Picsum"
                className="w-full"
              />
              <p className="px-5 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                reprehenderit iste corrupti alias autem amet nesciunt illo omnis
                nulla ad necessitatibus velit, fugit sapiente? Adipisci qui
                necessitatibus ullam modi voluptatibus.
              </p>
              <p className="font-bold">9,999</p>
              <div>
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <span>5.0</span>
              </div>
              <a
                href="#"
                className="bg-theme-color px-5 py-3 rounded text-white mx-3"
              >
                เรียนรู้เพิ่มเติม
              </a>
              <a href="#" title="" className="py-4 text-theme-color">
                <FontAwesomeIcon icon={faLocationDot} className="pe-1" />
                <span>สถานที่จัดจำหน่าย</span>
              </a>
            </div>
          </div>

          {/* Item 6 */}
          <div className="bg-white rounded-2xl flex items-center justify-center">
            <div className="flex flex-col text-center gap-3">
              <Image
                width={350}
                height={400}
                src="https://picsum.photos/350/400"
                alt="Random Image from Picsum"
                className="w-full"
              />
              <p className="px-5 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                reprehenderit iste corrupti alias autem amet nesciunt illo omnis
                nulla ad necessitatibus velit, fugit sapiente? Adipisci qui
                necessitatibus ullam modi voluptatibus.
              </p>
              <p className="font-bold">9,999</p>
              <div>
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                <span>5.0</span>
              </div>
              <a
                href="#"
                className="bg-theme-color px-5 py-3 rounded text-white mx-3"
              >
                เรียนรู้เพิ่มเติม
              </a>
              <a href="#" title="" className="py-4 text-theme-color">
                <FontAwesomeIcon icon={faLocationDot} className="pe-1" />
                <span>สถานที่จัดจำหน่าย</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;

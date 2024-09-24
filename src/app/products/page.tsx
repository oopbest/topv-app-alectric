import Image from "next/image";
// --- Font awesome Icons --- //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// -- Solid icons
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { getProducts } from "./getProducts";

// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   category: string;
//   rating: number;
//   stock: number;
//   image: string;
//   tags: [];
// }

export default async function ProductsPage() {
  // const productsResponse = await fetch("http://localhost:4000/products", {
  //   next: { revalidate: 10 },
  // });
  // const products = await productsResponse.json();
  // console.log(products);
  const products = await getProducts();
  return (
    <section className="flex mx-auto bg-theme-container">
      <div className="container mx-auto py-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl flex items-center justify-center"
            >
              <div className="flex flex-col text-center gap-3">
                <Image
                  width={500}
                  height={500}
                  src="https://picsum.photos/500/500"
                  alt={product.name}
                  className="object-contain"
                />
                <p className="px-5 line-clamp-2">{product.name}</p>
                <p className="font-bold">{product.price}</p>
                <div>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                  <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                  <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                  <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                  <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                  <span>{product.rating}</span>
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
          ))}
        </div>
      </div>
    </section>
  );
}

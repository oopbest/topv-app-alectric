import Image from "next/image";
// --- Font awesome Icons --- //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// -- Solid icons
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  stock: number;
  image: string;
  tags: [];
}

export default async function ProductsPage() {
  const productsResponse = await fetch("http://localhost:4000/products", {
    next: { revalidate: 10 },
  });
  const products = await productsResponse.json();
  console.log(products);
  return (
    <section className="flex mx-auto bg-theme-container">
      <div className="container mx-auto py-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {/* items */}
          {products.map((product: Product) => (
            <>
              <div className="bg-white rounded-2xl flex items-center justify-center">
                <div className="flex flex-col text-center gap-3">
                  <Image
                    width={500}
                    height={500}
                    src="https://picsum.photos/500/500"
                    alt="Random Image from Picsum"
                    className="object-contain"
                  />
                  <p className="px-5 line-clamp-2">{product.name}</p>
                  <p className="font-bold">{product.price}</p>
                  <div>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-300"
                    />{" "}
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-300"
                    />{" "}
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-300"
                    />{" "}
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-300"
                    />{" "}
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-300"
                    />{" "}
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
            </>
          ))}

          {/* 
          {products.map((product: Product) => (
        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
          <p>{details.title}</p>
        </li>
      ))} 
       */}
          {/* end items */}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
// --- Font awesome Icons --- //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// -- Solid icons
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { formatThaiBaht } from "@/utils/format-currency";
import ProductRating from "@/components/products/product-rating";
import allproducts from "@mockup/allproducts.json";

const ProductList = () => {
  const products = allproducts;
  return (
    <div>
      <section className="flex mx-auto bg-theme-container">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {products.map((product) => {
              const productRating = product.rating;
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl flex items-center justify-center"
                >
                  <div className="flex flex-col text-center gap-3">
                    <Link href={`products/${product.id}`}>
                      <Image
                        width={500}
                        height={500}
                        src={product.image}
                        alt={product.name}
                        className="object-contain rounded-t-2xl"
                      />
                    </Link>
                    <p className="h-12 lg:h-auto px-5 line-clamp-2">
                      {product.name}
                    </p>
                    <p className="font-bold">{formatThaiBaht(product.price)}</p>
                    <ProductRating rating={productRating} />
                    <Link
                      href={`products/${product.id}`}
                      className="bg-theme-color px-5 py-3 rounded text-white mx-3"
                    >
                      เรียนรู้เพิ่มเติม
                    </Link>
                    <Link href="#" title="" className="py-4 text-theme-color">
                      <FontAwesomeIcon icon={faLocationDot} className="pe-1" />
                      <span>สถานที่จัดจำหน่าย</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;

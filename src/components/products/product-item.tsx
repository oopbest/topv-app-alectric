import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // --- Font awesome Icons --- //
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"; // -- Solid icons
import Link from "next/link";
import { formatThaiBaht } from "@/utils/format-currency.util";
import { Product } from "@/interfaces/dto/products.dto";
// import ProductRating from "@/components/products/product-rating";

type Props = {
  products: Product[];
};

const ProductItem = ({ products }: Props) => {
  return (
    <>
      {products.map((product) => {
        // const productRating = product.rating;
        return (
          <div
            key={product.id}
            className="bg-white flex items-center justify-center rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col text-center gap-3">
              <Link href={`products/${product.id}`}>
                <div className="lg:min-h-[400px] overflow-hidden">
                  {product.image ? (
                    <Image
                      width={800}
                      height={800}
                      src={product.image}
                      alt={product.name}
                      className="max-w-full"
                    />
                  ) : (
                    <Image
                      width={800}
                      height={800}
                      src="/images/product-not-found.jpg"
                      alt="Not found image"
                      className="max-w-full"
                    />
                  )}
                </div>
              </Link>
              <div className="flex flex-col gap-4">
                <p className="h-12 px-5 line-clamp-2">{product.name}</p>
                <p className="font-bold">{formatThaiBaht(product.price)}</p>
                {/* <ProductRating rating={productRating} /> */}
                <Link
                  href={`products/${product.id}`}
                  className="bg-theme-color px-5 py-3 text-white mx-3"
                >
                  เรียนรู้เพิ่มเติม
                </Link>
                <Link href="#" title="" className="py-4 text-theme-color">
                  <FontAwesomeIcon icon={faLocationDot} className="pe-1" />
                  <span>สถานที่จัดจำหน่าย</span>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductItem;

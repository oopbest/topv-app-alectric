"use client";

import Slider from "react-slick";
import Image from "next/image";
import { PrevArrow, NextArrow } from "./slick-arrow-custom";
import { useState } from "react";
import { PRODUCT_NOT_FOUND_IMG } from "@/const/product.const";
import { ProductMedia } from "@/interfaces/dto/product-detail.dto";
// import clsx from "clsx";

// const images = [
//   {
//     id: 1,
//     path: "/images/img-carousel-01.jpg",
//   },
//   {
//     id: 2,
//     path: "/images/img-carousel-02.jpg",
//   },
//   {
//     id: 3,
//     path: "/images/img-carousel-03.jpg",
//   },
//   {
//     id: 4,
//     path: "/images/img-carousel-04.jpg",
//   },
// ];

interface Props {
  images: ProductMedia[];
}

const ProductImages = ({ images }: Props) => {
  console.log(images);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // const [activeSlide, setActiveSlide] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>();

  // Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Custom Next Arrow
    prevArrow: <PrevArrow />, // Custom Prev Arrow
    //afterChange: (current: number) => setActiveSlide(current), // Update the active slide index
    responsive: [
      {
        breakpoint: 1024, // For tablets and larger phones
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640, // For small mobile screens
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col gap-3">
      {selectedImage ? (
        <Image
          width={600}
          height={456}
          src={selectedImage ? selectedImage : PRODUCT_NOT_FOUND_IMG}
          alt=""
          className="w-full"
        />
      ) : (
        <Image
          width={600}
          height={456}
          src={images[0].media_path}
          alt=""
          className="w-full"
        />
      )}
      {/* sliders */}
      <div className="max-w-xs mx-auto lg:px-8 md:max-w-md">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`px-2 ${
                selectedImageIndex === Number(image.position)
                  ? "border-2 border-theme-color outline-none"
                  : ""
              }`}
              // className={clsx(
              //   "slick-slide",
              //   "px-2", // Tailwind spacing for all slides
              //   "transition-transform duration-300",
              //   index === 0 ? "bla_bla" : "", // Default to first slide
              //   index === activeSlide
              //     ? "border border-green-500" // Custom style for active slide
              //     : "opacity-75" // Custom style for non-active slides
              // )}
              onClick={() => {
                setSelectedImage(image.media_path);
                setSelectedImageIndex(Number(image.position));
              }}
            >
              <Image
                src={image.media_path}
                alt={`Slide image ${image.position}`}
                width={600}
                height={400}
                className="max-w-full"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductImages;

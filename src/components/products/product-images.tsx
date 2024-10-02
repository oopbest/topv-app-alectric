"use client";

import Slider from "react-slick";
import Image from "next/image";
import { PrevArrow, NextArrow } from "./slick-arrow-custom";
import { useState } from "react";
// import clsx from "clsx";

const images = [
  {
    id: 1,
    path: "/images/img-carousel-01.jpg",
  },
  {
    id: 2,
    path: "/images/img-carousel-02.jpg",
  },
  {
    id: 3,
    path: "/images/img-carousel-03.jpg",
  },
  {
    id: 4,
    path: "/images/img-carousel-04.jpg",
  },
];

const ProductImages = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const notFoundImage = "/images/product-not-found.jpg";
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
  // console.log('selected 'selectedImage);

  return (
    <div className="flex flex-col gap-3">
      {selectedImage ? (
        <Image
          width={600}
          height={456}
          src={selectedImage ? selectedImage : notFoundImage}
          alt=""
          className="w-full"
        />
      ) : (
        <Image
          width={600}
          height={456}
          src={images[0].path}
          alt=""
          className="w-full"
        />
      )}
      {/* sliders */}
      <div className="max-w-xs mx-auto lg:px-8 md:max-w-md">
        <Slider {...settings}>
          {images.map((image) => (
            <div
              key={image.id}
              className={`px-2 ${
                selectedImageIndex === image.id
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
                setSelectedImage(image.path);
                setSelectedImageIndex(image.id);
              }}
            >
              <Image
                src={image.path}
                alt={`Slide image ${image.id}`}
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

"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { PrevArrow, NextArrow } from "./slick-arrow-custom";

const images = [
  "/images/img-carousel-01.jpg",
  "/images/img-carousel-02.jpg",
  "/images/img-carousel-03.jpg",
  "/images/img-carousel-04.jpg",
];

// Slick settings
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Default
  slidesToScroll: 1,
  nextArrow: <NextArrow />, // Custom Next Arrow
  prevArrow: <PrevArrow />, // Custom Prev Arrow
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

const ImageSlider = () => {
  return (
    <div className="max-w-xs mx-auto lg:px-8 md:max-w-md">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <Image
              src={src}
              alt={`Slide image ${index + 1}`}
              width={600}
              height={400}
              className="max-w-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;

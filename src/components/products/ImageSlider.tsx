"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { PrevArrow, NextArrow } from "./CustomArrows";

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
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 640, // For small mobile screens
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

const ImageSlider = () => {
  return (
    <div className="max-w-md mx-auto px-8">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <Image
              src={src}
              alt={`Slide image ${index + 1}`}
              width={600}
              height={400}
              className="object-cover w-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;

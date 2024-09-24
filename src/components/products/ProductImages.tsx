import Image from "next/image";
import ImageSlider from "./ImageSlider";

const ProductImages = () => {
  return (
    <div className="flex flex-col gap-3">
      <Image
        width={600}
        height={456}
        src="/images/img-carousel-01.jpg"
        alt=""
        className="w-full"
      />
      <ImageSlider />
    </div>
  );
};

export default ProductImages;

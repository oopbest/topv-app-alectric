import Image from "next/image";

const BestSeller = () => {
  return (
    <>
      {/* Best Seller */}
      <section className="best-seller mx-auto container p-4">
        <h1 className="text-theme-color text-3xl text-center py-5">
          Best Seller
        </h1>
        <div className="flex flex-col justify-center gap-5 sm:flex-row">
          <div className="self-center">
            <Image
              width={330}
              height={330}
              src="/images/alectric-1-11-23-Banner-01-330x330.png"
              alt=""
              className="pb-5 object-cover"
            />
            <Image
              width={330}
              height={330}
              src="/images/alectric-1-11-23-Banner-02-330x330.png"
              alt=""
              className="object-cover"
            />
          </div>
          <div className="self-center">
            <Image
              width={684}
              height={684}
              src="/images/alectric-1-11-23-Banner-03-684x684.png"
              alt=""
              className="object-cover"
            />
          </div>
          <div className="self-center">
            <Image
              width={330}
              height={330}
              src="/images/alectric-1-11-23-Banner-04-330x330.png"
              alt=""
              className="pb-5 object-cover"
            />
            <Image
              width={330}
              height={330}
              src="/images/alectric-1-11-23-Banner-05-330x330.png"
              alt=""
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSeller;

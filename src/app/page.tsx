// import ProductCocogu from "@/components/homepage/product-cocogu";
// import ProductFennix from "@/components/homepage/product-fennix";
// import ProductSce from "@/components/homepage/product-sce";
import HomeAboutUs from "@/components/homepage/home-aboutus";
import HomeBrands from "@/components/homepage/home-brands";
import ProductAlectric from "@/components/homepage/product-alectric";
import ProductNamiko from "@/components/homepage/product-namiko";
import ProductRecommend from "@/components/homepage/product-recommend";
import YouTubeEmbed from "@/components/youtube-embed";

export default function Home() {
  const video_id = "5_yygU9ecMQ?si=yAFYnNc7oisSlVUQ";
  return (
    <>
      <div className="mx-auto">
        <YouTubeEmbed videoId={video_id} />
      </div>
      <section className="mx-auto container p-4">
        <HomeAboutUs />
        <HomeBrands />
        <ProductRecommend />
        <ProductAlectric />
        <ProductNamiko />
        {/* <ProductSce /> */}
        {/* <ProductCocogu /> */}
        {/* <ProductFennix /> */}
      </section>
    </>
  );
}

import Image from "next/image";
import BestSeller from "@/components/homepage/home-bestseller";
import FollowUs from "@/components/homepage/home-followus";
import YouTubeEmbed from "@/components/youtube-embed";
import Standard from "@/components/homepage/home-standard";

export default function Home() {
  const video_id = "5_yygU9ecMQ?si=yAFYnNc7oisSlVUQ";
  return (
    <>
      <div className="mx-auto">
        <YouTubeEmbed videoId={video_id} />
      </div>
      <BestSeller />
      {/* Full width Banner */}
      <div className="full-width-banner mx-auto">
        <div>
          <Image
            width={1920}
            height={900}
            src="/images/alectric-1-11-23-Banner-06-3840x1801.png"
            alt=""
            className="object-cover"
          />
        </div>
        <div>
          <Image
            width={1920}
            height={900}
            src="/images/alectric-1-11-23-Banner-07-3840x1801.png"
            alt=""
            className="object-cover"
          />
        </div>
        <div>
          <Image
            width={1920}
            height={900}
            src="/images/alectric-1-11-23-Banner-08-3840x1801.png"
            alt=""
            className="object-cover"
          />
        </div>
      </div>
      <Standard />
      <FollowUs />
    </>
  );
}

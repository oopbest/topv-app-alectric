import HomeBestSeller from "@/components/homepage/home-bestseller";
import HomeFollowUs from "@/components/homepage/home-followus";
import HomeStandard from "@/components/homepage/home-standard";
import YouTubeEmbed from "@/components/youtube-embed";
import Image from "next/image";
import React from "react";

// type Props = {};

const AlectricPage = () => {
  const video_id = "5_yygU9ecMQ?si=yAFYnNc7oisSlVUQ";
  return (
    <>
      <div className="mx-auto">
        <YouTubeEmbed videoId={video_id} />
      </div>
      <HomeBestSeller />
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
      <HomeStandard />
      <HomeFollowUs />
    </>
  );
};

export default AlectricPage;

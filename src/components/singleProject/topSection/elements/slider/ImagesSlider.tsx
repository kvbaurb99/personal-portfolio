"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image, { StaticImageData } from "next/image";

type Props = {
  images: StaticImageData[];
};

export default function ImagesSlider({ images }: Props) {
  return (
    <Swiper
      modules={[Pagination, EffectFade, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      effect="fade"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="relative mt-24 lg:mt-28"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <figure className="relative">
            <Image
              src={image}
              width={1440}
              priority={index === 0}
              height={640}
              alt={"test"}
              className="h-[220px] lg:h-[480px] xl:h-[560px] 2xl:h-[620px] object-cover shadow-md rounded"
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t rounded from-black/40 to-transparent" />
          </figure>
        </SwiperSlide>
      ))}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: white;
        }

        .swiper-pagination {
          position: absolute;
          bottom: 20px !important;
          left: 50% !important;
          transform: translateX(-50%);
          z-index: 10;
        }
      `}</style>
    </Swiper>
  );
}

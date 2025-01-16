"use client";
import { SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { StaticImageData } from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Figure, Overlay, StyledImage, StyledSwiper } from "./styles";

type Props = {
  images: StaticImageData[];
};

export default function ImagesSlider({ images }: Props) {
  return (
    <StyledSwiper
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
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Figure>
            <StyledImage
              src={image}
              width={1280}
              priority={index === 0}
              height={640}
              alt={"test"}
            />
            <Overlay />
          </Figure>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
}

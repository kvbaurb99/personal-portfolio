import ImagesSlider from "./elements/slider/ImagesSlider";
import { StaticImageData } from "next/image";
import { AboutTitle } from "@/components/sections/about/styles/about";

type Props = {
  images: StaticImageData[];
  title: string;
};

export default function TopSection({ images, title }: Props) {
  return (
    <>
      <ImagesSlider images={images} />
      <AboutTitle $smallerMargin className="mt-6">
        {title}
      </AboutTitle>
    </>
  );
}

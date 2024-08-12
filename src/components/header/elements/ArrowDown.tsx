import ArrowIcon from "@/assets/arrows/arrow_down.svg";
import { ArrowDownElement } from "../styles/header";
export default function ArrowDown() {
  return (
    <a href="#about">
      <ArrowDownElement
        src={ArrowIcon}
        width={48}
        height={48}
        priority
        alt="Arrow down"
      />
    </a>
  );
}

import { socials } from "@/data/socials/socials";
import { SocialsItem, SocialsList } from "../styles/header";
import Image from "next/image";

export default function Socials() {
  return (
    <SocialsList>
      {socials.map((social) => (
        <SocialsItem key={social.name}>
          <a href={social.url} target="_blank">
            <Image
              src={social.image}
              width={26}
              height={26}
              alt={social.name}
            />
          </a>
        </SocialsItem>
      ))}
    </SocialsList>
  );
}

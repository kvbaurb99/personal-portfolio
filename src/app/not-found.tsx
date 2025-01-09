import { Link } from "@/lib/i18n";
import ErrorImage from "@/assets/404/404-image.png";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center text-black h-screen">
      <Image
        src={ErrorImage}
        width={520}
        height={360}
        priority
        alt="error 404"
        className="relative bottom-4"
      />
      <p className="font-semibold lato text-2xl text-gray-500">
        Przepraszamy, nie mogliśmy znaleźć wpisanej przez Ciebie frazy.
      </p>
      <Link className="mt-4 border p-2.5 text-lg" href="/">
        Wróć na stronę główną
      </Link>
    </div>
  );
}

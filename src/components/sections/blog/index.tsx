import { H2, Section } from "@/styles/main";
import Image from "next/image";
import CustomImage from "@/assets/blog/nextjs.jpg";
import { articles } from "@/data/blog/articles/articles";
import Link from "next/link";

export default function BlogSection() {
  return (
    <Section id="blog">
      <H2>Najnowsze artykuły na blogu</H2>
      <div className="grid grid-cols-3 gap-6 mt-6">
        {articles.map((article, index) => (
          <div key={index} className="w-full">
            <Link href={`/blog/${article.slug}`}>
              <Image
                width={360}
                height={360}
                src={article.image}
                alt="title"
                className="w-full h-[250px] object-cover"
              />
            </Link>
            <Link href={`/blog/${article.slug}`}>
              <h3 className="font-semibold mt-2.5 lato opacity-80">
                {article.title}
              </h3>
            </Link>
            <p className="line-clamp-3 opacity-60 mt-1.5 text-sm">
              {article.overview}
            </p>
            <Link href={`/blog/${article.slug}`}>
              <button className="text-sm opacity-60 border px-4 py-1.5 mt-2.5 border-black/40 rounded">
                Czytaj artykuł
              </button>
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}

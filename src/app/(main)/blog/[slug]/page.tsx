import "@/styles/article/article.css";
import { articles } from "@/data/blog/articles/articles";
import { Section } from "@/styles/main";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navigation from "@/components/navigation";

type SingleArticleProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function SingleArticle(props: SingleArticleProps) {
  const params = await props.params;
  const article = articles.find((article) => article.slug === params.slug);
  if (!article) return notFound();
  return (
    <div className="text-black">
      <Navigation isDark />
      <Section style={{ marginTop: "6.5rem" }}>
        <h1 className="kaushan text-3xl lg:text-5xl 2xl:leading-[60px]">
          {article.title}
        </h1>
        <p className="mt-6 text-sm lg:text-base lato opacity-60">
          Opublikowany przez Jakub Urbański - 14.08.2024
        </p>
        <Image
          src={article.image}
          width={860}
          priority
          height={360}
          alt={article.title}
          className="w-full object-cover h-[280px] lg:h-[560px] mt-6 shadow-lg shadow-black/20"
        />
        <div
          className="article mt-4 lato"
          dangerouslySetInnerHTML={{ __html: article.body }}
        />
      </Section>
    </div>
  );
}

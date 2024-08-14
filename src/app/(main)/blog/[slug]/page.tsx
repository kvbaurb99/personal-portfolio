import articles from "@/data/blog/articles/articles.json";
import { notFound } from "next/navigation";

type SingleArticleProps = {
  params: {
    slug: string;
  };
};

export default function SingleArticle({ params }: SingleArticleProps) {
  const article = articles.find((article) => article.slug === params.slug);
  if (!article) return notFound();
  return <div>page</div>;
}

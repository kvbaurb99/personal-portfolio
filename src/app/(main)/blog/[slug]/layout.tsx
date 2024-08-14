import { articles } from "@/data/blog/articles/articles";
import type { PropsWithChildren } from "react";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((article) => article.slug === params.slug);
  return {
    title: article?.title,
    description: article?.overview,
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: `https://urbanski-dev.pl/blog/${params.slug}`,
    },
  };
}

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return <>{children}</>;
}

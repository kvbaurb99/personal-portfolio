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
    openGraph: {
      title: article?.title,
      description: article?.overview,
      url: `https://urbanski-dev.pl/blog/${params.slug}`,
      siteName: "urbanski-dev.pl",
      images: [
        {
          url: String(article?.image.src),
          width: 800,
          height: 600,
        },
      ],
      locale: "pl",
      type: "website",
    },
  };
}

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return <>{children}</>;
}

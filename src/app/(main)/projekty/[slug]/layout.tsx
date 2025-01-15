import type { PropsWithChildren } from "react";
import { singleProjects } from "@/data/sections/projects/data/projects_single";
import { notFound } from "next/navigation";
import { getLocalisedPathname } from "@/utils/getPathname";
import { keywords } from "@/data/meta/meta";

type Props = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Props }) {
  const { slug } = await params;
  const pathname = getLocalisedPathname(`/projekty/${slug}`);
  const project = singleProjects.find((p) => p.slug === slug);
  if (!project) {
    return notFound();
  }
  return {
    title: project?.title,
    description: project?.overview,
    keywords: "",
    alternates: {
      canonical: pathname,
    },
  };
}

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return <>{children}</>;
}

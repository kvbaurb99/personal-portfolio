import { singleProjects } from "@/data/sections/projects/data/projects_single";
import { Section } from "@/styles/main";
import TopSection from "@/components/singleProject/topSection/TopSection";
import { notFound } from "next/navigation";
import ProjectsSection from "@/components/sections/projects";
import {
  TechStack,
  TechTag,
} from "@/components/sections/experience/style/experience";
import MainSection from "@/components/singleProject/mainSection/MainSection";
import { languageTag } from "@/paraglide/runtime";

type Props = Promise<{ slug: "blogcms" | "vodcms" | "magro" | "takelink" }>;

export default async function ProjectPage({ params }: { params: Props }) {
  const { slug } = await params;
  const project = singleProjects.find((p) => p.slug === slug);
  const locale = languageTag();

  if (!project) {
    return notFound();
  }

  return (
    <>
      <Section>
        <TopSection title={project.title} images={project.images} />
        <TechStack $singleProject>
          {project.technologies.map((tech, techIndex) => (
            <TechTag key={techIndex}>{tech}</TechTag>
          ))}
        </TechStack>
        <MainSection description={locale === "pl" ? project.description : project.description_en} />
      </Section>
      <ProjectsSection projectToDelete={slug} />
    </>
  );
}

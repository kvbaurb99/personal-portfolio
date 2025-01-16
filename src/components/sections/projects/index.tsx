"use client";
import * as m from "@/paraglide/messages.js";
import { H2, Section } from "@/styles/main";
import Categories from "./elements/filter/Categories";
import {
  ProjectImage,
  ProjectImageContainer,
  ProjectTitle,
  ProjectGrid,
  ProjectItem,
  ProjectContent,
  ProjectDetailsList,
  ProjectDetailItem,
  StyledLink,
  ViewDetailsButton,
} from "./styles/projects";
import { AnimatePresence } from "framer-motion";
import { useProjectFilter } from "@/hooks/useProjectsFilterHook";
import { ArrowRight } from "lucide-react";

type Props = {
  projectToDelete?: "blogcms" | "vodcms" | "magro" | "takelink";
};

export default function ProjectsSection({ projectToDelete }: Props) {
  const { currentCategory, projectsData, handleCategoryChange } =
    useProjectFilter();

  const data = projectToDelete
    ? projectsData.filter((project) => project.slug_page !== projectToDelete)
    : projectsData;

  return (
    <Section id="projects">
      <H2>
        {projectToDelete
          ? m.przegladaj_pozostale_projekty()
          : m.wykonane_projekty()}
      </H2>
      <Categories
        currentCategory={currentCategory}
        setCurrentCategory={handleCategoryChange}
      />
      <ProjectGrid layout>
        <AnimatePresence>
          {data.map((project, index) => (
            <ProjectItem
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectContent>
                <ProjectImageContainer href={`/projekty/${project.slug_page}`}>
                  <ProjectImage
                    src={project.image}
                    quality={100}
                    alt={project.title}
                    title={project.title}
                    loading="lazy"
                    fill
                  />
                </ProjectImageContainer>
                <StyledLink href={`/projekty/${project.slug_page}`}>
                  <ProjectTitle>{project.title}</ProjectTitle>
                </StyledLink>
                <ProjectDetailsList>
                  {project.details.map((detail, index) => (
                    <ProjectDetailItem key={index}>
                      {detail.title}
                    </ProjectDetailItem>
                  ))}
                </ProjectDetailsList>
                <StyledLink href={`/projekty/${project.slug_page}`}>
                  <ViewDetailsButton>
                    <span>{m.zobacz_szczegoly()}</span>
                    <ArrowRight size={16} />
                  </ViewDetailsButton>
                </StyledLink>
              </ProjectContent>
            </ProjectItem>
          ))}
        </AnimatePresence>
      </ProjectGrid>
    </Section>
  );
}

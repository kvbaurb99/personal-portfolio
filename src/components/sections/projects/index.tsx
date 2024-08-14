"use client";
import { H2, Section } from "@/styles/main";
import Categories from "./elements/filter/Categories";
import {
  ProjectImage,
  ProjectImageContainer,
  ProjectTitle,
  ProjectGrid,
  ProjectItem,
  ProjectContent,
} from "./styles/projects";
import { AnimatePresence } from "framer-motion";
import { useProjectFilter } from "@/hooks/useProjectsFilterHook";

export default function ProjectsSection() {
  const { currentCategory, projectsData, handleCategoryChange } =
    useProjectFilter();

  return (
    <Section id="projects">
      <H2>Wykonane projekty</H2>
      <Categories
        currentCategory={currentCategory}
        setCurrentCategory={handleCategoryChange}
      />
      <ProjectGrid layout>
        <AnimatePresence>
          {projectsData.map((project, index) => (
            <ProjectItem
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectContent>
                <ProjectImageContainer>
                  <ProjectImage
                    src={project.image}
                    quality={100}
                    alt={project.title}
                    loading="lazy"
                    fill
                  />
                </ProjectImageContainer>
                <ProjectTitle>{project.title}</ProjectTitle>
              </ProjectContent>
            </ProjectItem>
          ))}
        </AnimatePresence>
      </ProjectGrid>
    </Section>
  );
}

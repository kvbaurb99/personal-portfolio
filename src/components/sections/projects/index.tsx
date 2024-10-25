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
  ProjectDetailsList,
  ProjectDetailItem,
} from "./styles/projects";
import { AnimatePresence } from "framer-motion";
import { useProjectFilter } from "@/hooks/useProjectsFilterHook";
import { Skill, SkillBottomLine } from "../skills/styles/skills";

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
                    title={project.title}
                    loading="lazy"
                    fill
                  />
                </ProjectImageContainer>
                <ProjectTitle>{project.title}</ProjectTitle>
                {/*}
                <div className="flex gap-2 mt-3">
                  {project.links.map((link, index) => (
                    <Skill
                      key={index}
                      $isLink
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.title}
                      <SkillBottomLine $isLink />
                    </Skill>
                  ))}
                </div>
                {*/}
                <ProjectDetailsList>
                  {project.details.map((detail, index) => (
                    <ProjectDetailItem key={index}>
                      {detail.title}
                    </ProjectDetailItem>
                  ))}
                </ProjectDetailsList>
              </ProjectContent>
            </ProjectItem>
          ))}
        </AnimatePresence>
      </ProjectGrid>
    </Section>
  );
}

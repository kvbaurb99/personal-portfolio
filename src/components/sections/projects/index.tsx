import { H2, Section } from "@/styles/main";
import Categories from "./elements/filter/Categories";
import { projects } from "@/data/sections/projects/data/projects";
import CustomImage from "@/assets/sections/projects/Untitled design (2).png";
import { ProjectImage, ProjectImageContainer } from "./styles/projects";

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <H2>Wykonane projekty</H2>
      <Categories />
      <div className="mt-8 grid grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectImageContainer>
              <ProjectImage
                src={CustomImage}
                alt={project.title}
                loading="lazy"
              />
            </ProjectImageContainer>
            <h3 className="poppins mt-2.5">{project.title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
}

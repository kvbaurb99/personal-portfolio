import { useState, useCallback } from "react";
import { useProjects } from "@/data/sections/projects/data/projects";

export const useProjectFilter = () => {
  const { projects } = useProjects();
  const [currentCategory, setCurrentCategory] = useState<string>("all");
  const [projectsData, setProjectsData] = useState(projects);

  const filterProjects = useCallback((category: string) => {
    if (category === "all") {
      setProjectsData(projects);
    } else {
      const filteredProjects = projects.filter(
        (project) => project.category === category
      );
      setProjectsData(filteredProjects);
    }
  }, []);

  const handleCategoryChange = useCallback(
    (newCategory: string) => {
      setCurrentCategory(newCategory);
      filterProjects(newCategory);
    },
    [filterProjects]
  );

  return {
    currentCategory,
    projectsData,
    handleCategoryChange,
  };
};

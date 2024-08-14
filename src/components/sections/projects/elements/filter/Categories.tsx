"use client";
import categories from "@/data/sections/projects/filters/categories.json";
import { CategoriesWrapper, CategoryButton } from "../../styles/projects";
import { CategoriesProps } from "@/types/projects";

export default function Categories({
  currentCategory,
  setCurrentCategory,
}: CategoriesProps) {
  return (
    <CategoriesWrapper>
      {categories.map((category, index) => (
        <CategoryButton
          key={index}
          $isActive={currentCategory === category.value}
          onClick={() => setCurrentCategory(category.value)}
        >
          {category.title}
        </CategoryButton>
      ))}
    </CategoriesWrapper>
  );
}

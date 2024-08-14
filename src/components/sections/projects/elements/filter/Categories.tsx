"use client";
import categories from "@/data/sections/projects/filters/categories.json";
import { CategoriesWrapper, CategoryButton } from "../../styles/projects";
import { useState } from "react";

export default function Categories() {
  const [currentCategory, setCurrentCategory] = useState<string>("all");
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

"use client";
import * as m from "@/paraglide/messages.js";
import { CategoriesWrapper, CategoryButton } from "../../styles/projects";
import { CategoriesProps } from "@/types/projects";

export default function Categories({
  currentCategory,
  setCurrentCategory,
}: CategoriesProps) {
  const categories = [
    {
      title: m.wszystko(),
      value: "all",
    },
    {
      title: m.wizytowki(),
      value: "landing-page",
    },
    {
      title: m.strony_cms(),
      value: "cms",
    },
  ];
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

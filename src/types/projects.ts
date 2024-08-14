import { z } from "zod";

const CategoriesPropsSchema = z.object({
  currentCategory: z.string(),
  setCurrentCategory: z.function(z.tuple([z.string()]), z.void()),
});

export type CategoriesProps = z.infer<typeof CategoriesPropsSchema>;

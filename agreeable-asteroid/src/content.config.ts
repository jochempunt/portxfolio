// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

const projectsC = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    tags:z.array(z.string()),
  }),
});

export const collections = {
  projects: projectsC,
};

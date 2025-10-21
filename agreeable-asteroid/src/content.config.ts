// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
import { Image } from 'astro:assets'; 

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

const projectsC = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/projects" }),
   schema: ({ image }) => z.object({  // Note: destructure image from the argument
    title: z.string(),
    description: z.string(),
    img: image(),  // Now image comes from the schema context
    tags: z.array(z.string()),
    prio: z.number(),
    github: z.string().optional(),
  }),
});


export const collections = {
  projects: projectsC,
};







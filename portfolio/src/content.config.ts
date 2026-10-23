import { defineCollection} from "astro:content";
import { z } from "astro/zod";
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


const experiencesC = defineCollection({
  loader: file("src/experiences/experiences.yaml"),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string().optional(),
    organization: z.string(),
    startDate: z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/),
    endDate: z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/).optional(),
    links: z.array(z.object({
      label: z.string(),
      href: z.string().regex(/^(\/[^/]|\/$|https?:\/\/)/),
    })).optional(),
  }),
});


export const collections = {
  projects: projectsC,
  experiences: experiencesC,
};







import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experience = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experience' }),
  schema: z.object({
    date: z.string(),
    title: z.string(),
    company: z.string(),
    location: z.string(),
    range: z.string(),
    url: z.string(),
    colorText: z.string().optional(),
    colorHeading: z.string().optional(),
    colorBackground: z.string().optional(),
    colorButton: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    heading: z.string(),
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    slides: z.array(z.object({
      label: z.string(),
      image: z.string(),
    })).optional(),
    links: z.object({
      website: z.string().optional(),
      github: z.string().optional(),
    }),
  }),
});

const sideProjects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/sideProjects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    links: z.object({
      website: z.string().optional(),
      github: z.string().optional(),
    }),
  }),
});

export const collections = { experience, projects, sideProjects };

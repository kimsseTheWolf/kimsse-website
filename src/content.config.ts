import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const works = defineCollection({
    loader: glob({
        pattern: '**/*.mdx',
        base: "./content/works"
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        cover: z.string().optional(),
        tags: z.array(z.string()).default([])
    })
})

export const collections = { works };
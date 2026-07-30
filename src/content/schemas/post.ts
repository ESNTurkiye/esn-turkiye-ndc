import { z } from "zod";

export const postMetadataSchema = z.object({
    title: z.string(),
    date: z.string(),
    status: z.enum(["active", "draft"]),
    slug: z.string(),
    author: z.string(),
    description: z.string(),
});

export const postSchema = z.object({
    slug: z.string(),
    metadata: postMetadataSchema,
    content: z.string(),
});

export type Post = z.infer<typeof postSchema>;

// src/content/schemas/testimony.ts
import { z } from "zod";

export const testimonySchema = z.object({
    id: z.number(),
    name: z.string(),
    country: z.string(),
    programme: z.enum(["Erasmus+", "ESC", "Other"]),
    visaOutcome: z.enum(["Approved", "Rejected", "Delayed", "Pending"]),
    title: z.string(),
    preview: z.string(),
    category: z.string(),
});

export type Testimony = z.infer<typeof testimonySchema>;

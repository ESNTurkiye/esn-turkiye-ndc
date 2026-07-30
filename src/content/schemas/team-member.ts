// src/content/schemas/team-member.ts
import { z } from "zod";

export const teamMemberSchema = z.object({
    name: z.string(),
    role: z.string(),
    image: z.string().url().optional(),
});

export type TeamMember = z.infer<typeof teamMemberSchema>;

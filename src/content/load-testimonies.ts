// src/content/load-testimonies.ts
import { testimonySchema } from "./schemas/testimony";
import { z } from "zod";
import rawTestimonies from "../../content/testimonies.json";

export function loadTestimonies() {
  return z.array(testimonySchema).parse(rawTestimonies);
}
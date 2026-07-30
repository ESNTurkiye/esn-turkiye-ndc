// src/content/load-posts.ts
import { postSchema } from "./schemas/post";
import { z } from "zod";
import rawPosts from "../../content/posts.json";

export function loadPosts() {
  return z.array(postSchema).parse(rawPosts);
}
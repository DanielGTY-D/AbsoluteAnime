import { z } from "zod";
import { AuthorSchema, AuthorsSchema } from "../../schemas/shared/Author.schema";

export type Author = z.infer<typeof AuthorSchema>;
export type Authors = z.infer<typeof AuthorsSchema>;
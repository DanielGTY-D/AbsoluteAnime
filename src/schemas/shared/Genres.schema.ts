import { z } from "zod";

export const GenreSchema = z.object({
  mal_id: z.number(),
  name: z.string(),
});

export const GenresSchema = z.array(GenreSchema);

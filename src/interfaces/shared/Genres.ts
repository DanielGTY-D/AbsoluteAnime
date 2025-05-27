import { GenreSchema, GenresSchema } from "../../schemas/shared/Genres.schema";
import { z } from "zod";

export type Genre = z.infer<typeof GenreSchema>;
export type Genres = z.infer<typeof GenresSchema>;

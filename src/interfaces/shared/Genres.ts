import GenreSchema from "../../schemas/shared/Genres.schema";
import { z } from "zod";

export type Genre = z.infer<typeof GenreSchema>;

import {z} from 'zod';
import { AnimeByGenreSchema, AnimeByGenreSchemaArray } from "../schemas/AnimeByGenre.schema";

export type AnimeByGenre = z.infer<typeof AnimeByGenreSchema>;
export type AnimeByGenreArray = z.infer<typeof AnimeByGenreSchemaArray>;

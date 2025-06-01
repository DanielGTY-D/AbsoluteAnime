import { z } from "zod";
import { AnimeSchemaArray, AnimeSchema, AnimeSchemaWithPagination } from "../schemas/Anime.schema";
import Anime from "../views/anime";

export type Anime = z.infer<typeof AnimeSchema>;
export type AnimeArray = z.infer<typeof AnimeSchemaArray>;
export type AnimeWithPagination = z.infer<typeof AnimeSchemaWithPagination>;
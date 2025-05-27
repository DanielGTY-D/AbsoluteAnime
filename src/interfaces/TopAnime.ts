import { z } from "zod";
import {
  TopAnimeSchemaArray,
  TopAnimeSchema,
} from "../schemas/TopAnime.schema";
import {
  TopMangaSchemaArray,
  TopMangaSchema,
} from "../schemas/TopManga.schema";

export type TopAnime = z.infer<typeof TopAnimeSchema>;
export type topAnimeArray = z.infer<typeof TopAnimeSchemaArray>;
export type TopManga = z.infer<typeof TopMangaSchema>;
export type topMangaArray = z.infer<typeof TopMangaSchemaArray>;

import { z } from "zod";
import {
  TopAnimeSchemaArray,
  TopAnimeSchema,
} from "../schemas/TopAnime.schema";
import {
  TopMangaSchemaArray,
  TopMangaSchema,
} from "../schemas/TopManga.schema";

export type ITopAnime = z.infer<typeof TopAnimeSchema>;
export type ItopAnimeArray = z.infer<typeof TopAnimeSchemaArray>;
export type ITopManga = z.infer<typeof TopMangaSchema>;
export type ItopMangaArray = z.infer<typeof TopMangaSchemaArray>;

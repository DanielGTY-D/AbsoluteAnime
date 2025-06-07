import { z } from "zod";
import { SearchAnimeSchema } from "./SearchAnime.schema";

export const AnimeByGenreSchema = SearchAnimeSchema;
export const AnimeByGenreSchemaArray = z.array(AnimeByGenreSchema);

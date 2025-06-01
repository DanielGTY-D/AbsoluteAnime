import { z } from "zod";
import { GenresSchema } from "./shared/Genres.schema";
import ImageSchema from "./shared/Image.schema";

const TopAnimeSchema = z.object({
  mal_id: z.number(),
  url: z.string(),
  title: z.string(),
  // title_english: z.string(),
  title_japanese: z.string(),
  episodes: z.number().nullable(),
  synopsis: z.string().nullable(),
  genres: GenresSchema,
  images: ImageSchema,
});

const TopAnimeSchemaArray = z.array(TopAnimeSchema);

export { TopAnimeSchema, TopAnimeSchemaArray };

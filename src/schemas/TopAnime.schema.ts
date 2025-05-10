import { z } from "zod";
import GenreSchema from "./shared/Genres.schema";
import ImageSchema from "./shared/Image.schema";

const TopAnimeSchema = z.object({
  mal_id: z.number(),
  url: z.string(),
  title: z.string(),
  // title_english: z.string(),
  title_japanese: z.string(),
  episodes: z.number(),
  synopsis: z.string(),
  genres: GenreSchema.array(),
  images: ImageSchema,
});

const TopAnimeSchemaArray = z.array(TopAnimeSchema);

export { TopAnimeSchema, TopAnimeSchemaArray };

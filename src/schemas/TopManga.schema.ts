import { z } from "zod";
import ImageSchema from "./shared/Image.schema";
import GenreSchema from "./shared/Genres.schema";

const TopMangaSchema = z.object({
  mal_id: z.number(),
  url: z.string(),
  images: ImageSchema,
  titel: z.string(),
  title_english: z.string(),
  title_japanse: z.string(),
  status: z.string(),
  synopsis: z.string(),
  genres: GenreSchema.array(),
});

const TopMangaSchemaArray = z.array(TopMangaSchema);

export { TopMangaSchema, TopMangaSchemaArray };

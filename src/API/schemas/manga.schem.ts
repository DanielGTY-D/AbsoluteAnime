import { z } from "zod";
import { ImageSchema } from "./shared/image.schema";

const TopMangaElemetSchema = z.object({
  mal_id: z.number(),
  url: z.string(),
  images: ImageSchema,
  title: z.string(),
  // title_english: z.string(),
  title_japanese: z.string(),
});

const TopMangaDataSchema = z.array(TopMangaElemetSchema);

export {
  TopMangaElemetSchema,
  TopMangaDataSchema
}

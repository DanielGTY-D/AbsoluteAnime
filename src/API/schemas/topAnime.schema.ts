import { z } from "zod";
import { ImageSchema } from "./shared/image.schema";
import { TitleSchema } from "./shared/titles.schema";
import { GenereSchema } from "./shared/generes.schema";
import { title } from "process";

const TopAnimeElementSchema = z.object({
	mal_id: z.number(),
	url: z.string(),
	airing: z.boolean(),
	episodes: z.number(),
	images: ImageSchema,
	titles: TitleSchema,
	genres: GenereSchema,
	title: z.string(),
	// title_english: z.string(),
	title_japanese: z.string(),
	synopsis: z.string(),
});

const TopAnimeDataSchema = z.array(TopAnimeElementSchema);

export { TopAnimeDataSchema, TopAnimeElementSchema };

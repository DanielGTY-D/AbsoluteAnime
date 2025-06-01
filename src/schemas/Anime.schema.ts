import {z} from 'zod';
import { TopAnimeSchema } from './TopAnime.schema';
import { TrailerSchema } from './shared/trailer.schema';


export const AnimeSchema = TopAnimeSchema.extend({
  trailer: TrailerSchema,
  rating: z.string().nullable(),
  airing: z.boolean().nullable(),
  score: z.number().nullable(),
})
export const AnimeSchemaArray = z.array(AnimeSchema);

export const AnimeSchemaWithPagination = z.object({
  pagination: z.object({
    last_visible_page: z.number(),
    has_next_page: z.boolean(),
    current_page: z.number(),
  }),
  data: AnimeSchemaArray,
})
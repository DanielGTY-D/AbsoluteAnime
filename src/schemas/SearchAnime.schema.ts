import {z} from 'zod';
import { TopAnimeSchema } from './TopAnime.schema';
import { TrailerSchema } from './shared/trailer.schema';


export const SearchAnimeSchema = TopAnimeSchema.extend({
  trailer: TrailerSchema,
  rating: z.string().nullable(),
  airing: z.boolean().nullable(),
  score: z.number().nullable(),
})
export const SearchAnimeSchemaArray = z.array(SearchAnimeSchema);

export const SearchAnimeSchemaWithPagination = z.object({
  pagination: z.object({
    last_visible_page: z.number(),
    has_next_page: z.boolean(),
    current_page: z.number(),
  }),
  data: SearchAnimeSchemaArray,
})
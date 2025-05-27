import {z} from 'zod';
import { TopAnimeSchema } from './TopAnime.schema';

export const AnimeByGenreSchema = TopAnimeSchema.omit({episodes: true})
export const AnimeByGenreSchemaArray = z.array(AnimeByGenreSchema);
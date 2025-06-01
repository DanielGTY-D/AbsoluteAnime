import {z} from 'zod';
import { AnimeSchema } from './Anime.schema';

export const AnimeByGenreSchema = AnimeSchema
export const AnimeByGenreSchemaArray = z.array(AnimeByGenreSchema);
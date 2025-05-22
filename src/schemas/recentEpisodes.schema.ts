import {z} from 'zod';
import ImageSchema from './shared/Image.schema';

const Entry = z.object({
  mal_id: z.number(),
  url: z.string(),
  images: ImageSchema,
  title: z.string()
});

const Episode = z.object({
  mal_id: z.number(),
  url: z.string(),
  title: z.string(),
});

const Episodes = z.array(Episode);

export const RecentEpisodeSchema = z.object({
  entry: Entry,
  episodes: Episodes 
})

export const RecentEpisodesSchema = z.array(RecentEpisodeSchema);


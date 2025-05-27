import {z} from 'zod';
import { RecentEpisodesSchema, RecentEpisodeSchema } from '../schemas/RecentEpisodes.schema';

export type RecentEpisode = z.infer<typeof RecentEpisodeSchema>;
export type RecentEpisodes = z.infer<typeof RecentEpisodesSchema>;
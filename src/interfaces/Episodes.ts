import {z} from 'zod';
import { EpisodeSchema, EpisodeSchemaArray } from "../schemas/Episodes.schema";


export type Episode = z.infer<typeof EpisodeSchema>;
export type EpisodeArray = z.infer<typeof EpisodeSchemaArray>;
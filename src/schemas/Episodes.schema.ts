import {z} from 'zod';


export const EpisodeSchema = z.object({
  mal_id: z.number(),
  title: z.string().nullable(),
  aired: z.string().nullable()
})

export const EpisodeSchemaArray = z.array(EpisodeSchema);
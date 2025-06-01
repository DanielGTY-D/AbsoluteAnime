import {z} from 'zod';

export const TrailerSchema = z.object({
  url: z.string().nullable(),
  embed_url: z.string().nullable(),
});
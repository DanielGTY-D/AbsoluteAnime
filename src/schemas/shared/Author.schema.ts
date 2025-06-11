import {z} from 'zod';

export const AuthorSchema = z.object({
  mal_id: z.number(),
  type: z.string(),
  name: z.string(),
  url: z.string()
})

export const AuthorsSchema = z.array(AuthorSchema);
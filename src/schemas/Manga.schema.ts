import {z} from 'zod';
import ImageSchema from './shared/Image.schema';


export const MangaSchema = z.object({
  mal_id: z.number(),
  images: ImageSchema,
  title: z.string().nullable(),
  chapters: z.number().nullable(),
  status: z.string().nullable(),
  score: z.number().nullable(),
  synopsis: z.string().nullable(),
})

export const MangasSchema = z.array(MangaSchema)

export const MangasWithPaginationSchema = z.object({
  data: MangasSchema,
  pagination: z.object({
    last_visible_page: z.number(),
    has_next_page: z.boolean(),
    current_page: z.number()
  })
})
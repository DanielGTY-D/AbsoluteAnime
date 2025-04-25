import { z } from 'zod';

export const ImageSchema = z.object({
  webp: z.object({
    image_url: z.string(),
    small_image_url: z.string(),
    large_image_url: z.string()
  })
})
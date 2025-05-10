import { z } from "zod";

const WebpImageSchema = z.object({
  image_url: z.string(),
  small_image_url: z.string(),
  large_image_url: z.string(),
});

const ImageSchema = z.object({
  webp: WebpImageSchema,
});

export default ImageSchema;

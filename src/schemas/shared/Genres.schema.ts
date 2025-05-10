import { z } from "zod";

const GenreSchema = z.object({
  mal_id: z.number(),
  name: z.string(),
});

export default GenreSchema;

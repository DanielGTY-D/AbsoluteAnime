import { array, z } from "zod";

export const GenereSchema = array(
	z.object({
		mal_id: z.number(),
		type: z.string(),
		name: z.string(),
		url: z.string(),
	})
);

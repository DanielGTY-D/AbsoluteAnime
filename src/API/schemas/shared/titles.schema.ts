import { z } from "zod";

export const TitleSchema = z.array(
	z.object({
		type: z.string(),
		title: z.string(),
	})
);

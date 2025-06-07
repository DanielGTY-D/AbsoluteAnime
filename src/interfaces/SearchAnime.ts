import { z } from "zod";
import {
	SearchAnimeSchema,
	SearchAnimeSchemaArray,
	SearchAnimeSchemaWithPagination,
} from "../schemas/SearchAnime.schema";

export type SearchAnime = z.infer<typeof SearchAnimeSchema>;
export type SearchAnimeArray = z.infer<typeof SearchAnimeSchemaArray>;
export type SearchAnimeWithPagination = z.infer<typeof SearchAnimeSchemaWithPagination>;

import {z} from 'zod';
import { MangaSchema, MangasSchema, MangasWithPaginationSchema } from '../schemas/Manga.schema';

export type Manga = z.infer<typeof MangaSchema>;
export type Mangas = z.infer<typeof MangasSchema>;
export type MangasWithPagination = z.infer<typeof MangasWithPaginationSchema>
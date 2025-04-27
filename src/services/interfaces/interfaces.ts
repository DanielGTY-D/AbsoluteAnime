import { z } from "zod";
import {
  TopAnimeDataSchema,
  TopAnimeElementSchema,
} from "../../API/schemas/topAnime.schema.ts";
import {
  TopMangaDataSchema,
  TopMangaElemetSchema,
} from "../../API/schemas/manga.schem.ts";

// intefaces

export interface BreackPointsProps {
  [key: string]: {
    slidesPerView: number;
    spaceBeteween?: number;
    grid?: { rows: number };
  };
}

export interface CustomSwiperProps {
  spacing: number;
  grid?: {
    rows: number;
  };
  slidesPerView: number;
  breackpoints: BreackPointsProps;
  autoplay: { delay: number };
  className?: string;
}

// types from schemas
export type TopAnimeElement = z.infer<typeof TopAnimeElementSchema>;
export type TopAnime = z.infer<typeof TopAnimeDataSchema>;
export type TopMangaElement = z.infer<typeof TopMangaElemetSchema>;
export type TopManga = z.infer<typeof TopMangaDataSchema>;


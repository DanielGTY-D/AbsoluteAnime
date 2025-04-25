import { z } from 'zod';
import { TopAnimeDataSchema, TopAnimeElementSchema } from '../../API/schemas/topAnime.schema.ts';

// intefaces

export interface BreackPointsProps {
  [key: string]: {slidesPerView: number; spaceBeteween: number};
}

export interface CustomSwiperProps {
  spacing: number;
  slidesPerView: number;
  breackpoints: BreackPointsProps;
  autoplay: {delay: number}
  className?: string
}

// types from schemas
export type TopAnimeElement = z.infer<typeof TopAnimeElementSchema>;
export type TopAnime = z.infer<typeof TopAnimeDataSchema>;
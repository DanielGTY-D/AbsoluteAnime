import { create } from 'zustand';
import { TopAnime, TopManga } from '../services/interfaces/interfaces';

interface AnimeStore {
  topAnime: TopAnime | [];
  topManga: TopManga | [];
  setTopAnime: (topAnime: TopAnime) => void;
  setTopManga: (topManga: TopManga) => void;
}

export const useAnimeStore = create<AnimeStore>((set) => ({
  topAnime: [],
  topManga: [],
  setTopManga: (data: TopManga) => set(() => ({ topManga: data })),
  setTopAnime: (data: TopAnime) => set(() => ({ topAnime: data })),
}))
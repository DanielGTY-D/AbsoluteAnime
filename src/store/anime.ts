import { create } from 'zustand';
import { TopAnime } from '../services/interfaces/interfaces';

interface AnimeStore {
  topAnime: TopAnime | [];
  setTopAnime: (topAnime: TopAnime) => void;
}

export const useAnimeStore = create<AnimeStore>((set) => ({
  topAnime: [],
  setTopAnime: (data: TopAnime) => set(() => ({ topAnime: data }))
}))
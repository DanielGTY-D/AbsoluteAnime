import { topAnimeArray } from "../interfaces/TopAnime";
import { RecentEpisodes } from "../interfaces/recentEpisodes";
import { Genre } from "../interfaces/shared/Genres";
import { StateCreator } from 'zustand';

export interface AnimeSliece {
  topAnimeList: topAnimeArray;
  genresList: Genre[];
  recentEpisodesList: RecentEpisodes,
  setAnimeList: (animeList: topAnimeArray) => void;
  setGenresList: (genresList: Genre[]) => void;
  setRecentEpisodesList: (recentEpisodes: RecentEpisodes) => void;
}

const useAnimeSlice: StateCreator<AnimeSliece> = (set) => ({
  topAnimeList: [],
  recentEpisodesList: [],
  genresList: [],
  setAnimeList: (animeList) => set({ topAnimeList: animeList }),
  setGenresList: (genresList) => set({ genresList }),
  setRecentEpisodesList: (recentEpisodesList) => {
    set({ recentEpisodesList });
  },
})

export default useAnimeSlice;

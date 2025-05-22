import { ItopAnimeArray } from "../interfaces/TopAnime";
import { RecentEpisodes } from "../interfaces/recentEpisodes";
import { Genre } from "../interfaces/shared/Genres";
import { StateCreator } from 'zustand';

export interface AnimeSliece {
  topAnimeList: ItopAnimeArray;
  genresList: Genre[];
  recentEpisodesList: RecentEpisodes,
  setAnimeList: (animeList: ItopAnimeArray) => void;
  setGenresList: (genresList: Genre[]) => void;
  setRecentEpisodesList: (recentEpisodes: RecentEpisodes) => void;
}

const useAnimeSlice: StateCreator<AnimeSliece> = (set) => ({
  topAnimeList: [],
  setAnimeList: (animeList) => set({ topAnimeList: animeList }),
  genresList: [],
  setGenresList: (genresList) => set({ genresList }),
  recentEpisodesList: [],
  setRecentEpisodesList: (recentEpisodesList) => {
    set({recentEpisodesList})
  }
}) 

export default useAnimeSlice;

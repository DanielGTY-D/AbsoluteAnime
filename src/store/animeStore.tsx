import { create } from "zustand";
import { ItopAnimeArray } from "../interfaces/TopAnime";
import { Genre } from "../interfaces/shared/Genres";
import { devtools } from "zustand/middleware";

interface AnimeStore {
  topAnimeList: ItopAnimeArray;
  setAnimeList: (animeList: ItopAnimeArray) => void;
  genresList: Genre[];
  setGenresList: (genresList: Genre[]) => void;
}

const useAnimeStore = create<AnimeStore>()(
  devtools((set) => ({
    topAnimeList: [],
    genresList: [],
    setAnimeList: (topAnimeList: ItopAnimeArray) => {
      set({ topAnimeList });
    },
    setGenresList: (genres: Genre[]) => {
      set({ genresList: genres });
    },
  })),
);

export default useAnimeStore;

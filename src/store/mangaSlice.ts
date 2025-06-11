import { StateCreator } from 'zustand';
import { Mangas } from '../interfaces/Manga';

export interface MangaSlice {
  mangaList: Mangas,
  setMangaList: (Mangas: Mangas) => void;
}

const useMangaSlice: StateCreator<MangaSlice> = (set) => ({
  mangaList: [],
  setMangaList: (mangaList) => {
    set(({mangaList: mangaList}))
  }
})

export default useMangaSlice;
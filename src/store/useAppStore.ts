import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { AnimeSliece } from "./animeSlice";
import useAnimeSlice from "./animeSlice";
import { useUtilSlice, UtilSlice } from "./utilSlice";
import useMangaSlice, { MangaSlice } from "./mangaSlice";

export const useAppStore = create<AnimeSliece & UtilSlice & MangaSlice>()(
	devtools((...a) => ({
		...useAnimeSlice(...a),
		...useUtilSlice(...a),
		...useMangaSlice(...a)
	}))
);

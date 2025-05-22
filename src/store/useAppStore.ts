import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { AnimeSliece } from "./animeSlice";
import useAnimeSlice from "./animeSlice";
import { useUtilSlice, UtilSlice } from "./utilSlice";

export const useAppStore = create<AnimeSliece & UtilSlice>()(
	devtools((...a) => ({
		...useAnimeSlice(...a),
		...useUtilSlice(...a),
	}))
);

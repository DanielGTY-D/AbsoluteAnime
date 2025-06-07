import instance from "../axios/index.ts";
import { AnimeByGenreSchemaArray } from "../schemas/AnimeByGenre.schema.ts";
import { RecentEpisodesSchema } from "../schemas/RecentEpisodes.schema.ts";
import { GenresSchema } from "../schemas/shared/Genres.schema.ts";
import { TopAnimeSchemaArray } from "../schemas/TopAnime.schema.ts";
import { useAppStore } from "../store/useAppStore.ts";
import {
	SearchAnimeSchema,
	SearchAnimeSchemaWithPagination,
} from "../schemas/SearchAnime.schema.ts";
import { AnimeWithPagination } from "../interfaces/SearchAnime.ts";
import { EpisodeSchemaArray } from "../schemas/Episodes.schema.ts";
import { data } from 'react-router-dom';

const useAnime = () => {
	const setTopAnimeList = useAppStore((state) => state.setAnimeList);
	const setGenresList = useAppStore((state) => state.setGenresList);
	const setRecentEpisodes = useAppStore((state) => state.setRecentEpisodesList);

	const fetchTopAnime = async () => {
		try {
			const response = await instance.get("/top/anime");
			const result = TopAnimeSchemaArray.safeParse(response.data.data);

			if (result.success) {
				setTopAnimeList(result.data);
				return;
			}
		} catch (err: unknown) {
			if (err.response.status === 429 || err.status === 429) {
				return new Promise((resolve) => {
					setTimeout(() => {
						const data = fetchTopAnime();
						resolve(data);
					}, 500);
				});
			}
			console.error("Error fetching top anime:", err);
		}
	};

	const fetchAnimeGenres = async () => {
		try {
			const response = await instance.get("/genres/anime?sfw-true");
			const result = GenresSchema.safeParse(response.data.data);
			if (result.success) {
				setGenresList(result.data);
				return;
			}
			console.error("Error parsing anime genres:", result.error);
		} catch (err) {
			console.error("Error fetching anime genres:", err);
		}
	};

	const fetchRecentEpisodes = async () => {
		try {
			const response = await instance.get("/watch/episodes");
			const result = RecentEpisodesSchema.safeParse(response.data.data);
			if (result.success) {
				setRecentEpisodes(result.data);
				return;
			}
			console.error("Error parsing recent episodes:", result.error);
		} catch (error) {
			console.error("Error fetching recent episodes:", error);
		}
	};

	const fetchAnimeByGenre = async (
		genre: number,
		limit = 12
	): Promise<unknown> => {
		try {
			const response = await instance.get(`/anime`, {
				params: {
					genres: genre,
					limit: limit,
				},
			});
			// Manejo de error 429 desde la respuesta
			if (response.status === 429) {
				return new Promise((resolve) => {
					setTimeout(() => {
						const data = fetchAnimeByGenre(genre);
						resolve(data);
					}, 500);
				});
			}
			const result = AnimeByGenreSchemaArray.safeParse(response.data.data);
			if (result.success) {
				return result.data;
			}
			console.error("Error parsing anime by genre:", result.error);
		} catch (error: unknown) {
			// Manejo de error 429 desde el catch
			if (typeof error === "object" && error !== null && error.status === 429) {
				return new Promise((resolve) => {
					setTimeout(() => {
						const data = fetchAnimeByGenre(genre);
						resolve(data);
					}, 500);
				});
			}
			console.error("Error fetching anime by genre:", error);
		}
	};

	const fetchAnime = async (
		genre?: number | number[] | null,
		q?: string,
		currePage: number = 1
	): Promise<AnimeWithPagination> => {
		try {
			const response = await instance.get(`/anime`, {
				params: {
					...(genre && { genres: Array.isArray(genre) ? genre.join(",") : genre }),
					...(q && { q: q }),
					...(currePage > 1 && { page: currePage }),
					sfw: true,
				},
			});
			const result = SearchAnimeSchemaWithPagination.safeParse(response.data);
			if (result.success) {
				return result.data;
			}

			console.error(result.error);

			// throw new Error("No se pudieron pedir los anime a traves del anime fetch")
		} catch (error) {
			console.error(error);
			// throw new Error("Can't fetch anime data");
		}
		return {
			data: [],
			pagination: {
				current_page: 0,
				has_next_page: false,
				last_visible_page: 0,
			},
		};
	};

	const fetchAnimeById = async (id: number): Promise<AnimeWithPagination> => {
		try {
			const response = await instance.get(`/anime/${id}`);
			const result = SearchAnimeSchema.safeParse(response.data.data);
			if (result.success) {
				return result.data;
			}

			console.error("Error parsing anime by ID:", result.error);
		} catch (error) {
			console.error("Error fetching anime by ID:", error);
		}
		return {
			data: [],
			pagination: {
				current_page: 0,
				has_next_page: false,
				last_visible_page: 0,
			},
		};
	};

	const fetchEpisodesByAnime = async (id: string) => {
		try {
			const response = await instance.get(`/anime/${id}/episodes`);
			const result = EpisodeSchemaArray.safeParse(response.data.data);

			if (result.success) {
				return result.data;
			}
			console.log(result.error);
		} catch (error) {
			console.log(error);
		}
	};

	return {
		fetchTopAnime,
		fetchAnimeGenres,
		fetchRecentEpisodes,
		fetchAnimeByGenre,
		fetchAnime,
		fetchAnimeById,
		fetchEpisodesByAnime,
	};
};

export default useAnime;

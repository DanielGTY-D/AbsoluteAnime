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
import { EpisodeSchemaArray } from "../schemas/Episodes.schema.ts";
import { SearchAnime, SearchAnimeWithPagination } from "../interfaces/SearchAnime.ts";

const useAnime = () => {
	const setTopAnimeList = useAppStore((state) => state.setAnimeList);
	const setGenresList = useAppStore((state) => state.setGenresList);
	const setRecentEpisodes = useAppStore((state) => state.setRecentEpisodesList);

	const fetchTopAnime = async () => {
		try {
			const response = await instance.get("/top/anime");

			if (response.status === 200) {
				const result = TopAnimeSchemaArray.safeParse(response.data.data);

				if (result.success) {
					setTopAnimeList(result.data);
					return;
				}
				console.error("error parsing fetch data", result.error);
				return;
			}
			console.log("Error meanwhile fetching data of top anime");
		} catch (err: unknown) {
			if (
				typeof err === "object" &&
				err !== null &&
				"status" in err &&
				(err as { status?: number }).status === 429
			) {
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
			if (response.status === 200) {
				const result = GenresSchema.safeParse(response.data.data);
				if (result.success) {
					setGenresList(result.data);
					return;
				}
				console.error("Error parsing anime genres:", result.error);
				return;
			}
			console.error("Error meanwhile fetching anime genres");
		} catch (err) {
			console.error("Error fetching anime genres:", err);
		}
	};

	const fetchRecentEpisodes = async () => {
		try {
			const response = await instance.get("/watch/episodes");
			if (response.status === 200) {
				const result = RecentEpisodesSchema.safeParse(response.data.data);
				if (result.success) {
					setRecentEpisodes(result.data);
					return;
				}
				console.error("cannot parse data of recent episodes", result.error);
				return;
			}
			console.error("Error meanwhile fetching data");
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
			if (response.status === 200) {
				const result = AnimeByGenreSchemaArray.safeParse(response.data.data);
				if (result.success) {
					return result.data;
				}
				console.error("Error parsing anime by genre:", result.error);
				return;
			}
			console.error("Error meanwhile fetching data of anime by genre");
		} catch (error: unknown) {
			// Manejo de error 429 desde el catch
			if (
				typeof error === "object" &&
				error !== null &&
				"status" in error &&
				(error as { status?: number }).status === 429
			) {
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
	): Promise<SearchAnimeWithPagination> => {
		try {
			const response = await instance.get(`/anime`, {
				params: {
					...(genre && { genres: Array.isArray(genre) ? genre.join(",") : genre }),
					...(q && { q: q }),
					...(currePage > 1 && { page: currePage }),
					sfw: true,
				},
			});

			if (response.status === 200) {
				const result = SearchAnimeSchemaWithPagination.safeParse(response.data);
				if (result.success) {
					return result.data;
				}

				console.error(result.error);
				return {} as SearchAnimeWithPagination
			}
			console.error("error meanwhile fetching data");
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

	const fetchAnimeById = async (id: number): Promise<SearchAnime> => {
		try {
			const response = await instance.get(`/anime/${id}`);
			if (response.status === 200) {
				const result = SearchAnimeSchema.safeParse(response.data.data);
				if (result.success) {
					return result!.data;
				}

				console.error("Error parsing anime by ID:", result.error);
				return {} as SearchAnime
			}

			console.error("Error meanwhile fetching data of anime by id");
		} catch (error) {
			console.error("Error fetching anime by ID:", error);
		}

		return {} as SearchAnime
	};

	const fetchEpisodesByAnime = async (id: string) => {
		try {
			const response = await instance.get(`/anime/${id}/episodes`);

			if (response.status === 200) {
				const result = EpisodeSchemaArray.safeParse(response.data.data);
				if (result.success) {
					return result.data;
				}
				console.log(result.error);
				return;
			}

			console.error("Error meanwhile fetching data of Episodes by anime");
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

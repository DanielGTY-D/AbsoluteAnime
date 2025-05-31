import instance from "../axios/index.ts";
import { AnimeByGenreSchemaArray } from "../schemas/AnimeByGenre.schema.ts";
import { RecentEpisodesSchema } from "../schemas/RecentEpisodes.schema.ts";
import { GenresSchema } from "../schemas/shared/Genres.schema.ts";
import { TopAnimeSchemaArray } from "../schemas/TopAnime.schema";
import { useAppStore } from "../store/useAppStore.ts";

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
			} else {
				console.error(result.error);
			}
		} catch (err: unknown) {
			if (err.response.status === 429) {
				return new Promise((resolve) => {
					setTimeout(() => {
						const data = fetchTopAnime();
						resolve(data);
					}, 500);
				});
			}
			console.error(err);
		}
	};

	const fetchAnimeGenres = async () => {
		try {
			const response = await instance.get("/genres/anime?sfw-true");
			const result = GenresSchema.safeParse(response.data.data);
			if (result.success) {
				setGenresList(result.data);
			}
		} catch (err) {
			console.error(err);
		}
	};

	const fetchRecentEpisodes = async () => {
		try {
			const response = await instance.get("/watch/episodes");
			const result = RecentEpisodesSchema.safeParse(response.data.data);
			if (result.success) {
				setRecentEpisodes(result.data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const fetchAnimeByGenre = async (
		genre: number,
		limit = 12
	): Promise<unknown> => {
		try {
			const response = await instance.get(`anime?genres=${genre}&limit=${limit}`);
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
		} catch (error: unknown) {
			// Manejo de error 429 desde el catch
			if (error.response.status === 429) {
				return new Promise((resolve) => {
					setTimeout(() => {
						const data = fetchAnimeByGenre(genre);
						resolve(data);
					}, 500);
				});
			}
			throw new Error("Fallo al pedir animes por genero");
		}
	};

	return {
		fetchTopAnime,
		fetchAnimeGenres,
		fetchRecentEpisodes,
		fetchAnimeByGenre,
	};
};

export default useAnime;

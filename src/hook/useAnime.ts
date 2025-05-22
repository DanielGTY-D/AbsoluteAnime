import instance from "../axios/index.ts";
import { RecentEpisodesSchema } from "../schemas/recentEpisodes.schema.ts";
import { GenresSchema } from "../schemas/shared/Genres.schema.ts";
import { TopAnimeSchemaArray } from "../schemas/TopAnime.schema";
import { useAppStore } from "../store/useAppStore.ts";

const useAnime = () => {
  const setTopAnimeList = useAppStore((state) => state.setAnimeList);
  const setGenresList = useAppStore((state) => state.setGenresList);
  const setRecentEpisodes = useAppStore( state => state.setRecentEpisodesList);
  const fetchTopAnime = async () => {
    try {
      const response = await instance.get("/top/anime");
      const result = TopAnimeSchemaArray.safeParse(response.data.data);

      if (result.success) {
        setTopAnimeList(result.data);
      } else {
        console.error(result.error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchAnimeGenres = async () => {
    try {
      const response = await instance.get("/genres/anime");
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
      if(result.success) {
        setRecentEpisodes(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return {
    fetchTopAnime,
    fetchAnimeGenres,
    fetchRecentEpisodes,
  };
};

export default useAnime;

import instance from "../axios/index.ts";
import GenreSchema from "../schemas/shared/Genres.schema.ts";
import { TopAnimeSchemaArray } from "../schemas/TopAnime.schema";
import useAnimeStore from "../store/animeStore";

const useAnime = () => {
  const setTopAnimeList = useAnimeStore((state) => state.setAnimeList);
  const setGenresList = useAnimeStore((state) => state.setGenresList);
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
      const result = GenreSchema.safeParse(response.data.data);

      if (result.success) {
        setGenresList(result.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return {
    fetchTopAnime,
    fetchAnimeGenres,
  };
};

export default useAnime;

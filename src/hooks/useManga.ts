import axios from 'axios';
import { MangasWithPaginationSchema } from '../schemas/Manga.schema';
import { MangasWithPagination } from '../interfaces/Manga';

const useManga = () => {
  const fetchManga = async (id?: number, page: number = 1) : Promise<MangasWithPagination> => {
    try {
      const response = await axios("https://api.jikan.moe/v4/manga", {
        params: {
          ...(id && {id}),
          ...(page && {page})
        }
      })

      if(response.status === 200) {
        const result = MangasWithPaginationSchema.safeParse(response.data)
        if(result.success) {
          return result.data;
        }
        console.error("cannot parse manga data", result.error);
        return {} as MangasWithPagination
      }

      console.error("Error menawhile fetching manga data")
    } catch (error) {
      console.error("Error menawhile fetching manga data", error)
    }

    return {} as MangasWithPagination
  }

  return {
    fetchManga
  }
}

export default useManga;
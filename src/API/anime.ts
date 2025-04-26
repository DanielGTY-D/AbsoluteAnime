import axios from 'axios';
import { TopAnimeDataSchema } from './schemas/topAnime.schema';
import { TopAnime } from '../services/interfaces/interfaces';
import baseAPI from '../services/axios/axios';

const FetchTopAnime = async () : Promise<TopAnime> => {
  try {
    const response = await baseAPI.get("/top/anime");
    const result = TopAnimeDataSchema.safeParse(response.data.data);
    if(result.success) {
      return result.data;
    }
    throw new Error("Invalid data format");
  } catch (error) {
    console.log("Error fetching top anime:", error);
    throw new Error("Failed to fetch top anime");
  }
}

export {
  FetchTopAnime
}
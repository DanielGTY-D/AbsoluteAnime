import axios from 'axios';
import { TopAnimeDataSchema } from './schemas/topAnime.schema';
import { TopAnime } from '../services/interfaces/interfaces';

const instance = axios.create({
  baseURL: `https://api.jikan.moe/v4`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
})

const fetchTopAnime = async () : Promise<TopAnime> => {
  try {
    const response = await instance.get("/top/anime");
    const result = TopAnimeDataSchema.safeParse(response.data.data);

    if(result.success) {
      return result.data;
    }
    console.log(result.error)
    throw new Error("Invalid data format");
  } catch (error) {
    console.log("Error fetching top anime:", error);
    throw new Error("Failed to fetch top anime");
  }
}

export {
  fetchTopAnime
}
import baseAPI from "../services/axios/axios";
import {TopMangaDataSchema } from "./schemas/manga.schem";

const FetchTopManga = async () => {
  try {
    const response = await baseAPI.get("/top/manga");
    const result = TopMangaDataSchema.safeParse(response.data.data);
    if(result.success) {
      return result.data;
    }
    throw new Error("Expected data from api failed, it comes in manga")
  } catch (err) {    
    throw new Error('falide to fetch top manga')
  }
}

export {
  FetchTopManga
}
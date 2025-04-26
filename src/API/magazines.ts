import baseAPI from "../services/axios/axios";

const FetchMagazines = async () => {
  try {
    const response = await baseAPI.get("magaznes")
  } catch (error) {
    
  }
}

export {
  FetchMagazines
}
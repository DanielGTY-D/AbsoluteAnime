import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAnime from "../hooks/useAnime";
import { AnimeWithPagination } from "../interfaces/Anime";

const Anime = () => {
  const [anime, setAnime] = useState<AnimeWithPagination["data"]>();
  const { fetchAnime } = useAnime();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const animeId = searchParams.get("animeId");
  
  const getData = async () => {
    try {
      if(!animeId) return;

      const response = await fetchAnime(parseInt(animeId));
      setAnime(response.data);
      console.log("Anime data:", response.data);

      if(!response?.data.length) navigate("/not-found");
    } catch (error) {
      console.log("Error fetching anime data:", error);
    }
    
  } 

  useEffect(() => {
    getData();
  }, [animeId])
  return (
    <main className="main-content contenedor">
      <div className="anime">
        <header className="header">
          <img className="header__img" src={""} alt="" />
        </header>
      </div>
    </main>
  );
};

export default Anime;
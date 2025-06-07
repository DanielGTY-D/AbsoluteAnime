import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAnime from "../hooks/useAnime";
import { SearchAnime } from "../interfaces/SearchAnime";
import { EpisodeArray } from "../interfaces/Episodes";
import Button from "../components/UI/Button/Button";

const Anime = () => {
  const [anime, setAnime] = useState<SearchAnime>();
  const [episodes, setEpisodes] = useState<EpisodeArray>();
  const { fetchAnimeById, fetchEpisodesByAnime } = useAnime();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const animeId = searchParams.get("animeId");

  const getData = async () => {
    try {
      if (!animeId) return;

      const animeResponse = await fetchAnimeById(parseInt(animeId));
      setAnime(animeResponse);
      const episodesResponse = await fetchEpisodesByAnime(animeId);
      setEpisodes(episodesResponse);

      if (!animeResponse?.data.length) navigate("/not-found");
    } catch (error) {
      console.log("Error fetching anime data:", error);
    }
  }

  const dateFromater = (date: string) => {
    const newDateObj = new Date(date);
    const formatedDate = newDateObj.toLocaleDateString('es-US', {
      day: "2-digit",
      month: "long",
      year: "numeric"
    })

    return formatedDate.replace("/", "de");
  }

  useEffect(() => {
    getData();
  }, [animeId])
  return (
    <main className="main-content contenedor">
      <div className="anime">
        <header className="header">
          <img className="header__img" src={anime?.images.webp.large_image_url} alt={anime?.title} />

          <div className="header__content">
            <p className="header__description">{anime?.synopsis}</p>

            <div className="header__tools">
              <Button text="See Trailer" type="1"/>

              <Button text="add to favorites" type="1"/>
            </div>
          </div>
        </header>

        <main className="anime__info">
          <h3>Episodes</h3>
          <ul className="episodes">
            {
              episodes?.map( episode => (
                <li key={episode.mal_id} className="episodes__item">
                  <p>{episode.title} - <span>{dateFromater(episode.aired)}</span></p>
                </li>
              ))
            }
          </ul>
        </main>
      </div>
    </main>
  );
};

export default Anime;
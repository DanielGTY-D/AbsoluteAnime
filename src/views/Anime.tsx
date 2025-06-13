import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAnime from "../hooks/useAnime";
import { SearchAnime } from "../interfaces/SearchAnime";
import { EpisodeArray } from "../interfaces/Episodes";
import Button from "../components/UI/Button/Button";
import Youtube from "react-youtube";
import ReactPlayer from "react-player";


const Anime = () => {
  const [anime, setAnime] = useState<SearchAnime>();
  const [episodes, setEpisodes] = useState<EpisodeArray>();
  const { fetchAnimeById, fetchEpisodesByAnime } = useAnime();
  const [trailerId, setTrailerId] = useState("");
  const videoRef = useRef<HTMLDivElement>(null);
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


      if (!Object.values(animeResponse).length) navigate("/not-found");
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

  const moveScrollToVideo = () => {
    getTrailerId()
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  }

  const getTrailerId = () => {
    const idVideo = anime!.trailer.url!.split("=")[1];
    setTrailerId(idVideo)
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
            <p className="header__description">Description: <span>{anime?.synopsis}</span></p>

            <div className="header__tools">
              <Button text="See Trailer" type="1" action={moveScrollToVideo} />

              <Button text="add to favorites" type="1" />
            </div>
          </div>
        </header>

        <main className="anime__info">
          <h3>Episodes</h3>
          <ul className="episodes">
            {
              episodes?.map(episode => (
                <li key={episode.mal_id} className="episodes__item">
                  <p>{episode.title} </p>
                  <span>{episode.aired ? dateFromater(episode.aired) : "Unknown date"}</span>
                </li>
              ))
            }
          </ul>
        </main>
      </div>

      {
        trailerId.length ? (
          <div className="trailer" ref={videoRef}>
            <Youtube
              videoId={trailerId}
              opts={{
                height: "390",
                widht: "640",
                playersVars: {
                  Autoplay: 1
                }
              }}
              onReady={event => event.target.pauseVideo()}
            />
          </div>
        ) : (<></>)
      }

      <ReactPlayer 
        url={"https://hianimez.to/watch/naruto-shippuden-355?ep=7882"}
        controls
        height={200}
        width={200}
        volume={20}
      />
    </main>
  );
};

export default Anime;
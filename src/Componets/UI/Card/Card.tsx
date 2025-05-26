import { Link } from "react-router-dom";
import { RecentEpisode } from "../../../interfaces/recentEpisodes";
import "./_Card.scss";

interface CardProps {
  data: RecentEpisode;
}

const Card = ({ data }: CardProps) => {
  return (
    <article className="card">
      <Link
        to={`/anime?aniemId=${data.entry.mal_id}`}
        className="card__image-container"
      >
        <img
          src={data.entry.images.webp.large_image_url}
          alt={data.entry.title}
          loading="lazy"
          className="card__image"
        />
      </Link>

      <div className="card__content">
        <h2 className="card__title">{data.entry.title}</h2>
      </div>

      <div className="info-box">
        {data.episodes.map((episodesData) => (
          <Link
            to={`/anime?animeId=${data.entry.mal_id}`}
            className="info-box__text"
            key={episodesData.mal_id}
          >
            {episodesData.title}
          </Link>
        ))}
      </div>
    </article>
  );
};

export default Card;

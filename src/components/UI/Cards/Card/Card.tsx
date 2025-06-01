import "./_Card.scss";
import { Link } from "react-router-dom";
import { RecentEpisode } from "../../../../interfaces/recentEpisodes";


interface CardProps {
  episodes: RecentEpisode;
}

const Card = ({ episodes }: CardProps) => {
  return (
    <article className="card">
      <Link
        to={`/anime?aniemId=${episodes.entry.mal_id}`}
        className="card__image-container"
      >
        <img
          src={episodes.entry.images.webp.large_image_url}
          alt={episodes.entry.title}
          loading="lazy"
          className="card__image"
        />
      </Link>

      <div className="card__content">
        <h2 className="card__title">{episodes.entry.title}</h2>
      </div>

      <div className="info-box">
        <p>Recent episodess</p>
        {episodes.episodes.map((episode) => (
          <Link
            to={`/anime?animeId=${episodes.entry.mal_id}`}
            className="info-box__text"
            key={episode.mal_id}
          >
            {episode.title}
          </Link>
        ))}
      </div>
    </article>
  );
};

export default Card;

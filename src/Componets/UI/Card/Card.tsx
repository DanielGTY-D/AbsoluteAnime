import { Link } from "react-router-dom";
import { RecentEpisode } from "../../../interfaces/recentEpisodes";
import "./_Card.scss";

interface CardProps {
	data: RecentEpisode;
}

const Card = ({ data }: CardProps) => {
	return (
		<article className="card">
			<Link to={`/`} className="card__link">
				<div className="card__image-container">
					<img
						src={data.entry.images.webp.large_image_url}
						alt={data.entry.title}
						loading="lazy"
						className="card__image"
					/>
				</div>

				<div className="card__content">
					<h2 className="card__title">{data.entry.title}</h2>
				</div>

				<div className="info-box">
					{data.episodes.map((data) => (
						<p className="info-box__text" key={data.mal_id}>{data.title}</p>
					))}
				</div>
			</Link>
		</article>
	);
};

export default Card;

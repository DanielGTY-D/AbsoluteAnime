import "./_CardTwo.scss";
import { Link } from "react-router-dom";
import { AnimeByGenre } from "../../../../interfaces/AnimeByGenre";

interface CardTwoProps {
	data: AnimeByGenre;
}

const CardTwo = ({ data }: CardTwoProps) => {
	return (
		<div className="card-two" id={data.mal_id.toString()}>
			<Link
				to={`/anime?animeId=${data.mal_id}`}
				className="card-two__image-container"
			>
				<img
					className="card-two__img"
					src={data.images.webp.large_image_url}
					alt={`${data.title}`}
					loading="lazy"
				/>
			</Link>

			<div className="card-two__content">
				<Link to={`/anime?animeId=${data.mal_id.toString()}`}>
					<h3 className="card-two__title">{data.title}</h3>
				</Link>

				<ul className="card-two__genre-list">
					{data.genres.map((genre) => (
						<Link
							key={genre.mal_id}
							to={`/anime-list?genreId=${genre.mal_id}`}
							className="card-two__genre"
							aria-label={`se more about ${genre.name}`}
						>
							<li>{genre.name}</li>
						</Link>
					))}
				</ul>

				<div
					className="card-two__desc-container"
					aria-label="scroll to see more about it"
				>
					<p className="card-two__desc-caption">Synopsis:</p>
					<p className="card-two__desc">{data.synopsis}</p>
				</div>

				<Link
					to={`/anime?animeId${data.mal_id}`}
					type="button"
					className="card-two__button"
				>
					See More
				</Link>
			</div>
		</div>
	);
};
export default CardTwo;

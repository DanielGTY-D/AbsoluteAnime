import "./_card-manga.scss";
import { Link } from "react-router-dom";
import { Manga } from "../../../../interfaces/Manga";

interface CardTreeProps {
  data: Manga
}

const CardManga = ({ data }: CardTreeProps) => {
  return (
    <Link to={`/anime?animeId=${data.mal_id}`} className="card-tree__link">
      <article className="card-tree">
        <div className="card-tree__img-container">
          <img className="card-tree__img" src={data.images.webp.large_image_url} alt={data.title ? data.title : ""} loading="lazy" />
        </div>

        <div className="card-tree__content">
          <p className="card-tree__airign">{data.status ? "Currently Airign" : "Finished"}</p>

          <div className="card-tree__header">
            <h3 className="card-tree__title">{data.title}</h3>

            <p className="card-tree__ep">Ep:{data.chapters!}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CardManga;
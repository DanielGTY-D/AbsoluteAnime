import "./_CardTree.scss";
import { Anime } from "../../../../interfaces/Anime";

interface CardTreeProps {
  data: Anime
}

const CardTree = ({data} : CardTreeProps) => {
  return (
    <article className="card-tree">
      <div className="card-tree__img-container">
        <img className="card-tree__img" src={data.images.webp.large_image_url} alt={data.title} loading="lazy"/>
      </div>

      <div className="card-tree__content">
        <p className="card-tree__airign">{data.airing ? "Currently Airign" : "Finished"}</p>

        <div className="card-tree__header">
          <h3 className="card-tree__title">{data.title}</h3>

          <p className="card-tree__ep">Ep:{data.episodes}</p>
        </div>
      </div>
    </article>
  );
};

export default CardTree;
import { AnimeByGenreArray } from "../../../../interfaces/AnimeByGenre";

interface CardTwoProps {
  data: AnimeByGenreArray
}

const CardTwo = ({data}: CardTwoProps) => {
  return (
    <div className="card-two">
      <h2>Card Two</h2>
      <p>This is the content of Card Two.</p>
    </div>
  );
}
export default CardTwo;
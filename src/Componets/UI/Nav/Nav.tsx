import { useState, useEffect } from "react";
import "./Nav.scss";
import "remixicon/fonts/remixicon.css";
import useAnimeStore from "../../../store/animeStore";
import { Link } from "react-router-dom";
const Nav = () => {
  const genres = useAnimeStore((state) => state.genresList);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const items = ["Home", "Recomended", "Top Anime", "top rated", "Top Manga"];

  const itemsIcons = [
    <i className="ri-home-fill nav__icon"></i>,
    <i className="ri-star-smile-line nav__icon"></i>,
    <i className="ri-fire-line nav__icon"></i>,
    <i className="ri-trophy-line nav__icon"></i>,
    <i className="ri-book-open-line nav__icon"></i>,
  ];

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth]);

  return (
    <div className="nav">
      <ul className="nav__list">
        {items.map((item, index) => (
          <li className="nav__item" key={item}>
            <a href="" className="nav__link">
              {item}
              {itemsIcons[index]}
            </a>
          </li>
        ))}
        <li className="nav__item">
          <details className="nav__details">
            <summary className="nav__summary">Genres</summary>
            <ul className="nav__list nav__list--genre">
              {genres.map((genre) => (
                <li key={genre.mal_id} className="nav__item nav__item--genre">
                  <Link to={"/"} className="nav__link nav__link--genre">
                    {genre.name}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

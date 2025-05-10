import { useState, useEffect } from "react";
import "./Nav.scss";
import "remixicon/fonts/remixicon.css";
const Nav = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const items = [
    "Home",
    "Recomended",
    "Top Anime",
    "Genres",
    "top rated",
    "Top Manga",
  ];

  const itemsIcons = [
    <i className="ri-home-fill nav__icon"></i>,
    <i className="ri-star-smile-line nav__icon"></i>,
    <i className="ri-fire-line nav__icon"></i>,
    <i className="ri-menu-3-fill nav__icon"></i>,
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
      </ul>
    </div>
  );
};

export default Nav;

import "./_menu.scss";
import "remixicon/fonts/remixicon.css";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <div className="menu">
      <NavLink
        to={"/profile"}
        className={({ isActive }) => (isActive ? "user user--active" : "user")}
      >
        <i className="ri-user-3-fill user__icon"></i>
        <div className="user__info">
          <p className="user__name">Jhon Doe</p>
          <p className="user__email">Coreo@correo.</p>
        </div>
      </NavLink>

      <form className="menu__search">
        <i className="ri-search-line menu__search-icon"></i>
        <input
          type="search"
          placeholder="Search..."
          className="menu__search-input"
        />
      </form>

      <nav className="nav nav--mobile">
        <ul className="nav__list">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "nav__item nav__item--active" : "nav__item"
            }
          >
            <p className="nav__link">Home</p>
            <i className="ri-home-5-line nav__icon"></i>
          </NavLink>
          <NavLink
            to={"/capitulos-recientes"}
            className={({ isActive }) =>
              isActive ? "nav__item nav__item--active" : "nav__item"
            }
          >
            <p className="nav__link">Capitulos Recientes</p>
            <i className="ri-book-open-line nav__icon"></i>
          </NavLink>
          <NavLink
            to={"/anime-destacado"}
            className={({ isActive }) =>
              isActive ? "nav__item nav__item--active" : "nav__item"
            }
          >
            <p className="nav__link">Anime destacado</p>
            <i className="ri-book-open-line nav__icon"></i>
          </NavLink>
          <NavLink
            to={"/manga-destacado"}
            className={({ isActive }) =>
              isActive ? "nav__item nav__item--active" : "nav__item"
            }
          >
            <p className="nav__link">Manga destacado</p>
            <i className="ri-book-2-line nav__icon"></i>
          </NavLink>
          <NavLink
            to={"/generos"}
            className={({ isActive }) =>
              isActive ? "nav__item nav__item--active" : "nav__item"
            }
          >
            <p className="nav__link">Generos</p>
            <i className="ri-book-2-line nav__icon"></i>
          </NavLink>
        </ul>
      </nav>

      <div className="menu__extras">
        <div className="menu__auth-container">
          <i className="ri-login-box-line menu__auth"></i>
          <p className="menu__auth-text">Login</p>
        </div>
        <div className="theme">
          <p className="theme__text">theme mode</p>
          <i className="ri-moon-line theme__icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Menu;

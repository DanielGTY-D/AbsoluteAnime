import "./_menu.scss";
import Profile from "../Profile/Profile";

const Menu = () => {
  return (
    <div className="menu">
      <div className="user">
        <i className="ri-user-3-fill user__icon"></i>
        <div className="user__info">
          <p className="user__name">Jhon Doe</p>
          <p className="user__email">Coreo@correo.</p>
        </div>
      </div>

      <div className="menu__search">
        <i className="ri-search-line menu__search-icon"></i>
        <input
          type="search"
          placeholder="Search..."
          className="menu__search-input"
        />
      </div>

      <nav className="nav nav--mobile">
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link">Home</a>
            <i className="ri-home-5-line nav__icon"></i>
          </li>
          <li className="nav__item">
            <a className="nav__link">Capitulos Recientes</a>
            <i className="ri-book-open-line nav__icon"></i>
          </li>
          <li className="nav__item">
            <a className="nav__link">Anime Destacado</a>
            <i className="ri-star-line nav__icon"></i>
          </li>
          <li className="nav__item">
            <a className="nav__link">Generos</a>
            <i className="ri-list-check-2 nav__icon"></i>
          </li>
          <li className="nav__item">
            <a className="nav__link">Manga destacado</a>
            <i className="ri-book-2-line nav__icon"></i>
          </li>
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

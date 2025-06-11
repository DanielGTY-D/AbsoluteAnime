import "./_menu.scss";
import "remixicon/fonts/remixicon.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppStore } from "../../../store/useAppStore";
import { useRef, useState } from "react";
import useAnime from "../../../hooks/useAnime";

const Menu = () => {
	const [filterMenuActive, setFilterMenuActive] = useState(false);
	const [filters, setFilters] = useState<string[]>([]);
	const [inputValue, setInputValue] = useState("");
	const { fetchAnimeGenres } = useAnime();
	const navigate = useNavigate();
	const checkboxRef = useRef<HTMLInputElement>(null);
	const isMobielMenuOpen = useAppStore((state) => state.isMobileMenuOpen);
	const setIsMobielMenuOpen = useAppStore((state) => state.setIsMobileMenuOpen);
	const genres = useAppStore((state) => state.genresList);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("enviando formulario")
		if (!inputValue.length) return;

		
		setInputValue("");
		navigate(`/anime-list?q=${inputValue}`);
	};

	const getGenres = async () => {
		setFilterMenuActive(!filterMenuActive);
		if (genres.length) return;

		try {
			await fetchAnimeGenres();
		} catch (error) {
			console.log(error);
		}
	};

	const getFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (e.target.checked) {
			setFilters((prev) => [...prev, value]);
		} else {
			setFilters((prev) => prev.filter((f) => f !== value));
		}
	};

	const handleFilters = () => {
		if (!filters.length) return;
		navigate(`/anime-list?genresId=${filters}`);
		setFilters([]);
		setFilterMenuActive(false);
	};

	return (
		<div className={`menu ${isMobielMenuOpen ? "menu--open" : ""}`}>
			<NavLink
				to={"/profile"}
				className={({ isActive }) => (isActive ? "user user--active" : "user")}
			>
				<i className="ri-user-3-fill user__icon"></i>
				<div className="user__info">
					<p className="user__name">Jhon Doe</p>
					<p className="user__email">Coreo@correo</p>
				</div>
			</NavLink>

			<form className="menu__search" onSubmit={handleSubmit}>
				<i className="ri-search-line menu__search-icon"></i>
				<input
					type="search"
					placeholder="Search..."
					className="menu__search-input"
					value={inputValue}
					onChange={handleChange}
				/>

				<div className="filter">
					<i className="ri-filter-line filter__icon" onClick={getGenres}></i>

					<ul className={`filter__opts ${filterMenuActive ? "active" : ""}`}>
						<button className="filter__button" type="submit" onClick={handleFilters}>
							Filter
						</button>
						{genres.length ? (
							genres.map((genre) => (
								<li className="filter__opt" key={genre.mal_id}>
									<input
										ref={checkboxRef}
										className="filter__input"
										type="checkbox"
										name={genre.mal_id.toString()}
										id={genre.mal_id.toString()}
										value={genre.mal_id}
										checked={filters.includes(genre.mal_id.toString())}
										onChange={(e) => getFilters(e)}
									/>
									<label className="filter__text" htmlFor={genre.mal_id.toString()}>
										{genre.name}
									</label>
								</li>
							))
						) : (
							<></>
						)}
					</ul>
				</div>
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
					{/* <NavLink
						to={"/anime-destacado"}
						className={({ isActive }) =>
							isActive ? "nav__item nav__item--active" : "nav__item"
						}
					>
						<p className="nav__link">Anime destacado</p>
						<i className="ri-book-open-line nav__icon"></i>
					</NavLink> */}
					<NavLink
						to={"/manga-list"}
						className={({ isActive }) =>
							isActive ? "nav__item nav__item--active" : "nav__item"
						}
					>
						<p className="nav__link">Manga</p>
						<i className="ri-book-2-line nav__icon"></i>
					</NavLink>
					<NavLink
						to={"/anime-list"}
						className={({ isActive }) =>
							isActive ? "nav__item nav__item--active" : "nav__item"
						}
					>
						<p className="nav__link">Anime List</p>
						<i className="ri-book-2-line nav__icon"></i>
					</NavLink>
					{/* <NavLink
						to={"/generos"}
						className={({ isActive }) =>
							isActive ? "nav__item nav__item--active" : "nav__item"
						}
					>
						<p className="nav__link">Generos</p>
						<i className="ri-book-2-line nav__icon"></i>
					</NavLink> */}
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
				<div className="menu__close" onClick={() => setIsMobielMenuOpen(false)}>
					Close Menu
				</div>
			</div>
		</div>
	);
};

export default Menu;

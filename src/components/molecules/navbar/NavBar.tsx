	import style from "./nav-bar.module.css";
	const NavBar = () => {
	return (
		<>
			<nav className={style.navbar}>
				<ul className={style.navbar__list}>
					<li className={style.navbar__item}>
						<a className={style.navbar__link} href="#">
							<i className="ri-home-wifi-fill"></i> Home
						</a>
					</li>
					<li className={style.navbar__item}>
						<a className={style.navbar__link} href="#">
							<i className="ri-video-fill"></i>
							Recent add
						</a>
					</li>
					<li className={style.navbar__item}>
						<a className={style.navbar__link} href="#">
							<i className="ri-video-fill"></i>
							Featured
						</a>
					</li>
					<li className={style.navbar__item}>
						<a className={style.navbar__link} href="#">
							<i className="ri-video-fill"></i>
							Last Episodes
						</a>
					</li>
					<li className={style.navbar__item}>
						<a className={style.navbar__link} href="#">
							<i className="ri-user-line"></i>
							Profile
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default NavBar;

import style from "./header.module.css";
import "remixicon/fonts/remixicon.css";
import NavBar from "../../molecules/navbar/NavBar";
import Input from "../../atoms/input/Input";
import { useEffect, useState } from "react";

export default function Header() {
	const [windowSize, setWindowSize] = useState<number | null>();
	useEffect(() => {
		window.addEventListener("resize", () => {
			setWindowSize(window.innerWidth);
		});
	});
	return (
		<>
			{/* <div className="bg-container"></div> */}
			<header className={style.header}>
				<div className={style["heaer__search-container"]}>
					<Input
						ClassName="input"
						PlaceHolder="type to search"
						name="search"
						type="search"
						id="search"
					/>
					<label htmlFor="search" className={style["header__search-text"]}>
						Search you're favorite anime
					</label>
				</div>

				{windowSize! > 768 ? (
					<NavBar />
				) : (
					<button aria-label="menu">
						<i className="ri-menu-3-fill"></i>
					</button>
				)}
			</header>
		</>
	);
}

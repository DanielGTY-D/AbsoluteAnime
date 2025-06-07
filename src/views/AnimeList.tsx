import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SearchAnimeArray, SearchAnimeWithPagination } from "../interfaces/SearchAnime";
import useAnime from "../hooks/useAnime";
import CardTree from "../components/UI/Cards/Card-tree/CardTree";
import "../components/UI/Cards/Card-tree/_CardTree.skeleton.scss";
import LoaderAnimeList from "../components/UI/Loaders/anime-list-loader/LoaderAnimeList";
import "remixicon/fonts/remixicon.css";
import { chdir } from "process";

const AnimeList = () => {
	const [dataAnime, setDataAnime] = useState<SearchAnimeArray>([]);
	const [pagination, setPagination] =
		useState<SearchAnimeWithPagination["pagination"]>();
	const [movePaginatioTo, setMovePaginationTo] = useState(50);
	const [pages, setPages] = useState<number[]>([]);
	const { fetchAnime } = useAnime();
	const prev = useRef<HTMLLIElement>(null);
	const next = useRef<HTMLLIElement>(null);
	const navigate = useNavigate();
	const location = useLocation();
	const query = new URLSearchParams(location.search);
	const genre = query.get("genreId");
	const genres = query.get("genresId");
	const q = query.get("q");

	const setPagesArray = (lastPage: number) => {
		let pagesArray: number[] = [];
		for (let i = 1; i < lastPage; i++) {
			//
			pagesArray = [...pagesArray, i];
		}
		setPages(pagesArray);
	};

	const getData = async (page: number) => {
		setDataAnime([]);
		const genreToNumber = genre ? parseInt(genre) : null;
		const genresToArray = genres ? genres.split(",").map(Number) : null;
		const filterByGenre = genres ? genresToArray : genreToNumber;

		const response = await fetchAnime(
			filterByGenre,
			q ?? "",
			page ? page : pagination?.current_page
		);
		setDataAnime(response?.data ?? []);
		setPagination(response.pagination);
		setPagesArray(response.pagination.last_visible_page);

		if (response?.data.length === 0) {
			navigate("/not-found");
		}
	};

	const handlePagination = (
		e: React.MouseEvent<HTMLDivElement | HTMLElement>
	) => {
		const button = (e.target as HTMLElement)
		if (prev === null || next === null) return;

		if (
			button.contains(prev.current) ||
			button.contains(prev.current!.children[0]) ||
			button.contains(prev.current!.children[0].children[0])
		) {
			const pagination = e.currentTarget.querySelector(".pagination__pages-wrapper");
			const newPositionOfPagination = movePaginatioTo - 50;
			if (pagination?.children) {
				Array.from(pagination.children).forEach(child => {
					// transform: translateX();
					(child as HTMLElement).style.transform = `translateX(-${newPositionOfPagination}px)`
				});
			}
			setMovePaginationTo(newPositionOfPagination);
			return;
		}

		if (
			button.contains(next.current) ||
			button.contains(next.current!.children[0]) ||
			button.contains(next.current!.children[0].children[0])
		) {
			const pagination = e.currentTarget.querySelector(".pagination__pages-wrapper");
			const newPositionOfPagination = movePaginatioTo + 50;
			if (pagination?.children) {
				Array.from(pagination.children).forEach(child => {
					// transform: translateX();
					(child as HTMLElement).style.transform = `translateX(-${newPositionOfPagination}px)`
				});
			}
			setMovePaginationTo(newPositionOfPagination);
			return;
		}
	};

	useEffect(() => {
		getData();
	}, [genre, q, genres]);
	return (
		<main className="main-content contenedor">
			<h2 className="page-header">We find this about your consult: {q}</h2>
			{dataAnime.length === 0 ? (
				<LoaderAnimeList />
			) : (
				<ul className="anime-list">

					{dataAnime.map((anime) => (
						<li key={anime.mal_id}>
							<CardTree data={anime} />
						</li>
					))}
				</ul>
			)}

			<div className="pagination" onClick={handlePagination}>
				{pagination!.last_visible_page >= 2 ? (
					<ul className="pagination__wrapper">
						<li className="pagination__item pagination__item--prev" ref={prev}>
							<Link className="pagination__dot" to={`/anime-list?${""}`}>
								<i className="ri-arrow-left-s-line"></i>
							</Link>
						</li>
						<div className="pagination__pages-wrapper">
							{pages.length ? (
								pages.map((page, index) => (
									<li className="pagination__item" key={index} onClick={() => getData(page)}>
										<a
											className="pagination__dot"

										>
											{page}
										</a>
									</li>
								))
							) : (
								<></>
							)}
						</div>
						<li className="pagination__item pagination__item--next" ref={next}>
							<Link className="pagination__dot" to={`/anime-list?${""}`}>
								<i className="ri-arrow-right-s-line"></i>
							</Link>
						</li>
					</ul>
				) : (
					<></>
				)}
			</div>
		</main>
	);
};

export default AnimeList;

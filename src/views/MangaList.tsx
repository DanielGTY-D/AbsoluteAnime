import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useManga from "../hooks/useManga";
import LoaderAnimeList from "../components/UI/Loaders/anime-list-loader/LoaderAnimeList";
import {Mangas, MangasWithPagination } from "../interfaces/Manga";
import CardManga from "../components/UI/Cards/card-manga/CardManga";

const MangaList = () => {
    const [dataAnime, setDataAnime] = useState<Mangas>([]);
    const [pagination, setPagination] =
      useState<MangasWithPagination["pagination"]>();
    const [movePaginatioTo, setMovePaginationTo] = useState(50);
    const [pages, setPages] = useState<number[]>([]);
    const { fetchManga } = useManga();
    const prev = useRef<HTMLLIElement>(null);
    const next = useRef<HTMLLIElement>(null);
    const navigate = useNavigate();

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

    const response: MangasWithPagination = await fetchManga(undefined, page);

		setDataAnime(response!.data);
		setPagination(response.pagination);
		setPagesArray(response.pagination.last_visible_page ? response.pagination.last_visible_page : 1);

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
    getData(1)
  }, [])
  return (
    <main className="main-content contenedor">
			{!dataAnime.length ? (
				<LoaderAnimeList />
			) : (
				<ul className="anime-list">

					{dataAnime.map((anime) => (
						<li key={anime.mal_id}>
							<CardManga data={anime} />
						</li>
					))}
				</ul>
			)}

			<div className="pagination" onClick={handlePagination}>
				{pagination ? (
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
							<Link className="pagination__dot" to={`/manga-list?${""}`}>
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

export default MangaList;
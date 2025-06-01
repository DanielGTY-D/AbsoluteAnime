import { useEffect, useState } from "react";
import { data, useLocation } from "react-router-dom";
import useAnime from "../hooks/useAnime";
import { AnimeArray } from "../interfaces/Anime";
import CardTree from "../components/UI/Cards/Card-tree/CardTree";
import "../components/UI/Cards/Card-tree/_CardTree.skeleton.scss";
import LoaderAnimeList from "../components/UI/Loaders/anime-list-loader/LoaderAnimeList";

const AnimeList = () => {
	const [dataAnime, setDataAnime] = useState<AnimeArray>([]);
	const { fetchAnime } = useAnime();
	const location = useLocation();
	const query = new URLSearchParams(location.search);
	const genre = query.get("genreId");
	const q = query.get("q");

	const getData = async () => {
		setDataAnime([]);
		const response = await fetchAnime(parseInt(genre as string), q ?? "");
		setDataAnime(response?.data ?? []);
	};

	useEffect(() => {
		getData();
	}, [genre, q]);
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
		</main>
	);
};

export default AnimeList;

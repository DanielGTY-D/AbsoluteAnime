import { useEffect } from "react";
import Header from "../components/common/Header/Header.tsx";
import Section from "../components/common/sections/Section/Section.tsx";
import useAnime from "../hooks/useAnime.ts";
import { delay } from "../utils/index.ts";
import { useAppStore } from "../store/useAppStore.ts";
import SectionTwo from "../components/common/sections/SectionTwo/SectionTwo.tsx";
import Banner from "../components/UI/banners/banner/Banner.tsx";
const Home = () => {
	const { fetchTopAnime, fetchRecentEpisodes } = useAnime();
	const recentEpisodesList = useAppStore((state) => state.recentEpisodesList);

	useEffect(() => {
		const fetchLazyData = async () => {
			fetchTopAnime();
			await delay(500);
			fetchRecentEpisodes();
			await delay(500);
		};
		fetchLazyData();
	}, []);
	return (
		<div className="main-content">
			<Header />
			<main className="contenedor">
				<Section
					sectionName={"Capitulos Recientes"}
					recentEpisodesList={recentEpisodesList}
					options={false}
				/>

				<SectionTwo
					sectionName={"The most popular of Action"}
					options={false}
					genreId={1}
					classNext="section-action-next"
					classPrev="section-action-prev"
				/>
				<Banner bannerType={"type_4"} />
				<SectionTwo
					sectionName={"The most popular of Drama"}
					options={false}
					genreId={8}
					classNext="section-drama-next"
					classPrev="section-drama-prev"
				/>
				<SectionTwo
					sectionName={"The most popular of Fantasy"}
					options={false}
					genreId={10}
					classNext="section-fantasy-next"
					classPrev="section-fantasy-prev"
				/>
				<Banner bannerType={"type_3"} />
				<SectionTwo
					sectionName={"The most popular of Comedy"}
					options={false}
					genreId={4}
					classNext="section-comedy-next"
					classPrev="section-comedy-prev"
				/>
				<Banner bannerType={"type_1"} />
				<SectionTwo
					sectionName={"The most popular of Romance"}
					options={false}
					genreId={22}
					classNext="section-romance-next"
					classPrev="section-romance-prev"
				/>
			</main>
		</div>
	);
};

export default Home;

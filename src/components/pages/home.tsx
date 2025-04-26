import { useEffect } from "react";
import { FetchTopAnime } from "../../API/anime";
import { useAnimeStore } from "../../store/anime";
import Header from "../oranisms/Header/Header";
import CustomSwiper from "../utils/libs/customSwiper/CustomSwiper";
import { SwiperSlide } from "swiper/react";
import style from "./home.module.css";
import Card from "../oranisms/card/Card";
import { FetchTopManga } from "../../API/manga";
import { delay } from "../../utils";

export default function Home() {
	const setTopAnime = useAnimeStore().setTopAnime;
	const setTopManga = useAnimeStore().setTopManga;
	const topAnimeData = useAnimeStore().topAnime;
	const topAnimeManga = useAnimeStore().topManga;
	console.log(topAnimeManga)

	useEffect(() => {
		const getData = async () => {
			try {
				const anime = await FetchTopAnime();
				setTopAnime(anime);
				await delay(3000);
				const manga = await FetchTopManga();
				setTopManga(manga)
				await delay(1000);

			} catch (err) {
				throw new Error("Failed fetch data from Top anime and Top Manga");
			}
		};

		getData();
	}, []);
	return (
		<>
			<Header />

			<main className={style["main-content"]}>
				<div className={style.hero}>
					<div className={style.aside}>
						{/* in this parte we go to add an recent epp of anime */}
					</div>

					<CustomSwiper
						className="custom-swiper-hero"
						autoplay={{ delay: 2400 }}
						breackpoints={{
							640: { slidesPerView: 1, spaceBeteween: 0 },
						}}
						slidesPerView={1}
						spacing={10}
					>
						{topAnimeData.length &&
							topAnimeData.map((el) => (
								<SwiperSlide className="card-large" key={el.mal_id}>
									<Card
										image={{
											Alt: el.title,
											ClassName: "image",
											Src: el.images.webp.large_image_url,
										}}
										cardDitails={{
											generes: el.genres.map((item) => ({
												gener: item.name,
												id: item.mal_id,
											})),
											airing: el.airing,
											desc: el.synopsis,
											ep: el.episodes,
											title: el.title,
											titleType: "h2",
											ClassNameAiring: "paragraph--airing",
											ClassNameContent: "card-large__content",
											ClassNameDesc: "paragraph--desc",
											ClassNameDitails: "card-larg__ditails",
											ClassNameGeneres: "paragraph--generes",
											ClassNameEp: "paragraph--ep",
										}}
									/>
								</SwiperSlide>
							))}
					</CustomSwiper>
				</div>
			</main>
		</>
	);
}

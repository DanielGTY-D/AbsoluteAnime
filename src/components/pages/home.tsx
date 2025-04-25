import { useEffect } from "react";
import { fetchTopAnime } from "../../API/anime";
import { useAnimeStore } from "../../store/anime";
import Header from "../oranisms/Header/Header";
import CustomSwiper from "../utils/libs/customSwiper/CustomSwiper";
import { SwiperSlide } from "swiper/react";
import style from "./home.module.css";
import Card from "../oranisms/card/Card";

export default function Home() {
	const setTopAnime = useAnimeStore().setTopAnime;
	const topAnimeData = useAnimeStore().topAnime;

	useEffect(() => {
		const getData = async () => {
			const data = await fetchTopAnime();
			setTopAnime(data);
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
										Src: el.images.webp.large_image_url
									}}
									cardDitails={{
										generes: el.genres.map( el => el.name),
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
										ClassNameEp: "paragraph--ep"
									}}/>
								</SwiperSlide>
							))}
					</CustomSwiper>
				</div>
			</main>
		</>
	);
}

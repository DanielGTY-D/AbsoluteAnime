import { useEffect } from "react";
import { fetchTopAnime } from "../../API/anime";
import { useAnimeStore } from "../../store/anime";
import Image from "../atoms/image/Image";
import Header from "../oranisms/Header/Header";
import CustomSwiper from "../utils/libs/customSwiper/CustomSwiper";
import { SwiperSlide } from "swiper/react";
import style from "./home.module.css";
import CardDitails from "../molecules/cardDetails/CardDetails";

export default function Home() {
	const setTopAnime = useAnimeStore().setTopAnime;
	const topAnimeData = useAnimeStore().topAnime;
	const preferedLnag = navigator.language;

	console.log(preferedLnag);

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
									<Image ClassName="image" Src={el.images.webp.large_image_url} Alt={el.title}/>
									<CardDitails 
										ClassNameDesc="paragraph--desc"
										ClassNameAiring="paragraph--airing"
										ClassNameEp="paragraph--ep"
										ClassNameGeneres="paragraph--generes"
										ClassNameContent="card-large__content"
										ClassNameDitails="card-large__ditails"
										titleType="h2"
										title={el.title}
										desc={el.synopsis}
										ep={el.episodes ? `${el.episodes} Episodes` : "Unknown"}
										generes={el.genres.map((el) => el.name).join(", ")}
										airing={el.airing ? "Airing" : "Finished"}
									/>
								</SwiperSlide>
							))}
					</CustomSwiper>
				</div>
			</main>
		</>
	);
}

import { useEffect, useState, useRef } from "react";
import { Autoplay, Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Bottleneck from "bottleneck";
import "swiper/swiper-bundle.css";
import "./_SectionTwo.scss";
import CardTwo from "../../../UI/Cards/CardTwo/CardTwo";
import LoaderSection from "../../../UI/Loader/LoaderSection/LoaderSection";
import DropDownMenu from "../../../UI/DropDownMenu/DropDownMenu";
import { AnimeByGenreArray } from "../../../../interfaces/AnimeByGenre";
import useAnime from "../../../../hook/useAnime";

interface SectionTwoProps {
	sectionName: string;
	options: boolean;
	genreId?: number | null;
  classPrev: string,
  classNext: string,
}

const SectionTwo = ({ sectionName, options, genreId = null, classNext, classPrev }: SectionTwoProps) => {
	const [animeByGenre, setAnimeByGenre] = useState<AnimeByGenreArray>([]);
	const sectionRef = useRef<HTMLDivElement>(null);
	const { fetchAnimeByGenre } = useAnime();
	const limiter = new Bottleneck({
		maxConcurrent: 1,
		minTime: 500,
	});

	useEffect(() => {
		if (genreId === null) return;

		const wrapped = limiter.wrap(fetchAnimeByGenre);

		function handleIntersection(entries: IntersectionObserverEntry[]) {
			const entry = entries[0];

			if (entry.isIntersecting && !animeByGenre.length) {
				wrapped(genreId != null ? genreId : -1).then((res) =>
					setAnimeByGenre(res as AnimeByGenreArray)
				);

				// Unobserve the section after fetching data
				observer.unobserve(sectionRef.current!);
			}
		}

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.1,
		});

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}
	}, []);

	return (
		<section className="section" ref={sectionRef}>
			<div className="section__header">
				<h2 className="section__title">{sectionName}</h2>

				{options && <DropDownMenu />}
			</div>
			{animeByGenre.length ? (
				<>
					<Swiper
						className="section__swiper"
						modules={[Autoplay, Navigation, Grid]}
						loop={true}
						grid={{ rows: 0 }}
						slidesPerView={1}
						autoplay={false}
						spaceBetween={30}
						breakpoints={{
							640: { grid: { rows: 1 }, slidesPerView: 1 },
							768: { grid: { rows: 1 }, slidesPerView: 2 },
							1024: { grid: { rows: 0 }, slidesPerView: 2 },
							1280: { grid: { rows: 0 }, slidesPerView: 3 },
						}}
						speed={1000}
						navigation={{
							nextEl: `.${classNext}`,
							prevEl: `.${classPrev}`,
						}}
					>
						{animeByGenre.map((anime) => (
							<SwiperSlide className="section__swiper-item" key={anime.mal_id}>
								<CardTwo data={anime} />
							</SwiperSlide>
						))}
					</Swiper>
        <button className={`section__swiper-prev ${classPrev}`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
						</svg>
					</button>
					<button className={`section__swiper-next ${classNext}`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
						</svg>
					</button>
				</>
			) : (
				<LoaderSection />
			)}
		</section>
	);
};

export default SectionTwo;

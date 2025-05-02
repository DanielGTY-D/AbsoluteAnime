import { useEffect } from "react";
import { delay } from "../../utils";
import "./home.css";
import { SwiperSlide } from "swiper/react";
import { FetchTopAnime } from "../../API/anime";
import { FetchTopManga } from "../../API/manga";
import { useAnimeStore } from "../../store/anime";
import Header from "../oranisms/Header/Header";
import CustomSwiper from "../utils/libs/customSwiper/CustomSwiper";
import Card from "../oranisms/card/Card";
import Title from "../atoms/title/Title";
import Loading from "../utils/components/loading";
export default function Home() {
<<<<<<< HEAD
	const setTopAnime = useAnimeStore().setTopAnime;
	const setTopManga = useAnimeStore().setTopManga;
	const topAnimeData = useAnimeStore().topAnime;
	const topMandaData = useAnimeStore().topManga;

	useEffect(() => {
		const getData = async () => {
			try {
				const anime = await FetchTopAnime();
				setTopAnime(anime);
				await delay(600);
				const manga = await FetchTopManga();
				setTopManga(manga);
			} catch (err) {
				throw new Error(`can't fetch data, this come from Home ${err}`);
			}
		};
=======
  const setTopAnime = useAnimeStore().setTopAnime;
  const setTopManga = useAnimeStore().setTopManga;
  const topAnimeData = useAnimeStore().topAnime;
  const topMangaData = useAnimeStore().topManga;

  useEffect(() => {
    const getData = async () => {
      try {
        const anime = await FetchTopAnime();
        setTopAnime(anime);
        await delay(800);
        const manga = await FetchTopManga();
        setTopManga(manga);
        await delay(1000);
      } catch (err) {
        throw new Error(`can't fetch data, this come from Home ${err}`);
      }
    };
>>>>>>> 8bfe2ef7bbe10203b8c48c49e0de98ceef881024

		getData();
	}, []);
	return (
		<>
			<Header />

<<<<<<< HEAD
			<main className={"main-content"}>
				<div className={"hero"}>
					<div className={"hero__left-box"}>
						{/* in this parte we go to add an recent epp of anime */}
						<Title type="h3" title="Manga" ClassName="title title--swiper" />
						{topMandaData.length ? (
							<CustomSwiper
								className="custom-swiper-manga"
								autoplay={{ delay: 3000 }}
								spacing={10}
								slidesPerView={1}
								rows={3}
								breackpoints={{
									640: {
										slidesPerView: 1,
										grid: { rows: 3 },
										spaceBeteween: 10,
									},
								}}
							>
								{topMandaData.map((data) => (
									<SwiperSlide>
										<Card
											ClassName="card-primary card-small"
											image={{
												Alt: data.title,
												ClassName: "image image--aside",
												Src: data.images.webp.large_image_url,
											}}
											cardDitails={{
												ClassNametitle: "title title--small",
												title: data.title,
												titleType: "h4",
												ClassNameContent: "card-data-primary",
												ClassNameDitails: "card-ditails-primary",
											}}
										/>
									</SwiperSlide>
								))}
							</CustomSwiper>
						) : (<Loading />)}
					</div>
					<div className="hero__right-box">
						{topAnimeData.length ? (
							<CustomSwiper
								className="custom-swiper-hero"
								autoplay={{ delay: 3000 }}
								breackpoints={{
									640: { slidesPerView: 1, spaceBeteween: 0 },
								}}
								slidesPerView={1}
								spacing={10}
							>
								{topAnimeData.map((el) => (
									<SwiperSlide className="" key={el.mal_id}>
										<Card
											ClassName="card-primary card--hero-left"
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
												ClassNametitle: "title",
												ClassNameAiring: "paragraph--airing",
												ClassNameContent: "card-data-primary",
												ClassNameDesc: "paragraph--desc",
												ClassNameDitails: "card-ditails-primary",
												ClassNameGeneres: "paragraph--generes",
												ClassNameEp: "paragraph--ep",
											}}
										/>
									</SwiperSlide>
								))}
							</CustomSwiper>
						) : (<Loading />)}
					</div>
				</div>
			</main>
		</>
	);
=======
      <main className={"main-content"}>
        <div className={"hero"}>
          <div className={"hero__left-box"}>
            {/* in this parte we go to add an recent epp of anime */}
            <Title type="h3" title="Manga" ClassName="title hero__title" />
            <CustomSwiper
              className="custom-siper-aside"
              autoplay={{ delay: 2000 }}
              spacing={10}
              slidesPerView={1}
              rows={3}
            >
              {topMangaData.length > 0 ? topMangaData.map((data) => (
                <SwiperSlide>
                  <Card
                    ClassName="card-primary card-small"
                    image={{
                      Alt: data.title,
                      ClassName: "image image--aside",
                      Src: data.images.webp.large_image_url,
                    }}
                    cardDitails={{
                      ClassNametitle: "title title--small",
                      title: data.title,
                      titleType: "h4",
                      ClassNameContent: "card-data-primary",
                      ClassNameDitails: "card-ditails-primary",
                    }}
                  />
                </SwiperSlide>
              )) : <div>search... </div>}
            </CustomSwiper>
          </div>
          <div className="hero__right-box">
            <CustomSwiper
              className="custom-swiper-hero"
              autoplay={{ delay: 3000 }}
              slidesPerView={1}
              spacing={10}
            >
              {topAnimeData.length > 0 ?
                topAnimeData.map((el) => (
                  <SwiperSlide className="" key={el.mal_id}>
                    <Card
                      ClassName="card-primary card--hero-left"
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
                        ClassNametitle: "title",
                        ClassNameAiring: "paragraph--airing",
                        ClassNameContent: "card-data-primary",
                        ClassNameDesc: "paragraph--desc",
                        ClassNameDitails: "card-ditails-primary",
                        ClassNameGeneres: "paragraph--generes",
                        ClassNameEp: "paragraph--ep",
                      }}
                    />
                  </SwiperSlide>
                )) : <></>}
            </CustomSwiper>
          </div>
        </div>
      </main >
    </>
  );
>>>>>>> 8bfe2ef7bbe10203b8c48c49e0de98ceef881024
}


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
export default function Home() {
  const setTopAnime = useAnimeStore().setTopAnime;
  const setTopManga = useAnimeStore().setTopManga;
  const topAnimeData = useAnimeStore().topAnime;
  const topMandaData = useAnimeStore().topManga;

  useEffect(() => {
    const getData = async () => {
      try {
        const anime = await FetchTopAnime();
        setTopAnime(anime);
        await delay(700);
        const manga = await FetchTopManga();
        setTopManga(manga);
        await delay(1000);
      } catch (err) {
        throw new Error(`can't fetch data, this come from Home ${err}`);
      }
    };

    getData();
  }, []);
  return (
    <>
      <Header />

      <main className={"main-content"}>
        <div className={"hero"}>
          <div className={"hero__left-box"}>
            {/* in this parte we go to add an recent epp of anime */}

            <Title type="h3" title="Manga" ClassName="title" />
            <CustomSwiper
              className="custom-swiper-hero"
              autoplay={{ delay: 3000 }}
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
                      ClassName="card-large"
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

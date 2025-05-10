import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import useAnime from "../../../hook/useAnime";
import useAnimeStore from "../../../store/animeStore";
import "./Header.scss";
const Header = () => {
  const { fetchTopAnime } = useAnime();
  const topAnimelist = useAnimeStore((state) => state.topAnimeList);

  useEffect(() => {
    fetchTopAnime();
  }, []);
  return (
    <div className="header">
      {topAnimelist.length ? (
        <Swiper
          className="header__swiper"
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          speed={2000}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          loop={true}
        >
          {topAnimelist.map((anime) => (
            <SwiperSlide key={anime.mal_id}>
              <div className="swiper__card">
                <img
                  src={anime.images.webp.large_image_url}
                  alt={anime.title}
                  className="swiper__card-image"
                />

                <div className="swiper__card-content">
                  <h2 className="swiper__card-title">
                    {anime.title} <span>Episodes: {anime.episodes}</span>
                  </h2>
                  <ul className="swiper__card-genres">
                    {anime.genres.map((genre) => (
                      <li
                        className="swiper__card-genre"
                        key={genre.mal_id}
                        aria-label="click to see more like this genre"
                      >
                        <a href="/">{genre.name}</a>
                      </li>
                    ))}
                  </ul>
                  <p className="swiper__card-desc">{anime.synopsis}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;

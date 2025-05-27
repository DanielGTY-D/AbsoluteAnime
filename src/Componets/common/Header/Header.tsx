import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./_Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAppStore } from "../../../store/useAppStore.ts";
import Loader from "../../UI/Loader/LoaderHeader/LoaderHeader.tsx";
const Header = () => {
  const navigate = useNavigate();
  const topAnimelist = useAppStore((state) => state.topAnimeList);
  const setMobileMenu = useAppStore((state) => state.setMobileMenu);

  const handleNavigate = (e: React.MouseEvent<HTMLElement>, id: number) => {
    const target = e.target as Element;
    const isInsideLink = target.closest("a, button");
    
    if(isInsideLink) return;

    navigate(`/anime?animeId=${id}`)
  };

  return (
    <>
      <div className="header__menu">
        <label htmlFor="check">
          <input
            type="checkbox"
            id="check"
            className="closed"
            onClick={setMobileMenu}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className="logo">
          <img src="logo/image.png" alt="logo page" className="logo__image" />
        </div>
      </div>
      <header className="header">
        {topAnimelist.length ? (
          <Swiper
            className="header__swiper"
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: "header__swiper-bullet",
              bulletActiveClass: "header__swiper-bullet--active",
            }}
            autoplay={{ delay: 10000, disableOnInteraction: false }}
            breakpoints={{
              1024: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
            }}
            loop={true}
            speed={3000}
          >
            {topAnimelist.map((anime) => (
              <SwiperSlide key={anime.mal_id} className="header__swiper-item">
                <article className="hero" onClick={(e) => handleNavigate(e, anime.mal_id)}>
                  <div className="hero__image-container">
                    <img
                      src={anime.images.webp.large_image_url}
                      alt={anime.title_japanese}
                      className="hero__image"
                      loading="lazy"
                      width={380}
                      height={220}
                    />
                  </div>

                  <div className="hero__content">
                    <h2 className="hero__title">
                      {anime.title} <span>Episodes: {anime.episodes}</span>
                    </h2>

                    <p className="hero__desc">
                      <span>Synopsis:</span> {anime.synopsis}
                    </p>

                    <ul className="genre-list">
                      {anime.genres.map((genre) => (
                        <li className="genre-list__item" key={genre.mal_id}>
                          <Link
                            to={`/anime-list?genre-id=${genre.mal_id}`}
                            className="genre-list__link"
                          >
                            {genre.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Loader />
        )}
      </header>
    </>
  );
};

export default Header;

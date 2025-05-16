import { useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import useAnime from "../../../hook/useAnime";
import useAnimeStore from "../../../store/animeStore";
import "./_Header.scss";
const Header = () => {
  const { fetchTopAnime } = useAnime();
  const topAnimelist = useAnimeStore((state) => state.topAnimeList);

  useEffect(() => {
    fetchTopAnime();
  }, []);
  return <header className="header"></header>;
};

export default Header;

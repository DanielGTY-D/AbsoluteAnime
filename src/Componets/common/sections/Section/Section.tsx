import { Autoplay, Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./_Section.scss";
import { RecentEpisodes } from "../../../../interfaces/recentEpisodes";
import Card from "../../../UI/Cards/Card/Card";
import LoaderSection from "../../../UI/Loader/LoaderSection/LoaderSection";
import DropDownMenu from "../../../UI/DropDownMenu/DropDownMenu";


interface SectionProps {
  sectionName: string;
  recentEpisodesList: RecentEpisodes;
  options: boolean;
}

const Section = ({
  sectionName,
  recentEpisodesList = [],
  options,
}: SectionProps) => {
  

  return (
    <section className="section" >
      <div className="section__header">
        <h2 className="section__title">{sectionName}</h2>

        {options && <DropDownMenu />}
      </div>
      {recentEpisodesList.length ? (
        <>
          <Swiper
            className="section__swiper"
            modules={[Autoplay, Navigation, Grid]}
            loop={true}
            grid={{ rows: 0 }}
            slidesPerView={1}
            autoplay={false}
            spaceBetween={10}
            breakpoints={{
              640: { grid: { rows: 1 }, slidesPerView: 1 },
              768: { grid: { rows: 1 }, slidesPerView: 3 },
              1024: { grid: { rows: 0 }, slidesPerView: 3 },
              1280: { grid: { rows: 0 }, slidesPerView: 4 },
            }}
            speed={1000}
            navigation={{
              nextEl: ".section__swiper-next",
              prevEl: ".section__swiper-prev",
            }}
          >
            { recentEpisodesList.map((episode) => (
              <SwiperSlide
                className="section__swiper-item"
                key={episode.entry.mal_id}
              >
                <Card data={episode} />
              </SwiperSlide>
            ))
            }
          </Swiper>
          <button className="section__swiper-prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
            </svg>
          </button>
          <button className="section__swiper-next">
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

export default Section;

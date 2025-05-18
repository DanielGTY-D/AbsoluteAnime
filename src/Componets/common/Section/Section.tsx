import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

interface SectionProps {
  sectionName: string;
}

const Section = ({ sectionName }: SectionProps) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: true }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
    >
      <SwiperSlide></SwiperSlide>
    </Swiper>
  );
};

export default Section;

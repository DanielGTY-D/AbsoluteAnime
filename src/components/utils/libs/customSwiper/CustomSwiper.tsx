// Import Swiper React components
import { Swiper } from "swiper/react";
import "swiper/bundle";
import "swiper/types";
import "swiper/swiper-bundle.css";
import "./custom-swiper.css";
// modules
import { Autoplay, Navigation, Pagination, Grid } from "swiper/modules";
// Import interfaces for swiper
import { CustomSwiperProps } from "../../../../services/interfaces/interfaces";

const CustomSwiper = ({
  className,
  children,
  ...props
}: CustomSwiperProps & { children?: React.ReactNode }) => {
  const {
    autoplay: { delay },
    breackpoints,
    slidesPerView,
    spacing,
    rows,
  } = props;
  return (
    <Swiper
      className={className}
      loop={true}
      speed={1400}
      modules={[Autoplay, Navigation, Pagination, Grid]}
      spaceBetween={spacing}
      slidesPerView={slidesPerView}
      breakpoints={{ breackpoints }}
      grid={{rows}}
      autoplay={{delay: delay, disableOnInteraction: false}}
    >
      {children}
    </Swiper>
  );
};

export default CustomSwiper;

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
    breakpoints = {},
    slidesPerView,
    rows,
    spacing,
    rows,
  } = props;
  return (
    <Swiper
      className={className}
      loop={true}
      speed={1400}
      modules={[Autoplay, Navigation, Pagination, Grid]}
      grid={{ rows: rows, fill: "row" }}
      spaceBetween={spacing}
      slidesPerView={slidesPerView}
<<<<<<< HEAD
      breakpoints={{ breackpoints }}
      grid={{rows}}
      autoplay={{delay: delay, disableOnInteraction: false}}
=======
      breakpoints={breakpoints}
      autoplay={{ delay: delay, disableOnInteraction: true }}
>>>>>>> 8bfe2ef7bbe10203b8c48c49e0de98ceef881024
    >
      {children}
    </Swiper>
  );
};

export default CustomSwiper;

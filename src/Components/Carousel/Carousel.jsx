import  { useEffect } from "react";
import styles from "./Carausel.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import CarouselLeft from "./CarouselLeft/CarouselLeft";
import CarouselRight from "./CarouselRight/CarouselRight";

const Controls = ({ data }) => {
  const { swiper } = useSwiper();
  useEffect(() => {
    swiper?.slideTo(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
};

const Carousel = ({ data, renderCardComponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={"auto"}
        spaceBetween={10}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeft />
        <CarouselRight />
        {data?.map((item) => (
          <SwiperSlide key={item?.id}>{renderCardComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
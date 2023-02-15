import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { ProjectItem } from "../";
import { projectsList } from "../../constants";

export const MobileCarousel = () => {
  return (
    <div className="flex flex-col justify-items-stretch items-stretch px-4">
      <h2 className="font-bold text-text-dark text-3xl sm:text-5xl uppercase block mb-4">
        Projects
      </h2>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={1}
        className="w-full"
        modules={[Pagination]}
        spaceBetween={20}
        centeredSlides
      >
        {projectsList.map((item, index) => (
          <SwiperSlide
            key={item.title}
            className="flex items-stretch pt-[3rem]"
          >
            <ProjectItem {...item} index={index} isMobile />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

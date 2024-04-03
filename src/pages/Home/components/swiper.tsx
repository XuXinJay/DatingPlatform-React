import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay"; // 引入自動播放的CSS

// 輪播圖
import slide1 from "@/assets/image/03.jpg";
import slide2 from "@/assets/image/02.jpg";
import slide3 from "@/assets/image/01.jpg";

const SwiperComponent = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

  const handleSwiper = (swiper: SwiperCore) => {
    setSwiperInstance(swiper);
  };

  const setCurrentSlide = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };
  return (
    <section className="carousel w-screen">
      <Swiper
        modules={[Autoplay]} // 在這裡註冊 Autoplay 模塊
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={handleSwiper}
        loop={true}
        autoplay={{
          // 設定自動播放選項
          delay: 3500,
          disableOnInteraction: false, // 用戶操作後是否停止自動播放
        }}
      >
        <SwiperSlide>
          <img src={slide1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
      <div className="test" style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => setCurrentSlide(0)} />
        <span className="dot" onClick={() => setCurrentSlide(1)} />
        <span className="dot" onClick={() => setCurrentSlide(2)} />
      </div>
    </section>
  );
};

export default SwiperComponent;

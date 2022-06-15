import { Swiper, SwiperSlide } from "swiper/react";
import imge3 from "../../asset/bg.jpg";
import imge from "../../asset/bg3.jpg";
import imge2 from "../../asset/bg2.jpg";

import banner4 from "../../asset/slideImages/Landing-Page-Hero-1.png";

import "../../css/Slider/Slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, EffectFade, Autoplay } from "swiper";

const Slider = () => {
  const image = [imge3, imge2, imge, banner4];

  return (
    <div className="slider">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        speed={1500}
        navigation
        parallax={true}
        effect={"fade"}
        autoplay={{
          delay: 2500,
        }}
        modules={[Autoplay, Navigation, EffectFade]}
        loop
        className="myswiper"
      >
        {image.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt="slider" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Slider;

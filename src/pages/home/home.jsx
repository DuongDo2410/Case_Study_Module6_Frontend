import React from "react";
import Banner from "../../components/banner/banner";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import House from "../../components/house/house";
import {useDispatch, useSelector} from "react-redux";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import ListItem from "../../components/content/listItem";
import {getAllHouse} from "../../redux/actionThunk/houseActionThunk";

const Home = () => {
    let dispatch = useDispatch();
  let houses = useSelector((state) => state.house.houses);
  // let topHouse = useSelector((state) => state.house.topHouse);
    const changePage = (page) => {
        dispatch(getAllHouse(page));
    }
  return (
    <>
      {/* <Header />
      <Banner />
      <div className="text-gray-700 text-center">
        <h5 className="text-2xl font-bold my-10">NHỮNG CĂN HỘ NỔI BẬT</h5>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{ hideOnClick: true }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div className="container mx-auto grid grid-cols-3 gap-6">
          {houses &&
            houses.map((house) => (
              <SwiperSlide>
                <House house={house} />
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
      <Footer /> */}
      <Header />
      <Banner />
        <div className="container mx-auto">
            <h5 className="text-2xl font-bold my-10">TOP 5 CĂN HỘ NỔI BẬT</h5>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation={{hideOnClick: true}}
                pagination={{clickable: true}}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log("slide change")}
            >
                <div className="container mx-auto grid grid-cols-3">
                    {houses &&
                        houses.map((house) => (
                            <SwiperSlide>
                                <House house={house}/>
                            </SwiperSlide>
                        ))}
                </div>
            </Swiper>

            <ListItem houses={houses} />
        </div>
      <Footer />
    </>
  );
};

export default Home;

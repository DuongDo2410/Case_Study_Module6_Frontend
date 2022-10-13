import React from "react";
import { SwiperSlide } from "swiper/react";
import House from "../house/house";

const ListItem = (props) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <hr className="w-56" />
        <h5 className="text-2xl font-bold my-10 mx-4">DANH SÁCH CĂN HỘ</h5>
        <hr className="w-56" />
      </div>
      <div className="container mx-auto grid grid-cols-3 gap-10 mb-8">
        {props.houses &&
          props.houses.map((house) => (
            <SwiperSlide>
              <House house={house} />
            </SwiperSlide>
          ))}
      </div>
    </div>
  );
};

export default ListItem;

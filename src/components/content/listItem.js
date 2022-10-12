import React from 'react';
import {SwiperSlide} from "swiper/react";
import House from "../house/house";

const ListItem = (props) => {
    return (
        <div className="my-28">
            <h5 className="text-2xl font-bold my-10">DANH SÁCH CĂN HỘ</h5>
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
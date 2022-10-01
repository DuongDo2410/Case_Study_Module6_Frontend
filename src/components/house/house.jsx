import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import SingleBedOutlinedIcon from "@mui/icons-material/SingleBedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
const House = (props) => {
  return (
    <>
      <div className="rounded-lg my-10 shadow-lg shadow-slate-100 hover:shadow-slate-300 hover:scale-105 transition delay-150 duration-300 ease-in-out">
        <a href="" className=" text-[#6a6969] font-semibold ">
          <div>
            <img
              src={props.house?.idImage?.link}
              alt=""
              className="w-full h-72 object-cover rounded-t-lg"
            />
          </div>
          <div className="px-5">
            <div>
              <p className="text-base my-3">
                {props.house.name}
              </p>
            </div>
            <div>
              <p className="text-sm mt-4 text-[#14f1d7]">
                <LocationOnOutlinedIcon />
                <span>{props.house.address}</span>
              </p>
              <p className="text-lg font-bold my-2">
                <PaymentsOutlinedIcon />
                <span className="ml-2">{props.house.price}/tháng</span>
              </p>
            </div>
            <div className="flex justify-between item-center text-[#8491a4]">
              <p className="flex items-center">
                <SingleBedOutlinedIcon />
                <span>{props.house.amountBedroom}</span>
              </p>
              <p className="flex items-center">
                <BathtubOutlinedIcon />
                <span>{props.house.amountBathroom}</span>
              </p>
              <p className="flex items-center">
                <SquareFootOutlinedIcon />
                <span>{props.house.area}m</span>
              </p>
            </div>
            <div className="flex justify-between items-center mt-6 mb-4 text-[#14f1d7]">
              <span className="border p-2 rounded-lg">{props.house.typeRoom}</span>
              <span>
                <StarOutlinedIcon />
                <StarOutlinedIcon />
                <StarOutlinedIcon />
                <StarOutlinedIcon />
              </span>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default House;

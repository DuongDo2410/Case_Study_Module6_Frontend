import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import SingleBedOutlinedIcon from "@mui/icons-material/SingleBedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
const House = () => {
  return (
    <>
      <div className="rounded-lg my-10 shadow-lg shadow-slate-100 hover:shadow-slate-300 hover:scale-105 transition delay-150 duration-300 ease-in-out">
        <a href="" className=" text-[#6a6969] font-semibold ">
          <div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/images%2F%203-3-300x382.jpg?alt=media&token=bdbf5acd-eb75-4272-a43b-1c0130efdda4"
              alt=""
              className="w-full h-72 object-cover rounded-t-lg"
            />
          </div>
          <div className="px-5">
            <div>
              <p className="text-base my-3">
                BÁN CĂN HỘ TẦNG 1 CHUNG CƯ HƯNG VƯỢNG 1 PHƯỜNG TÂN PHONG QUẬN 7
              </p>
            </div>
            <div>
              <p className="text-sm mt-4 text-[#14f1d7]">
                <LocationOnOutlinedIcon />
                <span>Phạm Văn Đồng</span>
              </p>
              <p className="text-lg font-bold my-2">
                <PaymentsOutlinedIcon />
                <span className="ml-2">200000000/tháng</span>
              </p>
            </div>
            <div className="flex justify-between item-center text-[#8491a4]">
              <p className="flex items-center">
                <SingleBedOutlinedIcon />
                <span>2</span>
              </p>
              <p className="flex items-center">
                <BathtubOutlinedIcon />
                <span>2</span>
              </p>
              <p className="flex items-center">
                <SquareFootOutlinedIcon />
                <span>150m</span>
              </p>
            </div>
            <div className="flex justify-between items-center mt-6 mb-4 text-[#14f1d7]">
              <span className="border p-2 rounded-lg">Căn hộ</span>
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

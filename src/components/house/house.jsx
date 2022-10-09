// import React from "react";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
// import SingleBedOutlinedIcon from "@mui/icons-material/SingleBedOutlined";
// import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
// import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
// import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
// import { useDispatch } from "react-redux";
// import { getOne } from "../../redux/actionThunk/houseActionThunk";
// import { useNavigate } from "react-router";
// import { Link } from "react-router-dom";
//
// const House = (props) => {
//   let dispatch = useDispatch();
//   let navigate = useNavigate();
//   // const handleDetailsClick = async (id) => {
//   //   await dispatch(getOne(id));
//   //   navigate("/detail");
//   // };
//   return (
//     <>
//       <div className="rounded-lg my-10 shadow-lg shadow-slate-100 hover:shadow-slate-300 hover:scale-105 transition delay-150 duration-300 ease-in-out">
//         <Link
//           to={`/detail/${props.house?._id}`}
//           className=" text-[#6a6969] font-semibold "
//           // onClick={() => dispatch(getOne(props.house?._id))}
//         >
//           <div>
//             <img
//               src={props.house?.idImage[0]?.link}
//               alt=""
//               className="w-full h-72 object-cover rounded-t-lg"
//             />
//           </div>
//           <div className="px-5">
//             <div>
//               <p className="text-base my-3">{props.house.name}</p>
//             </div>
//             <div>
//               <p className="text-sm mt-4 text-[#14f1d7]">
//                 <LocationOnOutlinedIcon />
//                 <span>{props.house.address}</span>
//               </p>
//               <p className="text-lg font-bold my-2">
//                 <PaymentsOutlinedIcon />
//                 <span className="ml-2">{props.house.price}/tháng</span>
//               </p>
//             </div>
//             <div className="flex justify-between item-center text-[#8491a4]">
//               <p className="flex items-center">
//                 <SingleBedOutlinedIcon />
//                 <span>{props.house.amountBedroom}</span>
//               </p>
//               <p className="flex items-center">
//                 <BathtubOutlinedIcon />
//                 <span>{props.house.amountBathroom}</span>
//               </p>
//               <p className="flex items-center">
//                 <SquareFootOutlinedIcon />
//                 <span>{props.house.area}m</span>
//               </p>
//             </div>
//             <div className="flex justify-between items-center mt-6 mb-4 text-[#14f1d7]">
//               <span className="border p-2 rounded-lg">
//                 {props.house.typeRoom}
//               </span>
//               <span>
//                 <StarOutlinedIcon />
//                 <StarOutlinedIcon />
//                 <StarOutlinedIcon />
//                 <StarOutlinedIcon />
//               </span>
//             </div>
//           </div>
//         </Link>
//       </div>
//     </>
//   );
// };
//
// export default House;

import React from 'react';
import {BiArea, BiBath, BiBed} from "react-icons/bi";

// import icons

const House = ({ house }) => {
    return (
        <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
            <img className='mb-8' src={house.image} alt='' />
            <div className='mb-4 flex gap-x-2 text-sm'>
                <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
                    {house.type}
                </div>
                <div className='bg-violet-500 rounded-full text-white px-3 inline-block'>
                    {house.country}
                </div>
            </div>
            <div className='text-lg font-semibold max-w-[260px]'>{house.address}</div>
            <div className='flex gap-x-4 my-4'>
                <div className='flex items-center text-gray-600 gap-1'>
                    <div className='text-[20px] rounded-full'>
                        <BiBed />
                    </div>
                    <div className='text-base'>{house.bedrooms}</div>
                </div>
                <div className='flex items-center text-gray-600 gap-1'>
                    <div className='text-[20px] rounded-full'>
                        <BiBath />
                    </div>
                    <div className='text-base'>{house.bathrooms}</div>
                </div>
                <div className='flex items-center text-gray-600 gap-1'>
                    <div className='text-[20px] rounded-full'>
                        <BiArea />
                    </div>
                    <div className='text-base'>{house.surface}</div>
                </div>
            </div>
            <div className='text-lg font-semibold text-violet-600 mb-4'>
                $ {house.price}
            </div>
        </div>
    );
};

export default House;
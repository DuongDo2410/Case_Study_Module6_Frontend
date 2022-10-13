import React, { useEffect, useState } from "react";
import { message, Popconfirm } from "antd";
import { BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteHome,
  getHouseById,
  getHouseByUser,
} from "../../../redux/actionThunk/houseActionThunk";
import { AiOutlineEye } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import Create from "./create/create";
import Update from "./update/update";
import { Link, useNavigate } from "react-router-dom";
import { setStatusHouseActionIdle } from "../../../redux/slide/houseSlide";

const Houses = () => {
  let navigate = useNavigate();
  let { customerHouse } = useSelector((state) => state.house);
  console.log(customerHouse);
  const disPatch = useDispatch();
  const handleUpdate = (id) => {
    disPatch(getHouseById(id));
    disPatch(setStatusHouseActionIdle());
    navigate(`/admin/houses/update/${id}`);
  };
  const confirm = (id) => {
    disPatch(deleteHome(id));
    disPatch(setStatusHouseActionIdle());
  };
  const cancel = () => {};

  useEffect(() => {
    disPatch(getHouseByUser());
  }, []);
  return (
    <>
      <div className="w-full bg-white p-5 min-h-[550px] h-max shadow-lg rounded-lg">
        <div className="flex justify-between border-b pb-6 items-center">
          <h4 className="text-2xl">Danh sách nhà</h4>
          <Link
            to={"/admin/houses/create"}
            className="flex justify-between items-center rounded-lg bg-[#4fba81] hover:text-white text-white cursor-pointer font-medium px-3 py-2 text-base shadow-lg shadow-slate-100 hover:shadow-slate-300 hover:scale-105 transition delay-150 duration-300 ease-in-out"
          >
            <p>Thêm mới</p>
          </Link>
        </div>
        <div className="w-full flex items-center justify-center  font-sans overflow-hidden">
          <div className="w-full bg-white shadow-md rounded my-6">
            <table className="w-full table-auto rounded-xl">
              <thead>
                <tr className=" bg-gray-50 text-gray-500 ">
                  <th className="py-3 pl-6 w-32 text-left">Ảnh</th>
                  <th className="py-3 px-6 text-left">Tên nhà</th>
                  <th className="py-3 px-6 text-left">Địa chỉ</th>
                  <th className="py-3 px-6 text-left">Giá tiền</th>
                  <th className="py-3 w-36 text-center">trạng thái</th>
                  <th className="py-3 w-36 text-center">Hành động</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {customerHouse &&
                  customerHouse.map((house) => (
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            src={house?.idImage?.link}
                            alt=""
                            className="w-20 h-20 object-cover"
                          />
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <p>{house.name}</p>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center">
                          <p>{house.address}</p>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center">
                          <p>{house.price}</p>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                          Active
                        </span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <div className="w-4 mr-3 transform hover:text-purple-500 hover:scale-110">
                            <Link
                              to={`/admin/houses/${house._id}`}
                              className="text-gray-700"
                            >
                              <AiOutlineEye size={20} />
                            </Link>
                          </div>
                          <div className="w-4 mr-3 transform hover:text-purple-500 hover:scale-110">
                            <div
                              className="hover:cursor-pointer"
                              onClick={() => handleUpdate(house._id)}
                            >
                              <BiPencil size={20} />
                            </div>
                          </div>
                          <div className="w-4 transform hover:text-purple-500 hover:scale-110">
                            <Popconfirm
                              placement="left"
                              title="Bạn có muốn xoá không?"
                              onConfirm={() => confirm(house._id)}
                              onCancel={cancel}
                              okText="Có"
                              cancelText="Không"
                            >
                              <button>
                                <BiTrash size={20} />
                              </button>
                            </Popconfirm>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Houses;

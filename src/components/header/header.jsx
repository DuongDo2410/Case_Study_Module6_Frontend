import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container mx-auto flex justify-between items-center font-bold text-[#7f7f7f] py-3">
      <div>
        <a href="#">Logo</a>
      </div>
      <div>
        <ul className="flex justify-between items-center">
          <li>
            <a href="#" className="mx-3 hover:text-[#6a6969]">
              Thuê nhà
            </a>
          </li>
          <li>
            <a href="#" className="mx-3 hover:text-[#6a6969]">
              Đăng tin
            </a>
          </li>
          <li className="mx-3 border rounded-lg py-2 px-3 border-[#7f7f7f] hover:bg-[#14f1d7] hover:text-white hover:border-[#14f1d7]">
            <a href="">Đăng nhập</a>
          </li>
          <li className="mx-3 border rounded-lg py-2 px-3 border-[#7f7f7f] hover:bg-[#14f1d7] hover:text-white hover:border-[#14f1d7]">
            <a href="">Đăng Ký</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

import React from 'react';
import House from "../house/house";
import {useSelector} from "react-redux";
import Header from "../header/header";
import Footer from "../footer/footer";

const Content = () => {
    const housesSearch = useSelector(state => state.house.houseSearch)
    console.log(housesSearch);
    return (
        <>
            <Header />
            <div>
                <div className="text-gray-700 text-center">
                    <h5 className="text-2xl font-bold my-5 mt-24">Danh Sách Căn Hộ Tìm Kiếm</h5>
                    {/*<p className="text-base mt-10">Bạn có bất kỳ thắc mắc? Liên hệ với chúng tôi</p>*/}
                </div>
                <div className="container mx-auto grid grid-cols-3 gap-6">
                    {housesSearch ?
                        housesSearch.map((house) => (
                            <House house={house} />
                        )):
                        <p>Không tìm thấy kết quả bạn mong muốn!!</p>
                    }
                </div>
                <div className="flex select-none space-x-1 text-gray-700 my-10 ml-0.5">
                    <a
                        className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> Previous </a>
                    <a href="#"
                       className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> 1 </a>
                    <a
                       className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> 2 </a>
                    <a href="#"
                       className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> 3 </a>
                    <span className="rounded-md px-4 py-2"> ... </span>
                    <a href="#"
                       className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> 10 </a>
                    <a href="#"
                       className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> Next </a>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Content;
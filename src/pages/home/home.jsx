import React from "react";
import Banner from "../../components/banner/banner";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import House from "../../components/house/house";
import {useSelector} from "react-redux";

const Home = () => {
    let houses = useSelector(state => state.house.houses)
    console.log(houses)
    return (
    <>
      <Header />
      <Banner />
      <div className="container mx-auto grid grid-cols-3 gap-6">
          {houses.map(house => (
              <House house={house} />
          ))}
      </div>
      {/* <div>
        <h2>Báo chí nhận xét gì về chúng tôi</h2>
        <div className="grid ">
          <img src="" alt="" />
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default Home;

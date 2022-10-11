import React, {useContext} from "react";
import Header from "../header/header";
import beachVid from '../../assets/img/beachVid.mp4';
import Search from '../search/Search'

const Banner = () => {
  return (
    <>
      <div>
        <Header />
        <section className=' mb-8 xl:mb-24'>
          <div className='w-"bg-clip-content border-dashed relative'>
            <video
                className='w-full h-full object-cover'
                src={beachVid}
                autoPlay
                loop
                muted
            />
          </div>

          <div className="absolute top-1/2">
            <div className='flex flex-col lg:flex-row '>
              <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0 '>
                <h1 className='text-4xl lg:text-[60px] font-semibold leading-none mb-6'>
                  <span className='text-violet-700'>Rent</span> Your Dream House With
                  Us.
                </h1>
                <p className=' mb-8'>
                  Powerful, self-serve product and growth analytics to help you
                  convert, engage, and retain more.
                </p>
              </div>
              {/*<div className='hidden flex-1 lg:flex justify-end items-end'>*/}
              {/*  /!*<img src={Image} alt='' />*!/*/}
              {/*</div>*/}

            </div>
            <Search />
            </div>
        </section>
      </div>
    </>
  );
};

export default Banner;

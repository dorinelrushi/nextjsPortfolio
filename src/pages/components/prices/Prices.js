import React from "react";
import Image from "next/image";
import icon from "../../../../public/maskicon.png";
import icon1 from "../../../../public/Mask2.png";
function Prices() {
  return (
    <div className="prices w-[100%] bg-[#0b0d0c] pb-11">
      <div className="pricesFlex w-[70%] m-[auto] flex flex-wrap items-center 2xl:py-[100px] bg-[#0b0d0c] text-[#ffff]">
        <div className="priceseLeft flex-1">
          <h4 className="pricesa text-[#08d660] text-[19px]">WHAT WE DOE</h4>
          <h1 className="prices text-[40px] font-bold">
            OUR ALL <span className="text-[#08d660]"> PRICES</span>
          </h1>
        </div>
        <div className="esperienceRight flex-1">
          <p className="paragraph text-[20px] max-w-[580px] 2xl:mt-[0px]  mb-[29px] px-6 md:flex-wrap md:mt-[20px] sm:mt-[20px] 2sm:mt-[20px]">
            Lorem ipsum dolor sit smet, consectetur adipisicing elitae. Sint
            ratione reprehenderit, error qui enim and exsit.
          </p>
        </div>
      </div>
      <div className="pricesBox ">
        <div className="flexprices gap-10 2xl:w-[70%]  m-auto flex flex-wrap justify-center items-center text-[white] mb-[100px] md:w-[80%]  sm:w-[80%]  2sm:w-[85%] ">
          <div className="firstPrices bg-[#121215] py-[60px] flex-1 text-center cursor-pointer">
            <Image
              className="imagesD text-center m-auto mb-[18px]"
              src={icon}
              width={120}
            />
            <h2 className="in text-[33px] font-bold mt-[20px] mb-1">
              INFLUENCER
            </h2>
            <p className="text text-[#05d561] text-[18px]">
              Best For Small Investors
            </p>
            <div className="lines w-[60%] m-auto h-[1px] bg-[#282828] mb-6 mt-6"></div>
            <h2 className="in text-[50px] font-bold mt-[20px] mb-1">$120</h2>
            <p className="text text-[#05d561] text-[18px]">Per Month</p>
            <button className="btnstarted mt-[50px] bg-[white] text-[19px] font-[500] text-[#111] w-[185px] h-[65px] rounded-[8px]">
              Get Started
            </button>
          </div>
          <div className="secondPrices cursor-pointer bg-[#05d561] py-[60px] flex-1 text-center">
            <Image
              className="imagesD text-center m-auto mb-[18px]"
              src={icon1}
              width={120}
            />
            <h2 className="in text-[33px] font-bold mt-[20px] mb-1">
              INFLUENCER
            </h2>
            <p className="text text-[#ffffff] text-[18px]">
              Best For Small Investors
            </p>
            <div className="lines w-[60%] m-auto h-[1px] bg-[#f7f7f7] mb-6 mt-6"></div>
            <h2 className="in text-[50px] font-bold mt-[20px] mb-1">$120</h2>
            <p className="text text-[#f9f9f9] text-[18px]">Per Month</p>
            <button className="btnstarted mt-[50px] bg-[white] text-[19px] font-[500] text-[#111] w-[185px] h-[65px] rounded-[8px]">
              Get Started
            </button>
          </div>
          <div className="thirdPrices cursor-pointer bg-[#121215] py-[60px] flex-1 text-center">
            <Image
              className="imagesD text-center m-auto mb-[18px]"
              src={icon}
              width={120}
            />
            <h2 className="in text-[33px] font-bold mt-[20px] mb-1">
              INFLUENCER
            </h2>
            <p className="text text-[#05d561] text-[18px]">
              Best For Small Investors
            </p>
            <div className="lines w-[60%] m-auto h-[1px] bg-[#282828] mb-6 mt-6"></div>
            <h2 className="in text-[50px] font-bold mt-[20px] mb-1">$120</h2>
            <p className="text text-[#05d561] text-[18px]">Per Month</p>
            <button className="btnstarted mt-[50px] bg-[white] text-[19px] font-[500] text-[#111] w-[185px] h-[65px] rounded-[8px]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
